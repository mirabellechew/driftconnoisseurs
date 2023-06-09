import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log(`sign out successful`)
        }).catch(error => console.log(error))
    }
    return (
        <div>{ authUser ? <><h1>Welcome back fellow Drift Connoisseur!</h1><p>{authUser.email}</p><button onClick={userSignOut}>Sign Out</button></>: <p></p> }</div>
    )
}

export default AuthDetails