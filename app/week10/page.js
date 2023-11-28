// page.js

"use client";

import React from 'react';
import Link from 'next/link';
import ItemList from './shopping-list/item-list';
import NewItem from './shopping-list/new-item';
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('GitHub Sign-In Error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Firebase Sign-Out Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {user ? (
        // User is logged in
        <div className="flex flex-col items-center">
          <p className="text-center text-2xl font-bold">Welcome, {user.displayName} ({user.email})</p>
          <button className="border border-black bg-blue-500 text-white rounded-lg p-4 mb-4"
            onClick={handleLogout}>Logout
          </button>
          <Link className="border border-black bg-blue-500 text-white rounded-lg p-4 mb-4" href="./week8/shopping-list">Go to Shopping List</Link>
        </div>
      ) : (
        // User is not logged in
        <div className="flex flex-col items-center">
          <p className="text-center text-2xl font-bold">Please log in to continue.</p>
          <button className="border border-black bg-blue-500 text-white rounded-lg p-4 mb-4"
            onClick={handleLogin}>Login with GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
