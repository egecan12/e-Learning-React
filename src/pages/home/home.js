import React, { Component } from "react";
import LoginButton from "../../components/login/login";
import LessonCards from "../../components/lessonCards/LessonCards";
import Navbar from "../../components/navBar/navbar";
import RegisterButton from "../../components/register/register";



export default class home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <LoginButton />
        <RegisterButton />
        <br />
        <div id="lessonCardContainer">
          <LessonCards id="lessonCards" />
        </div>
      </div>
    );
  }
}
