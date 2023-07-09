const ChatSideInfo = ({ field, value }) => {
  return (
    <div className="d-flex justify-content-between px-2 align-items-center ">
      <p className="p-2 px-3  m-0">{field}</p>
      <p className="p-2 px-3 fs-5 fw-bold m-0">{value}</p>
    </div>
  );
};

export default ChatSideInfo;
