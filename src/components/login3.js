import React, { Component } from "react";
import axios from "axios";
class login3 extends Component {
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

    const url =
      "https://httpbin.org/anything";

    // post body data
    const user = {
      email: "egecan@egecan.com",
      password: "toronto",
      accessToken: "902433@!D65@$gRRsdE43bYPSiNESpw!Z",
    };

    // request options
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // send POST request
    fetch(url, options, )
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

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
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default login3;
