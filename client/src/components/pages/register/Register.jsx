import "./register.scss";
import {useRef, useState} from "react";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

    return (
        <div className={"register"}>
            <div className={"register__top"}>
                <div className={"wrapper"}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png"
                        alt="logo" className={"logo"}/>
                    <button className={"register__loginButton"}>Sign In</button>
                </div>
            </div>
            <div className={"register__container"}>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    !email ? (
                        <div className={"register__container--input"}>
                            <input type={"email"} placeholder={"email address"} ref={emailRef}/>
                            <button className={"button"} onClick={handleStart}>Get Started</button>
                        </div>
                    ) : (
                        <div className={"register__container--input"}>
                            <input type={"password"} placeholder={"password"} ref={passwordRef}/>
                            <button className={"button"} onClick={handleFinish}>Start</button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}