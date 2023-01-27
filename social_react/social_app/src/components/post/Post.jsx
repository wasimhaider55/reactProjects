import {MoreVert} from "@material-ui/icons";
import { useState } from "react";
import { Users} from "../../dummyData";
import "./Post.css";

const Post = ({post}) => {
    const [like,setLike] = useState(post.like);
    const [isliked,setIsLiked] = useState(false);
    const likeHandler =()=>{
        setLike(isliked ? like -1 : like+1);
        setIsLiked(!isliked)
     }
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
                <img className="likeIcon" src="/assets/like.png" alt="" onClick={likeHandler} />
                <img className="likeIcon" src="/assets/heart.png" alt=""  onClick={likeHandler}/>
                <span className="postLikeCounter"> {like} people like it </span>
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

export default Post