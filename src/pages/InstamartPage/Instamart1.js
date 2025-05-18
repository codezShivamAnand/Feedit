import {useEffect, useState} from "react";
import Instamart1LandingPage from "./Instamart1LandingPage";

export default function Instamart1(){
    const [restData1, setRestData1] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            // ProxyServer prevents CORS conflict, by modifying the header of the fetched data so that browser doesnt restricts the fetxh permission
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = "https://www.swiggy.com/api/instamart/home/v2?offset=2&layoutId=2671&storeId=1062023&primaryStoreId=1062023&secondaryStoreId=&clientId=INSTAMART-APP";
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            //  console.log(data);

            // dislay to the ui-> useState 
            setRestData1(data?.data?.cards);
        }
        fetchData();
    },[])
    console.log(restData1);

    return(
        <>
            {/* <h1 className="font-bold text-amber-600">Hello</h1> */}
            <div className="w-full mx-auto flex flex-wrap ">
                {
                    restData1?.map((items)=><Instamart1LandingPage key={items?.card?.card?.id} restInfo={items?.card?.card} />)
                    // items are object inside cards  
                }
            </div>
        </>
    )
}