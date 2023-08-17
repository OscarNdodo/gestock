import Login from "./components/Login"
import Admin from "./pages/Admin";
import Seller from "./pages/Seller";

function App() {
  const logged = true;
  const acess_level = 2;
  return (
    <>
      {
        // If user is logged => 1 to Admin 2 to Bar-Man
        logged && acess_level == 1 ? <Admin /> : logged && acess_level == 2 ? <Seller /> : <Login />
      }

    </>
  )
}

export default App
