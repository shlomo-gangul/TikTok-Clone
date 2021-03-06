import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import "./VideoSideBar.css";

const VideoSideBar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(true);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteIcon
            style={{ color: "red" }}
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? parseInt(likes) : parseInt(likes) + 1}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{liked ? parseInt(messages) : parseInt(messages) + 1}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{liked ? parseInt(shares) : parseInt(shares) + 1}</p>
      </div>
    </div>
  );
};

export default VideoSideBar;
