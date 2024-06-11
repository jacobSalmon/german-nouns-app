console.log("Starting the server...");
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from a .env file
dotenv.config();

const app = express();
const port = 3001;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Endpoint to get a random noun
app.get('/random-noun', async (req, res) => {
  try {
    const noun = await getRandomNoun();
    res.json(noun);
  } catch (e) {
    res.status(500).send('Error fetching random noun');
  }
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
      noun: "Haus", 
      artikel: "Das",
      sentence: "Das Haus ist groß",
      grammar: "Noun",
      translation: "House"
    };
    
    await createNoun(client, newNoun);


    // List the databases available:
     await listDatabases(client);

    // List the nouns in the database:
    
    await getNouns().then(nouns => {
      console.log("Nouns:");
      nouns.forEach(noun => console.log(noun));
    }
    );
    */

    // Get a random noun from the database:
    await getRandomNoun().then(noun => {
      console.log("Random noun:");
      console.log(noun);
    });



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

async function getNouns() {
  await client.connect();
  const nouns = await client.db("German").collection("german_nouns").find({}).toArray();
  await client.close();
  return nouns;
}

// Function to get a random noun from the database
async function getRandomNoun() {
  await client.connect();
  const count = await client.db("German").collection("german_nouns").countDocuments();
  const randomIndex = Math.floor(Math.random() * count);
  const randomNoun = await client.db("German").collection("german_nouns").find().limit(1).skip(randomIndex).toArray();
  await client.close();
  return randomNoun[0];
}


// *******************  END OF MONGODB *******************



