import {useParams} from "react-router";
import {useEffect, useState} from "react";
import DisplaySearchfood from "./DisplaySearchfood";

export default function Searchfood(){
    const {id} = useParams();
    // console.log("im routed");
    const [searchText, setSearchText] = useState("");
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
                const filterData = tempData?.filter((items)=> 'title' in items?.card?.card)
                console.log(filterData);
                
                // filterData.forEach(element => {
                //     element?.card?.card?.itemCards?.info
                // });
                const resultedFood = [];

                filterData?.forEach((element) => {
                    if (element?.card?.card?.itemCards) {
                    element.card.card.itemCards.forEach((i) => {
                        if (i?.card?.info) resultedFood.push(i.card.info);
                    });
                    } else if (element?.card?.card?.categories) {
                    element.card.card.categories.forEach((cat) => {
                        cat?.itemCards?.forEach((i) => {
                        if (i?.card?.info) resultedFood.push(i.card.info);
                        });
                    });
                    }
                });

                setRestData([...resultedFood]);
            
            }
            fetchData();
        }, []); 


    // console.log(food);
    return (
        <div>
            <div className="w-[70%] mx-auto  mt-5">
                <input className="bg-gray-200 w-full px-3 py-2 items-center text-xl text-gray-700 rounded-xl border shadow-md " placeholder="Search here" onChange={(e)=>setSearchText(e.target.value)} />
            </div>
            <div className="w-[70%] mx-auto">
                {
                    RestData?.map((items,index)=><DisplaySearchfood key={`${items?.id}-${index}`} checkfood={items} searched={searchText}/>)
                    
                }
            </div>
        </div>
    )
}