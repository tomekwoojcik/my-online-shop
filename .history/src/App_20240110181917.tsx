import "./App.css";
import { apiProduct } from "./api/apiProduct";
import { apiBase } from "./api/apiSignUp";

function App() {
  const x = apiProduct("",apiBase);
  console.log(x);
  return <></>;
}

export default App;
