import "./home.scss";
import {Navbar} from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import {List} from "../components/list/List";

export const Home = () => {
    return (
        <div className={"home"}>
            <Navbar/>
            <Featured type={"movie"}/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}