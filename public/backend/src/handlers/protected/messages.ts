import { database_connection } from "../../db";
import { ObjectId } from "mongodb";

export const createChatRoom = async (req, res) => {
  try {
    const collections = await database_connection(["Chatbox"]);
    const chatboxCollection = collections[0];
    const users = [req.user.userId, req.params.userId].sort();
    const chatbox = await chatboxCollection.insertOne({
      user1: users[0],
      user2: users[1],
      messages: [],
      messageCount: 0,
    });
    res.json({ chatbox, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while creating chat room...\n", error);
  }

  //  const query = `
  //  INSERT INTO Chatbox (user1, user2)
  //  VALUES ($1, $2)
  //  ON CONFLICT (user1, user2) DO NOTHING
  //`;
};
export const postMessage = async (data) => {
  try {
    const collections = await database_connection(["Chatbox"]);
    const chatboxCollection = collections[0];
    const message = await chatboxCollection.updateOne(
      { user1: data.user1, user2: data.user2 },
      {
        $push: {
          messages: {
            sender: data.sender,
            receiver: data.receiver,
            messageBody: data.messageBody,
            messageStatus: "delivered",
            messageTime: new Date(),
          },
        },
        $inc: { messageCount: 1 },
      },
    );
    console.log(message);
    return message;
  } catch (error) {
    console.error("Error occurred while posting message...\n", error);
    return false;
  }
};

export const saveSingleMessage = async (req, res) => {
  try {
    let users = [req.user.userId, req.params.userId].sort();
    let data = {
      user1: users[0],
      user2: users[1],
      sender: req.user.userId,
      receiver: req.params.userId,
      messageBody: req.body.messageBody,
    };
    const result = await postMessage(data);
    if (result) {
      res.json({ message: "ok", result }).status(200).end();
    } else {
      res.json({ message: "error" }).status(500).end();
    }
  } catch (error) {
    console.error("Error occurred while saving single message...\n", error);
  }
};

export const saveMessagesAtOnce = async (req, res) => {
  try {
    const messages = req.body.messages;
    if (messages.length === 0) {
      res.json({ message: "no messages" }).status(200).end();
      return;
    }
    const collections = await database_connection(["Chatbox"]);
    const chatboxCollection = collections[0];
    const result = await chatboxCollection.updateOne(
      { user1: messages[0].user1, user2: messages[0].user2 },
      {
        $push: {
          messages: {
            $each: messages.map((message) => ({
              sender: message.sender,
              receiver: message.receiver,
              messageBody: message.messageBody,
              messageStatus: message.status,
              messageTime: new Date(),
            })),
          },
        },
        $inc: { messageCount: messages.length },
      },
    );
    res.json({ message: "ok", result }).status(200).end();
  } catch (error) {
    console.error("Error occurred while saving messages...\n", error);
  }
};

export const getMessages = async (req, res) => {
  try {
    let limit = 20;
    let level = null;
    if (isNaN(parseInt(req.params.level))) {
      res
        .json({
          message: "Invalid level",
        })
        .status(400)
        .end();
      return;
    }
    level = parseInt(req.params.level);
    const collections = await database_connection(["Chatbox", "Users"]);
    let otherUserData = null;
    const chatboxCollection = collections[0];
    const data = [req.user.userId, req.params.userId].sort();
    const noOfMessages = await chatboxCollection.findOne(
      {
        user1: data[0],
        user2: data[1],
      },
      {
        projection: {
          messageCount: 1,
        },
      },
    );

    if (
      Math.ceil(noOfMessages?.messageCount / limit) < (level * limit) / limit ||
      !noOfMessages
    ) {
      if (!noOfMessages) {
        res
          .json({
            message: "Invalid User ID",
          })
          .status(400)
          .end();
        return;
      }
      res
        .json({
          message: "Invalid level",
        })
        .status(400)
        .end();
      return;
    }

    let idx = noOfMessages.messageCount - level * limit;
    if (idx < 0) {
      limit = noOfMessages.messageCount - (level - 1) * limit;
      idx = 0;
    }
    const chatbox = await chatboxCollection.findOne(
      {
        user1: data[0],
        user2: data[1],
      },
      {
        projection: {
          messages: {
            $slice: [idx, limit],
          },
        },
      },
    );

    if (level === 1) {
      const userCollection = collections[1];
      const userData = await userCollection.findOne(
        {
          _id: new ObjectId(req.params.userId),
        },
        { projection: { password: 0 } },
      );
      otherUserData = userData;
      res.json({ chatbox, otherUserData, message: "ok" }).status(200).end();
      return;
    }
    res.json({ chatbox, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting messages...\n", error);
  }

  //  const query = `SELECT * FROM Message WHERE user1 = $1 AND user2 = $2 LIMIT 20 OFFSET 2*$3`;
};

export const getChats = async (req, res) => {
  try {
    const collections = await database_connection(["Chatbox", "Users"]);
    const chatboxCollection = collections[0];
    const userCollection = collections[1];

    const chatbox = await chatboxCollection
      .find(
        {
          $or: [{ user1: req.user.userId }, { user2: req.user.userId }],
        },
        {
          projection: {
            user1: 1,
            user2: 1,
            messageCount: 1,
            messages: {
              $slice: [-1, 1],
            },
          },
        },
      )
      .toArray();
    let otherUserId: ObjectId[] = chatbox.map((chat) => {
      chat.otherUserId =
        req.user.userId === chat?.user1 ? chat?.user2 : chat?.user1;
      return new ObjectId(chat.otherUserId);
    });
    console.log(otherUserId);
    let users = await userCollection
      .find(
        {
          _id: {
            $in: otherUserId,
          },
        },
        {
          projection: {
            password: 0,
            visibleIdeas: 0,
            upvotedIdeas: 0,
            downvotedIdeas: 0,
          },
        },
      )
      .toArray();

    //    chatbox.forEach(async(chat) => {
    //      chat.otherUserId =
    //        chat.user1 === req.user.userId ? chat.user2 : chat.user1;
    //      chat.otherUserData = await userCollection.findOne(
    //        { _id: new ObjectId(chat.otherUserId) },
    //      );
    //    });
    //  const query1 = `SELECT u.userid AS other_user_id, u.name AS other_user_name,  m.messagebody, m.messagetime FROM chatbox AS c JOIN "User" AS u ON u.userid = CASE WHEN c.user1 = $1 THEN c.user2 ELSE c.user1 END LEFT JOIN message AS m ON (c.user1 = m.sender AND c.user2 = m.receiver) OR (c.user1 = m.receiver AND c.user2 = m.sender) WHERE (c.user1 = $1 OR c.user2 = $1) AND (  m.messagetime IS NULL OR m.messagetime = (SELECT MAX(messagetime) FROM message WHERE (sender = c.user1 AND receiver = c.user2) OR (sender = c.user2 AND receiver = c.user1) ) );

    res.json({ chatbox, users, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting chats...\n", error);
  }

  //
  //
  //`;
  //  const values = [req.user.userId];
  //  const row = await executeQuery(query1, values);
  //  const query2 = ` select path from image where userId = $1`;
  //  const path = await Promise.all(
  //    row.map(async (r) => {
  //      return await executeQuery(query2, [r.other_user_id]);
  //    }),
  //  );
  //  console.log(path);
  //  let arr = [];
  //  for (let i = 0; i < row.length; i++) {
  //    arr.push({ ...row[i], ...path[i] });
  //  }
  //  console.log(arr);
  //  res.json({ arr, message: "ok" }).status(200).end();
};
