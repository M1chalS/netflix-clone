import "./home.scss";
import {Navbar} from "../../navbar/Navbar";
import Featured from "../../featured/Featured";
import {List} from "../../list/List";
import {useEffect, useState} from "react";
import axios from "axios";

export const Home = ({type}) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2JiNmFmNWFiMDkwNmQ5MzE5YTBjZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzAwMjEyMDIsImV4cCI6MTY3MDQ1MzIwMn0.IhwBONB6p8IBlo1281gPSYCxZWNHTHAktX_u13M7EWg"
                    }
                });
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);
    
    
    return (
        <div className={"home"}>
            <Navbar/>
            <Featured type={type} setGenre={setGenre}/>
            {lists.map(list => (
                <List list={list} />
            ))}
        </div>
    )
}