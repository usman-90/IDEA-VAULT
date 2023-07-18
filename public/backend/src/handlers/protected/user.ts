import executeQuery from "../../db";

export const postUserInfo = async (req, res) => {
  const query1 = `INSERT INTO Address (country,city,state) SELECT $1,$2,$3 WHERE NOT EXISTS (SELECT 1 FROM Address where country = $1 AND city=$2 AND state=$3) RETURNING *`;
  const values1 = [req.body.country, req.body.city, req.body.state];
  const query2 = `UPDATE "User" SET contactNo=$1 ,  profession = $2 , organizationType = $3 , bio = $4, addressId = (SELECT addressId FROM Address WHERE country=$5 AND city=$6 AND state=$7) WHERE userId = $8;`;
  const values2 = [
    req.body.contactNo,
    req.body.profession,
    req.body.organizationType,
    req.body.bio,
    req.body.country,
    req.body.city,
    req.body.state,
    req.user.userId,
  ];

  const [addresRow, userRow] = await Promise.all([
    executeQuery(query1, values1),
    executeQuery(query2, values2),
  ]);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};

export const upDateUserInfo = async (req, res) => {
  const query1 = `INSERT INTO Address (country,city,state) SELECT $1,$2,$3 WHERE NOT EXISTS (SELECT 1 FROM Address where country = $1 AND city=$2 AND state=$3) RETURNING *`;
  const values1 = [req.body.country, req.body.city, req.body.state];
  const query2 = `UPDATE "User" SET contactNo=$1 ,  profession = $2 , organizationType = $3 , bio = $4,name = $5,lastName=$6, addressId = (SELECT addressId FROM Address WHERE country=$7 AND city=$8 AND state=$9) WHERE userId = $10`;
  const values2 = [
    req.body.contactNo,
    req.body.profession,
    req.body.organizationType,
    req.body.bio,
    req.body.name,
    req.body.lastName,
    req.body.country,
    req.body.city,
    req.body.state,
    req.user.userId,
  ];
  const query3 = `INSERT INTO Social (facebookLink,twitterLink, linkedinLink,instaLink,otherUrl,userId) VALUES ($1,$2,$3,$4,$5,$6) ON CONFLICT (userId) DO UPDATE SET facebookLink = $1, twitterLink = $2, linkedinLink = $3 , instaLink = $4 ,otherUrl = $5 `;
  const values3 = [
    req.body.facebookLink ?? "",
    req.body.twitterLink ?? "",
    req.body.linkedinLink ?? "",
    req.body.instaLink ?? "",
    req.body.otherLink ?? "",
    req.user.userId,
  ];
  if (req.body.type && req.body.path) {
    const query4 = `UPDATE Image SET path = $1 WHERE userId = $2 AND type=$3`;
    const values4 = [req.body.path, req.user.userId, req.body.type];
    const imagerow = await executeQuery(query4, values4);
    if (imagerow.rowCount === 0) {
      await executeQuery(
        `INSERT INTO Image (type,path,userId) values ($1,$2,$3)`,
        [req.body.type ?? "", req.body.path ?? "", req.user.userId]
      );
    }
  }

  const [addresRow, userRow, social] = await Promise.all([
    executeQuery(query1, values1),
    executeQuery(query2, values2),
    executeQuery(query3, values3),
  ]);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};

export const getUserInfo = async (req, res) => {
  const query = `select u.userId, u.userName, u.name, u.lastName , u.email, u.contactNo,u.createdAt,u.profession,u.organizationType,u.bio ,a.country,a.city,a.state,s.facebookLink,s.twitterLink,s.instaLink,s.linkedinLink,s.otherUrl,img.path FROM "User" u left join Address a ON u.addressId = a.addressId left join Image img on img.userId=u.userId left join Social s ON s.userId=u.userId WHERE u.userId = $1`;
  const values = [req.params.userid];

  const row = await executeQuery(query, values);
  res
    .json({
      row,
      message: "ok",
    })
    .status(200)
    .end();
};
