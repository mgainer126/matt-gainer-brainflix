import { Link } from "react-router-dom";
import "./Video.scss";

import "./Video.scss";

function Video({ videosArr, clickHandle, idCurrentHero }) {
  let filteredArray = videosArr.filter((video) => video.id !== idCurrentHero);

  return filteredArray.map((video) => {
    return (
      <Link className="video__links" to={video.id} key={video.id}>
        <div className="video" onClick={() => clickHandle(video)}>
          <img className="video__image" src={video.image} alt="video" />
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
