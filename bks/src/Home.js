import axios from "axios";
import { useEffect, useState } from "react";
import DataItems from './DataItems'
import CartItems from "./CartItems";
import ProductInfo from "./ProductInfo";
function Home()
{
    const [products,setProducts]=useState([]);
    const [Cart,setCart]=useState([]);
    const fetchData = async () => {
        const data = await axios.get("http://localhost:3001/getallproduct");
        setProducts(data.data);
        console.log(data);
    }
    useEffect(() => {
        fetchData()
        },[]);
        function Cartset(Cart)
        {
            console.log("black");
            setCart(Cart);
            console.log(Cart)
        }
    return(
         <div>
            {
                products.map((item,index)=>(
                <DataItems key={index} item={item} setCart={setCart} Cart={Cart} Cartset={Cartset} />
            ))
            }
            <ProductInfo Cart={Cart}/>
         </div>
    );
}
export default Home;