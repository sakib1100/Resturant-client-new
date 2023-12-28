import { Outlet, Route, Routes } from "react-router-dom"
import Header from "./Compunent/Header/Header"
import Home from "./Compunent/Home/Home"
import BreakFast from "./Compunent/BreakFast/BreakFast"
import Dinner from "./Compunent/Dinner/Dinner"
import Lunch from "./Compunent/Lunch/Lunch"
import Order from "./Compunent/Order/Order"
import Login from "./Compunent/Login/Login"
import SignIn from "./Compunent/SignIn/SignIn"



function App() {
  return (
    <div>
      <div className="mb-18">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}>
             <Route index element={<BreakFast />} />
             <Route  path="lunch" element={<Lunch />} />
             <Route  path="dinner" element={<Dinner />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/order/:id" element={<Order />}></Route>
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
