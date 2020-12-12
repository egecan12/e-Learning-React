import React, { Component } from "react";
import RegisterContainer from "./register.style";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

export default class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
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
        "https://cors-anywhere.herokuapp.com/http://teletagsdev-env.eba-a2qmj2nq.us-east-2.elasticbeanstalk.com/api/user/create.php",
        this.state
      )
      .then((response) => {
        if (response.data.error) {
          return toast.error(response.data.message);
        }
        console.log(response.data);
        toast.success(response.data.message);

        window.location.pathname = "/";
      })
      .catch((error) => {
        toast.error("an error occured");
      });
  };
  render() {
    return (
      <RegisterContainer>
        <button
          type="button"
          className="btn btn-success registerButton"
          data-toggle="modal"
          data-target="#registerModal"
        >
          Register
        </button>

        <div
          className="modal fade"
          id="registerModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Register
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
                      name="email"required
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="usernameInput">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={this.changeHandler}
                      name="username"required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstNameInput">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFirstName"
                      aria-describedby="emailHelp"
                      name="firstName"required
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastNameInput">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleLastName"
                      aria-describedby="emailHelp"
                      name="lastName"required
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      minLength="6" required
                      id="exampleInputPassword"
                      aria-describedby="emailHelp"
                      name="password"
                      onChange={this.changeHandler}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your password with anyone else.
                    </small>
                  </div>
          
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </RegisterContainer>
    );
  }
}
