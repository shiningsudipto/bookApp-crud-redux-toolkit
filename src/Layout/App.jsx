import { Outlet } from "react-router-dom";
import NavMenu from "../Pages/Components/NavMenu";
import Home from "../Pages/Home";

const App = () => {
  return (
    <div>
      <NavMenu />
      <Home />
    </div>
  );
};

export default App;