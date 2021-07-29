import "./Summary.scss";
import likesIcon from "../../assets/icons/Icon-likes.svg";
import viewsIcon from "../../assets/icons/Icon-views.svg";

function Summary({ videosDetailed }) {
  // title,
  // summary,
  // likes,
  // views,
  // likesIcon,
  // viewsIcon,
  // author,
  // timestamp,
  let date = videosDetailed.timestamp;
  let newdate = new Date(date * 1000);
  let month = newdate.getMonth();
  let day = newdate.getDate();
  var toyear = new Date(date).getFullYear();
  let fullDate = month + "/" + day + "/" + toyear;

  return (
    <div className="summary-wrapper">
      <div className="summary">
        <h3 className="summary__title">{videosDetailed.title}</h3>
        <div className="summary__aln-info-metrics">
          <div className="summary__author-info">
            <h4 className="summary__author">{videosDetailed.author}</h4>
            <p className="summary__date">{fullDate}</p>
          </div>
          <div className="summary__metrics">
            <img
              className="summary__views-icon"
              src={viewsIcon}
              alt="Views Icon"
            ></img>
            <p className="summary__views">{videosDetailed.views}</p>
            <img
              className="summary__likes-icon"
              src={likesIcon}
              alt="Likes Icon"
            ></img>
            <p className="summary__likes">{videosDetailed.likes}</p>
          </div>
        </div>
      </div>
      <p className="summary__para">"{videosDetailed.description}"</p>
      <p className="summary__total-comment">3 Comments</p>
    </div>
  );
}

export default Summary;
