import React from 'react'

const Section=({title})=>{
  return(
    <div className="border border-black p-2 m-2">
      <h3>{title}</h3>
    </div>
  );
};
export default function Instamart() {
  return (
    <div ><h1 className="text-3xml p-2 m-2 font-bold">Instamart
       </h1><Section title={"About Instamart "}/>
       </div>
    );
}
