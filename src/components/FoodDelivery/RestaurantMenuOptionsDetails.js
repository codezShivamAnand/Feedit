export default function RestaurantMenuOptionsDetails({items}){
    return  (
        <>
        <div className="w-full flex justify-between mt-4">  
            <div className="w-[70%]">          
                <h1 className="text-lg font-bold text-black">{items.name}</h1>
                <p className="text-sm font-bold text-black mt-2 mb-2">{"₹"+ ("defaultPrice" in items ? items?.defaultPrice/100 : items?.price/100) }</p>
                {/* to handle when rating is not present for some item*/}
                {items?.ratings?.aggregatedRating?.rating && (
                    <span className="text-sm font-medium text-black">
                        ★{items?.ratings?.aggregatedRating?.rating}
                    </span>
                )}
                {/* handles when no review available */}
                {items?.ratings?.aggregatedRating?.ratingCountV2 && (
                    <span className="text-sm font-medium text-black">
                    ({items.ratings.aggregatedRating.ratingCountV2})
                    </span>
                )}
                <p className="text-sm text-black line-clamp-2">{items?.description}</p>
            </div>
            <div className="w-[20%] relative">
                <img className="w-[80%] object-cover h-24 rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + items?.imageId }/> 
                <button className=" w-[60%] absolute bottom-2 right-8 left-5 items-center text-md font-bold shadow-md border-white rounded-xl text-green-600 px-4 py-2 bg-white transition-transform hover:bg-gray-300">ADD</button>
            </div>
        </div>
        <hr className="mb-4 mt-3"></hr>
        </>
    )
}

// items?.ratings?.aggregatedRating?.rating