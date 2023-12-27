import { NavLink, Outlet } from "react-router-dom";
import './Home.css'
const Home = () => {
    return (
        <div>
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/M7pHhfZ/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg)'}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Best food waiting for your belly
</h1>
      <button className="btn bg-orange-600 border-0 rounded-badge text-white">Order Now</button>
    </div>
  </div>
</div>
<div>
      <section className="my-12 max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-center space-x-6">
          <ul>
            <li>
              <NavLink className="transition-5" activeClassName="active" to="/" >Breakfast</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/lunch">Lunch</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="dinner">Dinner</NavLink>
            </li>
          </ul>
        </div>
      </section>
   
    </div>
    <Outlet />

        </div>
    );
};

export default Home;