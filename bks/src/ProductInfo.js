function ProductInfo(props)
{
    console.log("productInfo",props.Cart)
    return(
        <div>
            <h1>he,lllll</h1>
            {
                props.Cart.map((item)=>{
                    <h1>hello</h1>
                    console.log("go to hell")
                })
            }
        </div>
         
    )
}
export default ProductInfo;