import {useState} from "react";
import {addItems, IncrementItems, DecrementItems} from "../../Stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux";

export default function RestaurantMenuOptionsDetails({items}){
// items : info of menu

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    function handleAdditems(){
        setCount(1);
        dispatch(addItems(items));
    }

    function handleIncrementItems(){
        setCount(count+1);
        dispatch(IncrementItems(items));
    }

    function handleDecrementItems(){
        setCount(count-1);
        dispatch(DecrementItems(items));
    }

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
            <div className="w-[22%] h-30 relative bg-blue-400">
                <img className="w-[90%] object-cover h-26 rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + items?.imageId }/> 
                {
                    count===0?(<button className=" absolute bottom-1 left-12 items-center text-md font-bold shadow-md border-white rounded-xl text-green-600 px-4 py-2 bg-white transition-transform hover:bg-gray-300" onClick={()=>handleAdditems()}>ADD</button>):(
                        <div className="flex gap-3  absolute bottom-1 left-10 items-center text-md font-bold bg-amber-400 border-white rounded-xl text-green-600 px-4 py-2  transition-transform hover:bg-gray-300">
                            <button onClick={()=>handleDecrementItems()}>-</button>
                            <span> {count} </span>
                            <button onClick={()=>handleIncrementItems()}>+</button>
                        </div>
                    )
                }
            </div>
        </div>
        <hr className="mb-4 mt-3"></hr>
        </>
    )
}

// items?.ratings?.aggregatedRating?.rating