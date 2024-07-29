import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function validateNouns() {
  try {
    await client.connect();
    const nouns = await client.db("German").collection("german_nouns").find({}).toArray();
    const schema = ["noun", "article", "sentence", "grammar", "translation"];

    const invalidNouns = nouns.filter(noun => {
      return !schema.every(field => noun.hasOwnProperty(field) && typeof noun[field] === 'string');
    });

    if (invalidNouns.length > 0) {
      console.log("Invalid nouns:");
      invalidNouns.forEach(noun => console.log(noun));
    } else {
      console.log("All nouns have the correct structure.");
    }

  } catch (e) {
    console.error('Error fetching nouns from the database:', e);
  } finally {
    await client.close();
  }
}

validateNouns().catch(console.dir);
