import "./App.css";
import { signIn, requestSignInModel, Role, apiBase } from "./api/apiSignIn";

function App() {
  const obj: requestSignInModel = ;

  const x = signIn({
    firstName: "Franek",
    lastName: "Bolek",
    username: "nazwa@nazwa.pl",
    phoneNumber: "48000000001",
    role: Role.ROLE_ADMIN,
  }, apiBase);
  console.log(x);
  return <></>;
}

export default App;
