import { database_connection } from "../../db";
import { ObjectId } from "mongodb";

export const postUserInfo = async (req, res) => {
  try {
    const collections = await database_connection(["Users"]);
    const userCollection = collections[0];
    const user = await userCollection.updateOne(
      {
        _id: new ObjectId(req.user.userId),
      },
      {
        $set: {
          contactNo: req.body.contactNo,
          profession: req.body.profession,
          organizationType: req.body.organizationType,
          bio: req.body.bio,
          name: req.body.name,
          lastName: req.body.lastName,
          address: {
            country: req.body.country,
            city: req.body.city,
            state: req.body.state,
          },
          socialLinks: {
            facebookLink: req.body.facebookLink,
            twitterLink: req.body.twitterLink,
            linkedinLink: req.body.linkedinLink,
            instaLink: req.body.instaLink,
            otherLink: req.body.otherLink,
          },
          profileImage: req.body.profileImage,
        },
      },
    );

    res
      .json({ message: "User info updated successfully", user })
      .status(200)
      .end();
  } catch (error) {
    console.error("Error occurred while updating user info...\n", error);
  }

  //  const query1 = `INSERT INTO Address (country,city,state) SELECT $1,$2,$3 WHERE NOT EXISTS (SELECT 1 FROM Address where country = $1 AND city=$2 AND state=$3) RETURNING *`;
  //  const query2 = `UPDATE "User" SET contactNo=$1 ,  profession = $2 , organizationType = $3 , bio = $4, addressId = (SELECT addressId FROM Address WHERE country=$5 AND city=$6 AND state=$7) WHERE userId = $8;`;
};

export const getUserInfo = async (req, res) => {
  try {
    const collections = await database_connection(["Users"]);
    const userCollection = collections[0];
    const user = await userCollection.findOne(
      {
        _id: new ObjectId(req.params.userid),
      },
      {
        projection: {
          password: 0,
        },
      },
    );
    res.json({ message: "ok", user }).status(200).end();
  } catch (error) {
    console.error("Error occurred while fetching user info...\n", error);
  }

  //  const query = `select u.userId, u.userName, u.name, u.lastName , u.email, u.contactNo,u.createdAt,u.profession,u.organizationType,u.bio ,a.country,a.city,a.state,s.facebookLink,s.twitterLink,s.instaLink,s.linkedinLink,s.otherUrl,img.path FROM "User" u left join Address a ON u.addressId = a.addressId left join Image img on img.userId=u.userId left join Social s ON s.userId=u.userId WHERE u.userId = $1`;
};
