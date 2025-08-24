import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (<div>
     
     <div>
        <NavLink to="/"><img src="../../public/favicon.ico" alt="navbar" /></NavLink>
        <NavLink to="/"><p>
          Home
        </p></NavLink>
    <NavLink to="/cart"><div><FaShoppingCart/></div></NavLink>
        
       

  </div> 
  </div>);
};

export default Navbar;
