import "./listItem.scss";
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import axios from "axios";

export const ListItem = ({index, item}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("movies/find/"+item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2JiNmFmNWFiMDkwNmQ5MzE5YTBjZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzAwMjEyMDIsImV4cCI6MTY3MDQ1MzIwMn0.IhwBONB6p8IBlo1281gPSYCxZWNHTHAktX_u13M7EWg"
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovie();
    }, [item]);
    
    
    return (

        <div className="listItem"
             style={{left: isHovered && index * 225 - 50 + index * 2.5}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={movie.img}
                alt={"video miniature"}/>
            {isHovered && (
                <>
                    <ReactPlayer className={"video"}
                                 url={movie.trailer}
                                 playing={true}
                                 width={"100%"}
                                 height={"140px"}
                    />
                    <div className={"itemInfo"}>
                        <div className={"itemInfo__icons"}>
                            <PlayArrow className={"icon"}/>
                            <Add className={"icon"}/>
                            <ThumbUpAltOutlined className={"icon"}/>
                            <ThumbDownAltOutlined className={"icon"}/>
                        </div>
                        <div className={"itemInfo__top"}>
                            <span>{movie.duration}</span>
                            <span className={"limit"}>+{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className={"itemInfo__desc"}>
                            {movie.desc}
                        </div>
                        <div className={"itemInfo__genre"}>
                            {movie.genre}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}