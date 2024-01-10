import "./App.css";
import { apiProducts } from "./api/apiProducts";
import { apiBase } from "./api/apiSignUp";

function App() {
  const x = apiProducts(apiBase);
  console.log(x);
  return <></>;
}

export default App;
