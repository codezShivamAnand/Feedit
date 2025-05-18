import {Link} from "react-router";

export default function RestCard({restInfo}){
    return (
        <>
          <Link to={"/city/delhi/"+ restInfo?.info?.id}>
            <div className="flex-none h-[250px] w-[280px] transition-all duration-200 hover:scale-120 hover:bg-gray-100 rounded-xl shadow-gray-300 overflow-hidden">
              <img
                className="w-full h-40 object-cover rounded-2xl" //w-full: "Width: 100% of the parent container"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.info?.cloudinaryImageId}
                alt={restInfo?.info?.name}
              />
              <div className="p-3 h-32">
                <span className="font-bold text-lg block truncate">{restInfo?.info?.name}</span>
                
                <div className="flex text-sm font-semibold text-gray-700 space-x-1 mt-1"> 
                  <span>{restInfo?.info?.avgRating}★</span>
                  <span>•</span>
                  <span className="font-semibold">{restInfo?.info?.sla?.slaString}</span>
                </div>
                
                <p className="text-[15px] text-black line-clamp-1 ">
                  {restInfo?.info?.cuisines.join(", ")}
                </p>
              </div>
            </div>
            </Link>
        </>
    )
}

// line-clamp-1 shows only 1 line and adds ... (requires Tailwind typography plugin or the line-clamp plugin).

// 🧠 TL;DR
// Feature	      truncate	          line-clamp
// Lines	1 	     Multiple             (e.g. 2, 3)
// Ellipsis	        Yes	                  Yes
// Flexibility	Limited to one line	      More control

// space-x-1 adds horizontal spacing between direct children of a flex container. The 1 refers to 0.25rem (4px).