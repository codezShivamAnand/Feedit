import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./components/FoodDelivery/Restaurant";
import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./pages/Home"

function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/restaurant" element={<Restaurant/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);