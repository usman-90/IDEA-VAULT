import { database_connection } from "../../db";
import { ObjectId } from "mongodb";


export const postComments = async (req, res) => {

    try {
        const collections = await database_connection(["Comment"]);
        const commentCollection = collections[0];
        const comment = await commentCollection.insertOne({
            userId: req.user.userId,
            ideaId: req.params.ideaid,
            content: req.body.content,
            lieksCount: 0,
            dislikesCount: 0,
        });
        res.json({ message: "ok" ,comment}).status(200).end();
    } catch (error) {
        console.error("Error occurred while posting comments...\n", error);
    }

//  const query = `INSERT INTO Comments (userId, ideaId , content) values ($1, $2,$3)`;
};
export const likeComment = async (req, res) => {

    try {
        const collections = await database_connection(["Comment"]);
        const commentCollection = collections[0];
        const comment = await commentCollection.updateOne({
            _id:new ObjectId(req.params.commentid)
        },
        {
            $inc: { likesCount: 1 },
        });
        res.json({ message: "ok" ,comment}).status(200).end();
    } catch (error) {
        console.error("Error occurred while liking comments...\n", error);
    }
//  const query = `UPDATE Comments SET likesCount = likesCount + 1 WHERE commentId = $1`;
};

export const dislikeComment = async (req, res) => {

    try {
        const collections = await database_connection(["Comment"]);
        const commentCollection = collections[0];
        const comment = await commentCollection.updateOne({
            _id:new ObjectId(req.params.commentid)
        },
        {
            $inc: { dislikesCount: 1 },
        });
        res.json({ message: "ok" ,comment}).status(200).end();
    } catch (error) {
        console.error("Error occurred while disliking comments...\n", error);
    }


//  const query = `UPDATE Comments SET dislikeCount = dislikesCount + 1 WHERE commentId = $1`;
};

export const postReply = async (req, res) => {

    try {
        const collections = await database_connection(["Reply"]);
        const replyCollection = collections[0];
        const reply = await replyCollection.insertOne({
            commentId: req.params.commentid,
            userId: req.user.userId,
            replyContent: req.body.replyContent,
        });
        res.json({ message: "ok" ,reply}).status(200).end();
    }
    catch (error) {
        console.error("Error occurred while posting reply...\n", error);
    }

//  const query = `INSERT INTO Reply (commentId ,userId, replyContent) VALUES ($1,$2,$3)`;
};

export const deleteComment = async (req, res) => {

    try {
        const collections = await database_connection(["Comment"]);
        const commentCollection = collections[0];
        const comment = await commentCollection.deleteOne({
            _id:new ObjectId(req.params.commentid)
        });
        res.json({ message: "ok" ,comment}).status(200).end();
    } catch (error) {
        console.error("Error occurred while deleting comments...\n", error);
    }

//    const query = `DELETE FROM Comments WHERE commentId = $1`;
};
