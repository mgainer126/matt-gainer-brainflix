import "./Summary.scss";
import likesIcon from "../../assets/icons/Icon-likes.svg";
import viewsIcon from "../../assets/icons/Icon-views.svg";

function Summary({
  videosDetailed,
  summaryTitle,
  summaryAuthor,
  summaryLikes,
  summaryViews,
  summaryDescription,
}) {
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
  console.log(summaryLikes);

  return (
    <div className="summary-wrapper">
      <div className="summary">
        <h3 className="summary__title">{summaryTitle}</h3>
        <div className="summary__aln-info-metrics">
          <div className="summary__author-info">
            <h4 className="summary__author">{summaryAuthor}</h4>
            <p className="summary__date">{fullDate}</p>
          </div>
          <div className="summary__metrics">
            <img
              className="summary__views-icon"
              src={viewsIcon}
              alt="Views Icon"
            ></img>
            <p className="summary__views">{summaryViews}</p>
            <img
              className="summary__likes-icon"
              src={likesIcon}
              alt="Likes Icon"
            ></img>
            <p className="summary__likes">{summaryLikes}</p>
          </div>
        </div>
      </div>
      <p className="summary__para">"{summaryDescription}"</p>
      <p className="summary__total-comment">3 Comments</p>
    </div>
  );
}

export default Summary;
