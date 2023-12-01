export default function Shimmer()
{
    return(
        <div className="restraunt-list">
              
             {Array(10).fill("1").map((e,index)=>
             (<div className="shimmer-box" key={index}></div>  )) }
               
        </div>
    );
}
