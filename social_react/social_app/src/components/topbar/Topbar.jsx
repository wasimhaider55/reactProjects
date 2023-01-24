import "./Topbar.css";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">Facebook lite</span>
      </div>

      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="search for friends , post or videos " className="searchInput" />
        </div>
      </div>

      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Home</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItems">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItems">
            <Chat />
            <span className="topBarIconBadge">3</span>
          </div>
          <div className="topBarIconItems">
            <Notifications />
            <span className="topBarIconBadge">2</span>
          </div>
        </div>

        <img src="/assets/person/1.jpeg" alt="" className="topBarImg" />
      </div>
    </div>
  );
}

export default Topbar