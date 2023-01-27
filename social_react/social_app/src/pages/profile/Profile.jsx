import "./Profile.css";
import Feed from "../../components/feed/Feed";
import SideBar from "../../components/sidebar/SideBar";
import RightBar from "../../components/rightbar/RightBar";
import Topbar from "../../components/topbar/Topbar";

const Profile = () => {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />
                         </div>
                    </div>

                    <div className="profileInfo">
                        <h4 className="profileInfoName">Sana Malik</h4>
                        <span className="profileInfoDesc">hye! My friends</span>
                    </div>

                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar  profile />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile