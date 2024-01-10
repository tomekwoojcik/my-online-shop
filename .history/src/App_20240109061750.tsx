import "./App.css";
import { signIn, signUp } from "./api/apiSignIn";
import { apiBase } from "./api/apiSignUp";
// import {
//   signUp, Role, apiBase
// } from "./api/apiSignIn";

function App() {

  // const x = signIn({
  //   firstName: "Franek",
  //   lastName: "Bolek",
  //   username: "nazwa@nazwa.pl",
  //   phoneNumber: "48000000001",
  //   password:"zaq1@WSX",
  //   role: Role.ROLE_ADMIN,
  // }, apiBase);
  // console.log(x);

  const x:any = signIn(apiBase,{username:})
  return <></>;
}

export default App;
