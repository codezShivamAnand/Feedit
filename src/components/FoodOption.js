import {imageGridCards} from "../utils/FoodData";
import FoodCart from "./FoodCart"

export default function FoodOption(){
    return (
        <>
            <div className="max-w-[70%] container mx-auto flex flex-wrap gap-3 overflow-x-auto  mt-8">
                {
                   imageGridCards.map((foodData)=> <FoodCart key={foodData.id} foodData={foodData}></FoodCart> ) 
                }
            </div>
        </>
    )
}