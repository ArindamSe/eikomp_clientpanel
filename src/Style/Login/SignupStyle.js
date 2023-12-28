import Image1 from "../../Assets/LoginPage/bgsignup.png"
import Image from "../../Assets/LoginPage/desktop.png"
export const containerBox={
    display:"flex",
    flexDirection:"row",
}
export const mainBox1={
   width:"30%",
   height:"100%",
   display:"flex",
   flexDirection:"column",
    backgroundColor:"blue",
    '@media (max-width: 990px)': {
        
        display:"none"
       },
}
export const mainBox2={
    width:"70%",
    backgroundColor:"#F0F2F5",
 
    display:"flex",
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 990px)': {
        
        width:"100%"
       },
    
}


export const imageContainer={
    background: `url(${Image1}) `,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "70vh",
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
}

export const imageBox={
    width:"20rem",
    height :"12rem",
    background: `url(${Image}) `,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginBottom:2
}
export const contentContainer={
    width: "100%",
    height: "25rem",
    backgroundColor:"#082A71",
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
}

export const contentText1={
    width:"80%",
    color: "#FCFCFC",
    textEdge: "cap",
textAlign: "center",
fontFeatureSettings: `'clig' off, 'liga' off`,
fontFamily: "Poppins",
fontSize: "20px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "28px",
marginTop:3/* 150% */
}
export const contentText2={
    width:"80%",
    color: "#F2F2F2",
textAlign: "center",
fontFeatureSettings: `'clig' off, 'liga' off`,
fontFamily: "Poppins",
fontSize: "16px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "24px",/* 150% */
marginTop:3
}




export const signupText={
width:"60%",
    color: " #082A71",
    textAlign: "center",
   
    fontFamily: "Lato",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "140%",
    letterSpacing: "0.32px",
    '@media (max-width: 570px)': {
        width:"90%",
        fontSize: "24px",
       },
}

export const buttonBox={
    display: "flex",
    width: "90%",
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
    '@media (max-width: 570px)': {
        padding: "0px",
       },
   
  
  }
  export const signupTexts={
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
    width: "90%",
    fontFamily: "Poppins",
fontSize: "14px",
fontStyle: "normal",
fontWeight: 300,
lineHeight: "14.5px",  
letterSpacing: "0.3px",

}
export const signinText={
    width:"40%",
    textAlign:"center",
    '@media (max-width: 570px)': {
        width:"90%",
        fontSize: "24px",
       },
}