import React, { Component } from "react";
import LoginButton from "../../components/login/login";
import LessonCards from "../../components/lessonCards/LessonCards";
import Navbar from "../../components/navBar/navbar";
import RegisterButton from "../../components/register/register";
import HomeContainer from "./home.style";
import Footer from "../../components/footer/footer";

export default class home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="homePageContainer">
          <Navbar />
          <LoginButton />
          <RegisterButton />
          <br />
          <div id="lessonCardContainer">
            <LessonCards id="lessonCards" />
          </div>
          <Footer/>
        </div>
      </HomeContainer>
    );
  }
}
