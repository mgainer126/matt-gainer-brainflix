import "./Summary.scss";
import likesIcon from "../../assets/icons/Icon-likes.svg";
import viewsIcon from "../../assets/icons/Icon-views.svg";

function Summary({ summaryVideos }) {
  let date = summaryVideos.timestamp;
  let newdate = new Date(date * 1000);
  let month = newdate.getMonth();
  let day = newdate.getDate();
  var toyear = new Date(date).getFullYear();
  let fullDate = month + "/" + day + "/" + toyear;
  return (
    <div className="summary-wrapper">
      <div className="summary">
        <h3 className="summary__title">{summaryVideos.title}</h3>
        <div className="summary__aln-info-metrics">
          <div className="summary__author-info">
            <h4 className="summary__author">{summaryVideos.channel}</h4>
            <p className="summary__date">{fullDate}</p>
          </div>
          <div className="summary__metrics">
            <img
              className="summary__views-icon"
              src={viewsIcon}
              alt="Views Icon"
            ></img>
            <p className="summary__views">{summaryVideos.views}</p>
            <img
              className="summary__likes-icon"
              src={likesIcon}
              alt="Likes Icon"
            ></img>
            <p className="summary__likes">{summaryVideos.likes}</p>
          </div>
        </div>
      </div>
      <p className="summary__para">"{summaryVideos.description}"</p>
      <p className="summary__total-comment">3 Comments</p>
    </div>
  );
}

export default Summary;
