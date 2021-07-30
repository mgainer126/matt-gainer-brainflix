import "./Hero.scss";

import "./Hero.scss";

function Hero({ poster }) {
  return (
    <div className="hero">
      <video poster={poster} className="hero__video" controls></video>
    </div>
  );
}

export default Hero;
