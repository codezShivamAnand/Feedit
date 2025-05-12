import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import InstamartOptions from "./components/Instamart/InstamartOptions"

function App(){
    return(
        <>
            <Header/>
            <FoodOption/>
            <InstamartOptions/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);