/* import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// MongoDB URI
const uri = `mongodb+srv://jacobsalmon:${process.env.MONGODB_PASSWORD}@firstsalmoncluster.711lsnh.mongodb.net/?retryWrites=true&w=majority&appName=FirstSalmonCluster`;

// JSON data
const data = [
        {
          "noun": "Haus",
          "article": "Das",
          "sentence": "Das Haus ist groß",
          "grammar": "Neuter",
          "translation": "House"
        },
        {
          "noun": "Schlüssel",
          "article": "Der",
          "sentence": "Der Schlüssel ist verloren",
          "grammar": "Masculine",
          "translation": "Key"
        },
        {
          "noun": "Tür",
          "article": "Die",
          "sentence": "Die Tür ist offen",
          "grammar": "Feminine",
          "translation": "Door"
        },
        {
          "noun": "Schuh",
          "article": "Der",
          "sentence": "Der Schuh ist schwarz",
          "grammar": "Masculine",
          "translation": "Shoe"
        },
        {
          "noun": "Boden",
          "article": "Der",
          "sentence": "Der Boden ist sauber",
          "grammar": "Masculine",
          "translation": "Floor"
        },
        {
          "noun": "Jacke",
          "article": "Die",
          "sentence": "Die Jacke ist warm",
          "grammar": "Feminine",
          "translation": "Jacket"
        },
        {
          "noun": "Haken",
          "article": "Der",
          "sentence": "Der Haken ist gebrochen",
          "grammar": "Masculine",
          "translation": "Hook"
        },
        {
          "noun": "Kleiderbügel",
          "article": "Der",
          "sentence": "Der Kleiderbügel hängt im Schrank",
          "grammar": "Masculine",
          "translation": "Clothes hanger"
        },
        {
          "noun": "Bild",
          "article": "Das",
          "sentence": "Das Bild ist schön",
          "grammar": "Neuter",
          "translation": "Picture"
        },
        {
          "noun": "Wand",
          "article": "Die",
          "sentence": "Die Wand ist weiß",
          "grammar": "Feminine",
          "translation": "Wall"
        },
        {
          "noun": "Küche",
          "article": "Die",
          "sentence": "Die Küche ist modern",
          "grammar": "Feminine",
          "translation": "Kitchen"
        },
        {
          "noun": "Kühlschrank",
          "article": "Der",
          "sentence": "Der Kühlschrank ist leer",
          "grammar": "Masculine",
          "translation": "Refrigerator"
        },
        {
          "noun": "Essen",
          "article": "Das",
          "sentence": "Das Essen ist lecker",
          "grammar": "Neuter",
          "translation": "Food"
        },
        {
          "noun": "Frühstück",
          "article": "Das",
          "sentence": "Das Frühstück ist bereit",
          "grammar": "Neuter",
          "translation": "Breakfast"
        },
        {
          "noun": "Mittagessen",
          "article": "Das",
          "sentence": "Das Mittagessen ist serviert",
          "grammar": "Neuter",
          "translation": "Lunch"
        },
        {
          "noun": "Abendessen",
          "article": "Das",
          "sentence": "Das Abendessen ist um sechs Uhr",
          "grammar": "Neuter",
          "translation": "Dinner"
        },
        {
          "noun": "Tisch",
          "article": "Der",
          "sentence": "Der Tisch ist gedeckt",
          "grammar": "Masculine",
          "translation": "Table"
        },
        {
          "noun": "Kommode",
          "article": "Die",
          "sentence": "Die Kommode ist alt",
          "grammar": "Feminine",
          "translation": "Dresser"
        },
        {
          "noun": "Nachtisch",
          "article": "Der",
          "sentence": "Der Nachtisch ist süß",
          "grammar": "Masculine",
          "translation": "Dessert"
        },
        {
          "noun": "Käse",
          "article": "Der",
          "sentence": "Der Käse ist gelb",
          "grammar": "Masculine",
          "translation": "Cheese"
        },
        {
          "noun": "Milch",
          "article": "Die",
          "sentence": "Die Milch ist kalt",
          "grammar": "Feminine",
          "translation": "Milk"
        },
        {
          "noun": "Sahne",
          "article": "Die",
          "sentence": "Die Sahne ist frisch",
          "grammar": "Feminine",
          "translation": "Cream"
        },
        {
          "noun": "Bier",
          "article": "Das",
          "sentence": "Das Bier ist kalt",
          "grammar": "Neuter",
          "translation": "Beer"
        },
        {
          "noun": "Butter",
          "article": "Die",
          "sentence": "Die Butter ist weich",
          "grammar": "Feminine",
          "translation": "Butter"
        },
        {
          "noun": "Gemüse",
          "article": "Das",
          "sentence": "Das Gemüse ist gesund",
          "grammar": "Neuter",
          "translation": "Vegetables"
        },
        {
          "noun": "Rindfleisch",
          "article": "Das",
          "sentence": "Das Rindfleisch ist teuer",
          "grammar": "Neuter",
          "translation": "Beef"
        },
        {
          "noun": "Hähnchen",
          "article": "Das",
          "sentence": "Das Hähnchen ist lecker",
          "grammar": "Neuter",
          "translation": "Chicken"
        },
        {
          "noun": "Rhabarber",
          "article": "Der",
          "sentence": "Der Rhabarber ist sauer",
          "grammar": "Masculine",
          "translation": "Rhubarb"
        },
        {
          "noun": "Erdbeere",
          "article": "Die",
          "sentence": "Die Erdbeere ist süß",
          "grammar": "Feminine",
          "translation": "Strawberry"
        },
        {
          "noun": "Ei",
          "article": "Das",
          "sentence": "Das Ei ist frisch",
          "grammar": "Neuter",
          "translation": "Egg"
        },
        {
          "noun": "Brot",
          "article": "Das",
          "sentence": "Das Brot ist knusprig",
          "grammar": "Neuter",
          "translation": "Bread"
        },
        {
          "noun": "Saft",
          "article": "Der",
          "sentence": "Der Saft ist süß",
          "grammar": "Masculine",
          "translation": "Juice"
        },
        {
          "noun": "Löffel",
          "article": "Der",
          "sentence": "Der Löffel ist schmutzig",
          "grammar": "Masculine",
          "translation": "Spoon"
        },
        {
          "noun": "Messer",
          "article": "Das",
          "sentence": "Das Messer ist scharf",
          "grammar": "Neuter",
          "translation": "Knife"
        },
        {
          "noun": "Gabel",
          "article": "Die",
          "sentence": "Die Gabel ist verbogen",
          "grammar": "Feminine",
          "translation": "Fork"
        },
        {
          "noun": "Platte",
          "article": "Die",
          "sentence": "Die Platte ist groß",
          "grammar": "Feminine",
          "translation": "Plate"
        },
        {
          "noun": "Teller",
          "article": "Der",
          "sentence": "Der Teller ist voll",
          "grammar": "Masculine",
          "translation": "Plate"
        },
        {
          "noun": "Serviette",
          "article": "Die",
          "sentence": "Die Serviette ist sauber",
          "grammar": "Feminine",
          "translation": "Napkin"
        },
        {
          "noun": "Stuhl",
          "article": "Der",
          "sentence": "Der Stuhl ist bequem",
          "grammar": "Masculine",
          "translation": "Chair"
        },
        {
          "noun": "Regal",
          "article": "Das",
          "sentence": "Das Regal ist leer",
          "grammar": "Neuter",
          "translation": "Shelf"
        },
        {
          "noun": "Flasche",
          "article": "Die",
          "sentence": "Die Flasche ist leer",
          "grammar": "Feminine",
          "translation": "Bottle"
        },
        {
          "noun": "Spiegel",
          "article": "Der",
          "sentence": "Der Spiegel ist sauber",
          "grammar": "Masculine",
          "translation": "Mirror"
        },
        {
          "noun": "Waschbecken",
          "article": "Das",
          "sentence": "Das Waschbecken ist voll",
          "grammar": "Neuter",
          "translation": "Sink"
        },
        {
          "noun": "Wasser",
          "article": "Das",
          "sentence": "Das Wasser ist klar",
          "grammar": "Neuter",
          "translation": "Water"
        },
        {
          "noun": "Kaffee",
          "article": "Der",
          "sentence": "Der Kaffee ist heiß",
          "grammar": "Masculine",
          "translation": "Coffee"
        },
        {
          "noun": "Tasse",
          "article": "Die",
          "sentence": "Die Tasse ist leer",
          "grammar": "Feminine",
          "translation": "Cup"
        },
        {
          "noun": "Glas",
          "article": "Das",
          "sentence": "Das Glas ist zerbrochen",
          "grammar": "Neuter",
          "translation": "Glass"
        },
        {
          "noun": "Schweinefleisch",
          "article": "Das",
          "sentence": "Das Schweinefleisch ist zart",
          "grammar": "Neuter",
          "translation": "Pork"
        },
        {
          "noun": "Spinne",
          "article": "Die",
          "sentence": "Laura mag keine Spinne",
          "grammar": "Feminine",
          "translation": "Spider"
        },
        {
          "noun": "Zeitung",
          "article": "Die",
          "sentence": "Die Zeitung ist interessant",
          "grammar": "Feminine",
          "translation": "Newspaper"
        },
        {
          "noun": "Magazin",
          "article": "Das",
          "sentence": "Das Magazin ist teuer",
          "grammar": "Neuter",
          "translation": "Magazine"
        },
        {
          "noun": "Kochbuch",
          "article": "Das",
          "sentence": "Das Kochbuch ist nützlich",
          "grammar": "Neuter",
          "translation": "Cookbook"
        },
        {
          "noun": "Lexikon",
          "article": "Das",
          "sentence": "Das Lexikon ist alt",
          "grammar": "Neuter",
          "translation": "Encyclopedia"
        },
        {
          "noun": "Wörterbuch",
          "article": "Das",
          "sentence": "Das Wörterbuch ist hilfreich",
          "grammar": "Neuter",
          "translation": "Dictionary"
        },
        {
          "noun": "Computerprogramm",
          "article": "Das",
          "sentence": "Ich habe ein Computerprogramm gemacht",
          "grammar": "Neuter",
          "translation": "Computer program"
        },
        {
          "noun": "Reiseführer",
          "article": "Der",
          "sentence": "Der Reiseführer ist nützlich",
          "grammar": "Masculine",
          "translation": "Guidebook"
        },
        {
          "noun": "Pullover",
          "article": "Der",
          "sentence": "Der Pullover ist warm",
          "grammar": "Masculine",
          "translation": "Sweater"
        },
        {
          "noun": "Hemd",
          "article": "Das",
          "sentence": "Das Hemd ist sauber",
          "grammar": "Neuter",
          "translation": "Shirt"
        },
        {
          "noun": "Hose",
          "article": "Die",
          "sentence": "Die Hose ist bequem",
          "grammar": "Feminine",
          "translation": "Pants"
        },
        {
          "noun": "Rock",
          "article": "Der",
          "sentence": "Der Rock ist kurz",
          "grammar": "Masculine",
          "translation": "Skirt"
        },
        {
          "noun": "Stunde",
          "article": "Die",
          "sentence": "Der Film beginnt in einer Stunde",
          "grammar": "Feminine",
          "translation": "Hour"
        },
        {
          "noun": "Konzert",
          "article": "Das",
          "sentence": "Das Konzert endet um zehn nach acht",
          "grammar": "Neuter",
          "translation": "Concert"
        },
        {
          "noun": "Tee",
          "article": "Der",
          "sentence": "Der Tee ist heiß",
          "grammar": "Masculine",
          "translation": "Tea"
        },
        {
          "noun": "Apfel",
          "article": "Der",
          "sentence": "Der Apfel ist rot",
          "grammar": "Masculine",
          "translation": "Apple"
        },
        {
          "noun": "Fisch",
          "article": "Der",
          "sentence": "Der Fisch ist frisch",
          "grammar": "Masculine",
          "translation": "Fish"
        },
        {
          "noun": "Apfelkuchen",
          "article": "Der",
          "sentence": "Der Apfelkuchen ist lecker",
          "grammar": "Masculine",
          "translation": "Apple cake"
        },
        {
          "noun": "Kartoffel",
          "article": "Die",
          "sentence": "Die Kartoffel ist gekocht",
          "grammar": "Feminine",
          "translation": "Potato"
        },
        {
          "noun": "Durst",
          "article": "Der",
          "sentence": "Ich habe Durst",
          "grammar": "Masculine",
          "translation": "Thirst"
        },
        {
          "noun": "Krankenhaus",
          "article": "Das",
          "sentence": "Das Krankenhaus ist groß",
          "grammar": "Neuter",
          "translation": "Hospital"
        },
        {
          "noun": "Termin",
          "article": "Der",
          "sentence": "Ich möchte einen Termin machen",
          "grammar": "Masculine",
          "translation": "Appointment"
        },
        {
          "noun": "Arzt",
          "article": "Der",
          "sentence": "Der Arzt ist freundlich",
          "grammar": "Masculine",
          "translation": "Doctor"
        },
        {
          "noun": "Ärztin",
          "article": "Die",
          "sentence": "Die Ärztin ist freundlich",
          "grammar": "Feminine",
          "translation": "Doctor (female)"
        },
        {
          "noun": "Restaurant",
          "article": "Das",
          "sentence": "Das Restaurant ist teuer",
          "grammar": "Neuter",
          "translation": "Restaurant"
        },
        {
          "noun": "Kino",
          "article": "Das",
          "sentence": "Das Kino ist voll",
          "grammar": "Neuter",
          "translation": "Cinema"
        },
        {
          "noun": "Wein",
          "article": "Der",
          "sentence": "Der Wein ist trocken",
          "grammar": "Masculine",
          "translation": "Wine"
        },
        {
          "noun": "Rotwein",
          "article": "Der",
          "sentence": "Der Rotwein ist lecker",
          "grammar": "Masculine",
          "translation": "Red wine"
        },
        {
          "noun": "Buch",
          "article": "Das",
          "sentence": "Das Buch ist spannend",
          "grammar": "Neuter",
          "translation": "Book"
        },
        {
          "noun": "Tochter",
          "article": "Die",
          "sentence": "Die Tochter ist jung",
          "grammar": "Feminine",
          "translation": "Daughter"
        },
        {
          "noun": "Sohn",
          "article": "Der",
          "sentence": "Der Sohn ist jung",
          "grammar": "Masculine",
          "translation": "Son"
        },
        {
          "noun": "Bruder",
          "article": "Der",
          "sentence": "Der Bruder ist älter",
          "grammar": "Masculine",
          "translation": "Brother"
        },
        {
          "noun": "Schwester",
          "article": "Die",
          "sentence": "Die Schwester ist älter",
          "grammar": "Feminine",
          "translation": "Sister"
        },
        {
          "noun": "Geburtstag",
          "article": "Der",
          "sentence": "Der Geburtstag ist morgen",
          "grammar": "Masculine",
          "translation": "Birthday"
        },
        {
          "noun": "Bett",
          "article": "Das",
          "sentence": "Das Bett ist bequem",
          "grammar": "Neuter",
          "translation": "Bed"
        },
        {
          "noun": "Bettdecke",
          "article": "Die",
          "sentence": "Die Bettdecke ist warm",
          "grammar": "Feminine",
          "translation": "Blanket"
        },
        {
          "noun": "Suppe",
          "article": "Die",
          "sentence": "Die Suppe ist heiß",
          "grammar": "Feminine",
          "translation": "Soup"
        },
        {
          "noun": "Oma",
          "article": "Die",
          "sentence": "Die Oma ist lieb",
          "grammar": "Feminine",
          "translation": "Grandma"
        },
        {
          "noun": "Opa",
          "article": "Der",
          "sentence": "Der Opa ist stark",
          "grammar": "Masculine",
          "translation": "Grandpa"
        },
        {
          "noun": "Film",
          "article": "Der",
          "sentence": "Der Film ist spannend",
          "grammar": "Masculine",
          "translation": "Movie"
        },
        {
          "noun": "Bleistift",
          "article": "Der",
          "sentence": "Der Bleistift ist stumpf",
          "grammar": "Masculine",
          "translation": "Pencil"
        },
        {
          "noun": "Papier",
          "article": "Das",
          "sentence": "Das Papier ist weiß",
          "grammar": "Neuter",
          "translation": "Paper"
        },
        {
          "noun": "Notizbuch",
          "article": "Das",
          "sentence": "Das Notizbuch ist voll",
          "grammar": "Neuter",
          "translation": "Notebook"
        },
        {
          "noun": "Radiergummi",
          "article": "Der",
          "sentence": "Der Radiergummi ist klein",
          "grammar": "Masculine",
          "translation": "Eraser"
        },
        {
          "noun": "Tasche",
          "article": "Die",
          "sentence": "Die Tasche ist voll",
          "grammar": "Feminine",
          "translation": "Bag"
        },
        {
          "noun": "Schreibtisch",
          "article": "Der",
          "sentence": "Der Schreibtisch ist groß",
          "grammar": "Masculine",
          "translation": "Desk"
        },
        {
          "noun": "Lehrer",
          "article": "Der",
          "sentence": "Der Lehrer ist streng",
          "grammar": "Masculine",
          "translation": "Teacher"
        },
        {
          "noun": "Lehrerin",
          "article": "Die",
          "sentence": "Die Lehrerin ist freundlich",
          "grammar": "Feminine",
          "translation": "Teacher (female)"
        },
        {
          "noun": "Schüler",
          "article": "Der",
          "sentence": "Der Schüler ist fleißig",
          "grammar": "Masculine",
          "translation": "Student"
        },
        {
          "noun": "Schülerin",
          "article": "Die",
          "sentence": "Die Schülerin ist fleißig",
          "grammar": "Feminine",
          "translation": "Student (female)"
        },
        {
          "noun": "Auto",
          "article": "Das",
          "sentence": "Das Auto ist neu",
          "grammar": "Neuter",
          "translation": "Car"
        },
        {
          "noun": "Flugzeug",
          "article": "Das",
          "sentence": "Das Flugzeug ist groß",
          "grammar": "Neuter",
          "translation": "Airplane"
        },
        {
          "noun": "Bahnhof",
          "article": "Der",
          "sentence": "Der Bahnhof ist alt",
          "grammar": "Masculine",
          "translation": "Train station"
        },
        {
          "noun": "Zug",
          "article": "Der",
          "sentence": "Der Zug ist pünktlich",
          "grammar": "Masculine",
          "translation": "Train"
        },
        {
          "noun": "Reise",
          "article": "Die",
          "sentence": "Die Reise war lang",
          "grammar": "Feminine",
          "translation": "Journey"
        },
        {
          "noun": "Koffer",
          "article": "Der",
          "sentence": "Der Koffer ist schwer",
          "grammar": "Masculine",
          "translation": "Suitcase"
        },
        {
          "noun": "Hund",
          "article": "Der",
          "sentence": "Der Hund ist freundlich",
          "grammar": "Masculine",
          "translation": "Dog"
        },
        {
          "noun": "Katze",
          "article": "Die",
          "sentence": "Die Katze ist faul",
          "grammar": "Feminine",
          "translation": "Cat"
        },
        {
          "noun": "Blume",
          "article": "Die",
          "sentence": "Die Blume ist schön",
          "grammar": "Feminine",
          "translation": "Flower"
        },
        {
          "noun": "Baum",
          "article": "Der",
          "sentence": "Der Baum ist groß",
          "grammar": "Masculine",
          "translation": "Tree"
        },
        {
          "noun": "Garten",
          "article": "Der",
          "sentence": "Der Garten ist bunt",
          "grammar": "Masculine",
          "translation": "Garden"
        },
        {
          "noun": "Blatt",
          "article": "Das",
          "sentence": "Das Blatt ist grün",
          "grammar": "Neuter",
          "translation": "Leaf"
        },
        {
          "noun": "Wiese",
          "article": "Die",
          "sentence": "Die Wiese ist grün",
          "grammar": "Feminine",
          "translation": "Meadow"
        },
        {
          "noun": "Hecke",
          "article": "Die",
          "sentence": "Die Hecke ist hoch",
          "grammar": "Feminine",
          "translation": "Hedge"
        },
        {
          "noun": "Zaun",
          "article": "Der",
          "sentence": "Der Zaun ist neu",
          "grammar": "Masculine",
          "translation": "Fence"
        },
        {
          "noun": "Straße",
          "article": "Die",
          "sentence": "Die Straße ist breit",
          "grammar": "Feminine",
          "translation": "Street"
        },
        {
          "noun": "Brücke",
          "article": "Die",
          "sentence": "Die Brücke ist alt",
          "grammar": "Feminine",
          "translation": "Bridge"
        },
        {
          "noun": "Ufer",
          "article": "Das",
          "sentence": "Das Ufer ist steinig",
          "grammar": "Neuter",
          "translation": "Shore"
        },
        {
          "noun": "Boot",
          "article": "Das",
          "sentence": "Das Boot ist klein",
          "grammar": "Neuter",
          "translation": "Boat"
        },
        {
          "noun": "Fluss",
          "article": "Der",
          "sentence": "Der Fluss ist tief",
          "grammar": "Masculine",
          "translation": "River"
        },
        {
          "noun": "Berg",
          "article": "Der",
          "sentence": "Der Berg ist hoch",
          "grammar": "Masculine",
          "translation": "Mountain"
        },
        {
          "noun": "Wald",
          "article": "Der",
          "sentence": "Der Wald ist dunkel",
          "grammar": "Masculine",
          "translation": "Forest"
        },
        {
          "noun": "Weg",
          "article": "Der",
          "sentence": "Der Weg ist lang",
          "grammar": "Masculine",
          "translation": "Path"
        },
        {
          "noun": "Dorf",
          "article": "Das",
          "sentence": "Das Dorf ist klein",
          "grammar": "Neuter",
          "translation": "Village"
        },
        {
          "noun": "Stadt",
          "article": "Die",
          "sentence": "Die Stadt ist groß",
          "grammar": "Feminine",
          "translation": "City"
        },
        {
          "noun": "Land",
          "article": "Das",
          "sentence": "Das Land ist weit",
          "grammar": "Neuter",
          "translation": "Country"
        },
        {
          "noun": "Schule",
          "article": "Die",
          "sentence": "Die Schule ist neu",
          "grammar": "Feminine",
          "translation": "School"
        },
        {
          "noun": "Bäckerei",
          "article": "Die",
          "sentence": "Die Bäckerei ist geschlossen",
          "grammar": "Feminine",
          "translation": "Bakery"
        },
        {
          "noun": "Supermarkt",
          "article": "Der",
          "sentence": "Der Supermarkt ist groß",
          "grammar": "Masculine",
          "translation": "Supermarket"
        },
        {
          "noun": "Apotheke",
          "article": "Die",
          "sentence": "Die Apotheke ist geöffnet",
          "grammar": "Feminine",
          "translation": "Pharmacy"
        },
        {
          "noun": "Markt",
          "article": "Der",
          "sentence": "Der Markt ist voll",
          "grammar": "Masculine",
          "translation": "Market"
        },
        {
          "noun": "Friseur",
          "article": "Der",
          "sentence": "Der Friseur ist freundlich",
          "grammar": "Masculine",
          "translation": "Hairdresser"
        },
        {
          "noun": "Bibliothek",
          "article": "Die",
          "sentence": "Die Bibliothek ist ruhig",
          "grammar": "Feminine",
          "translation": "Library"
        },
        {
          "noun": "Park",
          "article": "Der",
          "sentence": "Der Park ist schön",
          "grammar": "Masculine",
          "translation": "Park"
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


*/
