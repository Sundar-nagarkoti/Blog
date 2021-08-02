import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";
import "./App.css"
let Login = (props) => {

    

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
   
      console.log(user);
      if (user) {
        let {uid} = user;

        props.handleUser({uid});
      } else {
        props.handleUser(user);
      }

    });

  }, []);


  return (
    <div>
      {props.user ? <Redirect to="/home" /> : ""}

      <button
        onClick={signInWithGoogle}
        type="submit"
        className="Login btn btn-primary m-4"
      >
        Login
      </button>
    </div>
  );
};

export default Login;