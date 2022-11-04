// import React, { useState } from "react"
// import { Link } from "react-router-dom";

// import "../css/Auth.css";
// export default function Auth() {
//   // let [authMode, setAuthMode] = useState("signin");
//   let [Authmode,setAuthmode] = useState("admin");
// //---------------------------------------------------------------------ADMIN LOGIN----------------------------------------------------------------------------
//   const changemode=() =>{
//     setAuthmode(Authmode === "admin" ? "signin" : "admin")
//   }   

//   if(Authmode === "admin")
//   {
//     return(
//         <div className="Auth-form-container">
//         <form className="Auth-form">
//           <div className="Auth-form-content">
//             <h3 className="Auth-form-title">Admin Login</h3>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="Enter email" />
//             </div>
//             <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password" />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//             <Link className="d-grid gap-2 mt-3" to='/Admin'>
//             <button type="submit"  className="btn btn-primary">
//                 Submit
//               </button>
//             </Link>  
//             </div>
//           </div>

//         </form>
//       </div>
//     )
//   }
// //------------------------------------------------------------------USER LOGIN---------------------------------------------------------------------------

//   if (authMode === "signin") {
//     return (
//       <div className="Auth-form-container">
//         <form className="Auth-form">
//           <div className="Auth-form-content">
//             <h3 className="Auth-form-title"></h3>
//             <div className="text-center">
//               Not registered yet?{" "}
//               <span className="link-primary" onClick={changemode}>
//               <a href="#" className="text">Admin register</a>
//               </span>
//             </div>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary">
//                 re
//               </button>
//             </div>
            
//           </div>
//         </form>
//       </div>
//     )
//   }
// //------------------------------------------------------------------------SIGN UP----------------------------------------------------------------------------------

//   // return (
//   //   <div className="Auth-form-container">
//   //     <form className="Auth-form">
//   //       <div className="Auth-form-content">
//   //         <h3 className="Auth-form-title">REGISTER</h3>
//   //         <div className="text-center">
//   //           Already registered?{" "}
//   //           <span  className="link-primary" onClick={changeAuthMode}>
//   //           <a href="#" className="text">login</a>
//   //           </span>
//   //         </div>
//   //         <div className="form-group mt-3">
//   //           <label>Full Name</label>
//   //           <input
//   //             type="text"
//   //             className="form-control mt-1"
//   //             placeholder="Name"
//   //           />
//   //         </div>
//   //         <div className="form-group mt-3">
//   //           <label>Email address</label>
//   //           <input
//   //             type="email"
//   //             className="form-control mt-1"
//   //             placeholder="Email Address"
//   //           />
//   //         </div>
//   //         <div className="form-group mt-3">
//   //           <label>Password</label>
//   //           <input
//   //             type="password"
//   //             className="form-control mt-1"
//   //             placeholder="Password"
//   //           />
//   //         </div>
//   //         <div className="d-grid gap-2 mt-3">
//   //           <button type="submit" className="btn btn-primary">
//   //             Submit
//   //           </button>
//   //         </div>
//   //       </div>
//   //     </form>
//   //   </div>
//   // )
// }