import "./App.css";
import { signIn } from "./api/apiSignIn";
import { apiBase } from "./api/apiSignUp";

function App() {
  const x = signIn(
    { username: "tomaszwojcik912@gmail.com", password: "zaq1@WSX" },
    apiBase
  );
  console.log(x);
  return <></>;
}

export default App;
