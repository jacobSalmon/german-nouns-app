import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// MongoDB URI
const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function updateNouns() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");

    const collection = client.db("German").collection("german_nouns");

    // Find entries where the noun includes the article
    const entriesToUpdate = await collection.find({
      $or: [
        { noun: { $regex: '^Der ' } },
        { noun: { $regex: '^Die ' } },
        { noun: { $regex: '^Das ' } }
      ]
    }).toArray();

    console.log(`Found ${entriesToUpdate.length} entries to update.`);

    let updatedCount = 0;

    for (const entry of entriesToUpdate) {
      const updatedNoun = entry.noun.replace(/^(Der|Die|Das) /, '');
      const result = await collection.updateOne(
        { _id: entry._id },
        { $set: { noun: updatedNoun } }
      );

      if (result.modifiedCount === 1) {
        updatedCount++;
        console.log(`Updated entry: ${entry.noun} to ${updatedNoun}`);
      }
    }

    console.log(`Successfully updated ${updatedCount} entries.`);

  } catch (e) {
    console.error('Error updating nouns:', e);
  } finally {
    // Close the connection
    await client.close();
    console.log("Connection closed.");
  }
}

// Run the function
updateNouns().catch(console.dir);
