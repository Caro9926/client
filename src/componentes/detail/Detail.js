import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RemoveProduct from "../removeProduct/RemoveProduct";


export default props => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/product/" + props.match.params.identificador)
            .then(response => {
                console.log(response.data.producto);
                setProducto({ ...response.data.producto })
            })
    }, []);

    const redireccionar = () => {
        props.history.push('/');
        props.setEstado(true);
    }

    return (
        <div>
            <div>
                <p>Nombre : {producto.title}</p>
                <p>Price : {producto.price}</p>
                <p>description : {producto.description}</p>
            </div>
            <div >
                <div>
                    <Link to={'/' + producto._id + '/edit'}>Edit</Link>
                </div>
                <div>
                    <RemoveProduct successCallback={redireccionar} productId={producto._id} />
                </div>
                <Link to={'/'}>Dashboard</Link>
            </div>
        </div>
    )
}