import "./featured.scss";
import {InfoOutlined, PlayArrow} from "@mui/icons-material";

export default function Featured({type}) {
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
            <img src="https://i.ytimg.com/vi/FWG3Dfss3Jc/maxresdefault.jpg" alt="background"/>
            <div className="featured__info">
                <img src="https://help.redbubble.com/hc/article_attachments/360040246851/backtothefuturelogo.png" alt="movie title" />

                <span className="featured__info--desc">
                    Qualisque tractatos ponderum dissentiunt constituto taciti augue consetetur quaestio. Consectetur latine phasellus scelerisque vim inceptos condimentum graeci possim. Ea vivamus fames quaeque magna salutatus libris. Consectetuer dicam rutrum netus feugiat iuvaret. Pro invenire voluptaria evertitur quaerendum.
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