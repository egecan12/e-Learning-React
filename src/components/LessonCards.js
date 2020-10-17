import React, { Component } from "react";
import Axios from "axios";

export default class LessonCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      photos: []
    };
  }

  componentDidMount() {
    fetch("http://palamana.com/teletags/course/read.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Not: Burada hataları yakalamak önemlidir.
        // Bileşenimizde bug bulunmaması için, 'catch ()' bloğu yerine bulunan
        // bu blok içinde hatalar yakalanır.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      //second fectch

      fetch("http://palamana.com/teletags/course/read.php")
      // `http://localhost:5000/profile/${this.props.match.params.username}`,      
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            photos: result
          });
        },
        // Not: Burada hataları yakalamak önemlidir.
        // Bileşenimizde bug bulunmaması için, 'catch ()' bloğu yerine bulunan
        // bu blok içinde hatalar yakalanır.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(this.state.items)
    console.log(items[0])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section
          id="postsGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "1em",
            marginLeft: "5%",
            marginTop: "5%"
          }}
        >
       
          {items.map(item => (
            <div key={item.name}>
                  <div class="card" style={{ width: "18rem" }}>
          <img
            style={{ width: "18rem", height: "200px" }}
            src={`http://www.palamana.com/teletags/uploads/courses/${item.id}.png`}
            // `http://localhost:5000/profile/${this.props.match.params.username}`
            class="card-img-top"
            alt="..."
          />

          <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
            <p class="card-text">
           {item.description}
            </p>

           <p  style={{ color: "blue"}}> {item.category.category_en}</p> 
          </div>
        </div>
            </div>
        //   <li key={item.name}>
        //  {item.name}
        //   </li>
        ))}
     
        </section>
      );
    }
  }
}