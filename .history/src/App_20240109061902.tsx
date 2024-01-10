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

  const x = signIn(apiBase, { username: "wojcik.tomasz97218@gmail.com", password: "970218tW@" });
  console.log(x)
  return <></>;
}

export default App;
