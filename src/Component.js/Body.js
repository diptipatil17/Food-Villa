import {  useEffect, useState } from "react";
// import {Restraunt} from "../constant";
import {RestrauntCard} from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";

import { useOnline } from "./utils/useOnline";
     


export default function Body(){
const [Allrestraunts,setAllRestaurants]=useState([]);
const [FilterRestraunts,setFilterRestaurants]=useState([]);


const [searchTxt,setSearch] = useState("");
useEffect(()=>{
getRestraunt();
},[]);
   
  
async function getRestraunt()
{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  // console.log(json);
 setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilterRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
    
const isOnline = useOnline();
if(!isOnline)
{
    return<h1>Please checkYour Internet Connection!!</h1>
}

   return Allrestraunts.length==0 ? <Shimmer/>:  (
      <>
    
      <div className="search-container p-5 bg-pink-50 my-5" >
      <input type="text" className="focus:bg-green-50 m-2 p-2"
      value={searchTxt} 
      onChange={(e)=>{setSearch(e.target.value)}}
       placeholder="Search"/>
      
      <button className="search-btn p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md  " 
      onClick={()=>{
       const data = filterData(searchTxt,Allrestraunts)
       
      //  console.log(data);
        setFilterRestaurants(data);
             
      }}>Search
      </button>

     
      </div>
      
        
      
      
      <div className='flex flex-wrap'>
         
            { FilterRestraunts.map((restraunt)=>{
             return <Link to={"/restraunt/"+ restraunt?.info?.id} 
             key={restraunt?.info?.id}>

           <RestrauntCard {...restraunt?.info} /> </Link>})}
         
      </div>
       </>);
  }
  
  
