import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;
const client = new MongoClient(uri);

async function removeDuplicates() {
  try {
    await client.connect();
    const db = client.db('German');
    
    // Find duplicates
    const duplicates = await db.collection('german_nouns').aggregate([
      {
        $group: {
          _id: { noun: "$noun" },
          count: { $sum: 1 },
          docs: { $push: "$_id" }
        }
      },
      {
        $match: {
          count: { $gt: 1 }
        }
      }
    ]).toArray();

    console.log(`Number of duplicate groups found: ${duplicates.length}`);

    // Remove duplicates
    for (const group of duplicates) {
      const ids = group.docs;
      // Remove all but one document
      ids.shift(); // Remove the first ID from the array (this one will be kept)
      if (ids.length > 0) {
        await db.collection('german_nouns').deleteMany({ _id: { $in: ids } });
        console.log(`Removed ${ids.length} duplicates for noun group ${group._id.noun}`);
      }
    }

    console.log("Duplicates removed");

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

removeDuplicates();
