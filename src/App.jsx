import { Route, Routes } from "react-router-dom"
import Header from "./Compunent/Header/Header"
import Home from "./Compunent/Home/Home"
import BreakFast from "./Compunent/BreakFast/BreakFast"
import Dinner from "./Compunent/Dinner/Dinner"
import Lunch from "./Compunent/Lunch/Lunch"



function App() {
  return (
    <div>
      <div className="mb-18">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home />}>
             <Route  index element={<BreakFast />} />
             <Route  path="lunch" element={<Lunch />} />
             <Route  path="dinner" element={<Dinner />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
