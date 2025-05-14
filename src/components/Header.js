import {BrowserRouter, Routes, Route, Link} from "react-router";

export default function Header(){
    return (
        <>
            <header className="bg-[#ff5200] font-serif">
                <div className="max-w-[60%] container mx-auto flex justify-between py-8 "> 
                    {/* we could also use ml- and mr- but its better to use container, it makes more responsive  */}
                    <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"/>
                    <div className=" text-white font-bold flex items-center gap-8">
                        <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                        <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                        <a className="border border-white p-4 rounded-2xl">Get the App</a>
                        <a className="bg-black text-white text-lg border border-black p-3 rounded-2xl">Sign in</a>
                    </div>
                </div>
                <div className="pt-16 pb-8 relative">
                    {/* absolute positions itself relative to its parent */}
                    <img className="w-60 h-110 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                    <img className="w-60 h-110 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                    <div className="max-w-[60%] font-bold text-white text-5xl flex container mx-auto text-center ">
                        Order food & groceries. Discover best restaurants.FeedIt!
                    </div>
                    <div className=" max-w-[66%] container mx-auto my-3 flex gap-4">
                        <input  className="bg-white border border-white font-bold px-4 py-2 rounded-2xl w-[40%]" placeholder="Delhi, India"></input>
                        <input className="bg-white border border-white font-bold  px-4 py-2 rounded-2xl w-125" placeholder="Search for resturant, items and more"></input>
                    </div>
                </div>
                <div className="max-w-[70%] container mx-auto flex">
                    <Link to="/restaurant" >
                        <img className="h-70 w-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                    </Link>
                    <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                        <img className="h-70 w-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                    </a>
                    <a href="https://www.swiggy.com/dineout">
                        <img className="h-70 w-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                    </a>
                </div>
            </header>
        </>
    )
}