import { database_connection } from "../../db";
import { deleteIdeaById } from "./idea";
import { ObjectId } from "mongodb";

export const getAllUsers = async (req, res) => {
  try {
    let limit = 30;
    let skip = (req.params.level - 1) * limit;
    const collections = await database_connection(["Users"]);
    const userCollection = collections[0];
    const users = await userCollection
      .aggregate([
        { $sort: { date: -1 } },
        { $skip: skip },
        { $limit: limit },
        { $project: { password: 0 } },
      ])
      .toArray();
    res
      .json({
        data: users,
        message: "ok",
      })
      .status(200)
      .end();
  } catch (err) {
    res
      .json({
        data: [],
        message: "error",
      })
      .status(500)
      .end();
    console.log(err);
  }

  //  const query = `SELECT userId, name,lastName,userName ,email,contactNo  FROM "User" LIMIT 30 OFFSET 30*$1`;
};
export const getOneUser = async (req: any, res: any) => {
  try {
    const collections = await database_connection(["Users", "Idea"]);
    const userCollection = collections[0];
    const ideaCollection = collections[1];
    const user = await userCollection.findOne(
      { _id: new ObjectId(req.params.userId) },
      { projection: { _id: 0, password: 0 } },
    );
    const ideas = await ideaCollection
      .find(
        { userId: req.params.userId },
        { projection: { _id: 0, password: 0 } },
      )
      .toArray();
    res
      .json({
        data: user,
        ideas: ideas,
        message: "ok",
      })
      .status(200)
      .end();
  } catch (err) {
    res
      .json({
        data: [],
        message: "error",
      })
      .status(500)
      .end();
    console.log(err);
  }

  //  const query = `select u.userId, u.userName, u.name, u.lastName , u.email, u.contactNo,u.createdAt,u.profession,u.organizationType,u.bio ,a.country,a.city,a.state,s.facebookLink,s.twitterLink,s.instaLink,s.linkedinLink,s.otherUrl,img.path FROM "User" u left join Address a ON u.addressId = a.addressId left join Image img on img.userId=u.userId left join Social s ON s.userId=u.userId WHERE u.userId = $1`;
  //  const query2 = `select i.ideaTitle, i.ideaId from Idea i inner join "User" u ON i.userId=u.userId where u.userId=$1;`;
  //  const query3 = `select v.ideaId ,v.userId from Vote v inner join "User" u ON v.userId=u.userId where u.userId=$1;`;
};

export const deleteUser = async (req, res) => {
  try {
    const collections = await database_connection([
      "Users",
      "Idea",
      "Feedback",
    ]);
    const userCollection = collections[0];
    const ideaCollection = collections[1];
    const feedbackCollection = collections[2];
    const ideas = await ideaCollection
      .find({ userId: req.params.userId })
      .toArray();
    ideas.forEach(async (idea) => {
      const isItDeleted = await deleteIdeaById(idea._id.toString());
      if (!isItDeleted) {
        res.json({ message: "Idea not deleted" }).status(401).end();
        return;
      }
    });
    const userPromise = userCollection.deleteOne({
      _id: new ObjectId(req.params.userId),
    });
    const feedbacksPromise = feedbackCollection.deleteMany({
      userId: req.params.userId,
    });
    await Promise.all([userPromise, feedbacksPromise]);

    res
      .json({
        data: [],
        message: "ok",
      })
      .status(200)
      .end();
  } catch (err) {
    res
      .json({
        data: [],
        message: "error",
      })
      .status(500)
      .end();
    console.log(err);
  }
};

export const deleteReview = async (req, res) => {
  try {
    const collections = await database_connection(["Feedback"]);
    const feedbackCollection = collections[0];
    const feedback = await feedbackCollection.deleteOne({
      _id: new ObjectId(req.params.feedbackId),
    });
    res
      .json({
        data: feedback,
        message: "ok",
      })
      .status(200)
      .end();
  } catch (err) {
    res
      .json({
        data: [],
        message: "error",
      })
      .status(500)
      .end();
    console.log(err);
  }
};

export const showReview = async (req, res) => {
  try {
    const collections = await database_connection(["Feedback"]);
    const feedbackCollection = collections[0];
    const feedback = await feedbackCollection.updateOne(
      { _id: new ObjectId(req.params.feedbackId) },
      { $set: { shown: true } },
    );
    res
      .json({
        data: feedback,
        message: "ok",
      })
      .status(200)
      .end();
  } catch (err) {
    res
      .json({
        data: [],
        message: "error",
      })
      .status(500)
      .end();
    console.log(err);
  }
};
