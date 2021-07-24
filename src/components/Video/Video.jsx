import { Link } from "react-router-dom";
import "./Video.scss";

import "./Video.scss";

function Video({ videosArr, clickHandle, videosDetailed }) {
  let filteredArray = videosArr.filter(
    (video) => video.id !== videosDetailed.id
  );

  return filteredArray.map((video) => {
    return (
      <Link to={video.id}>
        <div className="video" onClick={() => clickHandle(video)}>
          <img className="video__image" src={video.image} />
          <div className="video__info">
            <h3 className="video__title">{video.title}</h3>
            <h3 className="video__channel">{video.channel}</h3>
          </div>
        </div>
      </Link>
    );
  });
}

export default Video;
