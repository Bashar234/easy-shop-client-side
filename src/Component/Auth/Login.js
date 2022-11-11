import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [logUser, setLogUser] = useState(false);
  const [password, setPassword] = useState("");

  const { auth, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  //console.log(from);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        if (user) {
          setLogUser(true);
          setLoading(false);
          fetch("https://assi11server.vercel.app/api/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("userToken", JSON.stringify(data.token));
              toast(data.msg);
            });
        }
      })
      .catch((error) => {
        //console.error(error);
        setLoading(false);
        toast(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const googleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setLogUser(true);
        setLoading(false);
        fetch("https://assi11server.vercel.app/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("userToken", JSON.stringify(data.token));
            toast(data.msg);
          });
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        toast(errorMessage);
        // The email of the user's account used.
      });
  };
  useEffect(() => {
    window.document.title = "Login";
    if (logUser) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, logUser]);
  return (
    <div className="container my-5">
      <div className="card p-4">
        <h3 className="my-2">Login Form</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control my-2"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control my-2"
            type="password"
            placeholder="Enter your password"
          />
          <button className=" my-2 form-control btn btn-danger">Login</button>
          <Toaster />
        </form>
        <div className="otherLoginSystem">
          <button
            onClick={googleSignIn}
            className=" my-2 form-control btn btn-dark"
          >
            <i className="fab mx-2 fa-google"></i>
            Google
          </button>
        </div>
      </div>
      <div className="text-center my-2">
        <small>
          New user?{" "}
          <strong>
            <Link to="/user/register">Register</Link>
          </strong>
        </small>
      </div>
    </div>
  );
};

export default Login;
