import { Link, useNavigate } from "react-router-dom";
import Container from "../Components/ShearComponents/Container";
import useAuthUtilite from "../Hooks/useAuthUtilite";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";

const Login = () => {
  const { user, login } = useAuthUtilite();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navget = useNavigate();
  const axios = useAxios();
  // funtionanlity
  const loginHandele = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const toastId = toast.loading("Loggin in");
    try {
      const user = await login(email, password);
      console.log(user.user.email);
      const res = await axios.post("/auth/access-token", {
        email: user.user.email,
      });
      console.log(res.headers); // Check for the 'Set-Cookie' header
      console.log(res.data);
      toast.success("Logged in", { id: toastId });
      navget("/");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };
  console.log(user);

  return (
    <Container>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginHandele} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onBlur={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="card-body">
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Register Now !
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
