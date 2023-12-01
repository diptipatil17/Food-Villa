import { useEffect,useState } from "react";
import { FETCH_MENU, FETCH_MENU2 } from "../../constant";
export const useRestaurant=(id)=> {

    const [restaurants,setRestraunt] = useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo()
    {
          const data = await fetch(FETCH_MENU+id+FETCH_MENU2);
          const json= await data.json();  
          setRestraunt(json?.data?.cards);
    } 
  return restaurants;
}
