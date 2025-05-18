import Header from "../components/Header";
import FoodOption from "../components/FoodOption";
import InstamartOptions from "../components/instamart/InstamartOptions";
import DineOption from "../components/Dine/DineOption";


export default function Home(){
    return(
        <>
            <Header/>
            <FoodOption/>
            <InstamartOptions/>
            <DineOption/>
        </>
    )
}