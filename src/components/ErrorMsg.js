import React, { Component } from "react";
 
export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
        if(data.data=='token expired'){
          alert("Token Expired login again")
          window.localStorage.clear();
          window.location.href = "./sign-in";
        }
      });
  }

  logOut=()=>{
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  toFeatures=()=>{
    window.location.href = "./features";
  };

  render() {
    return (
      <div>
        Name<h1>{this.state.userData.fname}</h1>
        Password <h1>{this.state.userData.password}</h1>
        <br />
        <button onClick={this.logOut} className="btn btn-primary">Log Out</button>
        <button onClick={this.toFeatures} className="btn btn-success">Continue</button>
      </div>
    );
  }
}
