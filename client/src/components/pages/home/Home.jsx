import "./home.scss";
import {Navbar} from "../../navbar/Navbar";
import Featured from "../../featured/Featured";
import {List} from "../../list/List";

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