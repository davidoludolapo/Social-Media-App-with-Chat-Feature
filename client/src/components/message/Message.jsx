import React from 'react'
import "./message.css"
import { format } from "timeago.js";

function Message({message, own}) {
  return (
    <div className={own ? "message own" : "message" }>
        <div className="messageTop">
            <img className='messageImg' src="https://i.ibb.co/7Q3mMxn/pexels-photo-1021693-removebg-preview.png" alt="" />
            <p className='messageText'>{message.text}</p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}

export default Message