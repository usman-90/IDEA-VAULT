import executeQuery from "../../db";
export const postIdea = async (req, res) => {
  const query = `INSERT INTO Idea (ideaTitle, requiredAmount, ideaTagline, tags, cardDescription, userId, categoryId, visiblity, detailedDescription, youtubeId)
  VALUES ($1, $2, $3, $4, $5, $6, (SELECT categoryId FROM Category WHERE categoryName = $7), $8, $9, $10)
  RETURNING ideaId;
  `;
  const values = [
    req.body.ideaTitle,
    req.body.requiredAmount,
    req.body.ideaTagline,
    req.body.tags,
    req.body.cardDescription,
    req.user.userId,
    req.body.categoryName,
    req.body.visiblity,
    req.body.detailedDescription,
    req.body.youtubeId,
  ];
  const row = await executeQuery(query, values);
  console.log(row);
  await Promise.all(
    req.body.faqs.map(async (faq) => {
      await executeQuery(
        `INSERT INTO Faq (question, answer, ideaId) VALUES ($1, $2, $3)`,
        [faq.question, faq.ans, row[0].ideaid]
      );
    })
  );
  await Promise.all(
    req.body.images.map(async (img) => {
      await executeQuery(
        `INSERT INTO Image (type,path,ideaId) VALUES ($1,$2,$3)`,
        [img.type, img.path, row[0].ideaid]
      );
    })
  );
  await executeQuery(
    `INSERT INTO Social (facebookLink,twitterLink,instaLink,linkedinLink,otherUrl,ideaId) VALUES ($1,$2,$3,$4,$5,$6)`,
    [
      req.body.facebookLink ?? "",
      req.body.twitterLink ?? "",
      req.body.linkedinLink ?? "",
      req.body.instaLink ?? "",
      req.body.otherLink ?? "",
      row[0].ideaid,
    ]
  );
  await executeQuery(`insert into visiblity (userid,ideaid) values ($1,$2)`, [
    req.user.userId,
    row[0].ideaid,
  ]);
  res
    .json({
      message: "ok",
      row,
    })
    .status(200)
    .end();
};

export const postIdeaUpdates = async (req, res) => {
  const query = `INSERT INTO Updates (updateDescription,ideaId) VALUES ($1,$2)`;
  const values = [req.body.updateDescription, req.params.ideaid];
  const row = await executeQuery(query, values);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};

export const deleteIdea = async (req, res) => {
  const query = `DELETE FROM Idea WHERE ideaId = $1`;
  const values = [req.params.ideaId];
  const row = await executeQuery(query, values);
  res
    .json({
      data: row,
      message: "ok",
    })
    .status(200)
    .end();
};
