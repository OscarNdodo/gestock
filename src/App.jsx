import Login from "./components/Login"
import Admin from "./pages/Admin";
import Seller from "./pages/Seller";

function App() {
  const logged = 0;
  const acess_level = 2;
  return (
    <>
      {
        logged && acess_level == 1 ? <Admin /> : logged && acess_level == 2 ? <Seller /> : <Login />
      }

    </>
  )
}

export default App
