import ProductInfo from "./ProductInfo";
function CartItems({Cart})
{
    return(
        <div>
            <h1>heloo</h1>
            {
                Cart.map((item)=>{
                    <ProductInfo item/>
                })
            }
        </div>
    )
}
export default CartItems;