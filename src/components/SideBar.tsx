import "./SideBar.scss";
import jeremyRobson from "../assets/image-jeremy.png";
import React from "react";

const SideBar: React.FC<Props> = ({ currentView, setView }) => {
  return (
    <header className="menu">
      <div className="menu-profile">
        <img
          src={jeremyRobson}
          alt="Jeremy Robson"
          className="menu-profile__img"
        />
        <div className="menu-profile__content">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <nav className="menu-nav">
        <a
          role="button"
          tabIndex={0}
          onClick={() => setView("daily")}
          className={currentView === "daily" ? `active` : ""}
        >
          Daily
        </a>
        <a
          role="button"
          tabIndex={0}
          onClick={() => setView("weekly")}
          className={currentView === "weekly" ? `active` : ""}
        >
          Weekly
        </a>
        <a
          role="button"
          tabIndex={0}
          onClick={() => setView("monthly")}
          className={currentView === "monthly" ? `active` : ""}
        >
          Monthly
        </a>
      </nav>
    </header>
  );
};

export default SideBar;

interface Props {
  currentView: "daily" | "weekly" | "monthly";
  setView: React.Dispatch<React.SetStateAction<View>>;
}
