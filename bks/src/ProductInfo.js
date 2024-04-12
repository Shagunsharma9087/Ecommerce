import axios from "axios";
function ProductInfo(props) {
    console.log("productInfo", props.Cart)
    console.log("custmerid",props.CustmerId)
    const giveOrder=async(CustomerId,product,Address,totalprice)=>{
        if(product.length==0)
        {
            alert("please add the items to the cart");
            return;
        }
        await axios.post("http://localhost:3001/PlaceOrder",{CustomerId,product,Address,totalprice})
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    function totalprize(Cart)
    {
        let total=0;
        for(let i=0;i<Cart.length;i++)
        {
            total=total+Cart[i].Quantity*Cart[i].price;
        }
        return total;
    }
    return (
        <div id="mainCart">
            <h1>Cart</h1>
            {props.Cart.map((item, index) => (
                <div id="cartmenu" key={index}>
                   <p>{item.Product}</p>
                   <p>Quantity: {item.Quantity}</p>
                   <p>Price: {item.price}</p>
                </div>
            ))}
            <div id="total"> <b>Total:</b>{totalprize(props.Cart)}</div>
            <div id="placeorderbutton"><button onClick={()=>{giveOrder(props.CustmerId,props.Cart,"delhi",totalprize(props.Cart))}}>place order</button></div>
             
        </div>
    )
}
export default ProductInfo;