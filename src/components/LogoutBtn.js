import React, { Component } from "react";
import BtnStyle from "./BtnStyle.module.css";

export default class LogoutBtn extends Component {
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

  render() {
    return (
        <span>
            <button onClick={this.logOut} className={BtnStyle.logoutBtn}>Log Out</button>
        </span>
    );
  }
}

