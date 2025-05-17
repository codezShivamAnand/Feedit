import RestaurantMenuOptionsDetails from "./RestaurantMenuOptionsDetails";

export default function RestaurantMenuOptions({Restinfo, foodselected}){
    
    
    // console.log("Rendering Restinfo:", Restinfo);
    // handling case when categories is present instead of itemCards in the API 
    if( Restinfo?.categories ){  
        // "categories" in Restinfo
        return (
            <div className=" w-full mx-auto p-3 text-xl text-black font-bold">
                <p>{Restinfo?.title}</p>
                <div>
                    {
                       Restinfo?.categories?.map((varities)=><RestaurantMenuOptions key={varities?.title} varities={varities} /> )
                    }
                </div>
            </div>
        )
    }
        // console.log(foodselected);
    if(foodselected==='veg'){
        // console.log(foodselected);
        return (
            <div className="w-[70%] mx-auto p-3">
                <div className="text-xl text-black font-bold">
                    <p>{Restinfo?.title}</p>
                </div>
                <div className="w-full mt-3 ">
                    {
                        Restinfo?.itemCards?.filter((food)=>"isVeg" in food?.card?.info)?.map((items)=><RestaurantMenuOptionsDetails key={items?.card?.info?.id} items={items?.card?.info} foodselected={foodselected}/>)
                    }
                </div>
            </div> 
        )
    }

    if(foodselected==='nonveg'){
        return (
            <div className="w-[70%] mx-auto p-3">
                <div className="text-xl text-black font-bold">
                    <p>{Restinfo?.title}</p>
                </div>
                <div className="w-full mt-3 ">
                    {
                        Restinfo?.itemCards?.filter((food)=>food?.card?.info?.isVeg != 1)?.map((items)=><RestaurantMenuOptionsDetails key={items?.card?.info?.id} items={items?.card?.info} foodselected={foodselected}/>)
                    }
                </div>
            </div> 
        )
    }

    return(
        <>
        <div className="w-[70%] mx-auto p-3">
            <div className="text-xl text-black font-bold">
                <p>{Restinfo?.title}</p>
                </div>
                <div className="w-full mt-3 ">
                    {
                        Restinfo?.itemCards?.map((items)=><RestaurantMenuOptionsDetails key={items?.card?.info?.id} items={items?.card?.info}  foodselected={foodselected}/>)
                    }
                </div>
        </div>
        
        </>
    )
}