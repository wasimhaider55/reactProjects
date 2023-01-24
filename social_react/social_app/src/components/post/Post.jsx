import {MoreVert} from "@material-ui/icons";
import { Users} from "../../dummyData";
import "./Post.css";
const post = ({post}) => {
  return (
   <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">{post.like} people like it </span>
            </div>
            <div className="postBottomRight">
                <div className="postCommentTag">
                    {post.comment} comments
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default post