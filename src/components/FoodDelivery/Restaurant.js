import {useEffect, useState} from "react";

export default function Restaurant(){

    // fetch resturant data-> Async work 
    useEffect(()=>{
        async function fetchData(){
            // Proxy server modifies header which helps get rid of CORS , cross-origin conflict  
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
            
        }
    }) 

}