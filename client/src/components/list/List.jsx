import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import {ListItem} from "../listItem/ListItem";

import "./list.scss";
import {useRef, useState} from "react";

export const List = ({list}) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);

        let distance = listRef.current.getBoundingClientRect().x - 50;
        console.log(distance);
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        else if(direction === "right" && slideNumber < 5)
        {
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return (
        <div className={"list"}>
            <span className={"list__title"}>
                {list.title}
            </span>
            <div className={"wrapper"}>
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{display : !isMoved && "none" }}/>
                <div className={"wrapper--container"} ref={listRef}>
                    {list.content.map((item, index) => (
                        <ListItem index={index} item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>

        </div>
    )
}