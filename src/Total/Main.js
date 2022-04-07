import React,{useEffect,useState} from "react";
import List from "../componentes/list/List";
import Form from "../componentes/form/Form";
import EditProduct from "./EditProduct";
import Detail from "../componentes/detail/Detail";
import axios from "axios";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


export default () => {
    const [productos,setProductos] = useState([]);
    const [estado,setEstado] = useState(true);
    
    useEffect(()=>{
        if(estado) {
            axios.get('http://localhost:8000/product/getAll')
            .then(response=>{
                setProductos(response.data);
            })
            .catch(err=>{
                console.log("There is a mistake :"+err);
            });
            setEstado(false);
        }
    },[estado]);

    const createProducto = (producto) => {
        axios.post("http://localhost:8000/product/new",producto)
            .then((res)=>{
                alert("The product is created");
                setEstado(true);
            })
            .catch(err=>{
                console.log("Error: "+err);
            });
    }

    return (
        <div>
            
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ (routeProps) => 
                        <>
                            <Form {...routeProps} 
                                initialTitle=""
                                initialDescription="" 
                                initialPrice=""
                                onSubmitProp={createProducto}/>
                            <List {...routeProps} productos={productos} setProductos={setProductos} setEstado={setEstado}/>
                        </>}
                    />
                    <Route exact path="/detail/:identificador" render={ (routeProps) => <Detail {...routeProps} setEstado={setEstado} />} />
                    <Route exact path="/:identificador/edit" render={ (routeProps) => <EditProduct setEstado={setEstado} {...routeProps} />} />
                </Switch>
            </BrowserRouter>
            
            
        </div>
    )
}