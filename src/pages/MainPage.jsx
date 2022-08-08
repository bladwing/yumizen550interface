import Popup from "../components/popup/popup";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <img src="./img/topBorder.jpg" alt="topBorer" className="topBorderMain" />
      <div className="middleMenu">
        <div className="startupButtons">
          <Popup />
          <Link to="">
            <img src="./img/middleMenu/shutdown.jpg" alt="" />
          </Link>
        </div>

        <div className="middleButtons">
          <Link to="/qualityAssurance">
            <img src="./img/middleMenu/qualityAssurance.jpg" alt="" />
          </Link>
          <Link to="/reagent">
            <img src="./img/middleMenu/reagents.jpg" alt="" />
          </Link>
          <Link to="/settings">
            <img
              src="./img/middleMenu/settings.jpg"
              alt="Settings"
              className="LogSetting"
            />
          </Link>
          <Link to="/logs">
            <img
              src="./img/middleMenu/logs.jpg"
              alt="Logs"
              className="LogSetting"
            />
          </Link>
        </div>
        <div className="lastButtons">
          <Link to="/lastrun">
            <img src="./img/middleMenu/lastrun.jpg" alt="lastrun" />
          </Link>
          <Link to="/maintenance">
            <img src="./img/middleMenu/maintenance.jpg" alt="maintenance" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
