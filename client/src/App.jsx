import "./app.scss";
import {Home} from "./components/pages/home/Home";
import {Register} from "./components/pages/register/Register";
import {Watch} from "./components/pages/watch/Watch";
import {Login} from "./components/pages/login/Login";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

const App = () => {

    const user = true;

    return (
        <Router>
            <Routes>
                <Route exact path={"/"} element={user ? <Home/> : <Navigate replace to="/login"/>}/>
                <Route path={"/register"} element={!user ? <Register/> : <Navigate replace to="/"/>}/>
                <Route path={"/login"} element={!user ? <Login/> : <Navigate replace to="/"/>}/>
                <Route path={"/movies"} element={user ? <Home type={"movie"}/> : <Navigate replace to="/login"/>}/>
                <Route path={"/series"} element={user ? <Home type={"series"}/> : <Navigate replace to="/login"/>}/>
                <Route path={"/watch"} element={user ? <Watch/> : <Navigate replace to="/login"/>}/>
            </Routes>
        </Router>
    );
}

export default App;
