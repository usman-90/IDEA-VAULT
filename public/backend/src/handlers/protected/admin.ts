import executeQuery from "../../db";

export const getAllUsers = async (req, res) => {
  const query = `SELECT userId, name,lastName,userName ,email,contactNo  FROM "User" LIMIT 30 OFFSET 30*$1`;
  const values = [req.params.level];
  const row = await executeQuery(query, values);
  res
    .json({
      data: row,
      message: "ok",
    })
    .status(200)
    .end();
};
export const getOneUser = async (req, res) => {
  const query = `select u.userId, u.userName, u.name, u.lastName , u.email, u.contactNo,u.createdAt,u.profession,u.organizationType,u.bio ,a.country,a.city,a.state,s.facebookLink,s.twitterLink,s.instaLink,s.linkedinLink,s.otherUrl FROM "User" u left join Address a ON u.addressId = a.addressId left join Social s ON s.userId=u.userId WHERE u.userId = $1`;
  const query2 = `select i.ideaTitle, i.ideaId from Idea i inner join "User" u ON i.userId=u.userId where u.userId=$1;`;
  const query3 = `select v.ideaId ,v.userId from Vote v inner join "User" u ON v.userId=u.userId where u.userId=$1;`;
  const values = [req.params.userId];

  const [basicinfo, ideainfo, votesinfo] = await Promise.all([
    executeQuery(query, values),
    executeQuery(query2, values),
    executeQuery(query3, values),
  ]);
  res
    .json({
      data: {
        basicinfo,
        ideainfo,
        votesinfo,
      },
      message: "ok",
    })
    .status(200)
    .end();
};

export const deleteUser = async (req, res) => {
  const query = `DELETE FROM "User" WHERE userId = $1`;
  const values = [req.params.userId];
  const row = await executeQuery(query, values);
  res
    .json({
      data: row,
      message: "ok",
    })
    .status(200)
    .end();
};

export const deleteReview = async (req,res) => {
    const query = `DELETE FROM Feedback WHERE feedbackId = $1`;
    const values = [req.params.feedbackId];
    const row = await executeQuery(query, values);
    res
      .json({
        data: row,
        message: "ok",
      })
      .status(200)
      .end();
}

