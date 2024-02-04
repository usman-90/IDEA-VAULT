import { database_connection } from "../../db";
import { ObjectId } from "mongodb";


export const setVisiblity = async (req, res) => {

try {
    const collections = await database_connection(["Users","Idea"])

    const userCollection = collections[0];
    const ideaCollection = collections[1];

const results = await Promise.all([
    userCollection.updateOne({
        _id:new ObjectId(req.body.userId)
        }, {
        $addToSet: {
            visibleIdeas: req.body.ideaId
        }
        }),
    ideaCollection.updateOne({
        _id:new ObjectId(req.body.ideaId)
        }, {
        $addToSet: {
            visibleTo: req.body.userId
        }
        })
    ])
    res.json({ message: "ok" ,results}).status(200).end();

} catch (error) {
    console.error("Error occurred while setting visiblity...\n", error);
}

};

export const checkVisiblity = async (req, res) => {

    try{
        const collections = await database_connection(["Idea"])
        const ideaCollection = collections[0];
        const idea = await ideaCollection.findOne({
            _id:new ObjectId(req.params.ideaid)
        },{
            projection:{
                visibleTo:1
            }
        });
        res.json({ idea, message: "ok" }).status(200).end();
    }
    catch (error) {
        console.error("Error occurred while checking visiblity...\n", error);
    }

//  const query = `SELECT userId FROM Visiblity WHERE ideaId =$1`;
};

export const checkSpecificVsiblity = async (req, res) => {

    try {
        const collections = await database_connection(["Users"])
        const userCollection = collections[0];
        const user = await userCollection.
            findOne({
            _id:new ObjectId(req.params.userid),
  visibleIdeas: { $in: [req.params.ideaid] }
});

    res.json({ user, message: "ok" }).status(200).end();
    }
    catch (error) {
        console.error("Error occurred while checking specific visiblity...\n", error);
    }

//  const query = `select userId,ideaId from visiblity where userId = $1 and ideaId = $2`;

};
