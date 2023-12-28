import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase.init'
import swal from 'sweetalert';
const SignIn = () => {


    const [
        createUserWithEmailAndPassword
        // user,
        // loading,
        // error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const handleSignin = (e) => {
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;

     createUserWithEmailAndPassword(email,password);
 
     swal({
        title: "Good job!",
        text: "User Created Successfully",
        icon: "success",
        button: "Ok",
      });     
    
    }
    return (
        <div>




          <div className="mt-20 hero min-h-screen ">
    <div className=" w-80 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    
      <form onSubmit={handleSignin} className="card-body">
      <p className="font-bold text-2xl center">SIGN IN</p>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  type="submit" className="btn btn-orange bg-orange-600 text-white ">Sign In</button>
        </div>
        <p>Already have an account pls <Link className="text-orange-700" to="/login">Login</Link></p>
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

export default SignIn;