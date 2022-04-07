import React from "react";
import RemoveProduct from "../removeProduct/RemoveProduct";
import {Link} from 'react-router-dom';



export default props => {

    const delProduct = (id) => {
        props.setProducts(props.productos.filter((product) => product._id !== id));
        props.setEstado(true);
    }

    return (
        <div>
            <h3>List of products</h3>
            {
                props.productos.map((product,index)=>{
                    return (
                        <div  key={"indice"+index}>
                            <Link  to={"/detail/"+product._id}>{product.title}</Link>
                            <RemoveProduct productId={product._id} successCallback={delProduct} />
                        </div>
                    )
                })
            }
        </div>
    )
}