import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginContainer from "./login.style";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      accessToken: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/http://teletagsdev-env.eba-a2qmj2nq.us-east-2.elasticbeanstalk.com/api/user/login.php",
        this.state
      )
      .then((response) => {
        if (response.data.error) {
          return toast.error(response.data.message);
        }
        console.log(response.data);
        localStorage.token = response.data.jwt;
        // toast.success(response.data.message);

        window.location.pathname = "/userProfile";
      })
      .catch((error) => {
        toast.error("an error occured");
      });
  };

  //   https://httpbin.org/anything  use that api to send test post request
  render() {
    const { email, password, accessToken } = this.state;
    return (
      <LoginContainer>
        <ToastContainer autoClose={2000} position="top-left" zIndex={99999} />

        <button
          type="button"
          className="btn btn-dark loginButton"
          data-toggle="modal"
          data-target="#loginModal"
        >
          Login
        </button>

        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Login
                </h5>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.submitHandler}>
                  {" "}
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                      value={email}
                      onChange={this.changeHandler}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={this.changeHandler}
                      name="password"
                      value={password}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-btn-dark"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="accessToken"
              value={accessToken}
              onChange={this.changeHandler}
              hidden={true}
            />
          </div>
          <button type="submit">Submit</button>
        </form> */}
      </LoginContainer>
    );
  }
}

export default login;
