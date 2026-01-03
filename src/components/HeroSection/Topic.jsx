import "../HeroSection/Topic.css";
import DownloadSvg from "../../assets/download.svg";
import LearnMoreSVG from "../../assets/learnMore.svg";

const Topic = () => {
  return (
    <div className="video-player-container">
      <div className="header">
        <div className="back-button">
          <i className="fas fa-angle-left"></i>
        </div>
        <div className="topic">
          <h2>TOPIC</h2>
          <h1>MAURYAN DYNASTY</h1>
        </div>
      </div>
      <div className="video-player">
        <video width="100%" height="100%" controls>
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="time-stamp">
          <span>00:05/30:00</span>
        </div>
        <div className="controls">
          <button>
            <i className="fas fa-backward"></i>
          </button>
          <button>
            <i className="fas fa-play-circle"></i>
          </button>
          <button>
            <i className="fas fa-forward"></i>
          </button>
          <button>
            <i className="fas fa-volume-up"></i>
          </button>
          <button>
            <i className="fas fa-cc"></i>
          </button>
          <button>
            <i className="fas fa-cog"></i>
          </button>
          <button>
            <i className="fas fa-expand"></i>
          </button>
        </div>
      </div>
      <div className="buttons">
        <button className="download-button">
          <i className="fas fa-download"></i>
          <img src={DownloadSvg} alt="Download Svg" />
          <span>DOWNLOAD NOTES</span>
        </button>
        <button className="learn-more-button">
          <i className="fas fa-play-circle"></i>
          <img src={LearnMoreSVG} alt="LearnMore Svg" />
          <span>LEARN MORE</span>
        </button>
      </div>
    </div>
  );
};

export default Topic;
