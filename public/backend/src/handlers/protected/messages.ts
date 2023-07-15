import executeQuery from "../../db";

export const createChatRoom = async (req, res) => {
  const query = `INSERT INTO Chatbox (user1 ,user2) VALUES ($1,$2)`;
  const values = [req.user.userId, req.params.userId].sort();
  const row = await executeQuery(query, values);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};

export const postMessage = async (data) => {
  const users = [data.user1, data.user2].sort();
  let reciever;
  if (data.user1 == data.sender) {
    reciever = data.user2;
  } else {
    reciever = data.user1;
  }
  const query = `INSERT INTO Message (user1, user2,sender,receiver,messageBody,messageStatus) values ($1, $2,$3,$4,$5,'delivered') RETURNING *;`;
  const values = [
    users[0],
    users[1],
    data.senderid,
    reciever,
    data.messagebody,
  ];
  const row = await executeQuery(query, values);
  console.log("message posted",row);

};

export const getMessages = async (req, res) => {
  const data = [req.user.userId, req.params.userId].sort();
  const query = `SELECT * FROM Message WHERE user1 = $1 AND user2 = $2 LIMIT 20 OFFSET 2*$3`;
  const values = [data[0], data[1], req.params.level];
  const row = await executeQuery(query, values);
  res
    .json({
      row,
      message: "ok",
    })
    .status(200)
    .end();
};
export const getChats = async (req, res) => {
  const query1 = `SELECT
  u.userid AS other_user_id,
  u.name AS other_user_name,
  m.messagebody,
  m.messagetime
 FROM
  chatbox AS c
 JOIN
  "User" AS u ON u.userid = CASE WHEN c.user1 = $1 THEN c.user2 ELSE c.user1 END
 JOIN
  message AS m ON (c.user1 = m.sender AND c.user2 = m.receiver) OR (c.user1 = m.receiver AND c.user2 = m.sender)
 WHERE
  (c.user1 = $1 OR c.user2 = $1)
  AND m.messagetime = (
    SELECT MAX(messagetime)
    FROM message
    WHERE (sender = c.user1 AND receiver = c.user2) OR (sender = c.user2 AND receiver = c.user1)
  )

`;
  const values = [req.user.userId];
  const row = await executeQuery(query1, values);

  res.json({ row, message: "ok" }).status(200).end();
};
