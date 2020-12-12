import React, { Component } from "react";
import Axios from "axios";
import LessonCardsContainer from "./lessonCards.style";

export default class LessonCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      photos: [],
    };
  }

  componentDidMount() {
    fetch("http://palamana.com/teletags/course/read.php")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Not: Burada hataları yakalamak önemlidir.
        // Bileşenimizde bug bulunmaması için, 'catch ()' bloğu yerine bulunan
        // bu blok içinde hatalar yakalanır.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    //second fectch
    //"http://palamana.com/teletags/course/read.php
    fetch("//palamana.com/teletags/course/read.php")
      // `http://localhost:5000/profile/${this.props.match.params.username}`,
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            photos: result,
          });
        },
        // Not: Burada hataları yakalamak önemlidir.
        // Bileşenimizde bug bulunmaması için, 'catch ()' bloğu yerine bulunan
        // bu blok içinde hatalar yakalanır.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(this.state.items);
    console.log(items[0]);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <LessonCardsContainer>
        <section
          id="postsGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "1em",
            marginLeft: "5%",
            marginTop: "5%",
          }}
        >
          {items.map((item) => (
            <div key={item.name}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  style={{ width: "18rem", height: "200px" }}
                  src={`http://www.palamana.com/teletags/uploads/courses/${item.id}.png`}
                  // `http://localhost:5000/profile/${this.props.match.params.username}`
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>

                  <p>
                    Category:{" "}
                    <span style={{ color: "blue" }}>
                      {" "}
                      {item.category.category_en}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            //   <li key={item.name}>
            //  {item.name}
            //   </li>
          ))}
        </section>
        </LessonCardsContainer>
      );
    }
  }
}
