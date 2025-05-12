import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
function App(){
    return(
        <>
            <Header/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);