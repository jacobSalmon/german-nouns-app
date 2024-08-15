import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// MongoDB URI
const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// JSON data
const verbs = [

    {
        "verb": "Füttern",
        "meaning": "To feed",
        "example": "Sie füttert die Katze.",
        "conjugation": {
            "Present": ["füttere", "fütterst", "füttert", "füttern", "füttert", "füttern"],
            "Simple Past": ["fütterte", "füttertest", "fütterte", "fütterten", "füttertet", "fütterten"],
            "Present Perfect": ["habe gefüttert", "hast gefüttert", "hat gefüttert", "haben gefüttert", "habt gefüttert", "haben gefüttert"]
        }
    },
    {
        "verb": "Riechen",
        "meaning": "To smell",
        "example": "Er riecht die Blumen.",
        "conjugation": {
            "Present": ["rieche", "riechst", "riecht", "riechen", "riecht", "riechen"],
            "Simple Past": ["roch", "rochst", "roch", "rochen", "rocht", "rochen"],
            "Present Perfect": ["habe gerochen", "hast gerochen", "hat gerochen", "haben gerochen", "habt gerochen", "haben gerochen"]
        }
    },
    {
        "verb": "Schmecken",
        "meaning": "To taste",
        "example": "Die Suppe schmeckt gut.",
        "conjugation": {
            "Present": ["schmecke", "schmeckst", "schmeckt", "schmecken", "schmeckt", "schmecken"],
            "Simple Past": ["schmeckte", "schmecktest", "schmeckte", "schmeckten", "schmecktet", "schmeckten"],
            "Present Perfect": ["habe geschmeckt", "hast geschmeckt", "hat geschmeckt", "haben geschmeckt", "habt geschmeckt", "haben geschmeckt"]
        }
    },
    {
        "verb": "Lächeln",
        "meaning": "To smile",
        "example": "Sie lächelt freundlich.",
        "conjugation": {
            "Present": ["lächle", "lächelst", "lächelt", "lächeln", "lächelt", "lächeln"],
            "Simple Past": ["lächelte", "lächeltest", "lächelte", "lächelten", "lächeltet", "lächelten"],
            "Present Perfect": ["habe gelächelt", "hast gelächelt", "hat gelächelt", "haben gelächelt", "habt gelächelt", "haben gelächelt"]
        }
    },
    {
        "verb": "Weinen",
        "meaning": "To cry",
        "example": "Das Kind weint.",
        "conjugation": {
            "Present": ["weine", "weinst", "weint", "weinen", "weint", "weinen"],
            "Simple Past": ["weinte", "weintest", "weinte", "weinten", "weintet", "weinten"],
            "Present Perfect": ["habe geweint", "hast geweint", "hat geweint", "haben geweint", "habt geweint", "haben geweint"]
        }
    },
    {
        "verb": "Zeigen",
        "meaning": "To show",
        "example": "Er zeigt den Weg.",
        "conjugation": {
            "Present": ["zeige", "zeigst", "zeigt", "zeigen", "zeigt", "zeigen"],
            "Simple Past": ["zeigte", "zeigtest", "zeigte", "zeigten", "zeigtet", "zeigten"],
            "Present Perfect": ["habe gezeigt", "hast gezeigt", "hat gezeigt", "haben gezeigt", "habt gezeigt", "haben gezeigt"]
        }
    },
    {
        "verb": "Sparen",
        "meaning": "To save (money)",
        "example": "Er spart für ein neues Auto.",
        "conjugation": {
            "Present": ["spare", "sparst", "spart", "sparen", "spart", "sparen"],
            "Simple Past": ["sparte", "spartest", "sparte", "sparten", "spartet", "sparten"],
            "Present Perfect": ["habe gespart", "hast gespart", "hat gespart", "haben gespart", "habt gespart", "haben gespart"]
        }
    },
    {
        "verb": "Wischen",
        "meaning": "To wipe",
        "example": "Sie wischt den Tisch ab.",
        "conjugation": {
            "Present": ["wische", "wischst", "wischt", "wischen", "wischt", "wischen"],
            "Simple Past": ["wischte", "wischtetest", "wischte", "wischten", "wischtet", "wischten"],
            "Present Perfect": ["habe gewischt", "hast gewischt", "hat gewischt", "haben gewischt", "habt gewischt", "haben gewischt"]
        }
    },
    {
        "verb": "Kämmen",
        "meaning": "To comb",
        "example": "Sie kämmt ihr Haar.",
        "conjugation": {
            "Present": ["kämme", "kämmst", "kämmt", "kämmen", "kämmt", "kämmen"],
            "Simple Past": ["kämmte", "kämptest", "kämmte", "kämmeten", "kämmtet", "kämmeten"],
            "Present Perfect": ["habe gekämmt", "hast gekämmt", "hat gekämmt", "haben gekämmt", "habt gekämmt", "haben gekämmt"]
        }
    },
    {
        "verb": "Putzen",
        "meaning": "To clean",
        "example": "Er putzt die Fenster.",
        "conjugation": {
            "Present": ["putze", "putzt", "putzt", "putzen", "putzt", "putzen"],
            "Simple Past": ["putzte", "putztest", "putzte", "putzten", "putztet", "putzten"],
            "Present Perfect": ["habe geputzt", "hast geputzt", "hat geputzt", "haben geputzt", "habt geputzt", "haben geputzt"]
        }
    },
    {
        "verb": "Schütteln",
        "meaning": "To shake",
        "example": "Er schüttelt den Kopf.",
        "conjugation": {
            "Present": ["schüttle", "schüttelst", "schüttelt", "schütteln", "schüttelt", "schütteln"],
            "Simple Past": ["schüttelte", "schütteltest", "schüttelte", "schüttelten", "schütteltet", "schüttelten"],
            "Present Perfect": ["habe geschüttelt", "hast geschüttelt", "hat geschüttelt", "haben geschüttelt", "habt geschüttelt", "haben geschüttelt"]
        }
    },
    {
        "verb": "Klopfen",
        "meaning": "To knock",
        "example": "Er klopft an die Tür.",
        "conjugation": {
            "Present": ["klopfe", "klopfst", "klopft", "klopfen", "klopft", "klopfen"],
            "Simple Past": ["klopfte", "klopftest", "klopfte", "klopften", "klopftet", "klopften"],
            "Present Perfect": ["habe geklopft", "hast geklopft", "hat geklopft", "haben geklopft", "habt geklopft", "haben geklopft"]
        }
    },
    {
        "verb": "Glauben",
        "meaning": "To believe",
        "example": "Er glaubt an Wunder.",
        "conjugation": {
            "Present": ["glaube", "glaubst", "glaubt", "glauben", "glaubt", "glauben"],
            "Simple Past": ["glaubte", "glaubtest", "glaubte", "glaubten", "glaubtet", "glaubten"],
            "Present Perfect": ["habe geglaubt", "hast geglaubt", "hat geglaubt", "haben geglaubt", "habt geglaubt", "haben geglaubt"]
        }
    },
    {
        "verb": "Feiern",
        "meaning": "To celebrate",
        "example": "Sie feiern Geburtstag.",
        "conjugation": {
            "Present": ["feiere", "feierst", "feiert", "feiern", "feiert", "feiern"],
            "Simple Past": ["feierte", "feiertest", "feierte", "feierten", "feiertet", "feierten"],
            "Present Perfect": ["habe gefeiert", "hast gefeiert", "hat gefeiert", "haben gefeiert", "habt gefeiert", "haben gefeiert"]
        }
    },
    {
        "verb": "Schreiben",
        "meaning": "To write",
        "example": "Er schreibt einen Brief.",
        "conjugation": {
            "Present": ["schreibe", "schreibst", "schreibt", "schreiben", "schreibt", "schreiben"],
            "Simple Past": ["schrieb", "schriebst", "schrieb", "schrieben", "schriebt", "schrieben"],
            "Present Perfect": ["habe geschrieben", "hast geschrieben", "hat geschrieben", "haben geschrieben", "habt geschrieben", "haben geschrieben"]
        }
    },
    {
        "verb": "Rechnen",
        "meaning": "To calculate",
        "example": "Er rechnet die Kosten.",
        "conjugation": {
            "Present": ["rechne", "rechnest", "rechnet", "rechnen", "rechnet", "rechnen"],
            "Simple Past": ["rechnete", "rechnetest", "rechnete", "rechneten", "rechnetet", "rechneten"],
            "Present Perfect": ["habe gerechnet", "hast gerechnet", "hat gerechnet", "haben gerechnet", "habt gerechnet", "haben gerechnet"]
        }
    },
    {
        "verb": "Spazieren",
        "meaning": "To walk",
        "example": "Er spaziert im Park.",
        "conjugation": {
            "Present": ["spaziere", "spazierst", "spaziert", "spazieren", "spaziert", "spazieren"],
            "Simple Past": ["spazierte", "spaziertest", "spazierte", "spazierten", "spaziertet", "spazierten"],
            "Present Perfect": ["bin spaziert", "bist spaziert", "ist spaziert", "sind spaziert", "seid spaziert", "sind spaziert"]
        }
    },
    {
        "verb": "Anrufen",
        "meaning": "To call (phone)",
        "example": "Sie ruft ihre Mutter an.",
        "conjugation": {
            "Present": ["rufe an", "rufst an", "ruft an", "rufen an", "ruft an", "rufen an"],
            "Simple Past": ["rief an", "riefst an", "rief an", "riefen an", "rieft an", "riefen an"],
            "Present Perfect": ["habe angerufen", "hast angerufen", "hat angerufen", "haben angerufen", "habt angerufen", "haben angerufen"]
        }
    },
    {
        "verb": "Vergleichen",
        "meaning": "To compare",
        "example": "Er vergleicht die Preise.",
        "conjugation": {
            "Present": ["vergleiche", "vergleichst", "vergleicht", "vergleichen", "vergleicht", "vergleichen"],
            "Simple Past": ["verglich", "verglichst", "verglich", "verglichen", "verglicht", "verglichen"],
            "Present Perfect": ["habe verglichen", "hast verglichen", "hat verglichen", "haben verglichen", "habt verglichen", "haben verglichen"]
        }
    },
    {
        "verb": "Verstehen",
        "meaning": "To understand",
        "example": "Er versteht Deutsch.",
        "conjugation": {
            "Present": ["verstehe", "verstehst", "versteht", "verstehen", "versteht", "verstehen"],
            "Simple Past": ["verstand", "verstandest", "verstand", "verstanden", "verstandet", "verstanden"],
            "Present Perfect": ["habe verstanden", "hast verstanden", "hat verstanden", "haben verstanden", "habt verstanden", "haben verstanden"]
        }
    },
    {
        "verb": "Erklären",
        "meaning": "To explain",
        "example": "Er erklärt das Problem.",
        "conjugation": {
            "Present": ["erkläre", "erklärst", "erklärt", "erklären", "erklärt", "erklären"],
            "Simple Past": ["erklärte", "erklärtest", "erklärte", "erklärten", "erklärtet", "erklärten"],
            "Present Perfect": ["habe erklärt", "hast erklärt", "hat erklärt", "haben erklärt", "habt erklärt", "haben erklärt"]
        }
    }
 
   
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
