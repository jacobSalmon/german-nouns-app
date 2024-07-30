import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// MongoDB URI
const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// JSON data
const verbs = [
 
    {
        "verb": "Schwimmen",
        "meaning": "To swim",
        "example": "Er schwimmt jeden Morgen im See.",
        "conjugation": {
            "Present": ["schwimme", "schwimmst", "schwimmt", "schwimmen", "schwimmt", "schwimmen"],
            "Simple Past": ["schwamm", "schwammst", "schwamm", "schwammen", "schwammt", "schwammen"],
            "Present Perfect": ["bin geschwommen", "bist geschwommen", "ist geschwommen", "sind geschwommen", "seid geschwommen", "sind geschwommen"]
        }
    },
    {
        "verb": "Springen",
        "meaning": "To jump",
        "example": "Das Kind springt über den Zaun.",
        "conjugation": {
            "Present": ["springe", "springst", "springt", "springen", "springt", "springen"],
            "Simple Past": ["sprang", "sprangst", "sprang", "sprangen", "sprangt", "sprangen"],
            "Present Perfect": ["bin gesprungen", "bist gesprungen", "ist gesprungen", "sind gesprungen", "seid gesprungen", "sind gesprungen"]
        }
    },
    {
        "verb": "Rennen",
        "meaning": "To run",
        "example": "Er rennt sehr schnell.",
        "conjugation": {
            "Present": ["renne", "rennst", "rennt", "rennen", "rennt", "rennen"],
            "Simple Past": ["rannte", "ranntest", "rannte", "rannten", "ranntet", "rannten"],
            "Present Perfect": ["bin gerannt", "bist gerannt", "ist gerannt", "sind gerannt", "seid gerannt", "sind gerannt"]
        }
    },
    {
        "verb": "Flüstern",
        "meaning": "To whisper",
        "example": "Sie flüstert ihm ein Geheimnis ins Ohr.",
        "conjugation": {
            "Present": ["flüstere", "flüsterst", "flüstert", "flüstern", "flüstert", "flüstern"],
            "Simple Past": ["flüsterte", "flüstertest", "flüsterte", "flüsterten", "flüstertet", "flüsterten"],
            "Present Perfect": ["habe geflüstert", "hast geflüstert", "hat geflüstert", "haben geflüstert", "habt geflüstert", "haben geflüstert"]
        }
    },
    {
        "verb": "Klettern",
        "meaning": "To climb",
        "example": "Er klettert auf den Baum.",
        "conjugation": {
            "Present": ["klettere", "kletterst", "klettert", "klettern", "klettert", "klettern"],
            "Simple Past": ["kletterte", "klettertest", "kletterte", "kletterten", "klettertet", "kletterten"],
            "Present Perfect": ["bin geklettert", "bist geklettert", "ist geklettert", "sind geklettert", "seid geklettert", "sind geklettert"]
        }
    },
    {
        "verb": "Schreiben",
        "meaning": "To write",
        "example": "Ich schreibe einen Brief.",
        "conjugation": {
            "Present": ["schreibe", "schreibst", "schreibt", "schreiben", "schreibt", "schreiben"],
            "Simple Past": ["schrieb", "schriebst", "schrieb", "schrieben", "schriebt", "schrieben"],
            "Present Perfect": ["habe geschrieben", "hast geschrieben", "hat geschrieben", "haben geschrieben", "habt geschrieben", "haben geschrieben"]
        }
    },
    {
        "verb": "Zeichnen",
        "meaning": "To draw",
        "example": "Sie zeichnet ein Bild.",
        "conjugation": {
            "Present": ["zeichne", "zeichnest", "zeichnet", "zeichnen", "zeichnet", "zeichnen"],
            "Simple Past": ["zeichnete", "zeichnetest", "zeichnete", "zeichneten", "zeichnetet", "zeichneten"],
            "Present Perfect": ["habe gezeichnet", "hast gezeichnet", "hat gezeichnet", "haben gezeichnet", "habt gezeichnet", "haben gezeichnet"]
        }
    },
    {
        "verb": "Sitzen",
        "meaning": "To sit",
        "example": "Er sitzt auf dem Stuhl.",
        "conjugation": {
            "Present": ["sitze", "sitzt", "sitzt", "sitzen", "sitzt", "sitzen"],
            "Simple Past": ["saß", "saßest", "saß", "saßen", "saßet", "saßen"],
            "Present Perfect": ["habe gesessen", "hast gesessen", "hat gesessen", "haben gesessen", "habt gesessen", "haben gesessen"]
        }
    },
    {
        "verb": "Stehen",
        "meaning": "To stand",
        "example": "Er steht auf der Straße.",
        "conjugation": {
            "Present": ["stehe", "stehst", "steht", "stehen", "steht", "stehen"],
            "Simple Past": ["stand", "standest", "stand", "standen", "standet", "standen"],
            "Present Perfect": ["habe gestanden", "hast gestanden", "hat gestanden", "haben gestanden", "habt gestanden", "haben gestanden"]
        }
    },
    {
        "verb": "Lügen",
        "meaning": "To lie",
        "example": "Er lügt oft.",
        "conjugation": {
            "Present": ["lüge", "lügst", "lügt", "lügen", "lügt", "lügen"],
            "Simple Past": ["log", "logst", "log", "logen", "logt", "logen"],
            "Present Perfect": ["habe gelogen", "hast gelogen", "hat gelogen", "haben gelogen", "habt gelogen", "haben gelogen"]
        }
    },
    {
        "verb": "Kaufen",
        "meaning": "To buy",
        "example": "Kaufst du das Kleid?",
        "conjugation": {
            "Present": ["kaufe", "kaufst", "kauft", "kaufen", "kauft", "kaufen"],
            "Simple Past": ["kaufte", "kauftest", "kaufte", "kauften", "kauftet", "kauften"],
            "Present Perfect": ["habe gekauft", "hast gekauft", "hat gekauft", "haben gekauft", "habt gekauft", "haben gekauft"]
        }
    },
    {
        "verb": "Wünschen",
        "meaning": "To wish",
        "example": "Ich wünsche dir alles Gute.",
        "conjugation": {
            "Present": ["wünsche", "wünschst", "wünscht", "wünschen", "wünscht", "wünschen"],
            "Simple Past": ["wünschte", "wünschtest", "wünschte", "wünschten", "wünschtet", "wünschten"],
            "Present Perfect": ["habe gewünscht", "hast gewünscht", "hat gewünscht", "haben gewünscht", "habt gewünscht", "haben gewünscht"]
        }
    },
    {
        "verb": "Lachen",
        "meaning": "To laugh",
        "example": "Er lacht über den Witz.",
        "conjugation": {
            "Present": ["lache", "lachst", "lacht", "lachen", "lacht", "lachen"],
            "Simple Past": ["lachte", "lachtest", "lachte", "lachten", "lachtet", "lachten"],
            "Present Perfect": ["habe gelacht", "hast gelacht", "hat gelacht", "haben gelacht", "habt gelacht", "haben gelacht"]
        }
    },
    {
        "verb": "Schauen",
        "meaning": "To look/watch",
        "example": "Er schaut den Film an.",
        "conjugation": {
            "Present": ["schaue", "schaust", "schaut", "schauen", "schaut", "schauen"],
            "Simple Past": ["schaute", "schautest", "schaute", "schauten", "schautet", "schauten"],
            "Present Perfect": ["habe geschaut", "hast geschaut", "hat geschaut", "haben geschaut", "habt geschaut", "haben geschaut"]
        }
    },
    {
        "verb": "Reisen",
        "meaning": "To travel",
        "example": "Sie reisen nach Frankreich.",
        "conjugation": {
            "Present": ["reise", "reist", "reist", "reisen", "reist", "reisen"],
            "Simple Past": ["reiste", "reistest", "reiste", "reisten", "reistet", "reisten"],
            "Present Perfect": ["bin gereist", "bist gereist", "ist gereist", "sind gereist", "seid gereist", "sind gereist"]
        }
    },
    {
        "verb": "Arbeiten",
        "meaning": "To work",
        "example": "Er arbeitet hart.",
        "conjugation": {
            "Present": ["arbeite", "arbeitest", "arbeitet", "arbeiten", "arbeitet", "arbeiten"],
            "Simple Past": ["arbeitete", "arbeitetest", "arbeitete", "arbeiteten", "arbeitetet", "arbeiteten"],
            "Present Perfect": ["habe gearbeitet", "hast gearbeitet", "hat gearbeitet", "haben gearbeitet", "habt gearbeitet", "haben gearbeitet"]
        }
    },
    {
        "verb": "Hoffen",
        "meaning": "To hope",
        "example": "Ich hoffe auf gutes Wetter.",
        "conjugation": {
            "Present": ["hoffe", "hoffst", "hofft", "hoffen", "hofft", "hoffen"],
            "Simple Past": ["hoffte", "hofftest", "hoffte", "hofften", "hofftet", "hofften"],
            "Present Perfect": ["habe gehofft", "hast gehofft", "hat gehofft", "haben gehofft", "habt gehofft", "haben gehofft"]
        }
    },
    {
        "verb": "Zeigen",
        "meaning": "To show",
        "example": "Zeigst du mir dein neues Auto?",
        "conjugation": {
            "Present": ["zeige", "zeigst", "zeigt", "zeigen", "zeigt", "zeigen"],
            "Simple Past": ["zeigte", "zeigtest", "zeigte", "zeigten", "zeigtet", "zeigten"],
            "Present Perfect": ["habe gezeigt", "hast gezeigt", "hat gezeigt", "haben gezeigt", "habt gezeigt", "haben gezeigt"]
        }
    },
    {
        "verb": "Regen",
        "meaning": "To rain",
        "example": "Es regnet heute.",
        "conjugation": {
            "Present": ["regne", "regnest", "regnet", "regnen", "regnet", "regnen"],
            "Simple Past": ["regnete", "regnetest", "regnete", "regneten", "regnetet", "regneten"],
            "Present Perfect": ["habe geregnet", "hast geregnet", "hat geregnet", "haben geregnet", "habt geregnet", "haben geregnet"]
        }
    },
    {
        "verb": "Schwitzen",
        "meaning": "To sweat",
        "example": "Er schwitzt nach dem Laufen.",
        "conjugation": {
            "Present": ["schwitze", "schwitzt", "schwitzt", "schwitzen", "schwitzt", "schwitzen"],
            "Simple Past": ["schwitzte", "schwitztest", "schwitzte", "schwitzten", "schwitztet", "schwitzten"],
            "Present Perfect": ["habe geschwitzt", "hast geschwitzt", "hat geschwitzt", "haben geschwitzt", "habt geschwitzt", "haben geschwitzt"]
        }
    },
    {
        "verb": "Ziehen",
        "meaning": "To pull",
        "example": "Er zieht den Wagen.",
        "conjugation": {
            "Present": ["ziehe", "ziehst", "zieht", "ziehen", "zieht", "ziehen"],
            "Simple Past": ["zog", "zogst", "zog", "zogen", "zogt", "zogen"],
            "Present Perfect": ["habe gezogen", "hast gezogen", "hat gezogen", "haben gezogen", "habt gezogen", "haben gezogen"]
        }
    },
    {
        "verb": "Drücken",
        "meaning": "To push",
        "example": "Er drückt die Tür auf.",
        "conjugation": {
            "Present": ["drücke", "drückst", "drückt", "drücken", "drückt", "drücken"],
            "Simple Past": ["drückte", "drücktest", "drückte", "drückten", "drücktet", "drückten"],
            "Present Perfect": ["habe gedrückt", "hast gedrückt", "hat gedrückt", "haben gedrückt", "habt gedrückt", "haben gedrückt"]
        }
    },
    {
        "verb": "Streiten",
        "meaning": "To argue",
        "example": "Sie streiten oft über Kleinigkeiten.",
        "conjugation": {
            "Present": ["streite", "streitest", "streitet", "streiten", "streitet", "streiten"],
            "Simple Past": ["stritt", "strittest", "stritt", "stritten", "strittet", "stritten"],
            "Present Perfect": ["habe gestritten", "hast gestritten", "hat gestritten", "haben gestritten", "habt gestritten", "haben gestritten"]
        }
    },
    {
        "verb": "Leben",
        "meaning": "To live",
        "example": "Ich lebe in einem kleinen Dorf außerhalb der Stadt.",
        "conjugation": {
            "Present": ["lebe", "lebst", "lebt", "leben", "lebt", "leben"],
            "Simple Past": ["lebte", "lebtest", "lebte", "lebten", "lebtet", "lebten"],
            "Present Perfect": ["habe gelebt", "hast gelebt", "hat gelebt", "haben gelebt", "habt gelebt", "haben gelebt"]
        }
    },
    {
        "verb": "Vergessen",
        "meaning": "To forget",
        "example": "Er vergisst immer seine Schlüssel.",
        "conjugation": {
            "Present": ["vergesse", "vergisst", "vergisst", "vergessen", "vergesst", "vergessen"],
            "Simple Past": ["vergaß", "vergaßest", "vergaß", "vergaßen", "vergaßt", "vergaßen"],
            "Present Perfect": ["habe vergessen", "hast vergessen", "hat vergessen", "haben vergessen", "habt vergessen", "haben vergessen"]
        }
    },
    {
        "verb": "Erinnern",
        "meaning": "To remember",
        "example": "Er erinnert sich an die alte Zeit.",
        "conjugation": {
            "Present": ["erinnere", "erinnerst", "erinnert", "erinnern", "erinnert", "erinnern"],
            "Simple Past": ["erinnerte", "erinnertest", "erinnerte", "erinnerten", "erinnertet", "erinnerten"],
            "Present Perfect": ["habe erinnert", "hast erinnert", "hat erinnert", "haben erinnert", "habt erinnert", "haben erinnert"]
        }
    },
    {
        "verb": "Einladen",
        "meaning": "To invite",
        "example": "Er lädt seine Freunde zum Essen ein.",
        "conjugation": {
            "Present": ["lade ein", "lädst ein", "lädt ein", "laden ein", "ladet ein", "laden ein"],
            "Simple Past": ["lud ein", "ludst ein", "lud ein", "luden ein", "ludt ein", "luden ein"],
            "Present Perfect": ["habe eingeladen", "hast eingeladen", "hat eingeladen", "haben eingeladen", "habt eingeladen", "haben eingeladen"]
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
