import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
          <div className="mt-20 hero min-h-screen ">
 

    <div className=" w-80 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    
      <form className="card-body">
      <p className="font-bold text-2xl center">LOGIN</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-orange bg-orange-600 text-white ">Login</button>
        </div>
        <p>New to pls <Link className="text-orange-700" to="/signIn">Sign In</Link></p>

        <div className="divider">OR</div>
        <div className="form-control ">
          <button className="btn bg-slate-400 text-white ">Login With Gmail</button>
        </div>
        
      </form>
    </div>
  </div>
</div>  
     
    );
};

export default Login;