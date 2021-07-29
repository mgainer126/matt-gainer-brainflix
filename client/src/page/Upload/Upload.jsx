import UploadVideo from "../../components/UploadVideo/UploadVideo";
import UploadVideoForm from "../../components/UploadVideoForm/UploadVideoForm";
import "../Upload/Upload.scss";
function Upload() {
  return (
    <>
      <h2 className="upload-title">Upload Video</h2>
      <div className="upload-desktop">
        <UploadVideo />
        <UploadVideoForm />;
      </div>
    </>
  );
}

export default Upload;
