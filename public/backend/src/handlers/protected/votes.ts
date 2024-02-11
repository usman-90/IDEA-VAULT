import { ObjectId } from "mongodb";
import { database_connection } from "../../db";

export const downVote = async (req, res) => {
  try {
    const collections = await database_connection(["Idea", "Users"]);
    const ideaCollection = collections[0];
    const userCollection = collections[1];
    const resutls = await Promise.all([
      ideaCollection.updateOne(
        {
          _id: new ObjectId(req.params.ideaid),
        },
        {
          $addToSet: {
            downVotes: req.user.userId,
          },
        },
      ),
      userCollection.updateOne(
        {
          _id: new ObjectId(req.user.userId),
        },
        {
          $addToSet: {
            downvotedIdeas: req.params.ideaid,
          },
        },
      ),
    ]);
    res.json({ message: "ok", resutls }).status(200).end();
  } catch (error) {
    console.error("Error occurred while downvoting...\n", error);
  }

  //  const query = `INSERT INTO Vote (userId, ideaId, voteType ) VALUES ($1,$2,'downVote') ON CONFLICT (ideaId,userId) DO UPDATE SET voteType = 'downVote'`;
};
export const upVote = async (req, res) => {
  try {
    const collections = await database_connection(["Idea", "Users"]);
    const ideaCollection = collections[0];
    const userCollection = collections[1];
    const results = await Promise.all([
      ideaCollection.updateOne(
        {
          _id: new ObjectId(req.params.ideaid),
        },
        {
          $addToSet: {
            upVotes: req.user.userId,
          },
        },
      ),
      userCollection.updateOne(
        {
          _id: new ObjectId(req.user.userId),
        },
        {
          $addToSet: {
            upvotedIdeas: req.params.ideaid,
          },
        },
      ),
    ]);
    res.json({ message: "ok", results }).status(200).end();
  } catch (error) {
    console.error("Error occurred while upvoting...\n", error);
  }
};
