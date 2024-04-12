import { useState } from "react"
import axios from 'axios'
import './AddProduct.css'
function AddProduct()
{
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(title.length===0||type.length==0)
        {
            return alert("enter the title");
        }
        await axios.post('http://localhost:3001/productadd',{title,type,description,price,rating})
        .then(result=>{
            console.log(result);
        }
        ).catch((err)=>console.log(err))
    }
    const [type,setType]=useState("");
    const [title,setProductName]=useState("");
    const [price,setPrice]=useState();
    const [rating,setRating]=useState();
    const [description,setDescription]=useState("");
    return(
        <div id="mainform">
            <h2>Add Product</h2>
            <form class="elements" onSubmit={handleSubmit}>
            <div id="maintitle" >
                    <label htmtfor="ProductName"><strong>title</strong></label>
                    <input class="formtitle"type="text" placeholder="enter the product" autoComplete="off" name="ProductName" onChange={(e)=>{setProductName(e.target.value)}}>
                    </input>
                </div>
                <div id="maintype">
                    <label htmtfor="type"><strong>Type</strong></label>
                    <input class="formtitle" type="text" placeholder="Type" autoComplete="off" name="Type" onChange={(e)=>{setType(e.target.value)}}>
                    </input>
                </div>
                <div id="maindescription">
                    <label  class="marginclass"htmtfor="Description"><strong>Description</strong></label>
                    <input class="formtitle" type="text" placeholder="Description" autoComplete="off" name="Description" onChange={(e)=>{setDescription(e.target.value)}}>
                    </input>
                </div>
                <div id="mainprice">
                    <label htmtfor="Price"><strong>Price</strong></label>
                    <input  class="formtitle"type="number" placeholder="Price" autoComplete="off" name="Price" onChange={(e)=>{setPrice(e.target.value)}}>
                    </input>
                </div>
                <div id="mainrating">
                <label htmtfor="rating"><strong>Rating</strong></label>
                    <input  class="formtitle"type="number" placeholder="Rating" autoComplete="off" name="rating" onChange={(e)=>{setRating(e.target.value)}}>
                    </input>

                </div>
                <div >
                    <button class="submitbutton" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddProduct;