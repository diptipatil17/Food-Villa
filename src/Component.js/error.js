import { useRouteError } from "react-router-dom";

export default function Error() {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Opps...</h1>
        <h2>Something wents wrong</h2>
        
        <h3>{err.status+ " : " + err.statusText}</h3>
    </div>
  )
}