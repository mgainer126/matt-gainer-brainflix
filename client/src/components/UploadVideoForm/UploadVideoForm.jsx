import "../UploadVideoForm/UploadVideoForm.scss";
import { useHistory } from "react-router-dom";

function UploadVideoForm() {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/");
  };

  return (
    <uploadvideoform className="upload">
      <form className="upload__form">
        <label htmlFor="upload" className="upload__header">
          TITLE YOUR VIDEO
          <input
            type="text"
            className="upload__input"
            id="upload"
            name="upload"
            placeholder="Add a title to your video"
          ></input>
        </label>
        <label htmlFor="upload" className="upload__header--desc">
          ADD A VIDEO DESCRIPTION
          <input
            type="text"
            className="upload__input-desc"
            id="upload"
            name="upload"
            placeholder="Add a description to your video"
          ></input>
        </label>
        <div className="upload__cta">
          <button
            className="upload__btn"
            onClick={() => {
              alert("Congradulations You Have Uploaded Sucesfully");
              {
                handleRoute();
              }
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
