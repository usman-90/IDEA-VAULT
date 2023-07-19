/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import ChatLeft from "./chatleft.jsx";
import ChatMid from "./chatmid.jsx";
import ChatRight from "./chatright.jsx";
import io from "socket.io-client";
import "./chatbox.css";
import { useQuery } from "@tanstack/react-query";
import { fetchChat, getMessages } from "../../functions/message.js";
import { getCookie } from "../../helpers/cookies.js";
import { formatTime } from "../../helpers/formatTime.js";

const socket = io.connect("http://localhost:3000");
const Chatbox = () => {
  const [status, setstatus] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const [openedChat, setopenedChat] = useState(1);
  const [currSec, setcurrSec] = useState("chats");
  const chatsData = useQuery(["chats"], fetchChat);
  const messageResult = useQuery(
    ["messages", { id: openedChat, level: 0 }],
    getMessages
  );
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to the server");
    });
  }, []);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const joinRoom = (roomid) => {
    socket.emit("join_room", roomid);
  };
  const chats = chatsData?.data;
  let arr;
  if (openedChat) {
    arr = chats?.arr?.filter((user) => {
      return user.other_user_id == openedChat;
    });
  }
  useEffect(() => {
    const roomid = parseInt(
      [JSON.parse(getCookie("logindata")).userId, openedChat].sort().join("")
    );
    setstatus(formatTime(arr ? arr[0]?.messagetime : ""));
    joinRoom(roomid);
  }, [openedChat]);

  if (chatsData.isLoading) {
    return <div>no</div>;
  }

  console.log("chat", chats);

  console.log(openedChat);

  const messages = messageResult?.data?.row ?? [];
  console.log(messages);

  return (
    <div style={{ height: "85vh",backgroundColor: "burlywood"}} className="m-0  p-0 chatcont_u d-flex ">
      {(!isMobile || (isMobile && currSec === "chats")) && (
        <ChatLeft
          row={chats.arr}
          setopenedChat={setopenedChat}
          isMobile={isMobile}
          setcurrSec={setcurrSec}
        />
      )}
      {(!isMobile || (isMobile && currSec === "messages")) && (
        <ChatMid
          user={arr}
          messages={messages ? messages : ""}
          isMobile={isMobile}
          openedChat={openedChat}
          setcurrSec={setcurrSec}
          socket={socket}
          status={status}
          setstatus={setstatus}
        />
      )}
      {(!isMobile || (isMobile && currSec === "chatinfo")) && (
        <ChatRight user={arr} currSec={currSec} setcurrSec={setcurrSec} isMobile={isMobile} />
      )}
    </div>
  );
};

export default Chatbox;
