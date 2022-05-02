import React from 'react'
import "./online.css"

function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="rightbarFriend">
            <div className="rightbarProImgContainer">
              <img
                src={ PF + user.profilePicture}
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