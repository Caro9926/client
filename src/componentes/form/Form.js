import React,{useState} from "react";
import axios from 'axios';


export default props => {
    const {initialTitle,initialPrice,initialDescription,onSubmitProp} = props;

    const [title,setTitle] = useState(initialTitle);
    const [price,setPrice] = useState(initialPrice);
    const [description,setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title,price,description});
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <form  onSubmit={onSubmitHandler}>
            <div>
                <label >Title</label>
                <input  type="text" placeholder="Insert a title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <div>
                <label >Price</label>
                <input  type="number" placeholder="Insert a price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </div>
            <div>
                <label >Description</label>
                <textarea  placeholder="Insert a description" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
            </div>
            <input  value="Save product" type="submit" />
            
        </form> 
    );
}