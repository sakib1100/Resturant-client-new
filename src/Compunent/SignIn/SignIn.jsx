import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import swal from 'sweetalert';

const SignIn = () => {
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    // user,
    // loading,
    // error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle,gUser] = useSignInWithGoogle(auth);
if(gUser){
  navigate('/')
  swal({ title: "Good job!", text: "User Created Successfully", icon: "success", button: "Ok" });

}
  const handleSignin = async (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length >= 6) {
      try {
        await createUserWithEmailAndPassword(email, password);
        navigate('/')
        swal({ title: "Good job!", text: "User Created Successfully", icon: "success", button: "Ok" });
      } catch (error) {
        swal({ title: "Oops!", text: error.message, icon: "error", button: "Ok" });
      }
    } else {
      swal({ title: "Oops!", text: "Password must be 6 characters or longer!", icon: "error", button: "Ok" });
    }
  };

  return (
    <div>
      <div className="mt-20 hero min-h-screen ">
        <div className="card shrink-0 w-full max-sm:w-80 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignin} className="mx-10">
            <p className="font-bold text-2xl center mt-6">SIGN IN</p>
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
            <div className="form-control">
              <button type="submit" className="btn btn-orange bg-green-500 text-white ">Sign In</button>
            </div>
            <p className="mt-2">Already have an account pls <Link className="text-green-700 underline" to="/login">Login</Link></p>
            <div className="divider">OR</div>
          </form>
          <div className="mb-10 flex d-flex justify-center mx-auto">
            <button onClick={() => signInWithGoogle()} className="btn w-80 max-sm:w-60 bg-slate-400 text-white">Login With Gmail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
