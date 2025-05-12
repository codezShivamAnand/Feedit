
export default function InstamartCart({martdata}){
    return (
        <div className="flex-shrink-0 w-40"> 
         {/*above could also use flex-none, works fine */}
            <a href={martdata?.action?.link} >
                <img className="bg-gray h-40 w-36 object-cover rounded-lg " src={"https://media-assets.swiggy.com/swiggy/image/upload/" + martdata?.imageId} alt={martdata?.action?.text}></img>
                <h1 className=" text-center text-xl font-medium">{martdata?.action?.text}</h1>
            </a>
            
        </div>
    )
}