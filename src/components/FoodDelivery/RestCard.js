export default function RestCard({restInfo}){
    return (
        <>
            <div className="flex-none">
                <img className="w-50 h-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.info?.cloudinaryImageId} alt={ restInfo?.info?.name}/>
            </div>
        </>
    )
}