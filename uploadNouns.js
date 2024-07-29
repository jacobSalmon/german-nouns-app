import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// MongoDB URI
const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// JSON data
const data = [
  
  {
    "noun": "Die Lilie",
    "article": "Die",
    "sentence": "Die Lilien blühen im Frühling in vielen verschiedenen Farben.",
    "grammar": "Feminine",
    "translation": "Lily"
  },
  {
    "noun": "Das Eisen",
    "article": "Das",
    "sentence": "Das Eisen wird für den Bau von Brücken und Gebäuden verwendet.",
    "grammar": "Neuter",
    "translation": "Iron"
  },
  {
    "noun": "Die Augenbraue",
    "article": "Die",
    "sentence": "Die Augenbrauen betonen die Gesichtszüge.",
    "grammar": "Feminine",
    "translation": "Eyebrow"
  },
  {
    "noun": "Die Antwort",
    "article": "Die",
    "sentence": "Die Antwort auf seine Frage war überraschend.",
    "grammar": "Feminine",
    "translation": "Response"
  },
  {
    "noun": "Die Geschwindigkeit",
    "article": "Die",
    "sentence": "Die Geschwindigkeit des Zuges beträgt 200 Kilometer pro Stunde.",
    "grammar": "Feminine",
    "translation": "Speed"
  },
  {
    "noun": "Der Zweck",
    "article": "Der",
    "sentence": "Der Zweck dieser Veranstaltung ist die Förderung des kulturellen Austauschs.",
    "grammar": "Masculine",
    "translation": "Purpose"
  },
  {
    "noun": "Der Rock",
    "article": "Der",
    "sentence": "Der Rock passt gut zu ihrem eleganten Outfit.",
    "grammar": "Masculine",
    "translation": "Skirt"
  },
  {
    "noun": "Das Quadrat",
    "article": "Das",
    "sentence": "Das Quadrat der Hypotenuse ist gleich der Summe der Quadrate der beiden anderen Seiten.",
    "grammar": "Neuter",
    "translation": "Square"
  },
  {
    "noun": "Die Fahrt",
    "article": "Die",
    "sentence": "Die Fahrt mit der Seilbahn bot einen beeindruckenden Ausblick über die Stadt.",
    "grammar": "Feminine",
    "translation": "Drive"
  },
  {
    "noun": "Der Artikel",
    "article": "Der",
    "sentence": "Der Artikel behandelt wichtige Aspekte der aktuellen politischen Lage.",
    "grammar": "Masculine",
    "translation": "Article"
  },
  {
    "noun": "Das Englisch",
    "article": "Das",
    "sentence": "Das Englisch ist eine Weltsprache, die von Millionen Menschen gesprochen wird.",
    "grammar": "Neuter",
    "translation": "English"
  },
  {
    "noun": "Der Turm",
    "article": "Der",
    "sentence": "Der Turm ragt über die Stadtmauern hinaus.",
    "grammar": "Masculine",
    "translation": "Tower"
  },
  {
    "noun": "Die Schlacht",
    "article": "Die",
    "sentence": "Die Schlacht fand vor vielen Jahrhunderten statt, aber ihre Folgen sind bis heute spürbar.",
    "grammar": "Feminine",
    "translation": "Battle"
  },
  {
    "noun": "Der Film",
    "article": "Der",
    "sentence": "Der Film erzählt die wahre Geschichte einer mutigen Frau.",
    "grammar": "Masculine",
    "translation": "Film"
  },
  {
    "noun": "Das Rennen",
    "article": "Das",
    "sentence": "Das Rennen um den Titel des Champions war hart umkämpft.",
    "grammar": "Neuter",
    "translation": "Race"
  },
  {
    "noun": "Der Schock",
    "article": "Der",
    "sentence": "Der Schock über die Nachricht saß tief.",
    "grammar": "Masculine",
    "translation": "Shock"
  },
  {
    "noun": "Die Sektion",
    "article": "Die",
    "sentence": "Die Sektion des Berichts enthält detaillierte Analysen.",
    "grammar": "Feminine",
    "translation": "Section"
  },
  {
    "noun": "Die Art",
    "article": "Die",
    "sentence": "Die Art und Weise, wie er sprach, beeindruckte alle Anwesenden.",
    "grammar": "Feminine",
    "translation": "Manner"
  },
  {
    "noun": "Das Schwert",
    "article": "Das",
    "sentence": "Das Schwert war eine der wichtigsten Waffen im Mittelalter.",
    "grammar": "Neuter",
    "translation": "Sword"
  },
  {
    "noun": "Der Stock",
    "article": "Der",
    "sentence": "Der Stock half ihm beim Gehen auf unebenem Gelände.",
    "grammar": "Masculine",
    "translation": "Stick"
  },
  {
    "noun": "Die Datei",
    "article": "Die",
    "sentence": "Die Datei wurde erfolgreich auf dem Server gespeichert.",
    "grammar": "Feminine",
    "translation": "File"
  },
  {
    "noun": "Das Brot",
    "article": "Das",
    "sentence": "Das Brot duftete verführerisch frisch aus dem Ofen.",
    "grammar": "Neuter",
    "translation": "Bread"
  },
  {
    "noun": "Das Öl",
    "article": "Das",
    "sentence": "Das Öl wurde für die Zubereitung des Essens verwendet.",
    "grammar": "Neuter",
    "translation": "Oil"
  },
  {
    "noun": "Die Kette",
    "article": "Die",
    "sentence": "Die Kette wurde sorgfältig um den Hals gelegt.",
    "grammar": "Feminine",
    "translation": "Chain"
  },
  {
    "noun": "Die Abteilung",
    "article": "Die",
    "sentence": "Die Abteilung für Marketing organisiert die Werbekampagnen des Unternehmens.",
    "grammar": "Feminine",
    "translation": "Department"
  },
  {
    "noun": "Das Projekt",
    "article": "Das",
    "sentence": "Das Projekt wird voraussichtlich in zwei Jahren abgeschlossen sein.",
    "grammar": "Neuter",
    "translation": "Project"
  },
  {
    "noun": "Der Mord",
    "article": "Der",
    "sentence": "Der Mord an dem Politiker schockierte die ganze Nation.",
    "grammar": "Masculine",
    "translation": "Murder"
  },
  {
    "noun": "Der Bär",
    "article": "Der",
    "sentence": "Der Bär wurde in freier Wildbahn gesichtet.",
    "grammar": "Masculine",
    "translation": "Bear"
  },
  {
    "noun": "Der Test",
    "article": "Der",
    "sentence": "Der Test besteht aus mehreren Aufgaben unterschiedlicher Schwierigkeitsgrade.",
    "grammar": "Masculine",
    "translation": "Test"
  },
  {
    "noun": "Der Besuch",
    "article": "Der",
    "sentence": "Der Besuch ihrer Eltern war eine angenehme Überraschung.",
    "grammar": "Masculine",
    "translation": "Visit"
  },
  {
    "noun": "Die Milch",
    "article": "Die",
    "sentence": "Die Milch ist eine wichtige Quelle für Kalzium.",
    "grammar": "Feminine",
    "translation": "Milk"
  },
  {
    "noun": "Der Chef",
    "article": "Der",
    "sentence": "Der Chef war mit den Ergebnissen der letzten Quartalszahlen zufrieden.",
    "grammar": "Masculine",
    "translation": "Boss"
  },
  {
    "noun": "Der Ellenbogen",
    "article": "Der",
    "sentence": "Der Ellenbogen schmerzte nach dem Sturz.",
    "grammar": "Masculine",
    "translation": "Elbow"
  },
  {
    "noun": "Das Verlangen",
    "article": "Das",
    "sentence": "Das Verlangen nach Anerkennung trieb ihn an.",
    "grammar": "Neuter",
    "translation": "Desire"
  },
  {
    "noun": "Der Patient",
    "article": "Der",
    "sentence": "Der Patient wartete geduldig auf seinen Arzttermin.",
    "grammar": "Masculine",
    "translation": "Patient"
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
