import {instamartData} from "../../utils/instamartData";
import InstamartCart from "./InstamartCart";

export default function InstamartOptions(){
    return (
        <div className=" max-w-[70%] container mx-auto mt-15">
            <h1 className=" text-xl font-bold mb-5" >Shop groceries on Instamart</h1>
            <div className="min-w-[80%] flex flex-nowrap overflow-x-auto  gap-10 " >
                {instamartData.map((martdata)=><InstamartCart key={martdata.id} martdata={martdata} />)}
            </div>
        </div>
    )
}