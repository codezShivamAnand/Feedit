import {dineoutRestaurants} from  "../../utils/DineOutRestrData"
import Restra from "./Restra";

export default function DineOption(){
    return (
        <div className="max-w-[70%] container mx-auto mt-12">
            <p className="text-3xl font-bold ml-4" >Discover best restaurants on Dineout</p>
            <div className=" flex flex-nowrap overflow-x-auto gap-3 mt-2" >
                {
                    dineoutRestaurants.map((restData)=> <Restra key={restData?.info?.id} restData = {restData} />)
                }
            </div>
            
        </div>
    )
}