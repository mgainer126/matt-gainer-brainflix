import "./Comments.scss";

function Comments({ videosDetailed }) {
  let videoArr = videosDetailed;
  console.log(videoArr);
  return videoArr.map((comment) => {
    let date = comment.timestamp;
    let newdate = new Date(date * 1000);
    let month = newdate.getMonth();
    let day = newdate.getDate();
    var toyear = new Date(date).getFullYear();
    let fullYear = month + "/" + day + "/" + toyear;
    return (
      <div className="comment__history">
        <div className="comment__history-head">
          <div className="comment__history-avitar"></div>
          <h4 className="comment__history-name" key={comment.id}>
            {comment.name}
          </h4>
          <p className="comment__history-date">{fullYear}</p>
        </div>
        <p className="comment__history-para">{comment.comment}</p>
      </div>
    );
  });
}

export default Comments;
