import { Outlet, Link } from "react-router-dom";
function Navigation()
{
     
    return(
        <div>
            <nav>
                <ul >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Register">SignIn</Link>
                    </li>
                    <li>
                        <Link to="/login">LoginIn</Link>
                    </li>
                </ul>
            </nav>
            <div>
            <Outlet/>
            </div>
        </div>
    )

}
export default Navigation;