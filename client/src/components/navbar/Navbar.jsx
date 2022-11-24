import "./navbar.scss";
import {ArrowDropDown, Notifications, Search} from "@mui/icons-material";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-container--left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png" alt="logo"/>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and popular</span>
                    <span>My list</span>
                </div>
                <div className="navbar-container--right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile"/>
                    <div className="profile">
                    <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}