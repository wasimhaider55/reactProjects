import Feed from "../../components/feed/Feed";
import SideBar from "../../components/sidebar/SideBar";
import RightBar from "../../components/rightbar/RightBar";
import Topbar from "../../components/topbar/Topbar";
import "./Home.css"

const Home = () => {
  return (


    <div>
    <Topbar />
      <div className="homecontainer">
    <SideBar />
    <Feed />
    <RightBar />
      </div>
    </div>
  );
}

export default Home