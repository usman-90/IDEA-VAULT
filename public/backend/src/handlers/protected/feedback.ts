import { database_connection } from "../../db";

export const postFeedbacks = async (req, res) => {

    try {
        const collections = await database_connection(["Feedback"]);
        const feedbackCollection = collections[0];
        const feedback = await feedbackCollection.insertOne({
            userId: req.user.userId,
            reviewBody: req.body.reviewBody,
            starCount: req.body.starCount,
            date: new Date(),
        });
        res.json({ feedback, message: "ok" }).status(200).end();
    }
    catch (error) {
        console.error("Error occurred while getting categories...\n", error);
    }


//  const query = `INSERT INTO feedback (userId, reviewBody, starCount ) VALUES ($1,$2, $3)`;
};
