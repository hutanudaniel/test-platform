import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Auth } from "aws-amplify";

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
          <Tab label="Home" to="/home" component={Link} />
          {/*  component={Link} */}
          <Tab label="MyAccount" to="/my-account" component={Link} />
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
        <Button
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
        </Button>
        <Button
          sx={{ marginLeft: "right", backgroundColor: "white", color: "black" }}
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
