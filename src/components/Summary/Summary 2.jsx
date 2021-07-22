import "./Summary.scss";

function Summary({
  title,
  summary,
  likes,
  views,
  likesIcon,
  viewsIcon,
  author,
  timestamp,
}) {
  let date = timestamp;
  let newdate = new Date(date * 1000);
  let month = newdate.getMonth();
  let day = newdate.getDate();
  var toyear = new Date(date).getFullYear();
  let fullDate = month + "/" + day + "/" + toyear;
  return (
    <div className="summary-wrapper">
      <div className="summary">
        <h3 className="summary__title">{title}</h3>
        <div className="summary__aln-info-metrics">
          <div className="summary__author-info">
            <h4 className="summary__author">{author}</h4>
            <p className="summary__date">{fullDate}</p>
          </div>
          <div className="summary__metrics">
            <img className="summary__views-icon" src={viewsIcon}></img>
            <p className="summary__views">{views}</p>
            <img className="summary__likes-icon" src={likesIcon}></img>
            <p className="summary__likes">{likes}</p>
          </div>
        </div>
      </div>
      <p className="summary__para">"{summary}"</p>
      <p className="summary__total-comment">3 Comments</p>
    </div>
  );
}

export default Summary;
