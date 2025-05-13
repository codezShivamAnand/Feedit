export default function Restra({ restData }) {
    const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/" + restData?.info?.mediaFiles[0]?.url;
    const name = restData?.info?.name;
    const rating = restData?.info?.rating?.value;
    const cuisines = restData?.info?.cuisines?.slice(0, 2).join(", ");
    const cost = restData?.info?.costForTwo;
    const address = restData?.info?.locationInfo?.formattedAddress;
    const distance = restData?.info?.locationInfo?.distanceString;

    return (
        
        <div className="flex-none rounded-2xl shadow-md m-4">
            
            {/* Image + Overlay */}
            <div className="relative ">
                <img
                    className="h-48 w-full object-cover rounded-2xl"
                    src={imageUrl}
                    alt={name}
                />
                <div className="absolute bottom-0 w-full px-4 py-2 bg-gradient-to-t from-black via-transparent to-transparent">
                    <div className="flex justify-between text-white font-bold text-lg">
                        <p>{name}</p>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="p-4 text-sm text-gray-700 space-y-2">
                <div className="flex justify-between text-gray-600 text-sm">
                    <p>{cuisines}</p>
                    <p>{cost}</p>
                </div>
                <div className="flex justify-between text-gray-500 text-xs">
                    <p className="w-2/3 truncate">{address}</p>
                    <p>{distance}</p>
                </div>
            </div>
        </div>
    );
}
