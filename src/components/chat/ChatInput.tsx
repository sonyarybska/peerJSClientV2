import { useContext, useState } from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ChatContext, RoomContext, UserContext } from "../../context";
import { Textarea } from "./Textarea";

export const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useContext(ChatContext);
  const { userId } = useContext(UserContext);
  const { roomId } = useContext(RoomContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message, roomId, userId);
          setMessage("");
        }}
        style={{ position: "relative" }}>
        <div>
          <Textarea onChange={(e) => setMessage(e.target.value)} value={message} />
          <IconButton type="submit" sx={{ position: "absolute", bottom: 12, right: 0 }}>
            <SendIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
};
