import executeQuery from "../../db";

export const getAllIdeas = async (req, res) => {
  const query = "SELECT ideaTitle , cardDescription, postedAt FROM Idea";
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
    const query = "SELECT "
}