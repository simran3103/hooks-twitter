import React, { useState } from "react";
import "../styles/Login.css";
// import bird from "../assets/bird.png";
import { useSelector, useDispatch } from "react-redux";

const Login = (props) => {
    const name = useSelector((state) => state.name);
    const password = useSelector((state) => state.password);
    const dispatch = useDispatch();
    // const [name, setName] = useState("");  
    // const [password, setPassword] = useState(""); 
    // const [signup, setSignup] = useState(false);
    // const changeHandler = (event) => {
    //   event.target.name === "name"
    //     ? setName(event.target.value) 
    //     : setPassword(event.target.value);  // };
    const logHandler = () => {
        console.log(name, password);
        if (!name || name.trim() === "") {
            alert("name cannot be empty");
        }
        else if (name.length < 3) { alert("name length should be greater than 3"); }
        else if (!password || password.trim() === "") { alert("please provide the correct password"); } else if (!(password.includes("@") || password.includes("#") || password.includes("&") || password.includes("*"))) { alert("password must contain special characters"); }    // else {    //   setName("");    //   setPassword("");    // }  };
        return (
            <div className="sign-up">
                <div className="bird">
                    {/* <img src={bird} alt="twit-bird" style={{ margin: "8rem", width: "19rem" }} /> */}
                </div>
                <div className="s-form">
                    <div className="head">
                        <input type="text" placeholder="username"
                            value={name}
                            name="name" className="name"
                            // onChange={(e) => changeHandler(e)}   
                            onChange={() => dispatch({ type: "NAME" })}
                        />
                        <input type="password" placeholder="password" value={password} name="pass" className="pass"
                            // onChange={(e) => changeHandler(e)} 
                            onChange={() => dispatch({ type: "PASSWORD" })}
                        />
                        <div className="log-main-btn">
                            <span className="login"
                                // onClick={logHandler}         
                                onClick={() => dispatch({ type: "LOGIN" })}
                            > Login </span>
                        </div>
                    </div>
                    <div className="fp">Forgot password?</div>
                    <div className="t-bird">
                        {/* <img src={bird} alt="twit-bird" className="img-bird" /> */}
                    </div>
                    <div className="happy">Happening now</div>
                    <div className="jt">Join Twitter today.</div>
                    <div className="main-btn">
                        {/* <span className="sign-btn" onClick={() => setSignup(true)}> */}
                        <span className="sign-btn">Sign up</span>
                        <span className="log-btn">Log in</span>
                    </div>
                    {/* {signup && <div>SIGNUP</div>} */}
                </div>
            </div>
        );
    };
}
export default Login