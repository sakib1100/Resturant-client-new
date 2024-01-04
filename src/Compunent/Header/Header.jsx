import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import swal from "sweetalert";

const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user)
  const [signOut] = useSignOut(auth);
  const singOut = () => {
 const logout = signOut();
if(logout){
  swal({ title: "Logout!", text: "Log Out Successfull", icon: "success", button: "Ok" });

}
  }

  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getPostData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);



    return (
        <div>
<div className="px-5 navbar bg-base-100 navbar bg-base-100 bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500">
  <div className="flex-1">
    <Link to="/"><a className="btn btn-sm btn-ghost text-xl">ResturanT</a></Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end mr-4">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item text-white bg-green-500">{data.length}</span>
        </div>
      </div>
   

      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{data.length} Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="">
           <Link to='/orderCart'><button className="btn bg-green-500 text-white btn-block">View cart</button></Link>
          </div>
        </div>
      </div>
    </div>
    
   
    <div className="dropdown dropdown-end">
      
    </div>

   {user ?  <div className="dropdown dropdown-end mr-4">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      </div>
   

      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="text-info  mt-2 mb-2">{user?.email}</span>
          <div className="card-actions">
            {user && <button onClick={singOut} className="btn bg-green-500 text-white btn-block">LOG OUT!</button>}

          </div>
        </div>
      </div>
    </div>:<Link to='/login'><button className="btn btn-sm bg-green-500 text-white">Login</button></Link> }

  </div>
</div>
        </div>
    );
};

export default Header;