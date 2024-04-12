import { useState } from "react";

function DataItems({Cart,setCart,item,Cartset})
{
    const [Quantity,setQuantity]=useState(1);
    function addCart(e)
    {
    
            const updatedCart = [...Cart, {"ProductId": item._id, "Product": item.title, "Quantity": Quantity, "price": item.price}];
            Cartset(updatedCart);
        
        console.log("hello");
    }
    return (
        <div id="mainItem">
            <div id="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8BR6eMszcc6ITlrghPv559GZEdQUWxM8KA&s" alt="Lamp" />
            </div>
            <div id="title">
                <h3>{item.title}</h3>
            </div>
            <div><bolt>{item.description}</bolt></div>
            <div id="price and quantity">
                <div> <b>Price: Rs </b>{item.price}</div>
                <div>quantity<input id="Number" defaultValue="1"onChange={(e)=>{setQuantity(e.target.value)}}></input></div>
            </div>
            <div>
                <button id="CartButton" onClick={addCart}>AddToCart</button>
            </div>
        </div>
    )
}
export default DataItems;