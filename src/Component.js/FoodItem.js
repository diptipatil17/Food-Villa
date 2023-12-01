import { IMG_CDN } from "../constant";
export function FoodItem({
  // cloudinaryImageId,
  name,
  description,
  imageId,
  price,
  })
  { 
    
  return(
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
    <img alt="burger" src={
      IMG_CDN + imageId}/>
       {/* { restrauntList.map((props)=><RestrauntCard props={props}/>)} */}
     <h2 className="font-bold text-2xl">{name}</h2> 
     <h2>{description}</h2>
     <h2>{price}</h2>
     {/* <h4>{cuisines.join(", ")}</h4> */}
     {/* <h4>{avgRating}stars</h4>  */}
     </div>
  );
}
