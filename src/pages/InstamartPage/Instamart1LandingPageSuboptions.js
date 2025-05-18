export default function Instamart1LandingPageSuboptions({subOption}){
    return (
        <div className="w-30 h-48 mx-auto flex-none ">
            <div>
                <img className="h-40 w-full object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + subOption?.imageId} alt={subOption?.analytics?.extraFields?.l1NodeVal} />
            </div>
            <p className="font-semibold text-sm text-center">{subOption?.analytics?.extraFields?.l1NodeVal}</p>
        </div>
    )
}