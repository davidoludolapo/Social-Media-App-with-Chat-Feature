import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import Conversations from "../../components/conversations/Conversations";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import "./messenger.css";
import axios from "axios";
import { useRef } from "react";

function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState("");
  const { user } = useContext(AuthContext);
  const scrollRef = useRef()

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user?._id);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);
  console.log(messages);

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId:  currentChat._id
    }

    try {
      const res = await axios.post("/messages", message)
      setMessages([...messages, res.data])
      setNewMessage("")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])
  
  return (
    <>
      <Topbar />

      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversations conversation={c} currrentUser={user} />
              </div>
            ))}
          </div>
        </div>

        <div className="chatBox"> 
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                    <Message message={m} own={m.sender === user._id} />

                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmit" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat
              </span>
            )}
          </div>
        </div>

        <div className="chatOnline">
          <div className="chatBoxWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;