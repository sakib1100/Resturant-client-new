import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Login = () => {
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
     error
    // loading,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle,gUser] = useSignInWithGoogle(auth);
if(gUser){
  navigate('/')
  swal({ title: "Good job!", text: "User Created Successfully", icon: "success", button: "Ok" });

}


  if(error){
    swal({
      title: "Oops!",
      text: "Login failed. Passwrod and Email not match.",
      icon: "error",
      button: "Ok",
    });
  }
if(user){
  swal({
    title: "Good job!",
    text: "You are Logged In!",
    icon: "success",
    button: "Ok",
  });
  navigate('/')
}

const location = useLocation();
const from = location.state?.from?.pathname || "/";
if (user || gUser) {
  navigate(from, { replace: true });
}

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   signInWithEmailAndPassword(email, password);
    
  };

  return (
    <div>
      <div className="mt-20 hero min-h-screen ">
        <div className="card shrink-0 w-full max-sm:w-80 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="mx-10">
            <p className="font-bold text-2xl center mt-6">LOG IN</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
          
           
            <div className="form-control">
              <button
                type="submit"
                className="btn btn-orange bg-green-500 text-white "
              >
                Sign In
              </button>
            </div>
            <p className="mt-2">
              New to pls{" "}
              <Link className="text-orange-700 underline" to="/signIn">
                Sign In
              </Link>
            </p>
            <div className="divider">OR</div>
          </form>
          <div className="mb-10 flex d-flex justify-center mx-auto">
            <button onClick={() => signInWithGoogle()} className="btn w-80 max-sm:w-60 bg-slate-400 text-white">
              Login With Gmail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
