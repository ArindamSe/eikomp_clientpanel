import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Switch,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import LogoImage from "../../Assets/Logo/logo.png";
import Image from "../../Assets/LoginPage/female.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  loginLandingPage,
  loginBoxFirst,
  loginBoxSecond,
  welcomeText,
  loginAccountText,
  textfieldInput,
  rememberMeBox,
  recoverText,
  remamebeToggleBox,
  rememberText,
  signupText,
  buttonBox,
  accountText,
  loginBoxSecondBg,
  BlurBox,
  secondBoxText,
} from "../../Style/Login/LoginStyle";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChangeToggle = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const complianceTitle =
    "Click to comply - revolutionizing product compliance with a single Tab";

  const isMobile = window.innerWidth <= 430;
  const isTab = window.innerWidth <= 920;

  return (
    <>
      {/* First  half screen with  login and sign up */}
      <Box bgcolor={"#F0F2F5"} sx={loginLandingPage}>
        <Box sx={loginBoxFirst}>
          <Typography align={"center"}>
            <img
              src={LogoImage}
              alt="Logo Image"
              style={{
                width: "123.908px",
                height: "80px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </Typography>
          <Typography sx={welcomeText}>Welcome Back</Typography>
          <Typography sx={loginAccountText}>Login into your account</Typography>

          <Grid container>
          <Grid width={"80%"} margin={2} align="center" item xs={12} sm={12} md={12} lg={12} marginTop={1}>
            <TextField
            align="center"
              style={{
                marginTop: 5,
                background: "#FEFEFE",
                width: "100%", // Set width to 100%
                maxWidth: "400px", // Set the maximum width as needed
                outline: "none",
                '@media (max-width: 530px)': {
                  width: '400px', // Adjust width for screens 530px or less
                },
              }}
              id="outlined-adornment-email"
              type="number"
              label="Phone Number"
              variant="outlined"
            />
          </Grid>
          <Grid width={"80%"}  margin={2} item xs={12} sm={12} md={12} lg={12} marginTop={1}>
            <TextField
              style={{
                marginTop: 5,
                width: "100%", // Set width to 100%
                maxWidth: "400px", // Set the maximum width as needed
                background: "#FEFEFE",
                outline: "none",
                borderRadius: "8px",
                color: "#5A5A5A",
                '@media (max-width: 530px)': {
                  width: '400px', // Adjust width for screens 530px or less
                },
              }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Confirm Password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid width={"80%"}  margin={2} sx={{...rememberMeBox,}} align="center" item xs={12} sm={12} md={12} marginTop={1}>
          <Box sx={remamebeToggleBox}>
                <Typography marginTop={-1} width={"50px"}>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChangeToggle}
                    color="primary" // You can change the color to 'secondary' or 'default'
                  />
                </Typography>{" "}
                <Typography sx={rememberText} marginRight={10} marginLeft={1}>
                  Remember me
                </Typography>
                <Box>
                <Typography sx={recoverText}>Recover Password</Typography>
              </Box>
              </Box>
              </Grid>
          <Grid align="center"   item xs={12} sm={12} md={12} >
            <Button
              variant="contained"
              sx={{ ...buttonBox, width: 'auto', maxWidth: '400px' }}
            >
              SignIn
            </Button>
          </Grid>
          <Grid width={"80%"}  margin={2} item xs={12} sm={12} md={12} lg={12} marginTop={1}>
          <Typography>
                <Typography component="span" sx={accountText}>
                  {" "}
                  Don’t have an account?{" "}
                </Typography>{" "}
                <Link to={"/signup"}>
                <Typography component="span" sx={signupText}>
                  Sign up!
                </Typography>
                </Link>
              </Typography>
          </Grid>
        </Grid>
        


        
         
          
        </Box>

        {/* second half screen with  vector image and title */}

        <Box sx={loginBoxSecond} margin={"24px,24px,24px,0px"}>
          <Box margin={2} bgcolor={"blue"} sx={loginBoxSecondBg}>
            <Box sx={BlurBox}>
              <Typography
                align="center"
                marginTop={8}
                width={"80%"}
                sx={secondBoxText}
                fontSize={"2rem"}
                style={{ height: "40%" }}
              >
                {complianceTitle}
              </Typography>
              <Box marginTop={1} style={{ width: isTab ?"55%":"",height: isTab ?"80%":"60%" }}>
                <img
                  align="left"
                  src={Image}
                  alt="Logo Image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LoginPage;
