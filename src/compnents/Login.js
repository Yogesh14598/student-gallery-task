import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div className="container-fluid">
      <div className=" row justify-content-center">
        <div className="col-md-5 col-sm-12 col-12 d-flex align-content-center px-5">
            <div className="signIn-form w-100 m-auto">
                <div className="text-center">
                <h2 >Sign in</h2>
                <p>Free access to our dashboard</p>
                </div>
          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <label>Username </label>
              <input
                type="text"
                name="email"
                required
                className="form-control my-2"
                placeholder="Enter Email"
              />
            </div>
            <div className="m-3">
                <div className="d-flex justify-content-between">
              <label>Password </label>
              <span className="float-right">Forgot Password ?</span>
              </div>
              <input
                type="password"
                name="password"
                className="form-control my-2"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="text-center">
              
            <Link to="/gallery" className="side_links">
            <button className="btn btn-primary btn-lg m-auto w-100">Sign In</button>

              </Link>
            </div> 
          
          </form>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 col-12">
          <img
            src="https://dashkit.goodthemes.co/assets/img/covers/auth-side-cover.jpg"
            alt=""
            className="w-100 img-fluid  login-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
