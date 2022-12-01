import "./home.scss";
import {Navbar} from "../../navbar/Navbar";
import Featured from "../../featured/Featured";
import {List} from "../../list/List";

export const Home = ({type}) => {
    return (
        <div className={"home"}>
            <Navbar/>
            <Featured type={type} />
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}