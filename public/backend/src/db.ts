import { MongoClient, ServerApiVersion } from "mongodb";

const url = process.env.DATABASE_URL;
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    deprecationErrors: true,
  },
});
export async function database_connection(ideaVaultCollections: string[]) {
  try {
    await client.connect();
    const db = client.db("IdeaVault");
    const collections = ideaVaultCollections.map((element) => {
      return db.collection(element);
    });

    return collections;
  } catch (error) {
    console.error(
      "Error occurred while connecting to MongoDB Atlas...\n",
      error,
    );
  }
}
