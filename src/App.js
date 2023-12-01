//import logo from './logo.svg';
import './App.css';
import Header from './Component.js/Header';
import Body from './Component.js/Body';
import Footer from './Component.js/Footer';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
//import { lazy } from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Cart from "./Component.js/Cart"
import Contact from "./Component.js/Contact";
import About from './Component.js/About';
import Error from './Component.js/error';
import RestrauntMenu from './Component.js/RestrauntMenu';
import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Shimmer from './Component.js/Shimmer';
import { Provider } from 'react-redux';
import store  from './Component.js/utils/store';
const Instamart = lazy(()=>import ("./Component.js/Instamart"));
export default function App()
{
  return(
  
  <Provider store={store}>
    <Header/>
   <Outlet/>
    <Footer/> 
   </Provider>
  );  
}
 export const approuter = createBrowserRouter([
  {path:"/" , element:<App/>,errorElement:<Error/>,
  children:[ {path:"/" , element:<Body/>},
  {path:"/about" , element:<About/>},
  {path:"/contact" , element:<Contact/>},
  {path:"/cart" ,element:<Cart/>},
  {path:"/instamart" ,element:<Suspense fallback=<Shimmer/>><Instamart/></Suspense>},
  { path:"/restraunt/:id" , element:<RestrauntMenu/>},
  ],}]);
 
 
  // {path:"*" ,element:<Error/>,errorElement:<Error/>}
 

     
      
  
