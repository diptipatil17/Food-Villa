import { useState } from "react";
import Logo from "../assests/img/foodVilla.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import store from "./utils/store";
function logInUser()
{

}

function Title(){
    return(
     <a href='/'>
     <img className= "h-28 p-4" 
     href="/" alt="logo" src={Logo}/>
     </a>
    );
  }
  
export default function Header()
{
const [isLoggedIn, setLoggedIn]=useState(true);
// const style={border:"3px solid"};
const cartItem = useSelector((store) => store.cart.items);

return(
  // <div className="flex" style={style}>
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50" >
  <Title/>
  <div className='nav-item'> 
      <ul className="flex py-10">
      {/* <li><Link to= "/App">Home</Link></li> */}
      <li className="px-4"><Link to= "/">Home</Link></li>
      <li className="px-4"><Link to="/about">About</Link></li>
      <li className="px-4"><Link to="/contact">Contact</Link></li>
      <li className="px-4"><Link to="/cart">Cart {cartItem.length}</Link></li>
      <li className="px-4"><Link to="/instamart">Instamart</Link></li>
    </ul>
    {/* <Outlet /> */}
    </div>
    {
      isLoggedIn?<button className="custom-button" onClick={()=>setLoggedIn(false)}>Logout</button>:
      <button className="custom-button" onClick={()=>setLoggedIn(true)}>Login</button>
    }
      
   </div>);
}
