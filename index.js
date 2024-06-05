console.log("Starting the server...");
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




// *******************  MONGODB   *******************

const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


    // Create a new noun: THE ACTUAL DATA NEED TO BE VARIABLES OBVIOUSLY, this is just a test.
    /*
    const newNoun = { 
      noun: "Katze", 
      artikel: "die",
      sentence: "Die Katze ist schwarz.",
      grammar: "viele feminine Nomen enden auf -e",
      translation: "cat"
    };
    await createNoun(client, newNoun);
*/

    // List the databases available:
    // await listDatabases(client);

  } catch (e) {
    console.error(e);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// save new noun in the database
async function createNoun(client, newNoun) {
  const result = await client.db("German").collection("german_nouns").insertOne(newNoun);
  console.log(`New noun created with the following id: ${result.insertedId}`);
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

// *******************  END OF MONGODB *******************



