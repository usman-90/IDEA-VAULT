//import executeQuery from "../../db";
//
//export const setPreferences = async (req, res) => {
//  const query = `INSERT INTO Preferences (suggestIdeas,sendUpdatesAboutIdeaSupported,notifyOnComments,sendUpdateAboutYourIdea) SELECT $1,$2,$3,$4 WHERE NOT EXISTS (SELECT 1 FROM Preferences where suggestIdeas = $1 AND sendUpdatesAboutIdeaSupported=$2 AND notifyOnComments=$3 AND sendUpdateAboutYourIdea=$4) RETURNING *`;
//  const query2 = `UPDATE "User" set preferenceId=(select preferenceId from Preferences where suggestIdeas = $1 AND sendUpdatesAboutIdeaSupported=$2 AND notifyOnComments=$3 AND sendUpdateAboutYourIdea=$4) where userId=$5`;
//  const values = [
//    req.body.suggestIdeas,
//    req.body.sendUpdatesAboutIdeaSupported,
//    req.body.notifyOnComments,
//    req.body.sendUpdateAboutYourIdea,
//  ];
//  await Promise.all([
//    executeQuery(query, values),
//    executeQuery(query, [...values, req.user.userId]),
//  ]);
//
//  res
//    .json({
//      message: "ok",
//    })
//    .status(200)
//    .end();
//};
