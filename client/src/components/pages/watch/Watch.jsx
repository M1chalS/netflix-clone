import './watch.scss';
import {ArrowBackOutlined} from "@mui/icons-material";
import ReactPlayer from "react-player";

export const Watch = () => {
    const video = "https://youtu.be/Lt-U_t2pUHI";

    return (
        <div className={"watch"}>
            <div className={"watch__back"}>
                <ArrowBackOutlined/>
                Home
            </div>
            <ReactPlayer className={"watch__video"}
                         url={video}
                         width={"100%"}
                         height={"100%"}
                         playing={true}
                         controls={true}
            />
        </div>
    )
}