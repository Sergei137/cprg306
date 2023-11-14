"use client";

import { useState, useEffect } from 'react';
import { useUserAuth } from "./_utils/auth-context";
import page from './shopping-list/page';
import Link from 'next/link';

function Page() {
    const [user, setUser] = useState(null);
    const [gitHubSignIn, setGitHubSignIn] = useState(null);
    const [firebaseSignOut, setFirebaseSignOut] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { user, gitHubSignIn, firebaseSignOut } = await useUserAuth();
            setUser(user);
            setGitHubSignIn(() => gitHubSignIn);
            setFirebaseSignOut(() => firebaseSignOut);
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleSignIn = async () => {
        if (gitHubSignIn) {
            await gitHubSignIn();
        }
    }

    const handleSignOut = async () => {
        if (firebaseSignOut) {
            await firebaseSignOut();
        }
    }

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : user ? (
                <>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button onClick={handleSignOut}>Logout</button>
                    <Page />
                </>
            ) : (
                <button onClick={handleSignIn}>Login</button>
            )}
        </div>
    );
}

export default Page;
