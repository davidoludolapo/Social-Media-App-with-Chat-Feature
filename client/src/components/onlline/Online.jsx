import React from 'react'
import "./online.css"

function Online({user}) {
  return (
    <li className="rightbarFriend">
            <div className="rightbarProImgContainer">
              <img
                src={user.profilePicture}
                alt=""
                className="rightbarProImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">{user.username}</span>
          </li>
  )
}

export default Online