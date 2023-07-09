import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Auth } from "aws-amplify";
import './Header.css'

function Header() {
  const handleSignout = async (event) => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        {/* <CarCrashIcon/> */}
        <Tabs value={0} textColor="inherit">
          <img src="TEP.PA.png" className="logo"/>
          <Tab label="Acasa" to="/home" component={Link} />
          <Tab label="Lectii" to="/lessons" component={Link} />

          {/*  component={Link} */}
          <Tab label="Teste" to="/tests" component={Link} />
          <Tab label="Contact" to="/contact" component={Link} />

          {/* <Tab label='Lista neagra' to="/list" /> */}
        </Tabs>
        {/* <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search> */}
        {/* <Button
          sx={{
            marginLeft: "auto",
            marginRight: "10px",
            backgroundColor: "white",
            color: "black",
          }}
          variant="contained"
          href="/my-account"
        >
          Contul meu
        </Button> */}
        <Button
          sx={{
            marginLeft: "auto",
            marginRight: "10px",
            backgroundColor: "white",
            color: "black",
          }}
          variant="contained"
          onClick={handleSignout}
        >
          Deconectare
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
