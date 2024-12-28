import React from "react";
import "./SignUp.css";
import SignupImg from '../assets/SignupImg.png';

const SignUp = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="sub-div" style={{  }}>
        <div className="responsive" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"50%"}}>
        <h1 style={{}}>SignUp</h1>
        <p style={{padding:"10px 0px"}}>Already Have An Account? <a href="#">SignIn</a></p>

        <div className="n-i" style={{display:"flex",width:"100%",justifyContent:"space-evenly",alignItems:"center",margin:"16px 0px"}}>
            <h4>Name</h4>
            <input className="inp-su" type="text" name="" id="" />
        </div>
        <div className="n-i" style={{display:"flex",width:"100%",justifyContent:"space-evenly",alignItems:"center",margin:"16px 0px"}}>
            <h4>Email id</h4>
            <input className="inp-su" type="email" name="" id="" />
        </div>
        <div className="n-i" style={{display:"flex",width:"100%",justifyContent:"space-evenly",alignItems:"center",margin:"16px 0px"}}>
            <h4>Password</h4>
            <input className="inp-su" type="password" name="" id="" />
        </div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <input  style={{margin:"0px 5px"}}  type="checkbox" name="" id="" />
          <p style={{padding:"0px",margin:"16px 0px"}}>By signing up you agreeto recieve updates and special offers</p>
        </div>

        <div>
          <button style={{padding:"10px 30px",margin:"16px",fontSize:"18px",fontWeight:"bold",borderRadius:"10px",border:"none"}}>Submit</button>
        </div>
        </div>

        <div className="responsive" style={{width:"50%",display:"flex",justifyContent:"center"}}>
            <img src={SignupImg} width={500} alt="" />
        </div>
      </div>


    </div>
    
  );
};

export default SignUp;
