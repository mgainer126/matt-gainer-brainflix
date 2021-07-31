import UploadVideo from "../../components/UploadVideo/UploadVideo";
import UploadVideoForm from "../../components/UploadVideoForm/UploadVideoForm";
import React from "react";
import axios from "axios";
import "../Upload/Upload.scss";

export default class UploadVideoClass extends React.Component {
  createVideo = (obj) => {
    console.log("is this working");
    console.log(obj);
    axios
      .post("/videos/videos", obj)
      .then((response) => {
        this.setState({ createVideo: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <>
        <h2 className="upload-title">Upload Video</h2>
        <div className="upload-desktop">
          <UploadVideo />
          <UploadVideoForm createVideo={this.createVideo} />;
        </div>
      </>
    );
  }
}
