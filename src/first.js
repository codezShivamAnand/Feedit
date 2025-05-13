import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import InstamartOptions from "./components/Instamart/InstamartOptions";
import DineOption from "./components/Dine/DineOption";

function App(){
    return(
        <>
            <Header/>
            <FoodOption/>
            <InstamartOptions/>
            <DineOption/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);