import "./login.scss";
import {useRef, useState} from "react";

export const Login = () => {

    return (
        <div className={"login"}>
            <div className={"login__top"}>
                <div className={"wrapper"}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png"
                        alt="logo" className={"logo"}/>
                </div>
            </div>
            <div className={"login__container"}>
                <form>
                    <h1>Sign In</h1>
                    <input type={"email"} placeholder={"email or phone number"}/>
                    <input type={"password"} placeholder={"Password"}/>
                    <button className={"login__container--button"}>Sign In</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA
                    </small>
                </form>
            </div>
        </div>
    )
}