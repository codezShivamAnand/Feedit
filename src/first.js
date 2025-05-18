import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./components/FoodDelivery/Restaurant";
import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./pages/Home"
import RestaurantMenu from "./components/FoodDelivery/RestaurantMenu";
import Searchfood from "./components/FoodDelivery/Searchfood";
import Instamart1 from "./pages/InstamartPage/Instamart1";

function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/restaurant" element={<Restaurant/>} />
                    <Route path="/city/delhi/:id" element={<RestaurantMenu/>} />
                    <Route path="/instamart" element={<Instamart1 />} />
                    <Route path="/city/delhi/:id/search" element={<Searchfood />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);