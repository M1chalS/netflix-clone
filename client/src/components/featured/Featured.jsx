import "./featured.scss";
import {InfoOutlined, PlayArrow} from "@mui/icons-material";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Featured({type}) {

    const [content, setContent] = useState({});

    useEffect(() => {
        return () => {
            const getRandomContent = async () => {
                try {
                    const res = await axios.get(`movies/random?type=${type}`, {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2JiNmFmNWFiMDkwNmQ5MzE5YTBjZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzAwMjEyMDIsImV4cCI6MTY3MDQ1MzIwMn0.IhwBONB6p8IBlo1281gPSYCxZWNHTHAktX_u13M7EWg",
                        },
                    });
                    setContent(res.data[0]);
                } catch (err) {
                    console.log(err);
                }
            }

            getRandomContent();

        };
    }, [type]);
    
    
    return (
        <div className="featured">
            {type && (
                <div className="featured__category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" >
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.imgTitle} alt="background"/>
            <div className="featured__info">
                <img src={content.img} alt="movie title" />

                <span className="featured__info--desc">
                    {content.desc}
                </span>
                <div className="featured__info--buttons">
                    <button className="play" >
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="info" >
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};