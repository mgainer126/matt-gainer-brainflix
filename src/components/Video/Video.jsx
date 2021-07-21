import "./Video.scss";

function Video({ videosArr, clickHandle, posterVideo }) {
  let filteredArray = videosArr.filter((video) => video.image !== posterVideo);
  return filteredArray.map((video) => {
    return (
      <div className="video" onClick={() => clickHandle(video)}>
        <img className="video__image" src={video.image} />
        <div className="video__info">
          <h3 className="video__title">{video.title}</h3>
          <h3 className="video__channel">{video.channel}</h3>
        </div>
      </div>
    );
  });
}

export default Video;
