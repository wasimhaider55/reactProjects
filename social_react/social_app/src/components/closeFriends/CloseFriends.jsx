import "./CloseFriends.css";

const CloseFriends = ({user}) => {
    return (
        <li className="sideBarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sideBarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriends