import {useParams} from "react-router";
import {useEffect, useState} from "react";
import RestaurantMenuOptions from "./RestaurantMenuOptions.js";
import {Link} from "react-router";

export default function RestaurantMenu(){
    const {id} = useParams(); // returns an object -> destructure id 
    // console.log(id);

    const [selected, setSelected] = useState(null); 
    // initially selected = null -> all data shows up 
    // selected = veg -> load veg & color of Veg button should turn green 
    const [RestData, setRestData] = useState([]);
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
    //    console.log(RestData);

    return(
        <div>
            <Link to={`/city/delhi/${id}/search`}>
            <div className="w-[55%] mx-auto text-center bg-gray-300 rounded-xl mt-4 border border-white">
                <p className="w-full text-md text-grey-300 p-2.5 border shadow-md  " >search for dishes</p>
            </div>
            </Link>
            <div className="w-[55%] mx-auto mt-5 mb-3 p-2">
                <button className= {`mx-auto text-lg text-black font-semibold rounded-xl border px-8 mr-2 ${selected==="veg" ? "bg-green-600" : "bg-gray-300"} `} onClick={()=>setSelected(selected==='veg'? null : 'veg')}>Veg</button>
                <button className={`mx-auto text-lg text-black font-semibold rounded-xl border px-6 ${selected==="nonveg" ? "bg-red-500" : "bg-gray-300"} `} onClick={()=>setSelected(selected==='nonveg' ? null : 'nonveg')}>NonVeg</button>
            </div>
        <div className="flex-wrap w-[80%] mx-auto ">
            {
                        // design the page  
                RestData?.map((items)=><RestaurantMenuOptions key={ items?.card?.card?.title} Restinfo={items?.card?.card} foodselected={selected}/>)
            }
        </div>
        </div>
    )
}

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866&catalog_qa=undefined&submitAction=ENTER
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=603438&catalog_qa=undefined&submitAction=ENTER