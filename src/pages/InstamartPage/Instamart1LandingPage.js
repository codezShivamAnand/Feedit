import Instamart1LandingPageSuboptions from "./Instamart1LandingPageSuboptions";

export default function Instamart1LandingPage({restInfo}){
    return(
        <div className="w-[70%] mx-auto">
            <div className="text-small text-gray-800 font-bold mt-8 mb-4" >
                <p>{restInfo?.header?.title}</p>
            </div>
            <div className="flex flex-wrap w-full mx-auto gap-2">
                {
                    restInfo?.gridElements?.infoWithStyle?.info?.map((items)=><Instamart1LandingPageSuboptions key={items?.id} subOption={items}/>)
                }
            </div>

        </div>
    )
}