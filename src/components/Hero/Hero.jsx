import "./Hero.scss";

import "./Hero.scss";

function Hero({ videosDetailed }) {
  console.log({ videosDetailed });
  return (
    <div className="hero">
      <video poster={videosDetailed.image} className="hero__video" controls>
        <source img src="#" type="#"></source>
      </video>
    </div>
  );
}

export default Hero;
