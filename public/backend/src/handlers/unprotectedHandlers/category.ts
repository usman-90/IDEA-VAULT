import { database_connection } from "../../db";

export const getCategories = async (req, res) => {
  try {
    const collections = await database_connection(["Category"]);
    const categoryCollection = collections[0];
    const categories = await categoryCollection.find().toArray();
    res.json({ categories, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting categories...\n", error);
  }
};
