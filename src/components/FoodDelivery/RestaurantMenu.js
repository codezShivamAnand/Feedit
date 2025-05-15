import {useParams} from "react-router";
import {useEffect, useState} from "react";

export default function RestaurantMenu(){
    const {id} = useParams(); // returns an object -> destructure id 
    // console.log(id);
    const [RestData, setRestData] = useState(null);
    useEffect(()=>{
            async function fetchData(){
                // ProxyServer prevents CORS conflict, by modifying the header of the fetched data so that browser doesnt restricts the fetxh permission
                const proxyServer = "https://cors-anywhere.herokuapp.com/"
                const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
                const response = await fetch(proxyServer+swiggyAPI);
                const data = await response.json();
                const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                // tempdata -> particular like pizzaHut ya burger King ka khulega 
                const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
                setRestData(filterData);
            }
            fetchData();
        }, []); 
       console.log(RestData);
    // return(
    //     <>
    //     <div>
    //         {
                        // design the page  
    //         }
    //     </div>
    //     </>
    // )
}

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866&catalog_qa=undefined&submitAction=ENTER
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=603438&catalog_qa=undefined&submitAction=ENTER