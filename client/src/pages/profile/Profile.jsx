import React from "react";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />

        <div className="profileRight">
          <div className="profileRightTop">
          <div className="profileCover">

              <img className="proCoverImg" src="/assets/post/3.jpeg" alt="" />
              <img className="proUserImg" src="/assets/post/7.jpeg" alt="" />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">Dolapo Odesola</h4>
              <span className="profileInfoDesc">Howdy</span>
          </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
