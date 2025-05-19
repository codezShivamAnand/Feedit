import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function CommonHeaderDisplay(){
    
    const counter = useSelector(state=> state.cartslice.count);
    return(
        <div className="w-[100%] mx-auto bg-gray-300 flex justify-between items-center py-3">
            <div className=" mx-auto font-bold text-shadow-md text-green-400 text-2xl p-2">Feedit</div>
            <Link to="/Checkout">
                <div className=" mx-auto font-semibold text-gray-600 text-xl p-2">Cart {`(${counter})`}</div>
            </Link>
        </div>
    )
}