
import './App.css'

function App() {


const obj: requestSignInModel = {
    firstName: "Franek",
    lastName: "Bolek",
    username: "nazwa@nazwa.pl",
    phoneNumber: "48000000001",
    role: Role.ROLE_ADMIN,
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const x = signIn(obj, apiBase)
console.log(x);
  return (
    <>
    </>
  )
}

export default App
