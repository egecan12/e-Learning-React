import React, { Component } from "react";
import axios from "axios";

export default class userProfile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wYWxhbWFuYS5jb20iLCJhdWQiOiJodHRwOlwvXC9wYWxhbWFuYS5jb20iLCJpYXQiOjEzNTY5OTk1MjQsIm5iZiI6MTM1NzAwMDAwMCwiZGF0YSI6eyJpZCI6IjI0IiwiZmlyc3RuYW1lIjoiIiwidXNlcm5hbWUiOiJlZ2VjYW4iLCJsYXN0bmFtZSI6IiIsImVtYWlsIjoiZWdlY2FuQGVnZWNhbi5jb20ifX0.vzZx6D5rU5WgD6L6VxP6K9c3bmRKnQxwwMaItpUvjWs",
        };
      }
  componentDidMount() {
          if (!localStorage.token) {
      return window.location.pathname = "/401";

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
    //   localStorage.token = response.data.jwt;
      // toast.success(response.data.message);

    })
    .catch((error) => {
    //   toast.error("an error occured");
    });
   
  }
  render() {

    return (
      <div>
        <h1>Welcome to User Profile Page</h1>
      </div>
    );
  }
}
