import { Box, Typography, TextField, Grid,Button ,MenuItem ,  InputAdornment,IconButton,} from "@mui/material";

import React, { useState } from "react";
import {
  containerBox,
  mainBox2,
  mainBox1,
  imageContainer,
  imageBox,
  contentContainer,
  contentText1,
  contentText2,
  signupText,
  buttonBox,
  accountText,
  signupTexts,
  signinText
} from "../../Style/Login/SignupStyle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import LogoImage from "../../Assets/Logo/logo.png";
function SignupPage() {
    const currencies = [
        {
          value: 'USD',
          label: 'addnew',
        },
        {
          value: 'EUR',
          label: 'addnew',
        },
        {
          value: 'BTC',
          label: 'addnew',
        },
        {
          value: 'JPY',
          label: 'addnew',
        },
        
      ];
      const [showPassword, setShowPassword] = useState(false);
      const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  const text =
    "One click, total compliance - simplifying the complexities of  product compliances";
  return (
    <>
      <Box container sx={containerBox}>
        <Box sx={mainBox1}>
          <Box sx={imageContainer}>
            <Box sx={imageBox}></Box>
          </Box>
          <Box sx={contentContainer}>
            <Typography sx={contentText1}>
              {" "}
              Eikomp is the go-to partner
            </Typography>
            <Typography sx={contentText2}>
              {" "}
              At Eikomp, we are committed to helping businesses achieve product
              regulatory compliance, which is a critical component of success in
              today’s business world. Compliance such as BIS, EPR, TEC MTCTE
              protects businesses from legal and financial risks and enhances
              their credibility and reputation among stakeholders and customers.
            </Typography>
          </Box>
        </Box>
        <Box sx={mainBox2}>
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
          <Typography sx={signupText}>{text}</Typography>
          <Grid container spacing={2} sx={{ padding: "2rem" ,}}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                style={{
                    width:"95%",
                   
                  background: "#FEFEFE",
                  outline: "none",
                }}
                id="outlined-adornment-email"
                type="text"
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                style={{
                  background: "#FEFEFE",
                  width:"95%",
                  outline: "none",
                }}
                id="outlined-adornment-email"
                type="text"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                style={{
                  background: "#FEFEFE",
                  width:"95%",
                  outline: "none",
                }}
                id="outlined-adornment-email"
                type="text"
                label="Email "
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                style={{
                  background: "#FEFEFE",
                  width:"95%",
                  outline: "none",
                }}
                id="outlined-adornment-email"
                type="number"
                label="Phone Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
            id="outlined-select-currency"
            select
            label="Select Your Industry"
            defaultValue=""
            style={{
                width:"95%",
              background: "#FEFEFE",
              outline: "none",
            }}
            fullWidth     InputLabelProps={{
              sx: {
               
                color: 'grey',
                '&.Mui-focused': {
                  color: 'brown', 
                  borderColor:"brown"
                },
              },
            }}
          >
          
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}
              style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  backgroundImage: `linear-gradient(90deg,#ff8a65 30%, #ffab91 90%)`,
                  color: "brown",
                  borderRadius:"10px", 
                  borderBottom: '1px solid #ccc',
                  margin: '10px', 
                  paddingBottom: '10px', 
                  transition: 'backgroundColor 0.1s ease', 
                }}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
            id="outlined-select-currency"
            select
            label="Select Your Type"
            defaultValue=""
            style={{
                width:"95%",
              background: "#FEFEFE",
              outline: "none",
            }}   InputLabelProps={{
              sx: {
                
                color: 'grey',
                '&.Mui-focused': {
                  color: 'brown', 
                  borderColor:"brown"
                },
              },
            }}
          >
          
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}
              style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  backgroundImage: `linear-gradient(90deg,#ff8a65 30%, #ffab91 90%)`,
                  color: "brown",
                  borderRadius:"10px", 
                  borderBottom: '1px solid #ccc',
                  margin: '10px', 
                  paddingBottom: '10px', 
                  transition: 'backgroundColor 0.1s ease', 
                }}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                style={{
                  background: "#FEFEFE",
                  width:"95%",
                  outline: "none",
                }}
                id="outlined-adornment-email"
                type="text"
                label="Company Name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                style={{
                  background: "#FEFEFE",
                  width:"95%",
                  outline: "none",
                }}
                id="outlined-adornment-email"
                type="text"
                label="User Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
            style={{
                width:"95%",
                 background: "#FEFEFE",
              outline: "none",
              borderRadius: "8px",
              color: "#5A5A5A",
            }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            label="Password"
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
                    {showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
            style={{
                width:"95%",
                 background: "#FEFEFE",
              outline: "none",
              borderRadius: "8px",
              color: "#5A5A5A",
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
                    {showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
            </Grid>
            <Grid align={"center"} item xs={11} sm={12} md={12}>
            <Button
            variant="contained"
            sx={{ ...buttonBox,     }}
          >
            SignIn
          </Button>
            </Grid>
          </Grid>
          <Typography sx={signinText}>
                <Typography component="span" sx={accountText}>
                  {" "}
                  Alrady have an account?{" "}
                </Typography>{" "}
                <Typography component="span" sx={signupTexts}>
                  Sign in!
                </Typography>
              </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SignupPage;
