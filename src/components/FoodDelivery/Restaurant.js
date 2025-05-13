import {useEffect, useState} from "react";
import RestCard from "./RestCard";

export default function Restaurant(){

    const [RestData, setRestData] = useState([]);

    // fetch resturant data-> Async work 
    useEffect(()=>{
        async function fetchData(){
            // ProxyServer prevents CORS conflict, by modifying the header of the fetched data so that browser doesnt restricts the fetxh permission
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();

            // dislay to the ui-> useState 
            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    }, []) 

    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            
            {
                RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }

        </div>
    )

}