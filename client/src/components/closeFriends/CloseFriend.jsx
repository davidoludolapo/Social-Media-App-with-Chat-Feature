import React from 'react'
import "./closefriend.css"

function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
    <img src={user.profilePicture} alt="" className="sidebarfriendImg" />
    <span className="sidebarFriendName">{user.username}</span>
  </li>
  )
}

export default CloseFriend