import React, { Component, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navBar/navbar";

export default class userProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jwt: localStorage.token,
      settings: null,
    };
  }
  logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  componentDidMount() {
    if (!localStorage.token) {
      return (window.location.pathname = "/");
    }
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/http://teletagsdev-env.eba-a2qmj2nq.us-east-2.elasticbeanstalk.com/api/user/validate_token.php",
        this.state
      )
      .then((response) => {
        if (response.data.error) {
          // return toast.error(response.data.message);
          console.log(response.data.error);
        }
        console.log(response.data);
        this.setState({ settings: response.data }, () => {});
        console.log(this.state.settings.data.username);

        //   localStorage.token = response.data.jwt;
        // toast.success(response.data.message);
      })
      .catch((error) => {
        //   toast.error("an error occured");
      });
  }
  render() {
    const { settings } = this.state; //statedeki settingi rendera aliyoruz
    console.log(settings);

    return (
      settings && (
        <div>
          <Navbar/>
          <button
            onClick={this.logOut}
            type="Login"
            className="btn btn-info btn-block"
          >
            LogOut
          </button>
          <h1>Welcome {settings.data.username} </h1>
        </div>
      )
    );
  }
}
