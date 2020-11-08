import React, { useState } from "react";
import Axios from "axios";

function Login2() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    if (localStorage.token) {
      return this.props.history.push("/setting");
    }

    Axios({
      method: "POST",
      data: {
        email: "egecan@egecan.com",
        password: 'toronto',
        accessToken:"902433@!D65@$gRRsdE43bYPSiNESpw!Z"
      },
    
      url: "https://cors-anywhere.herokuapp.com/http://teletagsdev-env.eba-a2qmj2nq.us-east-2.elasticbeanstalk.com/api/user/login.php",
    })
      .then((res) => {
        if (res.data.error) {
        //   return toast.error(res.data.message);
        return console.log(res.data);
        }
        localStorage.token = res.data.token;
        // window.location.pathname = "/setting";
        console.log(res.data);
      })
      .catch(() => {
        // toast.error("an error occured");
        console.log('error caught');

      });
      
  



  // (async () => {
  //   const rawResponse = await fetch('https://cors-anywhere.herokuapp.com/http://teletagsdev-env.eba-a2qmj2nq.us-east-2.elasticbeanstalk.com/api/user/login.php', {
  //     method: 'POST',
  //     // headers: {
  //     //   'Accept': 'application/json',
  //     //   'Content-Type': 'application/json'
  //     // },
  //     body: JSON.stringify({ 
  //          email: "egecan@egecan.com",
  //          password: 'toronto',
  //          accessToken:"902433@!D65@$gRRsdE43bYPSiNESpw!Z"})
  //   });
  //   const content = await rawResponse.json();
  
  //   console.log(content);
  // })();
  }
  // logOut = () => {
  //   localStorage.clear();
  //   window.location.reload();
  // };
  // window.location.reload()
  return (
    <div style={{ float: "left", marginLeft: "5%" }}>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Sign-In
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
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
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setLoginUsername(e.target.value)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <br />
                <p>No account yet? Go register!</p>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={login}
                >
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
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login2;
