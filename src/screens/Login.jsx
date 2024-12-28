import React from 'react'
import "./Login.css"
const Login = () => {
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
           <div className="responsive" style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:"column",width:"100%"}}>
           <h1 style={{}}>LogIn</h1>
           
   
           <div className="n-i" style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",margin:"20px 0px"}}>
               <input className="inp-si" type="text" placeholder='Username or Email' name="" id="" />
           </div>
           <div className="n-i" style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",margin:"20px 0px"}}>
               <input className="inp-si" placeholder='Password' type="password" name="" id="" />
           </div>
   
           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             <input  style={{margin:"0px 5px"}}  type="checkbox" name="" id="" />
             <p style={{padding:"0px",margin:"0px 0px"}}>Remeber me</p>
           </div>
   
           <div>
             <button style={{padding:"10px 30px",margin:"20px",fontSize:"20px",fontWeight:"bold",borderRadius:"10px",border:"none"}}>Login</button>
           </div>
           </div>
   
          
         </div>
   
   
       </div>
  )
}

export default Login