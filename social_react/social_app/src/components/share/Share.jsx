import React from 'react';
import "./Share.css"
import {EmojiEmotions, Label,Room , PermMedia} from "@material-ui/icons";

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                <input placeholder="What's in your mind Sana Malik? " className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                       <PermMedia htmlColor='tomato' className='shareIcon' />
                        <span className="shareOptionText">Video or Photo</span>
                    </div>
                    <div className="shareOption">
                       <Label  htmlColor='blue' className='shareIcon' />
                        <span className="shareOptionText">Tags</span>
                    </div>
                    <div className="shareOption">
                       <Room  htmlColor='green' className='shareIcon' />
                        <span className="shareOptionText">Locations</span>
                    </div>
                    <div className="shareOption">
                       <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                        <span className="shareOptionText">Feeling</span>
                    </div>
                </div>
                <button className="shareButton"> share </button>
            </div>
        </div>
    </div>
  )
}

export default Share