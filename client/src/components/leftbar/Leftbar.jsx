import React from 'react'
import "./leftbar.css"
import {Bookmark, Chat, Event, Group, HelpOutline, RssFeed, School, VideoCall, WorkOutline} from "@material-ui/icons"
import { Users } from "../../dummyData";
import CloseFriend from '../closeFriends/CloseFriend';
function Leftbar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideoCall className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendist">
         {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
         ))}
         
        </ul>
      </div>
    </div>
  )
}

export default Leftbar
