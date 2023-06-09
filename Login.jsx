import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={logIn}>
                <p>Log In</p>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                <input 
                    type="password" 
                    placeholder="******" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                <button type ="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;