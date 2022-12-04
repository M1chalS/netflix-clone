import './watch.scss';
import {ArrowBackOutlined} from "@mui/icons-material";
import ReactPlayer from "react-player";
import {Link, useLocation} from "react-router-dom";

export const Watch = () => {
    const location = useLocation()
    const {movie} = location.state

    return (
        <div className={"watch"}>
            <Link to={"/"}>
                <div className={"watch__back"}>
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>
            <ReactPlayer className={"watch__video"}
                         url={movie.video}
                         width={"100%"}
                         height={"100%"}
                         playing={true}
                         controls={true}
            />
        </div>
    )
}