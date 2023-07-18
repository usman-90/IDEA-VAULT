import executeQuery from "../../db";

export const getAllIdeas = async (req, res) => {
  const query = "SELECT ideaTitle , cardDescription, postedAt,ideaId FROM Idea";
  const row = await executeQuery(query, []);
  res
    .json({
      data: row,
      message: "ok",
    })
    .status(200)
    .end();
};
export const getOneIdea = async (req, res) => {
  const id = req.params.ideaid;
  const query = `SELECT i.ideaTitle, i.visiblity,i.ideaTagline,i.requiredAmount, u.name ,u.userId, a.country , a.city ,a.state ,img.path, i.detailedDescription , COUNT(CASE WHEN v.voteType = 'upVote' AND v.ideaId = i.ideaId THEN 1 ELSE NULL END) AS total_upVotes FROM Idea i inner JOIN "User" u ON i.userId = u.userId left JOIN Address a on a.addressId = u.addressId left join image img on i.userid=img.userid left JOIN Vote v on i.ideaId = v.ideaId WHERE i.ideaId = $1 GROUP BY i.ideaTitle ,i.visiblity,i.ideaTagline,i.requiredAmount,u.name,a.country,u.userId,a.city,a.state,i.detailedDescription,img.path`;
  const query2 = `SELECT path , ideaTitle FROM Image img inner join Idea i on img.ideaId=i.ideaId WHERE img.ideaId= $1;`;
  const values = [id];
  const [idearow, ideaimagesrow] = await Promise.all([
    executeQuery(query, values),
    executeQuery(query2, values),
  ]);
  res
    .json({
      data: {
        idearow,
        ideaimagesrow,
      },
      message: "ok",
    })
    .status(200)
    .end();
};
export const getIdeafaqs = async (req, res) => {
  const id = req.params.ideaid;
  console.log(id);
  const query =
    "SELECT i.ideaTitle,f.question,f.answer  FROM Idea i INNER JOIN Faq f on i.ideaId=f.ideaId WHERE i.ideaId = $1";
  const values = [id];
  const row = await executeQuery(query, values);

  res.json({
    data: row,
    message: "ok",
  });
  res.status(200);
  res.end();
};

export const getIdeaUpdates = async (req, res) => {
  const query = `SELECT u.updateTitle , u.updateTime, u.updateDescription FROM updates u INNER JOIN Idea i ON i.ideaId=u.ideaId WHERE i.ideaId = $1`;

  const row = await executeQuery(query, [req.params.ideaid]);
  res
    .json({
      data: row,
      message: "ok",
    })
    .status(200)
    .end();
};

export const getIdeaByCategory = async (req, res) => {
  const query = `SELECT i.ideaTitle,i.ideaId, i.cardDescription, i.postedAt ,i.categoryId FROM Idea i INNER JOIN Category c ON i.categoryId = c.categoryId WHERE c.categoryId = $1;`;
  const row = await executeQuery(query, [req.params.id]);
  res
    .json({
      data: row,
      message: "ok",
    })
    .status(200)
    .end();
};
export const getCommentsAndReplies = async (req, res) => {
  const query = `select c.commentid,i.ideaId,c.content,c.commentedAt,c.likescount,c.dislikecount,img.path,u.name from comments c inner join "User" u on u.userId=c.userId inner join Idea i on i.ideaid=c.ideaid left join image img on img.userId=c.userId where c.ideaid=$1`;
  const query2 = `select r.replyid,r.replycontent,r.replytime,r.userid,c.commentId,u.name,i.path from Reply r inner join "User" u on u.userId=r.userId left join image i on r.userId=i.userId inner join comments c on c.commentId=r.commentId where c.ideaId = $1;`;
  const values = [req.params.id];
  const [comments, replies] = await Promise.all([
    executeQuery(query, values),
    executeQuery(query2, values),
  ]);

  res
    .json({
      comments,
      replies,
      message: "ok",
    })
    .status(200)
    .end();
};
export const getVotes = async (req, res) => {
  const query = `SELECT COUNT(CASE WHEN voteType = 'upVote' AND ideaId = $1 THEN 1 ELSE NULL END) AS total_upVotes , COUNT(CASE WHEN voteType = 'downVote' AND ideaId = $1 THEN 1 ELSE NULL END) AS total_downVotes FROM Vote WHERE ideaId = $1;`;
  const values = [req.params.ideaid];
  const row = await executeQuery(query, values);
  res
    .json({
      data: row,
      message: "ok",
    })
    .status(200)
    .end();
};

export const getIdeaByUserId = async (req, res) => {
  const query = `select userId,ideaId, cardDescription,ideaTitle, ideaTagline, requiredAmount, postedAt from idea where idea.userId=$1`;
  const value = [req.params.userid];
  const row = await executeQuery(query, value);
  res
    .json({
      message: "ok",
      row,
    })
    .status(200)
    .end();
};
