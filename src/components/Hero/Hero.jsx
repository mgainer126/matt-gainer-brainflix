import "./Hero.scss";

function Hero({ poster }) {
  return (
    <div className="hero">
      <video poster={poster} className="hero__video" controls>
        <source img src="#" type="#"></source>
      </video>
    </div>
  );
}

export default Hero;
