import { database_connection } from "../../db";
import { ObjectId } from "mongodb";


export const postIdea = async (req, res) => {

    try{
    const collections = await database_connection(["Idea","Faq"]);
    const ideaCollection = collections[0];
    const faqCollection = collections[1];
    const idea = await ideaCollection.insertOne({
      ideaTitle: req.body.ideaTitle,
      requiredAmount: req.body.requiredAmount,
      ideaTagline: req.body.ideaTagline,
      tags: req.body.tags,
      cardDescription: req.body.cardDescription,
      userId: req.user.userId,
      categoryId: req.body.categoryId,
      visiblity: req.body.visiblity,
      detailedDescription: req.body.detailedDescription,
      youtubeId: req.body.youtubeId,
      facebookLink: req.body.facebookLink,
      twitterLink: req.body.twitterLink,
      linkedinLink: req.body.linkedinLink,
      instaLink: req.body.instaLink,
      otherLink: req.body.otherLink,
        postedAt: new Date(),
        cardImage: req.body.cardImage,
        otherImages: req.body.otherImages,
        visibleTo:[],
        downVotes:0,
        upVotes:0,
    });

    if (!idea) {
      res.json({ message: "Idea not created" }).status(401).end();
      return;
    }
    req.body.faqs.forEach(async (faq) => {
        await faqCollection.insertOne({
            question: faq.question,
            answer: faq.ans,
            ideaId: idea.insertedId.toString(),
        });
        }
    );
    res.json({ message: "Idea created" ,idea}).status(200).end();
    }
    catch (error) {
        console.error("Error occurred while posting idea...\n", error);
    }

//  const query = `INSERT INTO Idea (ideaTitle, requiredAmount, ideaTagline, tags, cardDescription, userId, categoryId, visiblity, detailedDescription, youtubeId)
//  VALUES ($1, $2, $3, $4, $5, $6, (SELECT categoryId FROM Category WHERE categoryName = $7), $8, $9, $10)
//  RETURNING ideaId;
//  `;
//        `INSERT INTO Faq (question, answer, ideaId) VALUES ($1, $2, $3)`,
//        `INSERT INTO Image (type,path,ideaId) VALUES ($1,$2,$3)`,
//    `INSERT INTO Social (facebookLink,twitterLink,instaLink,linkedinLink,otherUrl,ideaId) VALUES ($1,$2,$3,$4,$5,$6)`,
// `insert into visiblity (userid,ideaid) values ($1,$2)`
};

export const postIdeaUpdates = async (req, res) => {

    try {
        const collections = await database_connection(["Update"]);
        const updateCollection = collections[0];
        const update = await updateCollection.insertOne({
            updateDescription: req.body.updateDescription,
            ideaId: req.params.ideaid,
        });
        res.json({ message: "Idea update created",update }).status(200).end();
    } catch (error) {
        console.error("Error occurred while posting idea update...\n", error);
    }


//  const query = `INSERT INTO Updates (updateDescription,ideaId) VALUES ($1,$2)`;
};

export const deleteIdea = async (req, res) => {

    try {
        const collections = await database_connection(["Idea","Faq","Update","Comment","Reply"]);
        const ideaCollection = collections[0];
        const faqCollection = collections[1];
        const updateCollection = collections[2];
        const commentCollection = collections[3];
        const replyCollection = collections[4];
        const results = await Promise.all([
            ideaCollection.deleteOne({ _id: new ObjectId(req.params.ideaid) }),
            faqCollection.deleteMany({ ideaId: req.params.ideaid }),
            updateCollection.deleteMany({ ideaId: req.params.ideaid }),
            commentCollection.deleteMany({ ideaId: req.params.ideaid }),
            replyCollection.deleteMany({ ideaId: req.params.ideaid }),
        ]);
        if (!results) {
            res.json({ message: "Idea not deleted" }).status(401).end();
            return;
        }
        res.json({ message: "Idea deleted",results }).status(200).end();
    }
    catch (error) {
        console.error("Error occurred while deleting idea...\n", error);
    }
};
