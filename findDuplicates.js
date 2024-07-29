import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;
const client = new MongoClient(uri);

async function findDuplicates() {
  try {
    await client.connect();
    const db = client.db('German');
    
    // Count total number of documents
    const totalCount = await db.collection('german_nouns').countDocuments();
    console.log(`Total number of nouns in the database: ${totalCount}`);

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
    // console.log("Duplicates found:", duplicates);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

findDuplicates();
