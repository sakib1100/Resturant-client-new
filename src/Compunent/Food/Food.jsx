import { NavLink, Outlet } from "react-router-dom";
import './Food.css';

const Food = () => {
  return (
    <div>
      <section className="my-12  max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-center space-x-6">
          <ul>
            <li>
              <NavLink  activeclassname="active" to='/home' >Breakfast</NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to='/home/lunch'>Lunch</NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to='/home/dinner'>Dinner</NavLink>
            </li>
          </ul>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default Food;





