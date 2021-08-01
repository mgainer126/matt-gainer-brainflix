import "./Hero.scss";

import "./Hero.scss";

function Hero({ poster, summaryVideos }) {
  return (
    <div className="hero">
      <video
        poster={summaryVideos.image}
        className="hero__video"
        controls
      ></video>
    </div>
  );
}

export default Hero;
