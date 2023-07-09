const Message = ({ body, senderid }) => {
  let userid = 1;

  return (
    <div
      className={`${
        userid == senderid ? "justify-content-end" : "justify-content-start"
      } w-100 message_u `}
    >
      <div
        className={`${
          userid == senderid ? `senderradius_u ` : "recieverradius_u"
        } message_u_div`}
      >
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Message;
