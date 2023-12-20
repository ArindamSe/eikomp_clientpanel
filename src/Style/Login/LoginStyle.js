import { flexRow ,flexColumn,contentCenter } from "../../GlobalVariable/GlobalVariable"
import Image1 from "../../Assets/LoginPage/loginBackground.png"
export  const  loginLandingPage={
    ...flexRow,
   backgroundColor:"#F0F2F5"
}
export const loginBoxFirst={
  width:"50%",
  height:"100vh",
 ...flexColumn,
 ...contentCenter,
 textAlign:"center"

}
export const loginBoxSecond={
    width:"50%",
    height:"100vh"
}
export const welcomeText={
    color: "#082A71",
leadingTrim: "both",
textEdge: "cap",
fontFamily:"Poppins",
fontSize: "36px",
fontStyle: "normal",
fontWeight: 600,
lineHeight: "normal",
textAlign:"center"
}
 /* 162.016% */
export const loginAccountText={
    color: "#000",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily:"Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "29px",
    textAlign:"center"

}
export const  textfieldInput ={
   
textAlign:"center",
marginTop:1.5,
marginBottom:1.5
}
export const rememberMeBox={
    display: "flex", // Corrected from "wrap"
    justifyContent: "space-around",
    textAlign: "center",
   
}
export const recoverText={
    color:"#082A71",
    fontFamily: "Poppins",
fontSize: "14px",
fontStyle: "normal",
fontWeight: 400,
lineHeight: "14.5px",
}
export const remamebeToggleBox={

    ...flexRow,
    marginLeft:-4
}

export const rememberText={
    color:"#1A1A1A",
    fontFeatureSettings:` 'clig' off, 'liga' off`,
    fontFamily: "Poppins",
fontSize: "12px",
fontStyle: "normal",
fontWeight: 400,
lineHeight: "20px",  
letterSpacing: "0.3px"
}
export const signupText={
    color:"#082A71",
   
    fontFamily: "Poppins",
fontSize: "14px",
fontStyle: "normal",
fontWeight: 500,
lineHeight: "14.5px",  
letterSpacing: "0.3px"
    /* 103.571% */
}
export const accountText={
    color:"#000",
   
    fontFamily: "Poppins",
fontSize: "14px",
fontStyle: "normal",
fontWeight: 300,
lineHeight: "14.5px",  
letterSpacing: "0.3px"
}
export const buttonBox={
    display: "flex",
    width: "400px",
    height: "50px",
    padding: "12px 173px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "8px",
    background: "#082A71",
    boxShadow: "0px 0px 1px 0px rgba(255, 75, 38, 0.13)",
    transition: "background-color 0.3s ease-in-out", // Add transition for a smooth color change
    "&:hover": {
      background: "#55b700", // Change to the desired green color on hover
    },
  }
  export const loginBoxSecondBg={
    background: `url(${Image1}) `,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height:"95%",
    borderRadius:"10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  
  }
  
  export const BlurBox={
    borderRadius: "16px",
    border: "1px solid #FFF",
    background: "rgba(183, 233, 246, 0.25)",
    backdropFilter: "blur(13px)",
    width:"90%",
    height:"90%",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  }
  export const  secondBoxText={
    color: "#FFF",
    fontFamily: "Lato",
    fonSize: "2rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "140%", /* 58.8px */
    letterSpacing: "0.42px",
    marginTop:6,
    height: "40%",

  }