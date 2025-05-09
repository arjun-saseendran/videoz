import { useEffect } from "react";
import { ChatMessage } from "../ChatMessage/ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import {
  generateRandomMessageList,
  generateRandomNameList,
} from "../../utils/helper";
import { useState } from "react";

export const LiveChat = () => {
  const [liveMessages, setLiveMessages] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("poling");
      dispatch(
        addMessage({
          name: generateRandomNameList(),
          message: generateRandomMessageList(),
        }),
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="ml-2 w-full h-[600px] bg-slate-100 rounded-lg p-2 border flex flex-col-reverse border-black overflow-y-auto">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Arjun",
              message: liveMessages,
            }),
          );
          setLiveMessages("");
        }}
      >
        <input
          value={liveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
          className="px-2 w-80"
          type="text"
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};
