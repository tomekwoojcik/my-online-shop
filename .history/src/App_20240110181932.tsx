import "./App.css";
import { apiProduct } from "./api/apiProduct";
import { apiBase } from "./api/apiSignUp";

function App() {
  const x = apiProduct("3fa85f64-5717-4562-b3fc-2c963f66afa6",apiBase);
  console.log(x);
  return <></>;
}

export default App;
