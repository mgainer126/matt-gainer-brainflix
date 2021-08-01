import "../UploadVideoForm/UploadVideoForm.scss";
import { useHistory } from "react-router-dom";

function UploadVideoForm({ createVideo }) {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = {
      videoTitle: event.target[0].value,
      videoDesc: event.target[1].value,
    };
    createVideo(newVideo);
    console.log(newVideo);
    console.log(event.target);
  };

  return (
    <uploadvideoform className="upload">
      <form onSubmit={handleSubmit} className="upload__form">
        <label htmlFor="upload-title" className="upload__header">
          TITLE YOUR VIDEO
          <input
            type="text"
            className="upload__input"
            id="upload-title"
            name="upload-title"
            placeholder="Add a title to your video"
          ></input>
        </label>
        <label htmlFor="upload-desc" className="upload__header--desc">
          ADD A VIDEO DESCRIPTION
          <input
            type="text"
            className="upload__input-desc"
            id="upload-desc"
            name="upload-desc"
            placeholder="Add a description to your video"
          ></input>
        </label>
        <div className="upload__cta">
          <button
            className="upload__btn"
            onClick={() => {
              alert("Congradulations You Have Uploaded Sucesfully");
              // {
              //   handleRoute();
              // }
            }}
          >
            PUBLISH
          </button>
          <button className="upload__btn--cancel">CANCEL</button>
        </div>
      </form>
    </uploadvideoform>
  );
}

// function myFunction() {
//   alert("Added Succesfully!");
// }

export default UploadVideoForm;
