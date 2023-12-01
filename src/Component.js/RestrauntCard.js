import {IMG_CDN} from "../constant";
export function RestrauntCard({cloudinaryImageId,name,cuisines,avgRating})
  { 
    
  return(
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
    <img alt="burger" src={
      IMG_CDN + cloudinaryImageId}/>
       {/* { restrauntList.map((props)=><RestrauntCard props={props}/>)} */}
     <h2 className="font-bold text-2xl">{name}</h2> 
     <h4>{cuisines.join(", ")}</h4>
     <h4>{avgRating}stars</h4> 
     </div>
  );
}
