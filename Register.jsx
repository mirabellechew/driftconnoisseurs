import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={register}>
                <p>New? Join us for limitless possibilities!</p>
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
                <button type ="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;