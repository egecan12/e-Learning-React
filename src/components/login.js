import React, { Component } from "react";
import axios from "axios";
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
          return console.log("error");

        }
        console.log(response.data);
        localStorage.token = response.data.jwt;
        window.location.pathname = "/userProfile";

      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   https://httpbin.org/anything  use that api to send test post request
  render() {
    const { email, password, accessToken } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
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
        </form>
      </div>
    );
  }
}

export default login;
