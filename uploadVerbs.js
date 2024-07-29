import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// MongoDB URI
const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// JSON data
const verbs = [
    {
        "verb": "Sein",
        "meaning": "To be",
        "example": "Er ist mein Bruder. Wir sind Geschwister.",
        "conjugation": {
            "Present": ["bin", "bist", "ist", "sind", "seid", "sind"],
            "Simple Past": ["war", "warst", "war", "waren", "wart", "waren"],
            "Present Perfect": ["bin gewesen", "bist gewesen", "ist gewesen", "sind gewesen", "seid gewesen", "sind gewesen"]
        }
    },
    // Tilføj de resterende verber her...
];

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function uploadVerbs() {
    let attemptedUploads = 0;
    let successfulUploads = 0;
    let duplicateCount = 0;

    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected to MongoDB!");

        const collection = client.db("German").collection("german_verbs");

        for (const newVerb of verbs) {
            attemptedUploads++;
            const existingVerb = await collection.findOne({ verb: newVerb.verb });

            if (existingVerb) {
                duplicateCount++;
                console.log(`Duplicate found: ${newVerb.verb}`);
            } else {
                await collection.insertOne(newVerb);
                successfulUploads++;
                console.log(`Inserted: ${newVerb.verb}`);
            }
        }

        console.log(`Attempted uploads: ${attemptedUploads}`);
        console.log(`Successful uploads: ${successfulUploads}`);
        console.log(`Duplicates not uploaded: ${duplicateCount}`);

    } catch (e) {
        console.error('Error uploading verbs:', e);
    } finally {
        // Close the connection
        await client.close();
        console.log("Connection closed.");
    }
}

// Run the function
uploadVerbs().catch(console.dir);
