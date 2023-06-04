import React from "react";
import { Auth } from "aws-amplify";

function Signout() {
  const handleSignout = async (event) => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return <button onClick={handleSignout}>Sign out</button>;
}

export default Signout;
