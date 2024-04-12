import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import DataItems from './DataItems'
import ProductInfo from "./ProductInfo";
import { useLocation } from "react-router-dom";

function Home()
{
  const[type,setType]=useState("");
  const postData = useLocation();
  const {custmerId,email,role} = postData.state
  console.log(custmerId);
  console.log(role);
    const [products,setProducts]=useState([]);
    const [Cart,setCart]=useState([]);
    const fetchData = async () => {
        if(type==="")
        {
            const data = await axios.get("http://localhost:3001/getallproduct");
            setProducts(data.data)
            console.log(data)
        }
        else
        {
            console.log("type=",type)
            const data = await axios.get("http://localhost:3001/getOneType",{type});
            setProducts(data.data);
            console.log(data);
        }
    }
    useEffect(() => {
        fetchData()
        },[type]);
        function Cartset(Cart)
        {
            console.log("black");
            setCart(Cart);
            console.log(Cart)
        }
    return(
        <div>
            <div id="productaddlink">
            {
                 role=="admin" &&
                    <div>
                        <Link to="/addproduct">Add product</Link>
                    </div>

            }
            </div>
            <div>
            <input type="text" id="search" class="Loginpassword" placeholder="Enter the product..." onChange={(e)=>{setType(e.target.value)}}></input>
                <button type="submit" onClick={fetchData}>Search</button>
            </div>
             <div id="cartandproduct">
             <div id="products">
            {
                products.map((item,index)=>(
                <DataItems key={index} item={item} setCart={setCart} Cart={Cart} Cartset={Cartset} />
            ))
            }
            </div>
            <div id="Cart">
            <ProductInfo Cart={Cart} CustmerId={custmerId} email={email}/>
            </div>
             </div>
        </div>
         
    );
}
export default Home;