import React from 'react';
import axios from 'axios';


export default props => {
    const {productId,successCallback} = props;

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/product/'+productId)
            .then(response=>{
                alert("The product is remove");
                successCallback();
            })
            .catch(err=>{
                alert("Failed to remove product");
                console.log("error : "+err);
            });
    }

    return (
        <div>
            <button className="btnEliminar" onClick={deleteProduct}>Eliminar</button>
        </div>
    )
}