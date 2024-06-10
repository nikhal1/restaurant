import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { Login } from "../../pages/loginpage/Login";
import { useContext, useState } from "react";
import { UserContext } from "../../App"; // Adjust the import path as necessary

const Header = () => {
  const [showLogin,setShowLogin] = useState(false);

  const { isLogin, setIsLogin } = useContext(UserContext); // Using context here
  console.log(isLogin); // Logging to see the login status

  const handleModal = () => {
    setShowLogin(true);
  };

  const handleHide = () => {
    setShowLogin(false);
  };

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                 <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
               <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  
                   {!isLogin&& <NavLink>
                      <Login
                        showLogin={showLogin}
                        handleModal={handleModal}
                        handleHide={handleHide}
                      />
                    </NavLink>}
                 
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
