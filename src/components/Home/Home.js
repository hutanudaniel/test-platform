import React from "react";
import "./Home.css";
import { BrowserView, isMobile } from "react-device-detect";
import { Auth } from "aws-amplify";
import Button from "@mui/material/Button";

function Home() {
  const handleSignout = async (event) => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <div className="container">
      {isMobile && (
        <Button
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "white",
            color: "black",
          }}
          variant="contained"
          onClick={handleSignout}
        >
          Deconectare
        </Button>
      )}
      <img src="presentation.png" alt="Imagine" />
      <div className="description">
        <p>Pași pentru a ajunge la finalizarea cu succes a unui test:</p>
        <ol>
          <li>
            În funcție de devisul folosit aveți în partea de jos sau sus meniul
            aplicației;
          </li>
          <li>Parcurgeți mediul de învățare aflat în butonul "Lecții";</li>
          <li>
            În butonul "Teste" se regăsesc testele, de unde vă alegeți materia;
          </li>
          <li>
            După ce ați ales testul, aveți doar o singură variantă de răspuns
            corect;
          </li>
          <li>
            După terminarea testului veți primi scorul în funcție de performanță
            împreună cu variantele de răspuns corect și explicația întrebării.
          </li>
        </ol>
        <p>Mult succes!</p>
        <br />
      </div>
    </div>
  );
}

export default Home;
