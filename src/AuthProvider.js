import React, { createContext, useState, useEffect } from "react";
import { API, Auth, Hub } from 'aws-amplify';
// import { Auth } from '@aws-amplify/auth';
// import { API} from '@aws-amplify/api';
// import {Hub } from '@aws-amplify/';
import "./aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { getUser } from "./queries";

function User(username, email) {
  this.username = username;
  this.email = email;
  // this.city = city;
}

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchAuthUser();

    const authListener = Hub.listen(
      "auth",
      async ({ payload: { event, data } }) => {
        console.log("Auth Status Changed Event: ", event);
        console.log("Auth Status Changed Data", data);

        switch (event) {
          case "signIn":
            // debugger;

            await fetchAuthUser();
            break;
          case "signOut":
            setUser(null);
            setUserDetails(null);
            break;
          case "signIn_failure":
            // showToast(String(data), error);
            console.log(data, "error sign in");
            break;
          case "signUp_failure":
            // showToast(String(data), error);
            console.log(data, "error sign in");
            if (user) {
              setUser(null);
            }
            break;
          default:
            return;
        }
      }
    );

    //cleanup
    return () => {
      authListener();
    };
  }, []);

  async function fetchAuthUser() {
    try {
      debugger;

      const fetchedUser = await Auth.currentAuthenticatedUser();
      let userDynamoDb;


      if (fetchedUser) {
        setUser(fetchedUser);

        // userDynamoDb = await API.graphql({
        //   query: getUser,
        //   variables: {
        //     id: fetchedUser.getUsername(),
        //   },
        // });

        // userDynamoDb.data && setUserDetails(userDynamoDb.data.getUser);
      }
      setLoading(false);

      console.log("user cognito -- ", fetchedUser);
      console.log("user DB -- ", userDynamoDb);
    } catch (err) {
      console.log(err);
      setUser(null);
      setUserDetails(null);
      setLoading(false);
    }
  }

  const signIn = async (email, password) => {
    debugger;
    const user = await Auth.signIn({ username: email, password });
    return user;
  };

  const signOut = async () => Auth.signOut();

  const signUp = async (username, password) => {
    const newUser = await Auth.signUp({ username, password });
    return newUser;
  };

  const confirmEmail = async (email, code) => {
    const response = await Auth.confirmSignUp(email, code);
    console.log(response);
    return response;
  };

  const resendSignUp = async (email) => {
    await Auth.resendSignUp(email);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        userDetails,
        setUserDetails,
        confirmEmail,
        signIn,
        signOut,
        signUp,
        resendSignUp,
      }}
    >
      {/* {loading? <Loading/>: children} */}
      {children}
    </AuthContext.Provider>
  );
}
