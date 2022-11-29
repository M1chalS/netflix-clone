import "./listItem.scss";
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@mui/icons-material";
import {useState} from "react";
import ReactPlayer from "react-player";

export const ListItem = ({index}) => {

    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://youtu.be/Lt-U_t2pUHI";

    return (

        <div className="listItem"
             style={{left: isHovered && index * 225 - 50 + index * 2.5}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/226DB7C90442683C5F252E9578355540E75C0643925E5ACA9EF87B5AB7340977/scale?width=1200&aspectRatio=1.78&format=jpeg"}
                alt={"video miniature"}/>
            {isHovered && (
                <>
                    <ReactPlayer className={"video"}
                                 url={trailer}
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
                            <span>2hours 44 minutes</span>
                            <span className={"limit"}>+13</span>
                            <span>2018</span>
                        </div>
                        <div className={"itemInfo__desc"}>
                            Persecuti no cum no habitant oporteat neque ultricies bibendum ius. Atomorum faucibus
                            assueverit
                            hendrerit.
                        </div>
                        <div className={"itemInfo__genre"}>
                            Action
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}