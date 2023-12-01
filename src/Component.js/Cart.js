import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FoodItem } from './FoodItem';
// import { useDispatch } from 'react-redux';
import { clearCart} from './utils/cartSlice';
export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
 const HandleClear=()=>{
      dispatch(clearCart());
  }
  return (
    <div> 

      <h1>Cart - {cartItems.length} </h1> 
      <button className='' onClick={()=>HandleClear()}>Clear-Card</button>
      <div className="flex">  
          {cartItems.map((item)=>
      <FoodItem key={item?.card?.info?.id} {...item?.card?.info}/>)
      }
      </div>
       
      
      {/* <FoodItem {...cartItems?.card?.info}  /> */}
      </div>
  )
}
