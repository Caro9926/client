import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Form from '../componentes/form/Form';

export default props => {
    const id = props.match.params.identificador;
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [loaded,setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/product/"+id)
            .then(response=>{
                console.log(response.data);
                setTitle(response.data.producto.title);
                setPrice(response.data.producto.price);
                setDescription(response.data.producto.description);
                setLoaded(true);
            })
            .catch(err=>{
                console.log("error : "+err);
            });
    },[]);

    const updateProduct = (producto) => {
        axios.put("http://localhost:8000/product/"+id,producto)
            .then(response=>{
                alert("Se actulizo el producto");
                props.setEstado(true);
                props.history.push('/');
            })
            .catch(err=>{
                console.log("Error al intentar actualizar : "+err)
            });
    }

    return (
        <div>
            <h2>Update product</h2>
            {
                loaded && (
                    <Form onSubmitProp={updateProduct}
                                initialTitle={title}
                                initialDescription={description}
                                initialPrice={price}
                />)
            }
        </div>
    )
}

