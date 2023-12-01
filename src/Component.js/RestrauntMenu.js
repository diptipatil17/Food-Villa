import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN } from '../constant';
import Shimmer from './Shimmer';
import {useRestaurant} from './utils/useRestaurant';
import { addItem } from './utils/cartSlice';
import { useDispatch } from 'react-redux';

export default function RestrauntMenu() {
    const {id} = useParams();
    const restaurants = useRestaurant(id);

    const dispatch = useDispatch();
    const addFoodItems =(items)=>{
      dispatch(addItem(items));
    }
 
    return (!restaurants)?<Shimmer/>:(
    <div className='flex'>
     <div>
    
              <img className='h-40 w-40' alert='Image' src={IMG_CDN + restaurants[0]?.card?.card?.info?.cloudinaryImageId } />
            <h1>Restraunt id :{id}</h1>
           <h3>{restaurants[0]?.card?.card?.info?.name}</h3>
           <h3>{restaurants[0]?.card?.card?.info?.city}</h3> 
           <h3>{restaurants[0]?.card?.card?.info?.avgRating} stars</h3>
          <h3>{restaurants[0]?.card?.card?.info?.costForTwoMessage}</h3>  
      </div>
    <div>
    <h1>Menu</h1>
    <ul>{
      Object.values(restaurants[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((items)=>(
      <li key={items?.card?.info?.id} > {items?.card?.info?.name} -
       <button className="bg-green-100" onClick={()=>addFoodItems(items)}>Add</button>
      
      </li>))}
      </ul> 
     </div>
  </div>
  );
}
