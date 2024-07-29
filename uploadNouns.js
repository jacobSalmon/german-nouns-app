import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// MongoDB URI
const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// JSON data
const data = [
  
  
    
  {
    "noun": "Spieler",
    "article": "Der",
    "sentence": "Der Spieler zeigte eine beeindruckende Leistung auf dem Platz.",
    "grammar": "Masculine",
    "translation": "Player"
  },
  {
    "noun": "Roman",
    "article": "Der",
    "sentence": "Der Roman war ein Bestseller und wurde mehrfach ausgezeichnet.",
    "grammar": "Masculine",
    "translation": "Novel"
  },
  {
    "noun": "Kissen",
    "article": "Das",
    "sentence": "Das Kissen auf dem Sofa war besonders weich.",
    "grammar": "Neuter",
    "translation": "Pillow"
  }

  
  

];

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function uploadNouns() {
  let attemptedUploads = 0;
  let successfulUploads = 0;
  let duplicateCount = 0;

  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");

    const collection = client.db("German").collection("german_nouns");

    for (const newNoun of data) {
      attemptedUploads++;
      const existingNoun = await collection.findOne({ noun: newNoun.noun });

      if (existingNoun) {
        duplicateCount++;
        console.log(`Duplicate found: ${newNoun.noun}`);
      } else {
        await collection.insertOne(newNoun);
        successfulUploads++;
        console.log(`Inserted: ${newNoun.noun}`);
      }
    }

    console.log(`Attempted uploads: ${attemptedUploads}`);
    console.log(`Successful uploads: ${successfulUploads}`);
    console.log(`Duplicates not uploaded: ${duplicateCount}`);

  } catch (e) {
    console.error('Error uploading nouns:', e);
  } finally {
    // Close the connection
    await client.close();
    console.log("Connection closed.");
  }
}

// Run the function
uploadNouns().catch(console.dir);
