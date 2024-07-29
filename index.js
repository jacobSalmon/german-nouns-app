console.log("Starting the server...");
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import bodyparser from 'body-parser';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from a .env file
dotenv.config();

const app = express();
const port = 3001;

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(express.static(path.join(__dirname)));

app.use(bodyparser.json());

const rootDir = path.resolve(__dirname);

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'public', 'index.html'));
});

app.get('/add-noun', (req, res) => {
  res.sendFile(path.join(rootDir, 'public', 'add-noun.html'));
});

app.get('/verbs', (req, res) => {
  res.sendFile(path.join(rootDir, 'public', 'verbs.html'));
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

app.post('/create-noun', async (req, res) => {
  console.log('Received POST request to /create-noun');
  console.log('Request body:', req.body);
  try {
    const newNoun = req.body;
    await createNoun(client, newNoun);
    res.json({ message: 'Noun created successfully' });
  } catch (e) {
    console.error('Error creating noun:', e);
    res.status(500).send(`Error creating noun: ${e.message}`);
  }
});

// Endpoint to search for a noun on admin page
app.get('/search-noun', async (req, res) => {
  const noun = req.query.noun;
  try {
    const result = await searchNoun(client, noun);
    if (result) {
      res.json(result);
    } else {
      res.json({ error: 'Noun not found' });
    }
  } catch (e) {
    console.error('Error searching noun:', e);
    res.status(500).send(`Error searching noun: ${e.message}`);
  }
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(rootDir, 'public', 'admin.html'));
});

// Endpoint to get a random verb
app.get('/random-verb', async (req, res) => {
  try {
    console.log("Received request for /random-verb");
    await client.connect();
    console.log("Connected to MongoDB for /random-verb");
    const verbsCollection = client.db("German").collection("german_verbs");
    const count = await verbsCollection.countDocuments();
    console.log(`Total verbs count: ${count}`);
    const randomIndex = Math.floor(Math.random() * count);
    console.log(`Random index: ${randomIndex}`);
    const randomVerb = await verbsCollection.find().limit(1).skip(randomIndex).toArray();
    console.log("Fetched random verb:", randomVerb[0]);
    res.json(randomVerb[0]);
  } catch (e) {
    console.error('Error fetching random verb:', e);
    res.status(500).send('Error fetching random verb');
  } finally {
    await client.close();
    console.log("Closed MongoDB connection for /random-verb");
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// MongoDB connection
const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function createNoun(client, newNoun) {
  try {
    const result = await client.db("German").collection("german_nouns").insertOne(newNoun);
    console.log(`New noun created with the following id: ${result.insertedId}`);
  } catch (e) {
    console.error('Error inserting noun into the database:', e);
    throw e;
  }
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function getNouns() {
  await client.connect();
  const nouns = await client.db("German").collection("german_nouns").find({}).toArray();
  return nouns;
}

// Function to get a random noun from the database
async function getRandomNoun() {
  await client.connect();
  const count = await client.db("German").collection("german_nouns").countDocuments();
  const randomIndex = Math.floor(Math.random() * count);
  const randomNoun = await client.db("German").collection("german_nouns").find().limit(1).skip(randomIndex).toArray();
  return randomNoun[0];
}

// Function to search for a noun in the database
async function searchNoun(client, noun) {
  await client.connect();
  const result = await client.db("German").collection("german_nouns").findOne({ noun: noun });
  return result;
}
