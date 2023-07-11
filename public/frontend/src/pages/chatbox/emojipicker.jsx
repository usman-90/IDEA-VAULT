import React from "react";
import EmojiPicker from "emoji-picker-react";

const MyEmojiPicker = ({ onEmojiSelect }) => {
  const handleEmojiSelect = (event, emojiObject) => {
    onEmojiSelect(emojiObject.emoji);
  };

  return (
    <div className="emoji">
      <EmojiPicker onEmojiClick={handleEmojiSelect} />
    </div>
  );
};

export default MyEmojiPicker;
