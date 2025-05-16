import RestaurantMenuOptionsDetails from "./RestaurantMenuOptionsDetails";

export default function RestaurantMenuOptions({Restinfo}){
    // console.log("Rendering Restinfo:", Restinfo);
    // handling case when categories is present instead of itemCards in the API 
    if( Restinfo?.categories ){  
        // "categories" in Restinfo
        return (
            <div className=" w-[70%] mx-auto p-3 text-xl text-black font-bold">
                <p>{Restinfo?.title}</p>
                <div>
                    {
                       Restinfo?.categories?.map((varities)=><RestaurantMenuOptions key={varities?.title} varities={varities} /> )
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
                        Restinfo?.itemCards?.map((items)=><RestaurantMenuOptionsDetails key={items?.card?.info?.id} items={items?.card?.info} />)
                    }
                </div>
        </div>
        
        </>
    )
}