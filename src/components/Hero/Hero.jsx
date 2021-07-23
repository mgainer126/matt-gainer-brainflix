import React, { Component } from "react";
import axios from "axios";
import "./Hero.scss";

export default class Hero extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/?api_key=5f40c944-c6f0-45d0-b713-8ec93829e295`
      )
      .then((res) => {
        console.log(res.data[0]);
        this.setState({ videos: res.data });
      });
  }

  render() {
    let posterArr = this.state.videos;
    console.log(posterArr);
    return (
      <div className="hero">
        <video
          poster="https://i.imgur.com/l2Xfgpl.jpg"
          className="hero__video"
          controls
        >
          <source img src="#" type="#"></source>
        </video>
      </div>
    );
  }
}
