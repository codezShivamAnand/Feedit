import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";

function App(){
    return(
        <>
            <Header/>
            <FoodOption/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);