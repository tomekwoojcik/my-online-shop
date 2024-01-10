import "./App.css";
import {
  signIn} from "./api/apiSignIn";
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

  const x = signIn({ username: "tomaszwojcik912@gmail.com", password: "zaq1@WSX" }, apiBase);
  console.log(x)
  return <></>;
}

export default App;
