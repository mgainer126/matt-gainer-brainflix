import "./Hero.scss";

import "./Hero.scss";

function Hero({ videosDetailed }) {
  return (
    <div className="hero">
      <video
        poster={videosDetailed.image}
        className="hero__video"
        controls
      ></video>
    </div>
  );
}

export default Hero;