import {Outlet} from "react-router";
import {CommonHeaderDisplay} from "react-router";
import CommonHeaderDisplay from "./CommonHeaderDisplay";
export default function CommonHeader(){
    return(
        <>
            <CommonHeaderDisplay />
            <Outlet></Outlet>
        </>
    )
}