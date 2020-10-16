import React, { Component } from "react";
import Axios from "axios";

export default class LessonCards extends Component {
  state = {
    settings: null,

    posts: [],
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/722", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    // Axios({
    //   method: "GET",
    //   withCredentials: true,
    //   url: "https://pokeapi.co/api/v2/pokemon/722",
    // })
    //   .then((res) => {
    //     this.setState({ settings: res.data }, () => {
    //       console.log("state is set");
    //       console.log(this.state);
    //     });
    //   })
    //   .catch((error) => {
    //     if (error.response && error.response.status === 401) {
    //       this.setState({ loggedIn: false });
    //       console.log(error.response);
    //     }
    //   });
  }
  render() {
    return (
      <div style={{ marginLeft: "15%", marginTop: "10%" }}>
        <div class="card" style={{ width: "18rem" }}>
          <img
            style={{ width: "18rem", height: "200px" }}
            src="https://images.unsplash.com/photo-1602354949094-d4a7286c8f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            class="card-img-top"
            alt="..."
          />

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            style={{
              width: "18rem",
            }}
            src="https://images.unsplash.com/photo-1595848407672-05b956718d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            class="card-img-top"
            alt="..."
          />

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
