import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// MongoDB URI
const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// JSON data
const data = [
  
  {
    "noun": "Winkel",
    "article": "Der",
    "sentence": "Der Winkel beträgt 90 Grad.",
    "grammar": "Masculine",
    "translation": "Angle"
  },
  {
    "noun": "Form",
    "article": "Die",
    "sentence": "Die Form des Gebäudes ist modern.",
    "grammar": "Feminine",
    "translation": "Form"
  },
  {
    "noun": "Ton",
    "article": "Der",
    "sentence": "Der Ton der Musik ist melodisch.",
    "grammar": "Masculine",
    "translation": "Tone"
  },
  {
    "noun": "Kreis",
    "article": "Der",
    "sentence": "Der Kreis hat keinen Anfang und kein Ende.",
    "grammar": "Masculine",
    "translation": "Circle"
  },
  {
    "noun": "Frühling",
    "article": "Der",
    "sentence": "Der Frühling ist die Jahreszeit der Blüten.",
    "grammar": "Masculine",
    "translation": "Spring"
  },
  {
    "noun": "Veranda",
    "article": "Die",
    "sentence": "Die Veranda lädt zum Entspannen ein.",
    "grammar": "Feminine",
    "translation": "Porch"
  },
  {
    "noun": "Blatt",
    "article": "Das",
    "sentence": "Das Blatt fällt vom Baum.",
    "grammar": "Neuter",
    "translation": "Sheet"
  },
  {
    "noun": "Mitglied",
    "article": "Das",
    "sentence": "Das Mitglied ist Teil des Teams.",
    "grammar": "Neuter",
    "translation": "Member"
  },
  {
    "noun": "Pool",
    "article": "Der",
    "sentence": "Der Pool ist mit klarem Wasser gefüllt.",
    "grammar": "Masculine",
    "translation": "Pool"
  },
  {
    "noun": "Bedürfnis",
    "article": "Das",
    "sentence": "Das Bedürfnis nach Schlaf ist groß.",
    "grammar": "Neuter",
    "translation": "Need"
  },
  {
    "noun": "Hoffnung",
    "article": "Die",
    "sentence": "Die Hoffnung auf eine bessere Zukunft bleibt.",
    "grammar": "Feminine",
    "translation": "Hope"
  },
  {
    "noun": "See",
    "article": "Der",
    "sentence": "Der See liegt malerisch zwischen den Bergen.",
    "grammar": "Masculine",
    "translation": "Lake"
  },
  {
    "noun": "Brust",
    "article": "Die",
    "sentence": "Die Brust des Vogels ist rot.",
    "grammar": "Feminine",
    "translation": "Breast"
  },
  {
    "noun": "Überraschung",
    "article": "Die",
    "sentence": "Die Überraschung war gelungen.",
    "grammar": "Feminine",
    "translation": "Surprise"
  },
  {
    "noun": "Interesse",
    "article": "Das",
    "sentence": "Das Interesse an der Kunst ist groß.",
    "grammar": "Neuter",
    "translation": "Interest"
  },
  {
    "noun": "Boden",
    "article": "Der",
    "sentence": "Der Boden ist mit Teppich bedeckt.",
    "grammar": "Masculine",
    "translation": "Bottom"
  },
  {
    "noun": "Geist",
    "article": "Der",
    "sentence": "Der Geist ist ein faszinierendes Konzept.",
    "grammar": "Masculine",
    "translation": "Spirit"
  },
  {
    "noun": "Block",
    "article": "Der",
    "sentence": "Der Block ist aus Beton.",
    "grammar": "Masculine",
    "translation": "Block"
  },
  {
    "noun": "Sprache",
    "article": "Die",
    "sentence": "Die Sprache ist ein Mittel der Kommunikation.",
    "grammar": "Feminine",
    "translation": "Language"
  },
  {
    "noun": "Brücke",
    "article": "Die",
    "sentence": "Die Brücke verbindet beide Ufer.",
    "grammar": "Feminine",
    "translation": "Bridge"
  },
  {
    "noun": "Staub",
    "article": "Der",
    "sentence": "Der Staub liegt auf den Regalen.",
    "grammar": "Masculine",
    "translation": "Dust"
  },
  {
    "noun": "Zelle",
    "article": "Die",
    "sentence": "Die Zelle ist die kleinste Einheit des Lebens.",
    "grammar": "Feminine",
    "translation": "Cell"
  },
  {
    "noun": "Wein",
    "article": "Der",
    "sentence": "Der Wein schmeckt köstlich.",
    "grammar": "Masculine",
    "translation": "Wine"
  },
  {
    "noun": "Stiefel",
    "article": "Der",
    "sentence": "Der Stiefel ist wasserdicht.",
    "grammar": "Masculine",
    "translation": "Boot"
  },
  {
    "noun": "Wahl",
    "article": "Die",
    "sentence": "Die Wahl der Farben ist wichtig für das Design.",
    "grammar": "Feminine",
    "translation": "Choice"
  },
  {
    "noun": "Reihe",
    "article": "Die",
    "sentence": "Die Reihe der Bücher ist alphabetisch geordnet.",
    "grammar": "Feminine",
    "translation": "Row"
  },
  {
    "noun": "Gespräch",
    "article": "Das",
    "sentence": "Das Gespräch war interessant und informativ.",
    "grammar": "Neuter",
    "translation": "Talk"
  },
  {
    "noun": "Flugzeug",
    "article": "Das",
    "sentence": "Das Flugzeug fliegt über den Ozean.",
    "grammar": "Neuter",
    "translation": "Plane"
  },
  {
    "noun": "Uhr",
    "article": "Die",
    "sentence": "Die Uhr zeigt fünf Minuten vor zwölf.",
    "grammar": "Feminine",
    "translation": "Watch"
  },
  {
    "noun": "Information",
    "article": "Die",
    "sentence": "Die Information ist auf der Website verfügbar.",
    "grammar": "Feminine",
    "translation": "Information"
  },
  {
    "noun": "Großmutter",
    "article": "Die",
    "sentence": "Die Großmutter backt gerne Kuchen.",
    "grammar": "Feminine",
    "translation": "Grandmother"
  },
  {
    "noun": "Flügel",
    "article": "Der",
    "sentence": "Der Flügel des Vogels ist beeindruckend.",
    "grammar": "Masculine",
    "translation": "Wing"
  },
  {
    "noun": "Bob",
    "article": "Der",
    "sentence": "Der Bob ist eine beliebte Frisur.",
    "grammar": "Masculine",
    "translation": "Bob"
  },
  {
    "noun": "Club",
    "article": "Der",
    "sentence": "Der Club ist nur für Mitglieder zugänglich.",
    "grammar": "Masculine",
    "translation": "Club"
  },
  {
    "noun": "Meister",
    "article": "Der",
    "sentence": "Der Meister des Spiels wurde gefeiert.",
    "grammar": "Masculine",
    "translation": "Master"
  },
  {
    "noun": "Gnade",
    "article": "Die",
    "sentence": "Die Gnade Gottes ist unendlich.",
    "grammar": "Feminine",
    "translation": "Grace"
  },
  {
    "noun": "Wald",
    "article": "Der",
    "sentence": "Der Wald ist voller Bäume und Tiere.",
    "grammar": "Masculine",
    "translation": "Forest"
  },
  {
    "noun": "Größe",
    "article": "Die",
    "sentence": "Die Größe des Raumes beeindruckt.",
    "grammar": "Feminine",
    "translation": "Size"
  },
  {
    "noun": "Satz",
    "article": "Der",
    "sentence": "Der Satz enthält ein Subjekt und ein Prädikat.",
    "grammar": "Masculine",
    "translation": "Set"
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
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");

    // Upload the data
    const result = await client.db("German").collection("german_nouns").insertMany(data);
    console.log(`Inserted ${result.insertedCount} nouns into the database.`);
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



