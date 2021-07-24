import "../UploadVideo/UploadVideo.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

function UploadVideo() {
  return (
    <thumbnail className="thumbnail">
      {/* <h1 className="thumbnail__heading">Upload Video</h1> */}
      <h4 className="thumbnail__video-title">VIDEO THUMBNAIL</h4>
      <img
        className="thumbnail__img"
        src={thumbnail}
        alt="thumbnail image"
      ></img>
    </thumbnail>
  );
}

export default UploadVideo;
