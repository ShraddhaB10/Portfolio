import { Link,Outlet} from "react-router-dom";

export default function Navbar()
{
    return(
        <div className="navbar">
        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to = "/About">About</Link></li>
         <li><Link to="/Skills">Skills</Link></li>
         <li><Link to="/Project">Projects</Link></li>
         <li><Link to="/Contact">Contact</Link></li>
       </ul>
           <br/>
           <br/>
           <Outlet/>
       </div>
    );
}