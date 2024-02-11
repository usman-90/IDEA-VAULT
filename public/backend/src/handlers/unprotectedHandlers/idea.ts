import { database_connection } from "../../db";
import { ObjectId } from "mongodb";

export const getAllIdeas = async (req, res) => {
  try {
    let totalIdeas = 0;
    const pageNo = req.query.pageNo;
    if (isNaN(pageNo)) {
      res.json({ message: "Invalid page number" }).status(400).end();
      return;
    }

    const limit = 10;
    const skip = (pageNo - 1) * limit;
    const collections = await database_connection(["Idea"]);
    const ideaCollection = collections[0];
    const ideas = await ideaCollection
      .aggregate([
        { $sort: { date: -1 } },
        { $skip: skip },
        { $limit: limit },
        {
          $project: {
            noOfDownvotes: { $size: "$downVotes" },
            noOfUpVotes: { $size: "$upVotes" },
            _id: 1,
            ideaTitle: 1,
            requiredAmount: 1,
            ideaTagline: 1,
            tags: 1,
            cardDescription: 1,
            userId: 1,
            categoryId: 1,
            visiblity: 1,
            detailedDescription: 1,
            youtubeId: 1,
            facebookLink: 1,
            twitterLink: 1,
            linkedinLink: 1,
            instaLink: 1,
            otherLink: 1,
            postedAt: 1,
            cardImage: 1,
            otherImages: 1,
          },
        },
      ])
      .toArray();
    res.json({ ideas, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting ideas...\n", error);
  }

  //    "SELECT i.ideaTitle , i.cardDescription, i.postedAt,i.ideaId ,img.path FROM Idea i left join Image img on i.ideaid=img.ideaid where img.type='cardimage'";
};

export const getOneIdea = async (req, res) => {
  // new : user, idea (address merged in user and image merged in idea)
  try {
    const collections = await database_connection(["Idea", "Users"]);
    const ideaCollection = collections[0];
    const idea = await ideaCollection.findOne({ _id:new ObjectId (req.params.ideaid) });
    if (!idea){
        res.json({ message: "Idea not found" }).status(400).end();
        return;
    }
    console.log(idea.userId)
    const userCollection = collections[1];
    const user = await userCollection.findOne({ _id:new ObjectId (idea.userId) },{
        projection: {
            password: 0,
            upvotedIdeas:0,
            downvotedIdeas:0,
        },
        
    }
                                             );
    res.json({ idea, user, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting idea...\n", error);
  }

  // idea, user, address, image

  //   `SELECT i.ideaTitle, i.visiblity,i.ideaTagline,i.requiredAmount, u.name ,u.userId, a.country , a.city ,a.state ,img.path, i.detailedDescription , COUNT(CASE WHEN v.voteType = 'upVote' AND v.ideaId = i.ideaId THEN 1 ELSE NULL END) AS total_upVotes FROM Idea i inner JOIN "User" u ON i.userId = u.userId left JOIN Address a on a.addressId = u.addressId left join image img on i.userid=img.userid left JOIN Vote v on i.ideaId = v.ideaId WHERE i.ideaId = $1 GROUP BY i.ideaTitle ,i.visiblity,i.ideaTagline,i.requiredAmount,u.name,a.country,u.userId,a.city,a.state,i.detailedDescription,img.path`;
  // `SELECT path , ideaTitle FROM Image img inner join Idea i on img.ideaId=i.ideaId WHERE img.ideaId= $1`;
};
export const getIdeafaqs = async (req, res) => {
  try {
    const collections = await database_connection(["Faq"]);
    const faqCollection = collections[0];
    const faqs = await faqCollection
      .find({ ideaId: req.params.ideaid })
      .toArray();
    res.json({ faqs, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting faqs...\n", error);
  }
  // "SELECT i.ideaTitle,f.question,f.answer  FROM Idea i INNER JOIN Faq f on i.ideaId=f.ideaId WHERE i.ideaId = $1";
};

export const getIdeaUpdates = async (req, res) => {
  try {
    const collections = await database_connection(["Update"]);
    const updateCollection = collections[0];
    const updates = await updateCollection
      .find({ ideaId: req.params.ideaid })
      .toArray();
    res.json({ updates, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting updates...\n", error);
  }
};

export const getIdeaByCategory = async (req, res) => {
  try {
    const collections = await database_connection(["Idea"]);
    const ideaCollection = collections[0];
    const ideas = await ideaCollection
      .find({ categoryId: req.params.id })
      .toArray();
    res.json({ ideas, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting ideas by category...\n", error);
  }

  //  `SELECT i.ideaTitle, i.ideaId,i.cardDescription, i.postedAt ,i.categoryId FROM Idea i INNER JOIN Category c ON i.categoryId = c.categoryId WHERE c.categoryId = $1;`;
};
export const getCommentsAndReplies = async (req, res) => {
  try {
    let setNo = req.query.setNo;
    let limit = 10;
    let skip = (setNo - 1) * limit;
    const collections = await database_connection(["Comment", "Reply"]);
    const commentCollection = collections[0];
    const comments = await commentCollection
      .aggregate([
        { $match: { ideaId: req.params.id } },
        { $sort: { commentedAt: -1 } },
        { $skip: skip },
        { $limit: limit },
      ])
      .toArray();
    const replyCollection = collections[1];
    comments.forEach(async (comment) => {
      comment.replies = await replyCollection
        .find({ commentId: comment.commentId })
        .toArray();
    });

    res.json({ comments, message: "ok" }).status(200).end();
  } catch (error) {
    console.error(
      "Error occurred while getting comments and replies...\n",
      error,
    );
  }

  //  const query = `select c.commentid,i.ideaId,c.content,c.commentedAt,c.likescount,c.dislikecount,img.path,u.name from comments c inner join "User" u on u.userId=c.userId inner join Idea i on i.ideaid=c.ideaid left join image img on img.userId=c.userId where c.ideaid=$1`;
  //  const query2 = `select r.replyid,r.replycontent,r.replytime,r.userid,c.commentId,u.name,i.path from Reply r inner join "User" u on u.userId=r.userId left join image i on r.userId=i.userId inner join comments c on c.commentId=r.commentId where c.ideaId = $1;`;
};

export const getIdeaByUserId = async (req, res) => {
  try {
    const collections = await database_connection(["Idea"]);
    const ideaCollection = collections[0];
    const ideas = await ideaCollection
      .find({ userId: req.params.userid })
      .toArray();
    res.json({ ideas, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting ideas by user id...\n", error);
  }

  //  const query = `select i.userId,i.ideaId, i.cardDescription,i.ideaTitle, i.ideaTagline, i.requiredAmount, i.postedAt ,img.path from idea i left join image img on img.ideaid = i.ideaid where i.userId=$1 and img.type='cardimage'`;
};
