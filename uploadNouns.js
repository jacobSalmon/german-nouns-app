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
  },
  {
    "noun": "Lampe",
    "article": "Die",
    "sentence": "Die Lampe spendete ein warmes Licht im Raum.",
    "grammar": "Feminine",
    "translation": "Lamp"
  },
  {
    "noun": "Schublade",
    "article": "Die",
    "sentence": "Die Schublade im Schreibtisch war voller alter Briefe.",
    "grammar": "Feminine",
    "translation": "Drawer"
  },
  {
    "noun": "Gefahr",
    "article": "Die",
    "sentence": "Die Gefahr eines Unfalls war aufgrund des schlechten Wetters hoch.",
    "grammar": "Feminine",
    "translation": "Danger"
  },
  {
    "noun": "Detektiv",
    "article": "Der",
    "sentence": "Der Detektiv löste den Fall nach intensiven Ermittlungen.",
    "grammar": "Masculine",
    "translation": "Detective"
  },
  {
    "noun": "Augenblick",
    "article": "Der",
    "sentence": "Der Augenblick des Abschieds war emotional.",
    "grammar": "Masculine",
    "translation": "Instant"
  },
  {
    "noun": "Denken",
    "article": "Das",
    "sentence": "Das Denken über die Zukunft bereitete ihr Sorgen.",
    "grammar": "Neuter",
    "translation": "Thinking"
  },
  {
    "noun": "Riss",
    "article": "Der",
    "sentence": "Der Riss in der Wand musste repariert werden.",
    "grammar": "Masculine",
    "translation": "Crack"
  },
  {
    "noun": "Gebet",
    "article": "Das",
    "sentence": "Das Gebet war eine Quelle der Hoffnung und des Trostes.",
    "grammar": "Neuter",
    "translation": "Prayer"
  },
  {
    "noun": "Handtuch",
    "article": "Das",
    "sentence": "Das Handtuch lag auf dem Badewannenrand.",
    "grammar": "Neuter",
    "translation": "Towel"
  },
  {
    "noun": "Handschuh",
    "article": "Der",
    "sentence": "Der Handschuh hielt ihre Hände warm.",
    "grammar": "Masculine",
    "translation": "Glove"
  },
  {
    "noun": "Bucht",
    "article": "Die",
    "sentence": "Die Bucht war ein idyllischer Ort zum Schwimmen und Entspannen.",
    "grammar": "Feminine",
    "translation": "Bay"
  },
  {
    "noun": "Publikum",
    "article": "Das",
    "sentence": "Das Publikum klatschte begeistert nach der Vorstellung.",
    "grammar": "Neuter",
    "translation": "Audience"
  },
  {
    "noun": "Dose",
    "article": "Die",
    "sentence": "Die Dose enthielt frische Kekse.",
    "grammar": "Feminine",
    "translation": "Can"
  },
  {
    "noun": "Zustand",
    "article": "Der",
    "sentence": "Der Zustand des Patienten verbesserte sich langsam.",
    "grammar": "Masculine",
    "translation": "Condition"
  },
  {
    "noun": "Pfad",
    "article": "Der",
    "sentence": "Der Pfad führte sie durch den dichten Wald.",
    "grammar": "Masculine",
    "translation": "Trail"
  },
  {
    "noun": "Taille",
    "article": "Die",
    "sentence": "Die Taille des Kleides war mit einer Schleife verziert.",
    "grammar": "Feminine",
    "translation": "Waist"
  },
  {
    "noun": "Druck",
    "article": "Der",
    "sentence": "Der Druck in den Reifen war zu niedrig.",
    "grammar": "Masculine",
    "translation": "Pressure"
  },
  {
    "noun": "Telefon",
    "article": "Das",
    "sentence": "Das Telefon klingelte laut im Flur.",
    "grammar": "Neuter",
    "translation": "Telephone"
  },
  {
    "noun": "Waschbecken",
    "article": "Das",
    "sentence": "Das Waschbecken im Badezimmer war aus Marmor.",
    "grammar": "Neuter",
    "translation": "Sink"
  },
  {
    "noun": "Rückkehr",
    "article": "Die",
    "sentence": "Die Rückkehr nach Hause war für sie eine Erleichterung.",
    "grammar": "Feminine",
    "translation": "Return"
  },
  {
    "noun": "Brise",
    "article": "Die",
    "sentence": "Die Brise vom Meer sorgte für angenehme Abkühlung.",
    "grammar": "Feminine",
    "translation": "Breeze"
  },
  {
    "noun": "Geschmack",
    "article": "Der",
    "sentence": "Der Geschmack des Essens war köstlich.",
    "grammar": "Masculine",
    "translation": "Taste"
  },
  {
    "noun": "Fehler",
    "article": "Der",
    "sentence": "Der Fehler im Code führte zu einem Programmabsturz.",
    "grammar": "Masculine",
    "translation": "Fault"
  },
  {
    "noun": "Strom",
    "article": "Der",
    "sentence": "Der Strom der Menschenmenge floss durch die Straßen.",
    "grammar": "Masculine",
    "translation": "Stream"
  },
  {
    "noun": "Ergebnis",
    "article": "Das",
    "sentence": "Das Ergebnis der Prüfung war besser als erwartet.",
    "grammar": "Neuter",
    "translation": "Result"
  },
  {
    "noun": "Autor",
    "article": "Der",
    "sentence": "Der Autor des Buches wurde für seine literarischen Werke ausgezeichnet.",
    "grammar": "Masculine",
    "translation": "Author"
  },
  {
    "noun": "Tipp",
    "article": "Der",
    "sentence": "Der Tipp des Experten erwies sich als äußerst hilfreich.",
    "grammar": "Masculine",
    "translation": "Tip"
  },
  {
    "noun": "Dusche",
    "article": "Die",
    "sentence": "Die Dusche war erfrischend nach einem langen Tag.",
    "grammar": "Feminine",
    "translation": "Shower"
  },
  {
    "noun": "Zehe",
    "article": "Die",
    "sentence": "Die Zehe war nach dem Stoß gegen den Tisch blau angelaufen.",
    "grammar": "Feminine",
    "translation": "Toe"
  },
  {
    "noun": "Jahreszeit",
    "article": "Die",
    "sentence": "Die Jahreszeit beeinflusst das Wachstum der Pflanzen.",
    "grammar": "Feminine",
    "translation": "Season"
  },
  {
    "noun": "Hälfte",
    "article": "Die",
    "sentence": "Die Hälfte des Kuchens war schon aufgegessen.",
    "grammar": "Feminine",
    "translation": "Half"
  },
  {
    "noun": "Narr",
    "article": "Der",
    "sentence": "Der Narr am Hofe sorgte für Unterhaltung.",
    "grammar": "Masculine",
    "translation": "Fool"
  },
  {
    "noun": "Tunnel",
    "article": "Der",
    "sentence": "Der Tunnel führte unter dem Fluss hindurch.",
    "grammar": "Masculine",
    "translation": "Tunnel"
  },
  {
    "noun": "Kunde",
    "article": "Der",
    "sentence": "Der Kunde war mit dem Service zufrieden.",
    "grammar": "Masculine",
    "translation": "Client"
  },
  {
    "noun": "Garage",
    "article": "Die",
    "sentence": "Die Garage bot ausreichend Platz für zwei Autos.",
    "grammar": "Feminine",
    "translation": "Garage"
  },
  {
    "noun": "Mission",
    "article": "Die",
    "sentence": "Die Mission war erfolgreich abgeschlossen worden.",
    "grammar": "Feminine",
    "translation": "Mission"
  },
  {
    "noun": "Chef",
    "article": "Der",
    "sentence": "Der Chef gab klare Anweisungen für das Projekt.",
    "grammar": "Masculine",
    "translation": "Chief"
  },
  {
    "noun": "Kugel",
    "article": "Die",
    "sentence": "Die Kugel durchschlug die Fensterscheibe.",
    "grammar": "Feminine",
    "translation": "Bullet"
  },
  {
    "noun": "Markt",
    "article": "Der",
    "sentence": "Der Markt war voller bunter Stände und Menschen.",
    "grammar": "Masculine",
    "translation": "Market"
  },
  {
    "noun": "Verlust",
    "article": "Der",
    "sentence": "Der Verlust des geliebten Haustiers war schwer zu verkraften.",
    "grammar": "Masculine",
    "translation": "Loss"
  },
  {
    "noun": "Serie",
    "article": "Die",
    "sentence": "Die Serie hatte viele spannende Episoden.",
    "grammar": "Feminine",
    "translation": "Series"
  },
  {
    "noun": "Stift",
    "article": "Der",
    "sentence": "Der Stift lag auf dem Schreibtisch neben dem Notizbuch.",
    "grammar": "Masculine",
    "translation": "Pen"
  },
  {
    "noun": "Begriff",
    "article": "Der",
    "sentence": "Der Begriff 'Kultur' kann auf verschiedene Weisen interpretiert werden.",
    "grammar": "Masculine",
    "translation": "Term"
  },
  {
    "noun": "Gedicht",
    "article": "Das",
    "sentence": "Das Gedicht wurde von einem bekannten Dichter verfasst.",
    "grammar": "Neuter",
    "translation": "Poem"
  },
  {
    "noun": "Prinz",
    "article": "Der",
    "sentence": "Der Prinz heiratete eine Prinzessin aus einem fernen Land.",
    "grammar": "Masculine",
    "translation": "Prince"
  },
  {
    "noun": "Ton",
    "article": "Der",
    "sentence": "Der Ton der Musik war besonders melodisch.",
    "grammar": "Masculine",
    "translation": "Clay"
  },
  {
    "noun": "Schloss",
    "article": "Das",
    "sentence": "Das Schloss an der Tür war alt und rostig.",
    "grammar": "Neuter",
    "translation": "Lock"
  },
  {
    "noun": "Realität",
    "article": "Die",
    "sentence": "Die Realität kann manchmal härter sein als die Vorstellung.",
    "grammar": "Feminine",
    "translation": "Reality"
  },
  {
    "noun": "Schlange",
    "article": "Die",
    "sentence": "Die Schlange bewegte sich lautlos durch das Gras.",
    "grammar": "Feminine",
    "translation": "Snake"
  },
  {
    "noun": "Apfel",
    "article": "Der",
    "sentence": "Der Apfel war saftig und süß.",
    "grammar": "Masculine",
    "translation": "Apple"
  },
  {
    "noun": "Maske",
    "article": "Die",
    "sentence": "Die Maske bedeckte ihr Gesicht vollständig.",
    "grammar": "Feminine",
    "translation": "Mask"
  },
  {
    "noun": "Kunde",
    "article": "Der",
    "sentence": "Der Kunde war mit dem Service zufrieden.",
    "grammar": "Masculine",
    "translation": "Customer"
  },
  {
    "noun": "Geburt",
    "article": "Die",
    "sentence": "Die Geburt des Kindes war ein freudiges Ereignis für die Familie.",
    "grammar": "Feminine",
    "translation": "Birth"
  },
  {
    "noun": "Pause",
    "article": "Die",
    "sentence": "Die Pause zwischen den Vorlesungen war eine willkommene Gelegenheit zum Ausruhen.",
    "grammar": "Feminine",
    "translation": "Break"
  },
  {
    "noun": "Wunder",
    "article": "Das",
    "sentence": "Das Wunder der Natur faszinierte die Forscher.",
    "grammar": "Neuter",
    "translation": "Wonder"
  },
  {
    "noun": "Panzer",
    "article": "Der",
    "sentence": "Der Panzer war gut gepanzert und schwer bewaffnet.",
    "grammar": "Masculine",
    "translation": "Tank"
  },
  {
    "noun": "Personal",
    "article": "Das",
    "sentence": "Das Personal im Restaurant war sehr freundlich.",
    "grammar": "Neuter",
    "translation": "Staff"
  },
  {
    "noun": "Lüge",
    "article": "Die",
    "sentence": "Die Lüge wurde schnell entlarvt.",
    "grammar": "Feminine",
    "translation": "Lie"
  },
  {
    "noun": "Glaube",
    "article": "Der",
    "sentence": "Der Glaube gibt vielen Menschen Halt in schweren Zeiten.",
    "grammar": "Masculine",
    "translation": "Faith"
  },
  {
    "noun": "Ehre",
    "article": "Die",
    "sentence": "Die Ehre gebührt denen, die für ihre Überzeugungen einstehen.",
    "grammar": "Feminine",
    "translation": "Honor"
  },
  {
    "noun": "Sahne",
    "article": "Die",
    "sentence": "Die Sahne verfeinerte den Geschmack des Desserts.",
    "grammar": "Feminine",
    "translation": "Cream"
  },
  {
    "noun": "Grund",
    "article": "Der",
    "sentence": "Der Grund für sein Verhalten blieb unklar.",
    "grammar": "Masculine",
    "translation": "Sake"
  },
  {
    "noun": "Opfer",
    "article": "Das",
    "sentence": "Das Opfer wurde im Krankenhaus versorgt.",
    "grammar": "Neuter",
    "translation": "Victim"
  },
  {
    "noun": "Möglichkeit",
    "article": "Die",
    "sentence": "Die Möglichkeit einer Fortsetzung der Verhandlungen wurde erwogen.",
    "grammar": "Feminine",
    "translation": "Possibility"
  },
  {
    "noun": "Kontakt",
    "article": "Der",
    "sentence": "Der Kontakt zu alten Freunden wurde durch soziale Medien wieder hergestellt.",
    "grammar": "Masculine",
    "translation": "Contact"
  },
  {
    "noun": "Stimmung",
    "article": "Die",
    "sentence": "Die Stimmung auf der Party war ausgelassen und fröhlich.",
    "grammar": "Feminine",
    "translation": "Mood"
  },
  {
    "noun": "Daumen",
    "article": "Der",
    "sentence": "Der Daumen ist der dickste Finger an der Hand.",
    "grammar": "Masculine",
    "translation": "Thumb"
  },
  {
    "noun": "Lesen",
    "article": "Das",
    "sentence": "Das Lesen war schon immer ihre Leidenschaft gewesen.",
    "grammar": "Neuter",
    "translation": "Reading"
  },
  {
    "noun": "Spaß",
    "article": "Der",
    "sentence": "Der Spaß an der Sache war ihnen anzumerken.",
    "grammar": "Masculine",
    "translation": "Fun"
  },
  {
    "noun": "Merkmal",
    "article": "Das",
    "sentence": "Das Merkmal dieser Region sind die hohen Berge.",
    "grammar": "Neuter",
    "translation": "Feature"
  },
  {
    "noun": "Eintrittskarte",
    "article": "Die",
    "sentence": "Die Eintrittskarte für das Konzert war schnell ausverkauft.",
    "grammar": "Feminine",
    "translation": "Ticket"
  },
  {
    "noun": "Alien",
    "article": "Das",
    "sentence": "Das Alien aus dem Science-Fiction-Film war sehr realistisch gestaltet.",
    "grammar": "Neuter",
    "translation": "Alien"
  },
  {
    "noun": "Lektion",
    "article": "Die",
    "sentence": "Die Lektionen im Sprachkurs waren gut strukturiert.",
    "grammar": "Feminine",
    "translation": "Lesson"
  },
  {
    "noun": "Wüste",
    "article": "Die",
    "sentence": "Die Wüste erstreckte sich kilometerweit in alle Richtungen.",
    "grammar": "Feminine",
    "translation": "Desert"
  },
  {
    "noun": "Schnitt",
    "article": "Der",
    "sentence": "Der Schnitt des Kleides gefiel ihr besonders gut.",
    "grammar": "Masculine",
    "translation": "Cut"
  },
  {
    "noun": "Warnung",
    "article": "Die",
    "sentence": "Die Warnung vor dem Unwetter wurde rechtzeitig herausgegeben.",
    "grammar": "Feminine",
    "translation": "Warning"
  },
  {
    "noun": "Märchen",
    "article": "Das",
    "sentence": "Das Märchen von der Prinzessin und dem Drachen war ihr Lieblingsbuch.",
    "grammar": "Neuter",
    "translation": "Tale"
  },
  {
    "noun": "Beerdigung",
    "article": "Die",
    "sentence": "Die Beerdigungen sind oft von tiefer Trauer geprägt.",
    "grammar": "Feminine",
    "translation": "Funeral"
  },
  {
    "noun": "Taxi",
    "article": "Das",
    "sentence": "Das Taxi brachte sie direkt zum Flughafen.",
    "grammar": "Neuter",
    "translation": "Cab"
  },
  {
    "noun": "Reporter",
    "article": "Der",
    "sentence": "Der Reporter berichtete live von der Szene des Unfalls.",
    "grammar": "Masculine",
    "translation": "Reporter"
  },
  {
    "noun": "Geschenk",
    "article": "Das",
    "sentence": "Das Geschenk war liebevoll verpackt und mit einer Schleife versehen.",
    "grammar": "Neuter",
    "translation": "Present"
  },
  {
    "noun": "Theater",
    "article": "Das",
    "sentence": "Das Theaterstück war ein großer Erfolg beim Publikum.",
    "grammar": "Neuter",
    "translation": "Theater"
  },
  {
    "noun": "Tropfen",
    "article": "Die",
    "sentence": "Die Tropfen des Regens prasselten laut auf das Dach.",
    "grammar": "Feminine (Plural)",
    "translation": "Drops"
  },
  {
    "noun": "Schnur",
    "article": "Die",
    "sentence": "Die Schnur war fest um den Baum gebunden.",
    "grammar": "Feminine",
    "translation": "String"
  },
  {
    "noun": "Rede",
    "article": "Die",
    "sentence": "Die Reden der Politiker waren oft lang und ausführlich.",
    "grammar": "Feminine",
    "translation": "Speech"
  },
  {
    "noun": "Exemplar",
    "article": "Das",
    "sentence": "Das Exemplar des Buches war in einem guten Zustand.",
    "grammar": "Neuter",
    "translation": "Copy"
  },
  {
    "noun": "Kuh",
    "article": "Die",
    "sentence": "Die Kühe auf der Weide wurden täglich gemolken.",
    "grammar": "Feminine",
    "translation": "Cow"
  },
  {
    "noun": "Arbeiter",
    "article": "Der",
    "sentence": "Der Arbeiter arbeitete hart, um seine Familie zu unterstützen.",
    "grammar": "Masculine",
    "translation": "Worker"
  },
  {
    "noun": "Oberschenkel",
    "article": "Der",
    "sentence": "Der Oberschenkel schmerzte nach dem langen Lauf.",
    "grammar": "Masculine",
    "translation": "Thigh"
  },
  {
    "noun": "Labor",
    "article": "Das",
    "sentence": "Das Labor war mit modernster Technologie ausgestattet.",
    "grammar": "Neuter",
    "translation": "Lab"
  },
  {
    "noun": "Rolle",
    "article": "Die",
    "sentence": "Die Rollen der Hauptdarstellerin waren vielfältig.",
    "grammar": "Feminine",
    "translation": "Role"
  },
  {
    "noun": "Frucht",
    "article": "Die",
    "sentence": "Die Früchte des Gartens waren reif und süß.",
    "grammar": "Feminine",
    "translation": "Fruit"
  },
  {
    "noun": "Patch",
    "article": "Das",
    "sentence": "Das Patch auf der Jacke machte sie einzigartig.",
    "grammar": "Neuter",
    "translation": "Patch"
  },
  {
    "noun": "Dollar",
    "article": "Der",
    "sentence": "Der Dollar ist eine wichtige Währung in vielen Ländern.",
    "grammar": "Masculine",
    "translation": "Buck"
  },
  {
    "noun": "Ziegel",
    "article": "Der",
    "sentence": "Der Ziegel wurde für den Bau des Hauses verwendet.",
    "grammar": "Masculine",
    "translation": "Brick"
  },
  {
    "noun": "Gewehr",
    "article": "Das",
    "sentence": "Das Gewehr lag auf dem Tisch des Jägers.",
    "grammar": "Neuter",
    "translation": "Rifle"
  },
  {
    "noun": "Karriere",
    "article": "Die",
    "sentence": "Die Karrieren der beiden Sportler verliefen sehr erfolgreich.",
    "grammar": "Feminine",
    "translation": "Career"
  },
  {
    "noun": "Ausgabe",
    "article": "Die",
    "sentence": "Die Ausgaben für das neue Projekt waren höher als erwartet.",
    "grammar": "Feminine",
    "translation": "Issue"
  },
  {
    "noun": "Gelegenheit",
    "article": "Die",
    "sentence": "Die Gelegenheit, ins Ausland zu reisen, ergab sich unerwartet.",
    "grammar": "Feminine",
    "translation": "Opportunity"
  },
  {
    "noun": "Regisseur",
    "article": "Der",
    "sentence": "Der Regisseur führte die Schauspieler professionell durch die Dreharbeiten.",
    "grammar": "Masculine",
    "translation": "Director"
  },
  {
    "noun": "Monster",
    "article": "Das",
    "sentence": "Das Monster im Film war besonders furchterregend gestaltet.",
    "grammar": "Neuter",
    "translation": "Monster"
  },
  {
    "noun": "Fahrzeug",
    "article": "Das",
    "sentence": "Das Fahrzeug war mit moderner Technik ausgestattet.",
    "grammar": "Neuter",
    "translation": "Vehicle"
  },
  {
    "noun": "Gasse",
    "article": "Die",
    "sentence": "Die Gassen in der Altstadt waren eng und malerisch.",
    "grammar": "Feminine",
    "translation": "Alley"
  },
  {
    "noun": "Ärmel",
    "article": "Der",
    "sentence": "Die Ärmel seiner Jacke waren zu lang.",
    "grammar": "Masculine",
    "translation": "Sleeve"
  },
  {
    "noun": "Grab",
    "article": "Das",
    "sentence": "Das Grab auf dem Friedhof war mit Blumen geschmückt.",
    "grammar": "Neuter",
    "translation": "Grave"
  },
  {
    "noun": "Busch",
    "article": "Der",
    "sentence": "Die Büsche vor dem Haus waren schön geschnitten.",
    "grammar": "Masculine",
    "translation": "Bush"
  },
  {
    "noun": "Esszimmer",
    "article": "Das",
    "sentence": "Das Esszimmer war für das Familienessen vorbereitet.",
    "grammar": "Neuter",
    "translation": "Dining"
  },
  {
    "noun": "Öffnung",
    "article": "Die",
    "sentence": "Die Öffnungen in der Mauer waren groß genug für die Belüftung.",
    "grammar": "Feminine",
    "translation": "Opening"
  },
  {
    "noun": "Zwilling",
    "article": "Das",
    "sentence": "Das Zwilling kam gerade zur Welt und war gesund.",
    "grammar": "Neuter",
    "translation": "Twin"
  },
  {
    "noun": "Scheune",
    "article": "Die",
    "sentence": "Die Scheunen auf dem Bauernhof waren mit Heu gefüllt.",
    "grammar": "Feminine",
    "translation": "Barn"
  },
  {
    "noun": "Pfund",
    "article": "Das",
    "sentence": "Das Pfund Kaffee war im Sonderangebot.",
    "grammar": "Neuter",
    "translation": "Pound"
  },
  {
    "noun": "Seite",
    "article": "Die",
    "sentence": "Die Seiten des Buches waren mit Illustrationen verziert.",
    "grammar": "Feminine",
    "translation": "Site"
  },
  {
    "noun": "Blitz",
    "article": "Der",
    "sentence": "Der Blitz erleuchtete den Himmel während des Gewitters.",
    "grammar": "Masculine",
    "translation": "Flash"
  },
  {
    "noun": "Richter",
    "article": "Der",
    "sentence": "Der Richter verkündete das Urteil nach der Verhandlung.",
    "grammar": "Masculine",
    "translation": "Judge"
  },
  {
    "noun": "Masse",
    "article": "Die",
    "sentence": "Die Massen strömten zum Konzert des Superstars.",
    "grammar": "Feminine",
    "translation": "Mass"
  },
  {
    "noun": "Prozess",
    "article": "Der",
    "sentence": "Der Prozess gegen den Angeklagten dauerte mehrere Wochen.",
    "grammar": "Masculine",
    "translation": "Process"
  },
  {
    "noun": "Krawatte",
    "article": "Die",
    "sentence": "Die Krawatten des Anwalts waren immer farbenfroh.",
    "grammar": "Feminine",
    "translation": "Tie"
  },
  {
    "noun": "Geldbörse",
    "article": "Die",
    "sentence": "Die Geldbörsen der Damen lagen auf dem Tisch.",
    "grammar": "Feminine",
    "translation": "Purse"
  },
  {
    "noun": "Pfeife",
    "article": "Die",
    "sentence": "Die Pfeifenraucher versammelten sich im Raucherraum.",
    "grammar": "Feminine",
    "translation": "Pipe"
  },
  {
    "noun": "Drache",
    "article": "Der",
    "sentence": "Der Drache spie Feuer aus seinem Maul.",
    "grammar": "Masculine",
    "translation": "Dragon"
  },
  {
    "noun": "Horizont",
    "article": "Der",
    "sentence": "Der Horizont verschwand am Abendhimmel.",
    "grammar": "Masculine",
    "translation": "Horizon"
  },
  {
    "noun": "Tablett",
    "article": "Das",
    "sentence": "Das Tablett mit dem Abendessen stand bereits auf dem Tisch.",
    "grammar": "Neuter",
    "translation": "Tray"
  },
  {
    "noun": "Umschlag",
    "article": "Der",
    "sentence": "Der Umschlag enthielt eine wichtige Mitteilung.",
    "grammar": "Masculine",
    "translation": "Envelope"
  },
  {
    "noun": "Scheck",
    "article": "Der",
    "sentence": "Der Scheck wurde pünktlich auf das Konto eingezahlt.",
    "grammar": "Masculine",
    "translation": "Check"
  },
  {
    "noun": "Erwachsene",
    "article": "Der",
    "sentence": "Der Erwachsene nahm seine Verantwortung ernst.",
    "grammar": "Masculine",
    "translation": "Adult"
  },
  {
    "noun": "Notfall",
    "article": "Der",
    "sentence": "Der Notfall erforderte schnelles Handeln.",
    "grammar": "Masculine",
    "translation": "Emergency"
  },
  {
    "noun": "Material",
    "article": "Das",
    "sentence": "Das Material für den Bau des Hauses wurde geliefert.",
    "grammar": "Neuter",
    "translation": "Material"
  },
  {
    "noun": "Gewohnheit",
    "article": "Die",
    "sentence": "Die Gewohnheiten ändern sich oft im Laufe der Zeit.",
    "grammar": "Feminine",
    "translation": "Habit"
  },
  {
    "noun": "Künstler",
    "article": "Der",
    "sentence": "Der Künstler malte ein beeindruckendes Gemälde.",
    "grammar": "Masculine",
    "translation": "Artist"
  },
  {
    "noun": "Adresse",
    "article": "Die",
    "sentence": "Die Adressen der Kunden wurden im System gespeichert.",
    "grammar": "Feminine",
    "translation": "Address"
  },
  {
    "noun": "Duft",
    "article": "Der",
    "sentence": "Der Duft von frisch gebackenem Brot lag in der Luft.",
    "grammar": "Masculine",
    "translation": "Scent"
  },
  {
    "noun": "Universum",
    "article": "Das",
    "sentence": "Das Universum ist unendlich und faszinierend.",
    "grammar": "Neuter",
    "translation": "Universe"
  },
  {
    "noun": "Nicken",
    "article": "Das",
    "sentence": "Das Nicken des Chefs signalisierte Zustimmung.",
    "grammar": "Neuter",
    "translation": "Nod"
  },
  {
    "noun": "Muschel",
    "article": "Die",
    "sentence": "Die Muscheln am Strand waren wunderschön.",
    "grammar": "Feminine",
    "translation": "Shell"
  },
  {
    "noun": "Gemeinschaft",
    "article": "Die",
    "sentence": "Die Gemeinschaft organisierte ein Sommerfest für alle Bewohner.",
    "grammar": "Feminine",
    "translation": "Community"
  },
  {
    "noun": "Start",
    "article": "Der",
    "sentence": "Der Start des Rennens wurde von vielen Zuschauern beobachtet.",
    "grammar": "Masculine",
    "translation": "Start"
  },
  {
    "noun": "Wunde",
    "article": "Die",
    "sentence": "Die Wunden des Verletzten mussten schnell versorgt werden.",
    "grammar": "Feminine",
    "translation": "Wound"
  },
  {
    "noun": "Maus",
    "article": "Die",
    "sentence": "Die Mäuse im Garten waren eine Plage für die Gärtnerin.",
    "grammar": "Feminine",
    "translation": "Mouse"
  },
  {
    "noun": "Kerl",
    "article": "Der",
    "sentence": "Die Kerle in der Bar lachten laut.",
    "grammar": "Masculine",
    "translation": "Fellow"
  },
  {
    "noun": "Angelegenheit",
    "article": "Die",
    "sentence": "Die Angelegenheiten der Firma wurden intern besprochen.",
    "grammar": "Feminine",
    "translation": "Affair"
  },
  {
    "noun": "Küste",
    "article": "Die",
    "sentence": "Die Küsten Spaniens sind bekannt für ihre Schönheit.",
    "grammar": "Feminine",
    "translation": "Shore"
  },
  {
    "noun": "General",
    "article": "Der",
    "sentence": "Die Generäle planten die nächste Militäroperation.",
    "grammar": "Masculine",
    "translation": "General"
  },
  {
    "noun": "Wurzel",
    "article": "Die",
    "sentence": "Die Wurzeln des Baumes reichen tief in die Erde.",
    "grammar": "Feminine",
    "translation": "Root"
  },
  {
    "noun": "Umhang",
    "article": "Der",
    "sentence": "Die Umhänge der Ritter waren mit Wappen verziert.",
    "grammar": "Masculine",
    "translation": "Robe"
  },
  {
    "noun": "Sorge",
    "article": "Die",
    "sentence": "Die Sorgen der Eltern um ihre Kinder waren groß.",
    "grammar": "Feminine",
    "translation": "Concern"
  },
  {
    "noun": "Presse",
    "article": "Die",
    "sentence": "Die Presse berichtete über die politischen Ereignisse.",
    "grammar": "Feminine",
    "translation": "Press"
  },
  {
    "noun": "Ratte",
    "article": "Die",
    "sentence": "Die Ratten wurden aus der Stadt vertrieben.",
    "grammar": "Feminine",
    "translation": "Rat"
  },
  {
    "noun": "Gesellschaft",
    "article": "Die",
    "sentence": "Die Gesellschaft war auf dem Fest gut gelaunt.",
    "grammar": "Feminine",
    "translation": "Society"
  },
  {
    "noun": "Stil",
    "article": "Der",
    "sentence": "Der Stil des Hauses war modern und minimalistisch.",
    "grammar": "Masculine",
    "translation": "Style"
  },
  {
    "noun": "Bezirk",
    "article": "Der",
    "sentence": "Die Bezirke der Stadt waren unterschiedlich belebt.",
    "grammar": "Masculine",
    "translation": "County"
  },
  {
    "noun": "Befehl",
    "article": "Der",
    "sentence": "Der Befehl wurde direkt an die Truppen übermittelt.",
    "grammar": "Masculine",
    "translation": "Command"
  },
  {
    "noun": "Besucher",
    "article": "Der",
    "sentence": "Die Besucher des Museums bewunderten die Gemälde.",
    "grammar": "Masculine",
    "translation": "Visitor"
  },
  {
    "noun": "Modell",
    "article": "Das",
    "sentence": "Das Modell des Autos wurde auf der Messe präsentiert.",
    "grammar": "Neuter",
    "translation": "Model"
  },
  {
    "noun": "Kammer",
    "article": "Die",
    "sentence": "Die Kammern des Schlosses waren mit antiken Möbeln ausgestattet.",
    "grammar": "Feminine",
    "translation": "Chamber"
  },
  {
    "noun": "Tier",
    "article": "Das",
    "sentence": "Das Tier im Zoo war ein seltenes Exemplar.",
    "grammar": "Neuter",
    "translation": "Beast"
  },
  {
    "noun": "Strauß",
    "article": "Der",
    "sentence": "Die Sträuße auf dem Markt dufteten herrlich nach Rosen.",
    "grammar": "Masculine",
    "translation": "Bunch"
  },
  {
    "noun": "Hintergrund",
    "article": "Der",
    "sentence": "Die Hintergründe der Geschichte waren komplex und vielschichtig.",
    "grammar": "Masculine",
    "translation": "Background"
  },
  {
    "noun": "Einheit",
    "article": "Die",
    "sentence": "Die Einheiten der Armee wurden zu einem Einsatz gerufen.",
    "grammar": "Feminine",
    "translation": "Unit"
  },
  {
    "noun": "Möbel",
    "article": "Das",
    "sentence": "Die Möbel in der Wohnung waren alle aus Holz.",
    "grammar": "Neuter",
    "translation": "Furniture"
  },
  {
    "noun": "Nagel",
    "article": "Der",
    "sentence": "Die Nägel in der Wand hielten das Bild fest.",
    "grammar": "Masculine",
    "translation": "Nail"
  },
  {
    "noun": "Schrei",
    "article": "Der",
    "sentence": "Die Schreie der Kinder waren im ganzen Haus zu hören.",
    "grammar": "Masculine",
    "translation": "Scream"
  },
  {
    "noun": "Eigentum",
    "article": "Das",
    "sentence": "Das Eigentum wurde an die Erben übertragen.",
    "grammar": "Neuter",
    "translation": "Property"
  },
  {
    "noun": "Ausrüstung",
    "article": "Die",
    "sentence": "Die Ausrüstung der Feuerwehr war topmodern.",
    "grammar": "Feminine",
    "translation": "Equipment"
  },
  {
    "noun": "Auffahrt",
    "article": "Die",
    "sentence": "Die Auffahrten zu den Häusern waren steil und kurvig.",
    "grammar": "Feminine",
    "translation": "Driveway"
  },
  {
    "noun": "Griff",
    "article": "Der",
    "sentence": "Die Griffe der Tür waren aus Messing.",
    "grammar": "Masculine",
    "translation": "Grip"
  },
  {
    "noun": "Röhre",
    "article": "Die",
    "sentence": "Die Röhren transportierten Wasser durch das Gebäude.",
    "grammar": "Feminine",
    "translation": "Tube"
  },
  {
    "noun": "Asche",
    "article": "Die",
    "sentence": "Die Aschen des Lagerfeuers wurden am nächsten Morgen entsorgt.",
    "grammar": "Feminine",
    "translation": "Ash"
  },
  {
    "noun": "Ventilator",
    "article": "Der",
    "sentence": "Die Ventilatoren im Büro sorgten für frische Luft.",
    "grammar": "Masculine",
    "translation": "Fan"
  },
  {
    "noun": "Meinung",
    "article": "Die",
    "sentence": "Die Meinungen der Experten waren geteilt.",
    "grammar": "Feminine",
    "translation": "Opinion"
  },
  {
    "noun": "Daten",
    "article": "Die",
    "sentence": "Die Daten wurden auf dem Server gespeichert.",
    "grammar": "Plural",
    "translation": "Data"
  },
  {
    "noun": "Verbindung",
    "article": "Die",
    "sentence": "Die Verbindungen zwischen den Städten wurden verbessert.",
    "grammar": "Feminine",
    "translation": "Connection"
  },
  {
    "noun": "Trick",
    "article": "Der",
    "sentence": "Die Tricks des Magiers verblüfften das Publikum.",
    "grammar": "Masculine",
    "translation": "Trick"
  },
  {
    "noun": "Geheimnis",
    "article": "Das",
    "sentence": "Das Geheimnis wurde nie vollständig gelüftet.",
    "grammar": "Neuter",
    "translation": "Mystery"
  },
  {
    "noun": "Periode",
    "article": "Die",
    "sentence": "Die Perioden des Schullebens waren klar strukturiert.",
    "grammar": "Feminine",
    "translation": "Period"
  },
  {
    "noun": "Horror",
    "article": "Der",
    "sentence": "Der Horrorfilm war sehr gruselig.",
    "grammar": "Masculine",
    "translation": "Horror"
  },
  {
    "noun": "Süßigkeiten",
    "article": "Die",
    "sentence": "Die Süßigkeiten waren bunt und lecker.",
    "grammar": "Feminine",
    "translation": "Candy"
  },
  {
    "noun": "Hündin",
    "article": "Die",
    "sentence": "Die Hündinnen spielten ausgelassen im Park.",
    "grammar": "Feminine",
    "translation": "Bitch"
  },
  {
    "noun": "Gesundheit",
    "article": "Die",
    "sentence": "Die Gesundheit ist unser höchstes Gut.",
    "grammar": "Feminine",
    "translation": "Health"
  },
  {
    "noun": "Manager",
    "article": "Der",
    "sentence": "Die Manager des Unternehmens trafen sich zur Besprechung.",
    "grammar": "Masculine",
    "translation": "Manager"
  },
  {
    "noun": "Sicherheit",
    "article": "Die",
    "sentence": "Die Sicherheit der Passagiere hat oberste Priorität.",
    "grammar": "Feminine",
    "translation": "Safety"
  },
  {
    "noun": "Höhe",
    "article": "Die",
    "sentence": "Die Höhen der Berge beeindruckten die Wanderer.",
    "grammar": "Feminine",
    "translation": "Height"
  },
  {
    "noun": "Aussehen",
    "article": "Das",
    "sentence": "Das Aussehen spielt oft eine wichtige Rolle bei der ersten Begegnung.",
    "grammar": "Neuter",
    "translation": "Appearance"
  },
  {
    "noun": "Seufzer",
    "article": "Der",
    "sentence": "Die Seufzer der Verliebten waren deutlich zu hören.",
    "grammar": "Masculine",
    "translation": "Sigh"
  },
  {
    "noun": "Mine",
    "article": "Die",
    "sentence": "Die Minenarbeiter arbeiteten hart unter Tage.",
    "grammar": "Feminine",
    "translation": "Mine"
  },
  {
    "noun": "Stoff",
    "article": "Der",
    "sentence": "Die Stoffe für die Kleider wurden sorgfältig ausgewählt.",
    "grammar": "Masculine",
    "translation": "Cloth"
  },
  {
    "noun": "Reaktion",
    "article": "Die",
    "sentence": "Die Reaktionen der Zuschauer waren gemischt.",
    "grammar": "Feminine",
    "translation": "Reaction"
  },
  {
    "noun": "Quelle",
    "article": "Die",
    "sentence": "Die Quellen des Flusses waren kristallklar.",
    "grammar": "Feminine",
    "translation": "Source"
  },
  {
    "noun": "Selbst",
    "article": "Das",
    "sentence": "Das Selbstbewusstsein ist wichtig für persönlichen Erfolg.",
    "grammar": "Neuter",
    "translation": "Self"
  },
  {
    "noun": "Pistole",
    "article": "Die",
    "sentence": "Die Pistolen der Polizisten waren geladen und gesichert.",
    "grammar": "Feminine",
    "translation": "Pistol"
  },
  {
    "noun": "Flughafen",
    "article": "Der",
    "sentence": "Die Flughäfen in großen Städten sind stark frequentiert.",
    "grammar": "Masculine",
    "translation": "Airport"
  },
  {
    "noun": "Held",
    "article": "Der",
    "sentence": "Die Helden retteten die Stadt vor der Katastrophe.",
    "grammar": "Masculine",
    "translation": "Hero"
  },
  {
    "noun": "Versprechen",
    "article": "Das",
    "sentence": "Die Versprechen sollten gehalten werden.",
    "grammar": "Neuter",
    "translation": "Promise"
  },
  {
    "noun": "Bogen",
    "article": "Der",
    "sentence": "Die Bögen des Brunnens waren kunstvoll verziert.",
    "grammar": "Masculine",
    "translation": "Bow"
  },
  {
    "noun": "Zelt",
    "article": "Das",
    "sentence": "Die Zelte der Wanderer standen im Wald aufgebaut.",
    "grammar": "Neuter",
    "translation": "Tent"
  },
  {
    "noun": "Stand",
    "article": "Der",
    "sentence": "Die Stände auf dem Markt waren gut besucht.",
    "grammar": "Masculine",
    "translation": "Booth"
  },
  {
    "noun": "Bargeld",
    "article": "Das",
    "sentence": "Das Bargeld sollte sicher verwahrt werden.",
    "grammar": "Neuter",
    "translation": "Cash"
  },
  {
    "noun": "Allee",
    "article": "Die",
    "sentence": "Die Alleen waren von alten Bäumen gesäumt.",
    "grammar": "Feminine",
    "translation": "Avenue"
  },
  {
    "noun": "T-Shirt",
    "article": "Das",
    "sentence": "Die T-Shirts waren in verschiedenen Farben erhältlich.",
    "grammar": "Neuter",
    "translation": "T-Shirt"
  },
  {
    "noun": "Teppich",
    "article": "Der",
    "sentence": "Die Teppiche im Wohnzimmer waren handgeknüpft.",
    "grammar": "Masculine",
    "translation": "Carpet"
  },
  {
    "noun": "Keller",
    "article": "Der",
    "sentence": "Die Keller des alten Hauses waren kühl und dunkel.",
    "grammar": "Masculine",
    "translation": "Basement"
  },
  {
    "noun": "Freundin",
    "article": "Die",
    "sentence": "Die Freundinnen verbrachten den Nachmittag gemeinsam.",
    "grammar": "Feminine",
    "translation": "Girlfriend"
  },
  {
    "noun": "Bart",
    "article": "Der",
    "sentence": "Die Bärte der Männer waren perfekt gestutzt.",
    "grammar": "Masculine",
    "translation": "Beard"
  },
  {
    "noun": "Augenbraue",
    "article": "Die",
    "sentence": "Die Augenbrauen der Schauspielerin waren perfekt geschminkt.",
    "grammar": "Feminine",
    "translation": "Brow"
  },
  {
    "noun": "Bildschirm",
    "article": "Der",
    "sentence": "Die Bildschirme der Computer waren groß und klar.",
    "grammar": "Masculine",
    "translation": "Display"
  },
  {
    "noun": "Signal",
    "article": "Das",
    "sentence": "Die Signale wurden an alle Einheiten gesendet.",
    "grammar": "Neuter",
    "translation": "Signal"
  },
  {
    "noun": "Diener",
    "article": "Der",
    "sentence": "Die Diener im Schloss waren diskret und effizient.",
    "grammar": "Masculine",
    "translation": "Servant"
  },
  {
    "noun": "Flüstern",
    "article": "Das",
    "sentence": "Die Flüster der Liebenden waren romantisch und leise.",
    "grammar": "Neuter",
    "translation": "Whisper"
  },
  {
    "noun": "Zweifel",
    "article": "Der",
    "sentence": "Die Zweifel an seiner Unschuld waren groß.",
    "grammar": "Masculine",
    "translation": "Doubt"
  },
  {
    "noun": "Konto",
    "article": "Das",
    "sentence": "Die Konten der Kunden wurden regelmäßig überprüft.",
    "grammar": "Neuter",
    "translation": "Account"
  },
  {
    "noun": "Magie",
    "article": "Die",
    "sentence": "Die Magie des Zauberkünstlers faszinierte das Publikum.",
    "grammar": "Feminine",
    "translation": "Magic"
  },
  {
    "noun": "Puppe",
    "article": "Die",
    "sentence": "Die Puppen der Kinder waren bunt und vielfältig.",
    "grammar": "Feminine",
    "translation": "Doll"
  },
  {
    "noun": "Sandwich",
    "article": "Das",
    "sentence": "Die Sandwiches wurden für das Picknick vorbereitet.",
    "grammar": "Neuter",
    "translation": "Sandwich"
  },
  {
    "noun": "Rotkehlchen",
    "article": "Der",
    "sentence": "Die Rotkehlchen zwitscherten früh am Morgen.",
    "grammar": "Masculine",
    "translation": "Robin"
  },
  {
    "noun": "Gerechtigkeit",
    "article": "Die",
    "sentence": "Die Gerechtigkeit sollte für alle Menschen gleichermaßen gelten.",
    "grammar": "Feminine",
    "translation": "Justice"
  },
  {
    "noun": "Stolz",
    "article": "Der",
    "sentence": "Der Stolz der Nation war unverkennbar.",
    "grammar": "Masculine",
    "translation": "Pride"
  },
  {
    "noun": "Jugend",
    "article": "Die",
    "sentence": "Die Jugend von heute ist die Zukunft von morgen.",
    "grammar": "Feminine",
    "translation": "Youth"
  },
  {
    "noun": "Sekretär",
    "article": "Der",
    "sentence": "Die Sekretäre des Ministers waren immer gut informiert.",
    "grammar": "Masculine",
    "translation": "Secretary"
  },
  {
    "noun": "Forschung",
    "article": "Die",
    "sentence": "Die Forschung auf dem Gebiet der Medizin macht große Fortschritte.",
    "grammar": "Feminine",
    "translation": "Research"
  },
  {
    "noun": "Sport",
    "article": "Der",
    "sentence": "Die Sportarten wie Fußball und Tennis sind sehr beliebt.",
    "grammar": "Masculine",
    "translation": "Sport"
  },
  {
    "noun": "Aufgabe",
    "article": "Die",
    "sentence": "Die Aufgaben waren anspruchsvoll, aber machbar.",
    "grammar": "Feminine",
    "translation": "Task"
  },
  {
    "noun": "Stipendium",
    "article": "Das",
    "sentence": "Die Stipendien wurden an begabte Studenten vergeben.",
    "grammar": "Neuter",
    "translation": "Grant"
  },
  {
    "noun": "Sheriff",
    "article": "Der",
    "sentence": "Die Sheriffs kümmerten sich um die Sicherheit in der Stadt.",
    "grammar": "Masculine",
    "translation": "Sheriff"
  },
  {
    "noun": "Mitternacht",
    "article": "Die",
    "sentence": "Die Mitternacht war die Stunde der Geister und Schatten.",
    "grammar": "Feminine",
    "translation": "Midnight"
  },
  {
    "noun": "Chip",
    "article": "Der",
    "sentence": "Die Chips wurden knusprig und goldbraun gebacken.",
    "grammar": "Masculine",
    "translation": "Chip"
  },
  {
    "noun": "Theorie",
    "article": "Die",
    "sentence": "Die Theorien der Wissenschaftler wurden intensiv diskutiert.",
    "grammar": "Feminine",
    "translation": "Theory"
  },
  {
    "noun": "Alarm",
    "article": "Der",
    "sentence": "Die Alarme wurden bei Einbruch der Dunkelheit ausgelöst.",
    "grammar": "Masculine",
    "translation": "Alarm"
  },
  {
    "noun": "Sammlung",
    "article": "Die",
    "sentence": "Die Sammlungen von Gemälden waren beeindruckend.",
    "grammar": "Feminine",
    "translation": "Collection"
  },
  {
    "noun": "Kreuz",
    "article": "Das",
    "sentence": "Die Kreuze auf dem Friedhof waren mit Blumen geschmückt.",
    "grammar": "Neuter",
    "translation": "Cross"
  },
  {
    "noun": "Kiefer",
    "article": "Die",
    "sentence": "Die Kiefern im Wald rauschten im Wind.",
    "grammar": "Feminine",
    "translation": "Pine"
  },
  {
    "noun": "Generation",
    "article": "Die",
    "sentence": "Die Generationen vor uns haben viel erlebt.",
    "grammar": "Feminine",
    "translation": "Generation"
  },
  {
    "noun": "Autorität",
    "article": "Die",
    "sentence": "Die Autoritäten haben klare Anweisungen gegeben.",
    "grammar": "Feminine",
    "translation": "Authority"
  },
  {
    "noun": "Papa",
    "article": "Der",
    "sentence": "Die Papas der Kinder waren stolz auf ihre Erfolge.",
    "grammar": "Masculine",
    "translation": "Papa"
  },
  {
    "noun": "Reise",
    "article": "Die",
    "sentence": "Die Reisen um die Welt waren inspirierend.",
    "grammar": "Feminine",
    "translation": "Journey"
  },
  {
    "noun": "Perle",
    "article": "Die",
    "sentence": "Die Perlen waren kostbar und selten.",
    "grammar": "Feminine",
    "translation": "Pearl"
  },
  {
    "noun": "Toilette",
    "article": "Die",
    "sentence": "Die Toiletten waren sauber und gut ausgestattet.",
    "grammar": "Feminine",
    "translation": "Toilet"
  },
  {
    "noun": "Mörder",
    "article": "Der",
    "sentence": "Die Mörder wurden nach langen Ermittlungen gefasst.",
    "grammar": "Masculine",
    "translation": "Killer"
  },
  {
    "noun": "Werkzeug",
    "article": "Das",
    "sentence": "Die Werkzeuge in der Werkstatt waren gut sortiert.",
    "grammar": "Neuter",
    "translation": "Tool"
  },
  {
    "noun": "Medizin",
    "article": "Die",
    "sentence": "Die Medizin hat das Leben vieler Menschen gerettet.",
    "grammar": "Feminine",
    "translation": "Medicine"
  },
  {
    "noun": "Zucker",
    "article": "Der",
    "sentence": "Der Zucker wurde zum Süßen der Speisen verwendet.",
    "grammar": "Masculine",
    "translation": "Sugar"
  },
  {
    "noun": "Prinzessin",
    "article": "Die",
    "sentence": "Die Prinzessinnen lebten in einem prächtigen Schloss.",
    "grammar": "Feminine",
    "translation": "Princess"
  },
  {
    "noun": "Argument",
    "article": "Das",
    "sentence": "Die Argumente der Gegner waren nicht überzeugend genug.",
    "grammar": "Neuter",
    "translation": "Argument"
  },
  {
    "noun": "Klippe",
    "article": "Die",
    "sentence": "Die Klippen am Meer waren beeindruckend hoch.",
    "grammar": "Feminine",
    "translation": "Cliff"
  },
  {
    "noun": "Wagen",
    "article": "Der",
    "sentence": "Die Wagen der Eisenbahn fuhren pünktlich ab.",
    "grammar": "Masculine",
    "translation": "Cart"
  },
  {
    "noun": "Kristall",
    "article": "Der",
    "sentence": "Die Kristalle glitzerten im Sonnenlicht.",
    "grammar": "Masculine",
    "translation": "Crystal"
  },
  {
    "noun": "Bohne",
    "article": "Die",
    "sentence": "Die Bohnen wurden frisch geerntet und sind jetzt zum Kochen bereit.",
    "grammar": "Feminine",
    "translation": "Bean"
  },
  {
    "noun": "Käfig",
    "article": "Der",
    "sentence": "Die Käfige der Vögel waren geräumig und sauber.",
    "grammar": "Masculine",
    "translation": "Cage"
  },
  {
    "noun": "Schokolade",
    "article": "Die",
    "sentence": "Die Schokolade war köstlich und schmelzte auf der Zunge.",
    "grammar": "Feminine",
    "translation": "Chocolate"
  },
  {
    "noun": "Küste",
    "article": "Die",
    "sentence": "Die Küsten waren gesäumt von weißen Sandstränden.",
    "grammar": "Feminine",
    "translation": "Coast"
  },
  {
    "noun": "Jahrzehnt",
    "article": "Das",
    "sentence": "Die Jahrzehnte vergingen schnell, und die Welt veränderte sich.",
    "grammar": "Neuter",
    "translation": "Decade"
  },
  {
    "noun": "Bedeutung",
    "article": "Die",
    "sentence": "Die Bedeutungen der Wörter können je nach Kontext unterschiedlich sein.",
    "grammar": "Feminine",
    "translation": "Meaning"
  },
  {
    "noun": "Getriebe",
    "article": "Das",
    "sentence": "Die Getriebe des Autos waren auf maximale Leistung eingestellt.",
    "grammar": "Neuter",
    "translation": "Gear"
  },
  {
    "noun": "Koffer",
    "article": "Der",
    "sentence": "Die Koffer der Passagiere wurden am Flughafen gründlich kontrolliert.",
    "grammar": "Masculine",
    "translation": "Suitcase"
  },
  {
    "noun": "Operation",
    "article": "Die",
    "sentence": "Die Operation war erfolgreich und der Patient auf dem Weg der Besserung.",
    "grammar": "Feminine",
    "translation": "Operation"
  },
  {
    "noun": "Atmen",
    "article": "Das",
    "sentence": "Das Atmen ist lebensnotwendig für alle Lebewesen.",
    "grammar": "Neuter",
    "translation": "Breathing"
  },
  {
    "noun": "Rolle",
    "article": "Die",
    "sentence": "Die Rollen der Schauspieler in dem Theaterstück waren gut besetzt.",
    "grammar": "Feminine",
    "translation": "Role"
  },
  {
    "noun": "Version",
    "article": "Die",
    "sentence": "Die Versionen der Software wurden regelmäßig aktualisiert.",
    "grammar": "Feminine",
    "translation": "Version"
  },
  {
    "noun": "Gefangene",
    "article": "Der",
    "sentence": "Die Gefangenen warteten auf ihre Verhandlung vor Gericht.",
    "grammar": "Masculine",
    "translation": "Prisoner"
  },
  {
    "noun": "Spiel",
    "article": "Das",
    "sentence": "Die Spiele der Kinder waren voller Freude und Kreativität.",
    "grammar": "Neuter",
    "translation": "Match"
  },
  {
    "noun": "Strahl",
    "article": "Der",
    "sentence": "Die Strahlen der Sonne durchdrangen die Wolken.",
    "grammar": "Masculine",
    "translation": "Beam"
  },
  {
    "noun": "Schloss",
    "article": "Das",
    "sentence": "Die Schlösser in Europa sind Zeugen alter Geschichte und Kultur.",
    "grammar": "Neuter",
    "translation": "Castle"
  },
  {
    "noun": "Rausch",
    "article": "Der",
    "sentence": "Die Räusche der Feier dauerten bis tief in die Nacht.",
    "grammar": "Masculine",
    "translation": "Rush"
  },
  {
    "noun": "Fahrspur",
    "article": "Die",
    "sentence": "Die Fahrspuren auf der Autobahn waren gut markiert.",
    "grammar": "Feminine",
    "translation": "Lane"
  },
  {
    "noun": "Kleidung",
    "article": "Die",
    "sentence": "Die Kleidung der Models auf dem Laufsteg war extravagant und modern.",
    "grammar": "Feminine",
    "translation": "Clothing"
  },
  {
    "noun": "Pfahl",
    "article": "Der",
    "sentence": "Die Pfähle wurden tief in den Boden gerammt, um die Struktur zu stabilisieren.",
    "grammar": "Masculine",
    "translation": "Pole"
  },
  {
    "noun": "Freiheit",
    "article": "Die",
    "sentence": "Die Freiheit ist ein hohes Gut, das jeder Mensch schätzen sollte.",
    "grammar": "Feminine",
    "translation": "Freedom"
  },
  {
    "noun": "Fähigkeit",
    "article": "Die",
    "sentence": "Die Fähigkeiten des Künstlers waren außergewöhnlich vielfältig.",
    "grammar": "Feminine",
    "translation": "Skill"
  },
  {
    "noun": "Leidenschaft",
    "article": "Die",
    "sentence": "Die Leidenschaft des Musikers für seine Kunst war inspirierend.",
    "grammar": "Feminine",
    "translation": "Passion"
  },
  {
    "noun": "Aktivität",
    "article": "Die",
    "sentence": "Die Aktivitäten im Sommerlager waren abwechslungsreich und spannend.",
    "grammar": "Feminine",
    "translation": "Activity"
  },
  {
    "noun": "Fick",
    "article": "Der",
    "sentence": "Die Ficks in der Fernsehserie waren umstritten und sorgten für Diskussionen.",
    "grammar": "Masculine",
    "translation": "Fuck"
  },
  {
    "noun": "Plattform",
    "article": "Die",
    "sentence": "Die Plattformen im Internet bieten eine Vielzahl von Diensten und Informationen.",
    "grammar": "Feminine",
    "translation": "Platform"
  },
  {
    "noun": "Salz",
    "article": "Das",
    "sentence": "Das Salz wurde zum Würzen der Speisen verwendet.",
    "grammar": "Neuter",
    "translation": "Salt"
  },
  {
    "noun": "Fahrrad",
    "article": "Das",
    "sentence": "Die Fahrräder der Kinder wurden für die Fahrt zum Park vorbereitet.",
    "grammar": "Neuter",
    "translation": "Bike"
  },
  {
    "noun": "Stapel",
    "article": "Der",
    "sentence": "Die Stapel von Papieren auf dem Schreibtisch mussten sortiert werden.",
    "grammar": "Masculine",
    "translation": "Stack"
  },
  {
    "noun": "Begleiter",
    "article": "Der",
    "sentence": "Die Begleiter des Königs waren stets an seiner Seite.",
    "grammar": "Masculine",
    "translation": "Companion"
  },
  {
    "noun": "Schicksal",
    "article": "Das",
    "sentence": "Das Schicksal jedes Menschen liegt in seiner eigenen Hand.",
    "grammar": "Neuter",
    "translation": "Fate"
  },
  {
    "noun": "Wut",
    "article": "Die",
    "sentence": "Die Wut des Volkes über die Ungerechtigkeit war unüberhörbar.",
    "grammar": "Feminine",
    "translation": "Rage"
  },
  {
    "noun": "Versorgung",
    "article": "Die",
    "sentence": "Die Versorgungen der Armee waren gut organisiert und effizient.",
    "grammar": "Feminine",
    "translation": "Supply"
  },
  {
    "noun": "Bandbreite",
    "article": "Die",
    "sentence": "Die Bandbreiten der Internetverbindung variieren je nach Anbieter und Tarif.",
    "grammar": "Feminine",
    "translation": "Range"
  },
  {
    "noun": "Schwanz",
    "article": "Der",
    "sentence": "Die Schwänze der Tiere dienen oft als Kommunikationsmittel.",
    "grammar": "Masculine",
    "translation": "Tail"
  },
  {
    "noun": "Code",
    "article": "Der",
    "sentence": "Die Codes müssen korrekt eingegeben werden, um Zugang zu erhalten.",
    "grammar": "Masculine",
    "translation": "Code"
  },
  {
    "noun": "Kapitel",
    "article": "Das",
    "sentence": "Die Kapitel des Buches waren klar strukturiert und gut geschrieben.",
    "grammar": "Neuter",
    "translation": "Chapter"
  },
  {
    "noun": "Reflexion",
    "article": "Die",
    "sentence": "Die Reflexionen im Spiegel zeigten ihr eigenes Bild.",
    "grammar": "Feminine",
    "translation": "Reflection"
  },
  {
    "noun": "Post",
    "article": "Die",
    "sentence": "Die Mails wurden täglich von der Post zugestellt.",
    "grammar": "Feminine",
    "translation": "Mail"
  },
  {
    "noun": "Fliege",
    "article": "Die",
    "sentence": "Die Fliegen summten um die Früchte herum.",
    "grammar": "Feminine",
    "translation": "Fly"
  },
  {
    "noun": "Schrank",
    "article": "Der",
    "sentence": "Die Schränke in der Küche waren voller Geschirr und Töpfe.",
    "grammar": "Masculine",
    "translation": "Cabinet"
  },
  {
    "noun": "Spielzeug",
    "article": "Das",
    "sentence": "Die Spielzeuge der Kinder lagen überall im Kinderzimmer verstreut.",
    "grammar": "Neuter",
    "translation": "Toy"
  },
  {
    "noun": "Baseball",
    "article": "Der",
    "sentence": "Die Baseballs flogen hoch durch die Luft.",
    "grammar": "Masculine",
    "translation": "Baseball"
  },
  {
    "noun": "Innere",
    "article": "Das",
    "sentence": "Das Innere des Hauses war gemütlich und einladend gestaltet.",
    "grammar": "Neuter",
    "translation": "Inside"
  },
  {
    "noun": "Tempo",
    "article": "Das",
    "sentence": "Das Tempo des Musikstücks war schnell und lebhaft.",
    "grammar": "Neuter",
    "translation": "Pace"
  },
  {
    "noun": "Griff",
    "article": "Der",
    "sentence": "Die Griffe der Werkzeuge waren ergonomisch geformt.",
    "grammar": "Masculine",
    "translation": "Handle"
  },
  {
    "noun": "Blei",
    "article": "Das",
    "sentence": "Das Blei wurde für die Herstellung von Batterien verwendet.",
    "grammar": "Neuter",
    "translation": "Lead"
  },
  {
    "noun": "Menge",
    "article": "Die",
    "sentence": "Die Mengen der Zuschauer beim Konzert waren beeindruckend.",
    "grammar": "Feminine",
    "translation": "Amount"
  },
  {
    "noun": "Nerv",
    "article": "Der",
    "sentence": "Die Nerven des Menschen sind ein komplexes System im Körper.",
    "grammar": "Masculine",
    "translation": "Nerve"
  },
  {
    "noun": "Terror",
    "article": "Der",
    "sentence": "Die Terroranschläge erschütterten die Weltöffentlichkeit.",
    "grammar": "Masculine",
    "translation": "Terror"
  },
  {
    "noun": "Pullover",
    "article": "Der",
    "sentence": "Die Pullover waren warm und kuschelig.",
    "grammar": "Masculine",
    "translation": "Sweater"
  },
  {
    "noun": "Qualität",
    "article": "Die",
    "sentence": "Die Qualitäten des Weines waren hervorragend und wurden von Kritikern gelobt.",
    "grammar": "Feminine",
    "translation": "Quality"
  },
  {
    "noun": "Jäger",
    "article": "Der",
    "sentence": "Die Jäger verfolgten die Spur des Wildes durch den Wald.",
    "grammar": "Masculine",
    "translation": "Hunter"
  },
  {
    "noun": "Farbe",
    "article": "Die",
    "sentence": "Die Farben des Regenbogens leuchteten am Himmel.",
    "grammar": "Feminine",
    "translation": "Paint"
  },
  {
    "noun": "Zerstörer",
    "article": "Der",
    "sentence": "Die Zerstörer der Marine waren für ihre Schnelligkeit und Präzision bekannt.",
    "grammar": "Masculine",
    "translation": "Buster"
  },
  {
    "noun": "Baumwolle",
    "article": "Die",
    "sentence": "Die Baumwolle wurde für die Herstellung von Kleidung verwendet.",
    "grammar": "Feminine",
    "translation": "Cotton"
  },
  {
    "noun": "Feldwebel",
    "article": "Der",
    "sentence": "Die Feldwebel waren verantwortlich für die Ausbildung der Rekruten.",
    "grammar": "Masculine",
    "translation": "Sergeant"
  },
  {
    "noun": "Kredit",
    "article": "Der",
    "sentence": "Die Kredite wurden von der Bank genehmigt und ausgezahlt.",
    "grammar": "Masculine",
    "translation": "Credit"
  },
  {
    "noun": "Schlag",
    "article": "Der",
    "sentence": "Die Schläge der Trommeln begleiteten den rhythmischen Tanz.",
    "grammar": "Masculine",
    "translation": "Blow"
  },
  {
    "noun": "Teufel",
    "article": "Der",
    "sentence": "Die Teufel wurden in der Literatur oft als Symbol des Bösen dargestellt.",
    "grammar": "Masculine",
    "translation": "Devil"
  },
  {
    "noun": "Bedrohung",
    "article": "Die",
    "sentence": "Die Bedrohungen durch den Klimawandel sind real und müssen ernst genommen werden.",
    "grammar": "Feminine",
    "translation": "Threat"
  },
  {
    "noun": "Erfolg",
    "article": "Der",
    "sentence": "Die Erfolge des Unternehmens waren auf eine starke Führung zurückzuführen.",
    "grammar": "Masculine",
    "translation": "Success"
  },
  {
    "noun": "Abend",
    "article": "Der",
    "sentence": "Die Abende in der Stadt waren angenehm und voller Leben.",
    "grammar": "Masculine",
    "translation": "Evening"
  },
  {
    "noun": "Kabel",
    "article": "Das",
    "sentence": "Die Kabel verbinden den Computer mit dem Drucker.",
    "grammar": "Neuter",
    "translation": "Cable"
  },
  {
    "noun": "Pfanne",
    "article": "Die",
    "sentence": "Die Pfannen auf dem Herd waren heiß und dampften.",
    "grammar": "Feminine",
    "translation": "Pan"
  },
  {
    "noun": "Angestellte",
    "article": "Der",
    "sentence": "Die Angestellten im Büro arbeiteten fleißig an ihren Aufgaben.",
    "grammar": "Masculine",
    "translation": "Clerk"
  },
  {
    "noun": "Titel",
    "article": "Der",
    "sentence": "Die Titel der Bücher waren auf dem Regal gut sichtbar.",
    "grammar": "Masculine",
    "translation": "Title"
  },
  {
    "noun": "Meter",
    "article": "Der",
    "sentence": "Die Meter des Stoffes wurden für die Näharbeiten genau abgemessen.",
    "grammar": "Masculine",
    "translation": "Meter"
  },
  {
    "noun": "Nadel",
    "article": "Die",
    "sentence": "Die Nadeln wurden benutzt, um die Stoffe zusammenzunähen.",
    "grammar": "Feminine",
    "translation": "Needle"
  },
  {
    "noun": "Lunge",
    "article": "Die",
    "sentence": "Die Lungen des Rauchers waren stark beeinträchtigt.",
    "grammar": "Feminine",
    "translation": "Lung"
  },
  {
    "noun": "Krieger",
    "article": "Der",
    "sentence": "Die Krieger kämpften tapfer in der Schlacht.",
    "grammar": "Masculine",
    "translation": "Warrior"
  },
  {
    "noun": "Umstände",
    "article": "Die",
    "sentence": "Die Umstände ihrer Geburt waren geheimnisvoll und rätselhaft.",
    "grammar": "Plural, Feminine",
    "translation": "Circumstances"
  },
  {
    "noun": "Studio",
    "article": "Das",
    "sentence": "Die Studios waren mit moderner Technik ausgestattet.",
    "grammar": "Neuter",
    "translation": "Studio"
  },
  {
    "noun": "Panik",
    "article": "Die",
    "sentence": "Die Panik unter den Passagieren brach aus, als das Feuer ausbrach.",
    "grammar": "Feminine",
    "translation": "Panic"
  },
  {
    "noun": "Mangel",
    "article": "Der",
    "sentence": "Die Mängel in der Produktionskette wurden behoben.",
    "grammar": "Masculine",
    "translation": "Lack"
  },
  {
    "noun": "Bauer",
    "article": "Der",
    "sentence": "Die Bauern auf dem Feld arbeiteten hart, um die Ernte einzubringen.",
    "grammar": "Masculine",
    "translation": "Farmer"
  },
  {
    "noun": "Akzent",
    "article": "Der",
    "sentence": "Die Akzente der Schauspieler waren authentisch und gut gespielt.",
    "grammar": "Masculine",
    "translation": "Accent"
  },
  {
    "noun": "Bombe",
    "article": "Die",
    "sentence": "Die Bomben wurden entschärft, bevor sie explodieren konnten.",
    "grammar": "Feminine",
    "translation": "Bomb"
  },
  {
    "noun": "Panel",
    "article": "Das",
    "sentence": "Die Panels der Konferenz wurden von Experten moderiert.",
    "grammar": "Neuter",
    "translation": "Panel"
  },
  {
    "noun": "Fähigkeit",
    "article": "Die",
    "sentence": "Die Fähigkeiten des Teams ergänzten sich gut und führten zu einem erfolgreichen Projektabschluss.",
    "grammar": "Feminine",
    "translation": "Ability"
  },
  {
    "noun": "Glück",
    "article": "Das",
    "sentence": "Das Glück war auf seiner Seite, als er die Lotterie gewann.",
    "grammar": "Neuter",
    "translation": "Fortune"
  },
  {
    "noun": "Sieger",
    "article": "Der",
    "sentence": "Die Sieger des Wettbewerbs erhielten eine Medaille und eine Urkunde.",
    "grammar": "Masculine",
    "translation": "Victor"
  },
  {
    "noun": "Feder",
    "article": "Die",
    "sentence": "Die Federn der Vögel waren bunt und schön anzusehen.",
    "grammar": "Feminine",
    "translation": "Feather"
  },
  {
    "noun": "Oma",
    "article": "Die",
    "sentence": "Die Omas backten leckere Kuchen für die Enkelkinder.",
    "grammar": "Feminine",
    "translation": "Grandma"
  },
  {
    "noun": "Leuchten",
    "article": "Das",
    "sentence": "Das Leuchten der Sterne am Himmel war romantisch und beeindruckend.",
    "grammar": "Neuter",
    "translation": "Glow"
  },
  {
    "noun": "Verhalten",
    "article": "Das",
    "sentence": "Das Verhalten der Kinder war vorbildlich während des Ausflugs.",
    "grammar": "Neuter",
    "translation": "Behavior"
  },
  {
    "noun": "Durchgang",
    "article": "Der",
    "sentence": "Die Durchgänge im alten Schloss waren eng und düster.",
    "grammar": "Masculine",
    "translation": "Passage"
  },
  {
    "noun": "Sklave",
    "article": "Der",
    "sentence": "Die Sklaven kämpften für ihre Freiheit und Würde.",
    "grammar": "Masculine",
    "translation": "Slave"
  },
  {
    "noun": "Leutnant",
    "article": "Der",
    "sentence": "Die Leutnants führten die Truppen in die Schlacht.",
    "grammar": "Masculine",
    "translation": "Lieutenant"
  },
  {
    "noun": "Fass",
    "article": "Das",
    "sentence": "Die Fässer waren voller Wein und wurden für die Lagerung verwendet.",
    "grammar": "Neuter",
    "translation": "Barrel"
  },
  {
    "noun": "Wärme",
    "article": "Die",
    "sentence": "Die Wärme der Sonne auf der Haut fühlte sich angenehm an.",
    "grammar": "Feminine",
    "translation": "Warmth"
  },
  {
    "noun": "Eindruck",
    "article": "Der",
    "sentence": "Die Eindrücke der Reise nach Afrika waren unvergesslich und bereichernd.",
    "grammar": "Masculine",
    "translation": "Impression"
  },
  {
    "noun": "Maurer",
    "article": "Der",
    "sentence": "Die Maurer arbeiteten hart, um die Mauer des Hauses zu errichten.",
    "grammar": "Masculine",
    "translation": "Mason"
  },
  {
    "noun": "Braut",
    "article": "Die",
    "sentence": "Die Bräute waren wunderschön in ihren Hochzeitskleidern.",
    "grammar": "Feminine",
    "translation": "Bride"
  },
  {
    "noun": "Paket",
    "article": "Das",
    "sentence": "Die Pakete wurden pünktlich zum Geburtstag geliefert.",
    "grammar": "Neuter",
    "translation": "Package"
  },
  {
    "noun": "Nebel",
    "article": "Der",
    "sentence": "Die Nebel lichteten sich langsam und enthüllten die Landschaft.",
    "grammar": "Masculine",
    "translation": "Fog"
  },
  {
    "noun": "Ausgang",
    "article": "Der",
    "sentence": "Die Ausgänge des Theaters waren gut beschildert.",
    "grammar": "Masculine",
    "translation": "Exit"
  },
  {
    "noun": "Kissen",
    "article": "Das",
    "sentence": "Die Kissen auf dem Sofa waren weich und bequem.",
    "grammar": "Neuter",
    "translation": "Pad"
  },
  {
    "noun": "Herd",
    "article": "Der",
    "sentence": "Die Herde in der Küche wurden regelmäßig gereinigt.",
    "grammar": "Masculine",
    "translation": "Stove"
  },
  {
    "noun": "Blau",
    "article": "Das",
    "sentence": "Das Blau des Himmels an einem klaren Tag war wunderschön.",
    "grammar": "Neuter",
    "translation": "Blue"
  },
  {
    "noun": "Amerikaner",
    "article": "Der",
    "sentence": "Die Amerikaner feiern den Unabhängigkeitstag am vierten Juli.",
    "grammar": "Masculine",
    "translation": "American"
  },
  {
    "noun": "Rubin",
    "article": "Der",
    "sentence": "Die Rubine wurden zu wertvollen Schmuckstücken verarbeitet.",
    "grammar": "Masculine",
    "translation": "Ruby"
  },
  {
    "noun": "Blitz",
    "article": "Das",
    "sentence": "Die Blitze am Himmel begleiteten das Gewitter.",
    "grammar": "Neuter",
    "translation": "Lightning"
  },
  {
    "noun": "Grube",
    "article": "Die",
    "sentence": "Die Gruben wurden zur Suche nach Kohle verwendet.",
    "grammar": "Feminine",
    "translation": "Pit"
  },
  {
    "noun": "Oberst",
    "article": "Der",
    "sentence": "Die Obersten der Armee trafen sich zu einer Besprechung.",
    "grammar": "Masculine",
    "translation": "Colonel"
  },
  {
    "noun": "Hafen",
    "article": "Der",
    "sentence": "Die Häfen waren voller Schiffe aus der ganzen Welt.",
    "grammar": "Masculine",
    "translation": "Dock"
  },
  {
    "noun": "Bach",
    "article": "Der",
    "sentence": "Die Bäche führten nach starken Regenfällen viel Wasser.",
    "grammar": "Masculine",
    "translation": "Creek"
  },
  {
    "noun": "Rat",
    "article": "Der",
    "sentence": "Die Ratschläge seiner Großmutter waren immer hilfreich.",
    "grammar": "Masculine",
    "translation": "Advice"
  },
  {
    "noun": "Tourist",
    "article": "Der",
    "sentence": "Die Touristen genossen die Sehenswürdigkeiten der Stadt.",
    "grammar": "Masculine",
    "translation": "Tourist"
  },
  {
    "noun": "Biss",
    "article": "Der",
    "sentence": "Die Bisse des Insekts verursachten Juckreiz und Rötungen.",
    "grammar": "Masculine",
    "translation": "Bite"
  },
  {
    "noun": "Museum",
    "article": "Das",
    "sentence": "Die Museen in der Stadt zeigten eine beeindruckende Sammlung antiker Artefakte.",
    "grammar": "Neuter",
    "translation": "Museum"
  },
  {
    "noun": "Gefallen",
    "article": "Der",
    "sentence": "Die Gefallen seiner Freunde waren ihm wichtig.",
    "grammar": "Masculine",
    "translation": "Favor"
  },
  {
    "noun": "Abendessen",
    "article": "Das",
    "sentence": "Die Abendessen wurden gemeinsam mit der Familie eingenommen.",
    "grammar": "Neuter",
    "translation": "Supper"
  },
  {
    "noun": "Komfort",
    "article": "Der",
    "sentence": "Die Unterkunft bot jeglichen Komfort für die Gäste.",
    "grammar": "Masculine",
    "translation": "Comfort"
  },
  {
    "noun": "Dekan",
    "article": "Der",
    "sentence": "Die Dekane der Fakultäten trafen sich zur Besprechung.",
    "grammar": "Masculine",
    "translation": "Dean"
  },
  {
    "noun": "Wert",
    "article": "Der",
    "sentence": "Die Werte der Aktien stiegen nach der Ankündigung des Unternehmens.",
    "grammar": "Masculine",
    "translation": "Value"
  },
  {
    "noun": "Marsch",
    "article": "Der",
    "sentence": "Die Märsche der Soldaten waren synchron und diszipliniert.",
    "grammar": "Masculine",
    "translation": "March"
  },
  {
    "noun": "Anwesen",
    "article": "Das",
    "sentence": "Die Anwesen der reichen Geschäftsleute waren prächtig und groß.",
    "grammar": "Neuter",
    "translation": "Estate"
  },
  {
    "noun": "Dichter",
    "article": "Der",
    "sentence": "Die Dichter schrieben emotionale Gedichte über die Natur.",
    "grammar": "Masculine",
    "translation": "Poet"
  },
  {
    "noun": "Palast",
    "article": "Der",
    "sentence": "Die Paläste der Könige waren mit prunkvollen Gemälden geschmückt.",
    "grammar": "Masculine",
    "translation": "Palace"
  },
  {
    "noun": "Suppe",
    "article": "Die",
    "sentence": "Die Suppen wurden mit frischen Zutaten zubereitet.",
    "grammar": "Feminine",
    "translation": "Soup"
  },
  {
    "noun": "Nation",
    "article": "Die",
    "sentence": "Die Nationen der Welt trafen sich zur Konferenz über den Klimawandel.",
    "grammar": "Feminine",
    "translation": "Nation"
  },
  {
    "noun": "Glas",
    "article": "Das",
    "sentence": "Die Gläser mit Rotwein wurden für die Gäste vorbereitet.",
    "grammar": "Neuter",
    "translation": "Jar"
  },
  {
    "noun": "Stand",
    "article": "Der",
    "sentence": "Die Stände auf dem Markt waren reichlich mit frischen Produkten gefüllt.",
    "grammar": "Masculine",
    "translation": "Standing"
  },
  {
    "noun": "Sack",
    "article": "Der",
    "sentence": "Die Säcke wurden mit Kartoffeln und Gemüse gefüllt.",
    "grammar": "Masculine",
    "translation": "Sack"
  },
  {
    "noun": "Dämon",
    "article": "Der",
    "sentence": "Die Dämonen in der Geschichte versuchten, die Helden zu besiegen.",
    "grammar": "Masculine",
    "translation": "Demon"
  },
  {
    "noun": "Konferenz",
    "article": "Die",
    "sentence": "Die Konferenzen bringen Experten aus verschiedenen Ländern zusammen.",
    "grammar": "Feminine",
    "translation": "Conference"
  },
  {
    "noun": "Saft",
    "article": "Der",
    "sentence": "Die Säfte wurden frisch gepresst und waren sehr erfrischend.",
    "grammar": "Masculine",
    "translation": "Juice"
  },
  {
    "noun": "Verantwortung",
    "article": "Die",
    "sentence": "Die Verantwortungen der Führungskräfte sind vielfältig und anspruchsvoll.",
    "grammar": "Feminine",
    "translation": "Responsibility"
  },
  {
    "noun": "Bürste",
    "article": "Die",
    "sentence": "Die Bürsten waren ideal für die Reinigung der Möbel.",
    "grammar": "Feminine",
    "translation": "Brush"
  },
  {
    "noun": "Route",
    "article": "Die",
    "sentence": "Die Routen wurden sorgfältig geplant, um die Landschaft zu genießen.",
    "grammar": "Feminine",
    "translation": "Route"
  },
  {
    "noun": "Käse",
    "article": "Der",
    "sentence": "Die Käse aus der Region sind besonders bekannt für ihren Geschmack.",
    "grammar": "Masculine",
    "translation": "Cheese"
  },
  {
    "noun": "Motorhaube",
    "article": "Die",
    "sentence": "Die Motorhauben der Autos wurden bei der Reparatur ausgetauscht.",
    "grammar": "Feminine",
    "translation": "Hood"
  },
  {
    "noun": "Ente",
    "article": "Die",
    "sentence": "Die Enten schwammen gemütlich auf dem See.",
    "grammar": "Feminine",
    "translation": "Duck"
  },
  {
    "noun": "Heilige",
    "article": "Der",
    "sentence": "Die Heiligen wurden für ihre Wohltätigkeit und Barmherzigkeit verehrt.",
    "grammar": "Masculine",
    "translation": "Saint"
  },
  {
    "noun": "Pass",
    "article": "Der",
    "sentence": "Die Pässe der Reisenden wurden am Grenzübergang überprüft.",
    "grammar": "Masculine",
    "translation": "Pass"
  },
  {
    "noun": "Ziel",
    "article": "Das",
    "sentence": "Die Ziele des Projekts wurden klar definiert und kommuniziert.",
    "grammar": "Neuter",
    "translation": "Target"
  },
  {
    "noun": "Orange",
    "article": "Die",
    "sentence": "Die Orangen wurden frisch gepflückt und direkt gepresst.",
    "grammar": "Feminine",
    "translation": "Orange"
  },
  {
    "noun": "Kultur",
    "article": "Die",
    "sentence": "Die Kulturen der Welt sind reich an Traditionen und Geschichte.",
    "grammar": "Feminine",
    "translation": "Culture"
  },
  {
    "noun": "Tour",
    "article": "Die",
    "sentence": "Die Touren durch die Altstadt waren informativ und unterhaltsam.",
    "grammar": "Feminine",
    "translation": "Tour"
  },
  {
    "noun": "Kommandant",
    "article": "Der",
    "sentence": "Die Kommandanten führten die Truppen während der Schlacht.",
    "grammar": "Masculine",
    "translation": "Commander"
  },
  {
    "noun": "Haken",
    "article": "Der",
    "sentence": "Die Haken wurden benutzt, um die Tasche sicher aufzuhängen.",
    "grammar": "Masculine",
    "translation": "Hook"
  },
  {
    "noun": "Nebel",
    "article": "Der",
    "sentence": "Der Nebel hüllte die Landschaft am frühen Morgen ein.",
    "grammar": "Masculine",
    "translation": "Mist"
  },
  {
    "noun": "Training",
    "article": "Das",
    "sentence": "Die Trainings der Athleten waren intensiv und gut strukturiert.",
    "grammar": "Neuter",
    "translation": "Training"
  },
  {
    "noun": "Suche",
    "article": "Die",
    "sentence": "Die Suchen nach dem verlorenen Schlüssel dauerten mehrere Stunden.",
    "grammar": "Feminine",
    "translation": "Search"
  },
  {
    "noun": "Münze",
    "article": "Die",
    "sentence": "Die Münzen in der Sammlung stammten aus verschiedenen Epochen.",
    "grammar": "Feminine",
    "translation": "Coin"
  },
  {
    "noun": "Wunder",
    "article": "Das",
    "sentence": "Die Wunder der Natur sind faszinierend und unerklärlich.",
    "grammar": "Neuter",
    "translation": "Miracle"
  },
  {
    "noun": "Vorteil",
    "article": "Der",
    "sentence": "Die Vorteile einer gesunden Ernährung sind gut dokumentiert.",
    "grammar": "Masculine",
    "translation": "Advantage"
  },
  {
    "noun": "Austausch",
    "article": "Der",
    "sentence": "Die Austausche zwischen den Kulturen fördern das Verständnis.",
    "grammar": "Masculine",
    "translation": "Exchange"
  },
  {
    "noun": "Fiktion",
    "article": "Die",
    "sentence": "Die Fiktion bietet einen Raum für kreative Ideen und Geschichten.",
    "grammar": "Feminine",
    "translation": "Fiction"
  },
  {
    "noun": "Teich",
    "article": "Der",
    "sentence": "Die Teiche im Park waren von Seerosen bedeckt.",
    "grammar": "Masculine",
    "translation": "Pond"
  },
  {
    "noun": "Assistent",
    "article": "Der",
    "sentence": "Die Assistenten unterstützten den Professor bei der Vorbereitung der Vorlesungen.",
    "grammar": "Masculine",
    "translation": "Assistant"
  },
  {
    "noun": "Design",
    "article": "Das",
    "sentence": "Die Designs der Möbel waren modern und funktional.",
    "grammar": "Neuter",
    "translation": "Design"
  },
  {
    "noun": "Angeln",
    "article": "Das",
    "sentence": "Das Angeln am See war eine beliebte Freizeitbeschäftigung.",
    "grammar": "Neuter",
    "translation": "Fishing"
  },
  {
    "noun": "Hang",
    "article": "Der",
    "sentence": "Die Hänge des Berges waren steil und felsig.",
    "grammar": "Masculine",
    "translation": "Slope"
  },
  {
    "noun": "Graf",
    "article": "Der",
    "sentence": "Die Grafen lebten in prächtigen Schlössern und Palästen.",
    "grammar": "Masculine",
    "translation": "Earl"
  },
  {
    "noun": "Kommentar",
    "article": "Der",
    "sentence": "Die Kommentare der Leser waren wichtig für das Feedback der Zeitung.",
    "grammar": "Masculine",
    "translation": "Comment"
  },
  {
    "noun": "Kellner",
    "article": "Der",
    "sentence": "Die Kellner servierten das Essen mit einem freundlichen Lächeln.",
    "grammar": "Masculine",
    "translation": "Waiter"
  },
  {
    "noun": "Lebensmittel",
    "article": "Der",
    "sentence": "Die Lebensmittel im Supermarkt wurden täglich frisch geliefert.",
    "grammar": "Masculine",
    "translation": "Grocery"
  },
  {
    "noun": "Leiter",
    "article": "Die",
    "sentence": "Die Leitern wurden verwendet, um das Dach zu reparieren.",
    "grammar": "Feminine",
    "translation": "Ladder"
  },
  {
    "noun": "Kurve",
    "article": "Die",
    "sentence": "Die Kurven auf der Autobahn erforderten langsames Fahren.",
    "grammar": "Feminine",
    "translation": "Curve"
  },
  {
    "noun": "Volumen",
    "article": "Das",
    "sentence": "Die Volumina der verschiedenen Behälter wurden gemessen und verglichen.",
    "grammar": "Neuter",
    "translation": "Volume"
  },
  {
    "noun": "Risiko",
    "article": "Das",
    "sentence": "Die Risiken des Bergsteigens sind vielfältig und müssen ernst genommen werden.",
    "grammar": "Neuter",
    "translation": "Risk"
  },
  {
    "noun": "Albtraum",
    "article": "Der",
    "sentence": "Die Albträume in der Nacht ließen ihn oft schweißgebadet aufwachen.",
    "grammar": "Masculine",
    "translation": "Nightmare"
  },
  {
    "noun": "Existenz",
    "article": "Die",
    "sentence": "Die Existenz außerirdischen Lebens ist eine Frage, die die Wissenschaft beschäftigt.",
    "grammar": "Feminine",
    "translation": "Existence"
  },
  {
    "noun": "Spur",
    "article": "Die",
    "sentence": "Die Spuren im Schnee führten uns zur verlorenen Wandergruppe.",
    "grammar": "Feminine",
    "translation": "Trace"
  },
  {
    "noun": "Krankheit",
    "article": "Die",
    "sentence": "Die Krankheiten breiteten sich rasch in der überfüllten Stadt aus.",
    "grammar": "Feminine",
    "translation": "Disease"
  },
  {
    "noun": "Unterstützung",
    "article": "Die",
    "sentence": "Die Unterstützungen der Fans gaben den Athleten zusätzliche Motivation.",
    "grammar": "Feminine",
    "translation": "Support"
  },
  {
    "noun": "Zeuge",
    "article": "Der",
    "sentence": "Die Zeugen des Vorfalls wurden von der Polizei befragt.",
    "grammar": "Masculine",
    "translation": "Witness"
  },
  {
    "noun": "Bestand",
    "article": "Der",
    "sentence": "Die Bestände an Rohstoffen wurden regelmäßig überprüft.",
    "grammar": "Masculine",
    "translation": "Stock"
  },
  {
    "noun": "Gerät",
    "article": "Das",
    "sentence": "Die Geräte in der Küche erleichtern die Zubereitung von Speisen.",
    "grammar": "Neuter",
    "translation": "Device"
  },
  {
    "noun": "Landschaft",
    "article": "Die",
    "sentence": "Die Landschaften im Nationalpark waren atemberaubend schön.",
    "grammar": "Feminine",
    "translation": "Landscape"
  },
  {
    "noun": "Feiertag",
    "article": "Der",
    "sentence": "Die Feiertage sind eine Gelegenheit, Zeit mit der Familie zu verbringen.",
    "grammar": "Masculine",
    "translation": "Holiday"
  },
  {
    "noun": "Ass",
    "article": "Das",
    "sentence": "Die Asse im Kartenspiel sind die höchsten Karten.",
    "grammar": "Neuter",
    "translation": "Ace"
  },
  {
    "noun": "Klavier",
    "article": "Das",
    "sentence": "Die Klaviere im Konzertsaal wurden von talentierten Musikern gespielt.",
    "grammar": "Neuter",
    "translation": "Piano"
  },
  {
    "noun": "Darm",
    "article": "Der",
    "sentence": "Die Därme der Tiere werden in der Lebensmittelindustrie verwendet.",
    "grammar": "Masculine",
    "translation": "Gut"
  },
  {
    "noun": "Talent",
    "article": "Das",
    "sentence": "Die Talente der Schüler wurden in der Kunstklasse gefördert.",
    "grammar": "Neuter",
    "translation": "Talent"
  },
  {
    "noun": "Fantasie",
    "article": "Die",
    "sentence": "Die Fantasien der Kinder sind voller Abenteuer und Magie.",
    "grammar": "Feminine",
    "translation": "Imagination"
  },
  {
    "noun": "Schwarz",
    "article": "Das",
    "sentence": "Die Schwarzen in der Malerei erzeugen einen starken Kontrast.",
    "grammar": "Neuter",
    "translation": "Black"
  },
  {
    "noun": "Rohrkolben",
    "article": "Der",
    "sentence": "Die Rohrkolben wuchsen am Ufer des Sees.",
    "grammar": "Masculine",
    "translation": "Reed"
  },
  {
    "noun": "Deckel",
    "article": "Der",
    "sentence": "Die Deckel der Töpfe sollten gut verschlossen sein.",
    "grammar": "Masculine",
    "translation": "Lid"
  },
  {
    "noun": "Hinweis",
    "article": "Der",
    "sentence": "Die Hinweise in der Detektivgeschichte führten zur Lösung des Falls.",
    "grammar": "Masculine",
    "translation": "Hint"
  },
  {
    "noun": "Spaziergänger",
    "article": "Der",
    "sentence": "Die Spaziergänger genossen die frische Luft im Park.",
    "grammar": "Masculine",
    "translation": "Walker"
  },
  {
    "noun": "Schaudern",
    "article": "Das",
    "sentence": "Die Schaudern liefen ihr über den Rücken, als sie die gruselige Geschichte las.",
    "grammar": "Neuter",
    "translation": "Chill"
  },
  {
    "noun": "Prozess",
    "article": "Der",
    "sentence": "Die Prozesse der Entscheidungsfindung wurden intensiv diskutiert.",
    "grammar": "Masculine",
    "translation": "Trial"
  },
  {
    "noun": "Interview",
    "article": "Das",
    "sentence": "Die Interviews mit den Kandidaten waren informativ und aufschlussreich.",
    "grammar": "Neuter",
    "translation": "Interview"
  },
  {
    "noun": "Ansatz",
    "article": "Der",
    "sentence": "Die Ansätze zur Problemlösung waren vielfältig und kreativ.",
    "grammar": "Masculine",
    "translation": "Approach"
  },
  {
    "noun": "Narbe",
    "article": "Die",
    "sentence": "Die Narben auf seiner Haut erzählten die Geschichte seiner Abenteuer.",
    "grammar": "Feminine",
    "translation": "Scar"
  },
  {
    "noun": "Mode",
    "article": "Die",
    "sentence": "Die Moden ändern sich von Jahr zu Jahr.",
    "grammar": "Feminine",
    "translation": "Fashion"
  },
  {
    "noun": "Kanal",
    "article": "Der",
    "sentence": "Die Kanäle wurden verwendet, um Wasser zu den Feldern zu leiten.",
    "grammar": "Masculine",
    "translation": "Channel"
  },
  {
    "noun": "Fußabdruck",
    "article": "Der",
    "sentence": "Die Fußabdrücke im Sand zeigten die Spuren der Strandspaziergänger.",
    "grammar": "Masculine",
    "translation": "Footstep"
  },
  {
    "noun": "Pick-up",
    "article": "Der",
    "sentence": "Die Pick-ups waren ideal für den Transport von schweren Lasten.",
    "grammar": "Masculine",
    "translation": "Pickup"
  },
  {
    "noun": "Habicht",
    "article": "Der",
    "sentence": "Die Habichte kreisten majestätisch am Himmel auf der Suche nach Beute.",
    "grammar": "Masculine",
    "translation": "Hawk"
  },
  {
    "noun": "Anhänger",
    "article": "Der",
    "sentence": "Die Anhänger waren vollgepackt mit Campingausrüstung für das Wochenende.",
    "grammar": "Masculine",
    "translation": "Trailer"
  },
  {
    "noun": "Statue",
    "article": "Die",
    "sentence": "Die Statue ist alt.",
    "grammar": "Feminine",
    "translation": "Statue"
  },
  {
    "noun": "Pille",
    "article": "Die",
    "sentence": "Nimm die Pille.",
    "grammar": "Feminine",
    "translation": "Pill"
  },
  {
    "noun": "Käfer",
    "article": "Der",
    "sentence": "Der Käfer ist klein.",
    "grammar": "Masculine",
    "translation": "Bug"
  },
  {
    "noun": "Eimer",
    "article": "Der",
    "sentence": "Der Eimer ist voll.",
    "grammar": "Masculine",
    "translation": "Bucket"
  },
  {
    "noun": "Urlaub",
    "article": "Der",
    "sentence": "Der Urlaub war schön.",
    "grammar": "Masculine",
    "translation": "Vacation"
  },
  {
    "noun": "Art",
    "article": "Die",
    "sentence": "Die Art ist selten.",
    "grammar": "Feminine",
    "translation": "Species"
  },
  {
    "noun": "Säule",
    "article": "Die",
    "sentence": "Die Säule ist hoch.",
    "grammar": "Feminine",
    "translation": "Column"
  },
  {
    "noun": "Schaden",
    "article": "Der",
    "sentence": "Der Schaden ist groß.",
    "grammar": "Masculine",
    "translation": "Damage"
  },
  {
    "noun": "Instrument",
    "article": "Das",
    "sentence": "Das Instrument ist teuer.",
    "grammar": "Neuter",
    "translation": "Instrument"
  },
  {
    "noun": "Hafen",
    "article": "Der",
    "sentence": "Der Hafen ist groß.",
    "grammar": "Masculine",
    "translation": "Port"
  },
  {
    "noun": "Schicht",
    "article": "Die",
    "sentence": "Die Schicht ist dünn.",
    "grammar": "Feminine",
    "translation": "Layer"
  },
  {
    "noun": "Streifen",
    "article": "Der",
    "sentence": "Der Streifen ist lang.",
    "grammar": "Masculine",
    "translation": "Strip"
  },
  {
    "noun": "Müll",
    "article": "Der",
    "sentence": "Der Müll ist weg.",
    "grammar": "Masculine",
    "translation": "Garbage"
  },
  {
    "noun": "Rippe",
    "article": "Die",
    "sentence": "Die Rippe tut weh.",
    "grammar": "Feminine",
    "translation": "Rib"
  },
  {
    "noun": "Notizbuch",
    "article": "Das",
    "sentence": "Das Notizbuch ist voll.",
    "grammar": "Neuter",
    "translation": "Notebook"
  },
  {
    "noun": "Mais",
    "article": "Der",
    "sentence": "Der Mais ist gelb.",
    "grammar": "Masculine",
    "translation": "Corn"
  },
  {
    "noun": "Angebot",
    "article": "Das",
    "sentence": "Das Angebot ist gut.",
    "grammar": "Neuter",
    "translation": "Offer"
  },
  {
    "noun": "Zeichnung",
    "article": "Die",
    "sentence": "Die Zeichnung ist schön.",
    "grammar": "Feminine",
    "translation": "Drawing"
  },
  {
    "noun": "Aussage",
    "article": "Die",
    "sentence": "Die Aussage ist klar.",
    "grammar": "Feminine",
    "translation": "Statement"
  },
  {
    "noun": "Intelligenz",
    "article": "Die",
    "sentence": "Intelligenz ist wichtig.",
    "grammar": "Feminine",
    "translation": "Intelligence"
  },
  {
    "noun": "Entschuldigung",
    "article": "Die",
    "sentence": "Die Entschuldigung ist akzeptiert.",
    "grammar": "Feminine",
    "translation": "Excuse"
  },
  {
    "noun": "Landung",
    "article": "Die",
    "sentence": "Die Landung war sanft.",
    "grammar": "Feminine",
    "translation": "Landing"
  },
  {
    "noun": "Urheberrecht",
    "article": "Das",
    "sentence": "Das Urheberrecht ist geschützt.",
    "grammar": "Neuter",
    "translation": "Copyright"
  },
  {
    "noun": "Stange",
    "article": "Die",
    "sentence": "Die Stange ist lang.",
    "grammar": "Feminine",
    "translation": "Rod"
  },
  {
    "noun": "Fantasie",
    "article": "Die",
    "sentence": "Die Fantasie ist groß.",
    "grammar": "Feminine",
    "translation": "Fantasy"
  },
  {
    "noun": "Neugierde",
    "article": "Die",
    "sentence": "Neugierde ist gut.",
    "grammar": "Feminine",
    "translation": "Curiosity"
  },
  {
    "noun": "Gewand",
    "article": "Das",
    "sentence": "Das Gewand ist alt.",
    "grammar": "Neuter",
    "translation": "Gown"
  },
  {
    "noun": "Grenze",
    "article": "Die",
    "sentence": "Die Grenze ist geschlossen.",
    "grammar": "Feminine",
    "translation": "Border"
  },
  {
    "noun": "Poesie",
    "article": "Die",
    "sentence": "Poesie ist schön.",
    "grammar": "Feminine",
    "translation": "Poetry"
  },
  {
    "noun": "Firma",
    "article": "Die",
    "sentence": "Die Firma ist groß.",
    "grammar": "Feminine",
    "translation": "Company"
  },
  {
    "noun": "Anstieg",
    "article": "Der",
    "sentence": "Der Anstieg ist steil.",
    "grammar": "Masculine",
    "translation": "Rise"
  },
  {
    "noun": "Handvoll",
    "article": "Die",
    "sentence": "Eine Handvoll ist genug.",
    "grammar": "Feminine",
    "translation": "Handful"
  },
  {
    "noun": "Porzellan",
    "article": "Das",
    "sentence": "Porzellan ist zerbrechlich.",
    "grammar": "Neuter",
    "translation": "China"
  },
  {
    "noun": "Franzose",
    "article": "Der",
    "sentence": "Der Franzose spricht Französisch.",
    "grammar": "Masculine",
    "translation": "Frenchman"
  },
  {
    "noun": "Durchschnitt",
    "article": "Der",
    "sentence": "Der Durchschnitt ist hoch.",
    "grammar": "Masculine",
    "translation": "Average"
  },
  {
    "noun": "Reh",
    "article": "Das",
    "sentence": "Das Reh ist im Wald.",
    "grammar": "Neuter",
    "translation": "Deer"
  },
  {
    "noun": "Druck",
    "article": "Der",
    "sentence": "Der Druck ist stark.",
    "grammar": "Masculine",
    "translation": "Print"
  },
  {
    "noun": "Schiene",
    "article": "Die",
    "sentence": "Die Schiene ist lang.",
    "grammar": "Feminine",
    "translation": "Rail"
  },
  {
    "noun": "Tarif",
    "article": "Der",
    "sentence": "Der Tarif ist günstig.",
    "grammar": "Masculine",
    "translation": "Rate"
  },
  {
    "noun": "Mut",
    "article": "Der",
    "sentence": "Mut ist wichtig.",
    "grammar": "Masculine",
    "translation": "Courage"
  },
  {
    "noun": "Ankunft",
    "article": "Die",
    "sentence": "Die Ankunft ist pünktlich.",
    "grammar": "Feminine",
    "translation": "Arrival"
  },
  {
    "noun": "Wunsch",
    "article": "Der",
    "sentence": "Der Wunsch wurde erfüllt.",
    "grammar": "Masculine",
    "translation": "Wish"
  },
  {
    "noun": "Bergrücken",
    "article": "Der",
    "sentence": "Der Bergrücken ist hoch.",
    "grammar": "Masculine",
    "translation": "Ridge"
  },
  {
    "noun": "Idiot",
    "article": "Der",
    "sentence": "Er ist ein Idiot.",
    "grammar": "Masculine",
    "translation": "Idiot"
  },
  {
    "noun": "Stier",
    "article": "Der",
    "sentence": "Der Stier ist stark.",
    "grammar": "Masculine",
    "translation": "Bull"
  },
  {
    "noun": "Samen",
    "article": "Der",
    "sentence": "Pflanze den Samen.",
    "grammar": "Masculine",
    "translation": "Seed"
  },
  {
    "noun": "Fortschritt",
    "article": "Der",
    "sentence": "Fortschritt ist wichtig.",
    "grammar": "Masculine",
    "translation": "Progress"
  },
  {
    "noun": "Gefühl",
    "article": "Das",
    "sentence": "Das Gefühl ist gut.",
    "grammar": "Neuter",
    "translation": "Feeling"
  },
  {
    "noun": "kurze Hose",
    "article": "Die",
    "sentence": "Die kurze Hose ist blau.",
    "grammar": "Feminine",
    "translation": "Shorts"
  },
  {
    "noun": "Bürger",
    "article": "Der",
    "sentence": "Er ist ein Bürger.",
    "grammar": "Masculine",
    "translation": "Citizen"
  },
  {
    "noun": "Müll",
    "article": "Der",
    "sentence": "Der Müll muss raus.",
    "grammar": "Masculine",
    "translation": "Trash"
  },
  {
    "noun": "Baumstamm",
    "article": "Der",
    "sentence": "Der Baumstamm ist dick.",
    "grammar": "Masculine",
    "translation": "Log"
  },
  {
    "noun": "Geduld",
    "article": "Die",
    "sentence": "Geduld ist eine Tugend.",
    "grammar": "Feminine",
    "translation": "Patience"
  },
  {
    "noun": "Fledermaus",
    "article": "Die",
    "sentence": "Die Fledermaus fliegt.",
    "grammar": "Feminine",
    "translation": "Bat"
  },
  {
    "noun": "Fußball",
    "article": "Der",
    "sentence": "Der Fußball ist rund.",
    "grammar": "Masculine",
    "translation": "Football"
  },
  {
    "noun": "Routine",
    "article": "Die",
    "sentence": "Routine ist gut.",
    "grammar": "Feminine",
    "translation": "Routine"
  },
  {
    "noun": "Explosion",
    "article": "Die",
    "sentence": "Die Explosion war laut.",
    "grammar": "Feminine",
    "translation": "Explosion"
  },
  {
    "noun": "Inhalt",
    "article": "Der",
    "sentence": "Der Inhalt ist geheim.",
    "grammar": "Masculine",
    "translation": "Content"
  },
  {
    "noun": "Wissenschaftler",
    "article": "Der",
    "sentence": "Der Wissenschaftler forscht.",
    "grammar": "Masculine",
    "translation": "Scientist"
  },
  {
    "noun": "Versagen",
    "article": "Das",
    "sentence": "Versagen ist hart.",
    "grammar": "Neuter",
    "translation": "Failure"
  },
  {
    "noun": "Sünde",
    "article": "Die",
    "sentence": "Die Sünde ist schlecht.",
    "grammar": "Feminine",
    "translation": "Sin"
  },
  {
    "noun": "Hintern",
    "article": "Der",
    "sentence": "Der Hintern tut weh.",
    "grammar": "Masculine",
    "translation": "Butt"
  },
  {
    "noun": "Verwirrung",
    "article": "Die",
    "sentence": "Verwirrung herrscht.",
    "grammar": "Feminine",
    "translation": "Confusion"
  },
  {
    "noun": "Verständnis",
    "article": "Das",
    "sentence": "Verständnis ist wichtig.",
    "grammar": "Neuter",
    "translation": "Understanding"
  },
  {
    "noun": "Handel",
    "article": "Der",
    "sentence": "Handel ist wichtig.",
    "grammar": "Masculine",
    "translation": "Trade"
  },
  {
    "noun": "Kühlschrank",
    "article": "Der",
    "sentence": "Der Kühlschrank ist leer.",
    "grammar": "Masculine",
    "translation": "Refrigerator"
  },
  {
    "noun": "Herr",
    "article": "Der",
    "sentence": "Der Herr ist freundlich.",
    "grammar": "Masculine",
    "translation": "Mister"
  },
  {
    "noun": "Taschenlampe",
    "article": "Die",
    "sentence": "Die Taschenlampe ist hell.",
    "grammar": "Feminine",
    "translation": "Flashlight"
  },
  {
    "noun": "Netz",
    "article": "Das",
    "sentence": "Das Netz ist groß.",
    "grammar": "Neuter",
    "translation": "Net"
  },
  {
    "noun": "Matrose",
    "article": "Der",
    "sentence": "Der Matrose arbeitet.",
    "grammar": "Masculine",
    "translation": "Sailor"
  },
  {
    "noun": "Einstellung",
    "article": "Die",
    "sentence": "Die Einstellung ist positiv.",
    "grammar": "Feminine",
    "translation": "Attitude"
  },
  {
    "noun": "Schuld",
    "article": "Die",
    "sentence": "Schuld ist schwer.",
    "grammar": "Feminine",
    "translation": "Guilt"
  },
  {
    "noun": "Weinen",
    "article": "Das",
    "sentence": "Weinen hilft manchmal.",
    "grammar": "Neuter",
    "translation": "Crying"
  },
  {
    "noun": "Schluck",
    "article": "Der",
    "sentence": "Ein Schluck Wasser bitte.",
    "grammar": "Masculine",
    "translation": "Sip"
  },
  {
    "noun": "Reisen",
    "article": "Das",
    "sentence": "Reisen macht Spaß.",
    "grammar": "Neuter",
    "translation": "Travel"
  },
  {
    "noun": "Keks",
    "article": "Der",
    "sentence": "Der Keks ist lecker.",
    "grammar": "Masculine",
    "translation": "Cookie"
  },
  {
    "noun": "Flucht",
    "article": "Die",
    "sentence": "Die Flucht war schwer.",
    "grammar": "Feminine",
    "translation": "Escape"
  },
  {
    "noun": "Anweisung",
    "article": "Die",
    "sentence": "Die Anweisung ist klar.",
    "grammar": "Feminine",
    "translation": "Instruction"
  },
  {
    "noun": "Stoff",
    "article": "Der",
    "sentence": "Der Stoff ist weich.",
    "grammar": "Masculine",
    "translation": "Fabric"
  },
  {
    "noun": "Marmor",
    "article": "Der",
    "sentence": "Der Marmor ist teuer.",
    "grammar": "Masculine",
    "translation": "Marble"
  },
  {
    "noun": "Blick",
    "article": "Der",
    "sentence": "Ein Blick genügt.",
    "grammar": "Masculine",
    "translation": "Glimpse"
  },
  {
    "noun": "Dämmerung",
    "article": "Die",
    "sentence": "Die Dämmerung beginnt.",
    "grammar": "Feminine",
    "translation": "Dusk"
  },
  {
    "noun": "Hütte",
    "article": "Die",
    "sentence": "Die Hütte ist klein.",
    "grammar": "Feminine",
    "translation": "Cottage"
  },
  {
    "noun": "Affe",
    "article": "Der",
    "sentence": "Der Affe klettert.",
    "grammar": "Masculine",
    "translation": "Monkey"
  },
  {
    "noun": "Make-up",
    "article": "Das",
    "sentence": "Das Make-up ist bunt.",
    "grammar": "Neuter",
    "translation": "Makeup"
  },
  {
    "noun": "Arzt",
    "article": "Der",
    "sentence": "Der Arzt hilft.",
    "grammar": "Masculine",
    "translation": "Doc"
  },
  {
    "noun": "Bluse",
    "article": "Die",
    "sentence": "Die Bluse ist schön.",
    "grammar": "Feminine",
    "translation": "Blouse"
  },
  {
    "noun": "Rhythmus",
    "article": "Der",
    "sentence": "Der Rhythmus ist schnell.",
    "grammar": "Masculine",
    "translation": "Rhythm"
  },
  {
    "noun": "Dampf",
    "article": "Der",
    "sentence": "Der Dampf ist heiß.",
    "grammar": "Masculine",
    "translation": "Steam"
  },
  {
    "noun": "Phrase",
    "article": "Die",
    "sentence": "Die Phrase ist kurz.",
    "grammar": "Feminine",
    "translation": "Phrase"
  },
  {
    "noun": "Mutter",
    "article": "Die",
    "sentence": "Die Mutter ist fest.",
    "grammar": "Feminine",
    "translation": "Nut"
  },
  {
    "noun": "Bleistift",
    "article": "Der",
    "sentence": "Der Bleistift schreibt.",
    "grammar": "Masculine",
    "translation": "Pencil"
  },
  {
    "noun": "Koch",
    "article": "Der",
    "sentence": "Der Koch kocht.",
    "grammar": "Masculine",
    "translation": "Cook"
  },
  {
    "noun": "Flagge",
    "article": "Die",
    "sentence": "Die Flagge weht.",
    "grammar": "Feminine",
    "translation": "Flag"
  },
  {
    "noun": "Trainer",
    "article": "Der",
    "sentence": "Der Trainer leitet.",
    "grammar": "Masculine",
    "translation": "Coach"
  },
  {
    "noun": "Schwung",
    "article": "Der",
    "sentence": "Der Schwung ist stark.",
    "grammar": "Masculine",
    "translation": "Swing"
  },
  {
    "noun": "Lautsprecher",
    "article": "Der",
    "sentence": "Der Lautsprecher ist laut.",
    "grammar": "Masculine",
    "translation": "Speaker"
  },
  {
    "noun": "Bolzen",
    "article": "Der",
    "sentence": "Der Bolzen ist lang.",
    "grammar": "Masculine",
    "translation": "Bolt"
  },
  {
    "noun": "Fett",
    "article": "Das",
    "sentence": "Das Fett ist gesund.",
    "grammar": "Neuter",
    "translation": "Fat"
  },
  {
    "noun": "Teppich",
    "article": "Der",
    "sentence": "Der Teppich ist weich.",
    "grammar": "Masculine",
    "translation": "Rug"
  },
  {
    "noun": "Klopfen",
    "article": "Das",
    "sentence": "Das Klopfen ist laut.",
    "grammar": "Neuter",
    "translation": "Knock"
  },
  {
    "noun": "Zauber",
    "article": "Der",
    "sentence": "Der Zauber wirkt.",
    "grammar": "Masculine",
    "translation": "Spell"
  },
  {
    "noun": "Taxi",
    "article": "Das",
    "sentence": "Das Taxi ist da.",
    "grammar": "Neuter",
    "translation": "Taxi"
  },
  {
    "noun": "Runde",
    "article": "Die",
    "sentence": "Die Runde ist lang.",
    "grammar": "Feminine",
    "translation": "Round"
  },
  {
    "noun": "Strohhalm",
    "article": "Der",
    "sentence": "Der Strohhalm ist dünn.",
    "grammar": "Masculine",
    "translation": "Straw"
  },
  {
    "noun": "Luke",
    "article": "Die",
    "sentence": "Die Luke ist offen.",
    "grammar": "Feminine",
    "translation": "Hatch"
  },
  {
    "noun": "Gabel",
    "article": "Die",
    "sentence": "Die Gabel ist sauber.",
    "grammar": "Feminine",
    "translation": "Fork"
  },
  {
    "noun": "Böse",
    "article": "Das",
    "sentence": "Das Böse ist besiegt.",
    "grammar": "Neuter",
    "translation": "Evil"
  },
  {
    "noun": "Dienstmädchen",
    "article": "Das",
    "sentence": "Das Dienstmädchen putzt.",
    "grammar": "Neuter",
    "translation": "Maid"
  },
  {
    "noun": "Verwandte",
    "article": "Der",
    "sentence": "Der Verwandte kommt.",
    "grammar": "Masculine",
    "translation": "Relative"
  },
  {
    "noun": "Hexe",
    "article": "Die",
    "sentence": "Die Hexe lacht.",
    "grammar": "Feminine",
    "translation": "Witch"
  },
  {
    "noun": "Innenhof",
    "article": "Der",
    "sentence": "Der Innenhof ist groß.",
    "grammar": "Masculine",
    "translation": "Courtyard"
  },
  {
    "noun": "Sensation",
    "article": "Die",
    "sentence": "Die Sensation war groß.",
    "grammar": "Feminine",
    "translation": "Sensation"
  },
  {
    "noun": "Blase",
    "article": "Die",
    "sentence": "Die Blase ist geplatzt.",
    "grammar": "Feminine",
    "translation": "Bubble"
  },
  {
    "noun": "Leser",
    "article": "Der",
    "sentence": "Der Leser liest.",
    "grammar": "Masculine",
    "translation": "Reader"
  },
  {
    "noun": "Locke",
    "article": "Die",
    "sentence": "Die Locke ist blond.",
    "grammar": "Feminine",
    "translation": "Curl"
  },
  {
    "noun": "Kuchen",
    "article": "Der",
    "sentence": "Der Kuchen ist lecker.",
    "grammar": "Masculine",
    "translation": "Pie"
  },
  {
    "noun": "Düsenflugzeug",
    "article": "Das",
    "sentence": "Das Düsenflugzeug fliegt.",
    "grammar": "Neuter",
    "translation": "Jet"
  },
  {
    "noun": "Schicht",
    "article": "Die",
    "sentence": "Die Schicht beginnt.",
    "grammar": "Feminine",
    "translation": "Shift"
  },
  {
    "noun": "Union",
    "article": "Die",
    "sentence": "Die Union ist stark.",
    "grammar": "Feminine",
    "translation": "Union"
  },
  {
    "noun": "Teenager",
    "article": "Der",
    "sentence": "Der Teenager lernt.",
    "grammar": "Masculine",
    "translation": "Teenager"
  },
  {
    "noun": "Ebene",
    "article": "Die",
    "sentence": "Die Ebene ist flach.",
    "grammar": "Feminine",
    "translation": "Plain"
  },
  {
    "noun": "Kellnerin",
    "article": "Die",
    "sentence": "Die Kellnerin bringt das Essen.",
    "grammar": "Feminine",
    "translation": "Waitress"
  },
  {
    "noun": "Antwort",
    "article": "Die",
    "sentence": "Die Antwort ist richtig.",
    "grammar": "Feminine",
    "translation": "Reply"
  },
  {
    "noun": "Gerücht",
    "article": "Das",
    "sentence": "Das Gerücht verbreitet sich.",
    "grammar": "Neuter",
    "translation": "Rumor"
  },
  {
    "noun": "Schwerkraft",
    "article": "Die",
    "sentence": "Die Schwerkraft ist stark.",
    "grammar": "Feminine",
    "translation": "Gravity"
  },
  {
    "noun": "Schutz",
    "article": "Das",
    "sentence": "Das Schutz ist sicher.",
    "grammar": "Neuter",
    "translation": "Shelter"
  },
  {
    "noun": "Abenteuer",
    "article": "Das",
    "sentence": "Das Abenteuer ist spannend.",
    "grammar": "Neuter",
    "translation": "Adventure"
  },
  {
    "noun": "Löwe",
    "article": "Der",
    "sentence": "Der Löwe brüllt laut.",
    "grammar": "Masculine",
    "translation": "Lion"
  },
  {
    "noun": "Wirbelsäule",
    "article": "Die",
    "sentence": "Die Wirbelsäule ist wichtig.",
    "grammar": "Feminine",
    "translation": "Spine"
  },
  {
    "noun": "Vertrauen",
    "article": "Das",
    "sentence": "Das Vertrauen ist stark.",
    "grammar": "Neuter",
    "translation": "Confidence"
  },
  {
    "noun": "Tiefe",
    "article": "Die",
    "sentence": "Die Tiefe des Meeres ist groß.",
    "grammar": "Feminine",
    "translation": "Depth"
  },
  {
    "noun": "Reichweite",
    "article": "Die",
    "sentence": "Die Reichweite des Autos ist lang.",
    "grammar": "Feminine",
    "translation": "Reach"
  },
  {
    "noun": "Hammer",
    "article": "Der",
    "sentence": "Der Hammer ist schwer.",
    "grammar": "Masculine",
    "translation": "Hammer"
  },
  {
    "noun": "Bibel",
    "article": "Die",
    "sentence": "Die Bibel ist heilig.",
    "grammar": "Feminine",
    "translation": "Bible"
  },
  {
    "noun": "Vertrag",
    "article": "Der",
    "sentence": "Der Vertrag ist unterschrieben.",
    "grammar": "Masculine",
    "translation": "Contract"
  },
  {
    "noun": "Brieftasche",
    "article": "Die",
    "sentence": "Die Brieftasche ist voll.",
    "grammar": "Feminine",
    "translation": "Wallet"
  },
  {
    "noun": "Dschungel",
    "article": "Der",
    "sentence": "Der Dschungel ist dicht.",
    "grammar": "Masculine",
    "translation": "Jungle"
  },
  {
    "noun": "Fabrik",
    "article": "Die",
    "sentence": "Die Fabrik ist groß.",
    "grammar": "Feminine",
    "translation": "Factory"
  },
  {
    "noun": "Indianer",
    "article": "Der",
    "sentence": "Der Indianer jagt.",
    "grammar": "Masculine",
    "translation": "Indian"
  },
  {
    "noun": "Balkon",
    "article": "Der",
    "sentence": "Der Balkon ist sonnig.",
    "grammar": "Masculine",
    "translation": "Balcony"
  },
  {
    "noun": "Reis",
    "article": "Der",
    "sentence": "Der Reis ist gekocht.",
    "grammar": "Masculine",
    "translation": "Rice"
  },
  {
    "noun": "Knoten",
    "article": "Der",
    "sentence": "Der Knoten ist fest.",
    "grammar": "Masculine",
    "translation": "Knot"
  },
  {
    "noun": "Kabel",
    "article": "Das",
    "sentence": "Das Kabel ist lang.",
    "grammar": "Neuter",
    "translation": "Cord"
  },
  {
    "noun": "Kollege",
    "article": "Der",
    "sentence": "Der Kollege hilft.",
    "grammar": "Masculine",
    "translation": "Colleague"
  },
  {
    "noun": "Absicht",
    "article": "Die",
    "sentence": "Die Absicht ist gut.",
    "grammar": "Feminine",
    "translation": "Intention"
  },
  {
    "noun": "Starren",
    "article": "Der",
    "sentence": "Der Starren ist intensiv.",
    "grammar": "Masculine",
    "translation": "Stare"
  },
  {
    "noun": "Motel",
    "article": "Das",
    "sentence": "Das Motel ist günstig.",
    "grammar": "Neuter",
    "translation": "Motel"
  },
  {
    "noun": "Anwalt",
    "article": "Der",
    "sentence": "Der Anwalt verteidigt.",
    "grammar": "Masculine",
    "translation": "Attorney"
  },
  {
    "noun": "Liebling",
    "article": "Der",
    "sentence": "Der Liebling ist nett.",
    "grammar": "Masculine",
    "translation": "Darling"
  },
  {
    "noun": "Diskussion",
    "article": "Die",
    "sentence": "Die Diskussion ist interessant.",
    "grammar": "Feminine",
    "translation": "Discussion"
  },
  {
    "noun": "Atmosphäre",
    "article": "Die",
    "sentence": "Die Atmosphäre ist ruhig.",
    "grammar": "Feminine",
    "translation": "Atmosphere"
  },
  {
    "noun": "Aufführung",
    "article": "Die",
    "sentence": "Die Aufführung war toll.",
    "grammar": "Feminine",
    "translation": "Performance"
  },
  {
    "noun": "Spannung",
    "article": "Die",
    "sentence": "Die Spannung steigt.",
    "grammar": "Feminine",
    "translation": "Tension"
  },
  {
    "noun": "Text",
    "article": "Der",
    "sentence": "Der Text ist lang.",
    "grammar": "Masculine",
    "translation": "Text"
  },
  {
    "noun": "Strand",
    "article": "Der",
    "sentence": "Der Strand ist sauber.",
    "grammar": "Masculine",
    "translation": "Strand"
  },
  {
    "noun": "Mittag",
    "article": "Der",
    "sentence": "Der Mittag ist heiß.",
    "grammar": "Masculine",
    "translation": "Noon"
  },
  {
    "noun": "Ader",
    "article": "Die",
    "sentence": "Die Ader ist sichtbar.",
    "grammar": "Feminine",
    "translation": "Vein"
  },
  {
    "noun": "Experte",
    "article": "Der",
    "sentence": "Der Experte spricht.",
    "grammar": "Masculine",
    "translation": "Expert"
  },
  {
    "noun": "Bande",
    "article": "Die",
    "sentence": "Die Bande ist gefährlich.",
    "grammar": "Feminine",
    "translation": "Gang"
  },
  {
    "noun": "Polizist",
    "article": "Der",
    "sentence": "Der Polizist hilft.",
    "grammar": "Masculine",
    "translation": "Policeman"
  },
  {
    "noun": "Krebs",
    "article": "Der",
    "sentence": "Der Krebs ist heftig.",
    "grammar": "Masculine",
    "translation": "Cancer"
  },
  {
    "noun": "Fuchs",
    "article": "Der",
    "sentence": "Der Fuchs ist schlau.",
    "grammar": "Masculine",
    "translation": "Fox"
  },
  {
    "noun": "Scheidung",
    "article": "Die",
    "sentence": "Die Scheidung ist schwierig.",
    "grammar": "Feminine",
    "translation": "Divorce"
  },
  {
    "noun": "Puls",
    "article": "Der",
    "sentence": "Der Puls ist schnell.",
    "grammar": "Masculine",
    "translation": "Pulse"
  },
  {
    "noun": "Abwesenheit",
    "article": "Die",
    "sentence": "Die Abwesenheit dauert lange.",
    "grammar": "Feminine",
    "translation": "Absence"
  },
  {
    "noun": "Gewalt",
    "article": "Die",
    "sentence": "Die Gewalt ist schlimm.",
    "grammar": "Feminine",
    "translation": "Violence"
  },
  {
    "noun": "Humor",
    "article": "Der",
    "sentence": "Der Humor ist wichtig.",
    "grammar": "Masculine",
    "translation": "Humor"
  },
  {
    "noun": "Hocker",
    "article": "Der",
    "sentence": "Der Hocker ist bequem.",
    "grammar": "Masculine",
    "translation": "Stool"
  },
  {
    "noun": "Kies",
    "article": "Der",
    "sentence": "Der Kies liegt auf dem Weg.",
    "grammar": "Masculine",
    "translation": "Gravel"
  },
  {
    "noun": "Schatz",
    "article": "Der",
    "sentence": "Der Schatz ist versteckt.",
    "grammar": "Masculine",
    "translation": "Treasure"
  },
  {
    "noun": "Butter",
    "article": "Die",
    "sentence": "Die Butter ist weich.",
    "grammar": "Feminine",
    "translation": "Butter"
  },
  {
    "noun": "Schalter",
    "article": "Der",
    "sentence": "Der Schalter ist kaputt.",
    "grammar": "Masculine",
    "translation": "Switch"
  },
  {
    "noun": "Zigarre",
    "article": "Die",
    "sentence": "Die Zigarre ist teuer.",
    "grammar": "Feminine",
    "translation": "Cigar"
  },
  {
    "noun": "Leinwand",
    "article": "Die",
    "sentence": "Die Leinwand ist weiß.",
    "grammar": "Feminine",
    "translation": "Canvas"
  },
  {
    "noun": "Glück",
    "article": "Das",
    "sentence": "Das Glück ist mit uns.",
    "grammar": "Neuter",
    "translation": "Happiness"
  },
  {
    "noun": "Führer",
    "article": "Der",
    "sentence": "Der Führer erklärt alles.",
    "grammar": "Masculine",
    "translation": "Guide"
  },
  {
    "noun": "Stecknadel",
    "article": "Die",
    "sentence": "Die Stecknadel ist klein.",
    "grammar": "Feminine",
    "translation": "Pin"
  },
  {
    "noun": "Schauspieler",
    "article": "Der",
    "sentence": "Der Schauspieler ist bekannt.",
    "grammar": "Masculine",
    "translation": "Actor"
  },
  {
    "noun": "Ganze",
    "article": "Das",
    "sentence": "Das Ganze ist einfach.",
    "grammar": "Neuter",
    "translation": "Whole"
  },
  {
    "noun": "Anordnung",
    "article": "Die",
    "sentence": "Die Anordnung ist klar.",
    "grammar": "Feminine",
    "translation": "Arrangement"
  },
  {
    "noun": "Braun",
    "article": "Das",
    "sentence": "Das Braun ist dunkel.",
    "grammar": "Neuter",
    "translation": "Brown"
  },
  {
    "noun": "Gastgeber",
    "article": "Der",
    "sentence": "Der Gastgeber ist freundlich.",
    "grammar": "Masculine",
    "translation": "Host"
  },
  {
    "noun": "Band",
    "article": "Das",
    "sentence": "Das Band ist rot.",
    "grammar": "Neuter",
    "translation": "Ribbon"
  },
  {
    "noun": "Schal",
    "article": "Der",
    "sentence": "Der Schal ist warm.",
    "grammar": "Masculine",
    "translation": "Scarf"
  },
  {
    "noun": "Skala",
    "article": "Die",
    "sentence": "Die Skala zeigt die Höhe.",
    "grammar": "Feminine",
    "translation": "Scale"
  },
  {
    "noun": "Beweis",
    "article": "Der",
    "sentence": "Der Beweis ist eindeutig.",
    "grammar": "Masculine",
    "translation": "Proof"
  },
  {
    "noun": "Pfeil",
    "article": "Der",
    "sentence": "Der Pfeil fliegt schnell.",
    "grammar": "Masculine",
    "translation": "Arrow"
  },
  {
    "noun": "Temperatur",
    "article": "Die",
    "sentence": "Die Temperatur ist hoch.",
    "grammar": "Feminine",
    "translation": "Temperature"
  },
  {
    "noun": "Technologie",
    "article": "Die",
    "sentence": "Die Technologie ist modern.",
    "grammar": "Feminine",
    "translation": "Technology"
  },
  {
    "noun": "Erlaubnis",
    "article": "Die",
    "sentence": "Die Erlaubnis ist notwendig.",
    "grammar": "Feminine",
    "translation": "Permission"
  },
  {
    "noun": "Standort",
    "article": "Der",
    "sentence": "Der Standort ist ideal.",
    "grammar": "Masculine",
    "translation": "Location"
  },
  {
    "noun": "Klaue",
    "article": "Die",
    "sentence": "Die Klaue ist scharf.",
    "grammar": "Feminine",
    "translation": "Claw"
  },
  {
    "noun": "Cowboy",
    "article": "Der",
    "sentence": "Der Cowboy reitet.",
    "grammar": "Masculine",
    "translation": "Cowboy"
  },
  {
    "noun": "Agentur",
    "article": "Die",
    "sentence": "Die Agentur ist groß.",
    "grammar": "Feminine",
    "translation": "Agency"
  },
  {
    "noun": "Bau",
    "article": "Der",
    "sentence": "Der Bau dauert lange.",
    "grammar": "Masculine",
    "translation": "Construction"
  },
  {
    "noun": "Jagd",
    "article": "Die",
    "sentence": "Die Jagd beginnt früh.",
    "grammar": "Feminine",
    "translation": "Hunting"
  },
  {
    "noun": "Gemüse",
    "article": "Das",
    "sentence": "Das Gemüse ist frisch.",
    "grammar": "Neuter",
    "translation": "Vegetable"
  },
  {
    "noun": "Konservendose",
    "article": "Die",
    "sentence": "Die Konservendose ist voll.",
    "grammar": "Feminine",
    "translation": "Tin"
  },
  {
    "noun": "Hubschrauber",
    "article": "Der",
    "sentence": "Der Hubschrauber landet.",
    "grammar": "Masculine",
    "translation": "Helicopter"
  },
  {
    "noun": "Falle",
    "article": "Die",
    "sentence": "Die Falle ist bereit.",
    "grammar": "Feminine",
    "translation": "Trap"
  },
  {
    "noun": "Schlag",
    "article": "Der",
    "sentence": "Der Schlag war hart.",
    "grammar": "Masculine",
    "translation": "Pat"
  },
  {
    "noun": "Lücke",
    "article": "Die",
    "sentence": "Die Lücke ist groß.",
    "grammar": "Feminine",
    "translation": "Gap"
  },
  {
    "noun": "Haustier",
    "article": "Das",
    "sentence": "Das Haustier ist lieb.",
    "grammar": "Neuter",
    "translation": "Pet"
  },
  {
    "noun": "Bildung",
    "article": "Die",
    "sentence": "Die Bildung ist wichtig.",
    "grammar": "Feminine",
    "translation": "Education"
  },
  {
    "noun": "Einkauf",
    "article": "Der",
    "sentence": "Der Einkauf war teuer.",
    "grammar": "Masculine",
    "translation": "Shopping"
  },
  {
    "noun": "Schuppen",
    "article": "Der",
    "sentence": "Der Schuppen ist alt.",
    "grammar": "Masculine",
    "translation": "Shed"
  },
  {
    "noun": "Vereinbarung",
    "article": "Die",
    "sentence": "Die Vereinbarung ist fair.",
    "grammar": "Feminine",
    "translation": "Agreement"
  },
  {
    "noun": "Boden",
    "article": "Der",
    "sentence": "Der Boden ist nass.",
    "grammar": "Masculine",
    "translation": "Soil"
  },
  {
    "noun": "Herzog",
    "article": "Der",
    "sentence": "Der Herzog ist reich.",
    "grammar": "Masculine",
    "translation": "Duke"
  },
  {
    "noun": "Schrotflinte",
    "article": "Die",
    "sentence": "Die Schrotflinte ist laut.",
    "grammar": "Feminine",
    "translation": "Shotgun"
  },
  {
    "noun": "Idee",
    "article": "Die",
    "sentence": "Die Idee ist gut.",
    "grammar": "Feminine",
    "translation": "Notion"
  },
  {
    "noun": "Heck",
    "article": "Das",
    "sentence": "Das Heck des Autos.",
    "grammar": "Neuter",
    "translation": "Rear"
  },
  {
    "noun": "Zeremonie",
    "article": "Die",
    "sentence": "Die Zeremonie war schön.",
    "grammar": "Feminine",
    "translation": "Ceremony"
  },
  {
    "noun": "Löffel",
    "article": "Der",
    "sentence": "Der Löffel ist klein.",
    "grammar": "Masculine",
    "translation": "Spoon"
  },
  {
    "noun": "Badewanne",
    "article": "Die",
    "sentence": "Die Badewanne ist voll.",
    "grammar": "Feminine",
    "translation": "Tub"
  },
  {
    "noun": "Hinweis",
    "article": "Der",
    "sentence": "Der Hinweis ist nützlich.",
    "grammar": "Masculine",
    "translation": "Clue"
  },
  {
    "noun": "Iris",
    "article": "Die",
    "sentence": "Die Iris ist bunt.",
    "grammar": "Feminine",
    "translation": "Iris"
  },
  {
    "noun": "Vorfall",
    "article": "Der",
    "sentence": "Der Vorfall war gestern.",
    "grammar": "Masculine",
    "translation": "Incident"
  },
  {
    "noun": "Zusammenstoß",
    "article": "Der",
    "sentence": "Der Zusammenstoß war heftig.",
    "grammar": "Masculine",
    "translation": "Crash"
  },
  {
    "noun": "Journal",
    "article": "Das",
    "sentence": "Das Journal ist interessant.",
    "grammar": "Neuter",
    "translation": "Journal"
  },
  {
    "noun": "Zugriff",
    "article": "Der",
    "sentence": "Der Zugriff ist verboten.",
    "grammar": "Masculine",
    "translation": "Access"
  },
  {
    "noun": "Messing",
    "article": "Das",
    "sentence": "Das Messing glänzt.",
    "grammar": "Neuter",
    "translation": "Brass"
  },
  {
    "noun": "Mama",
    "article": "Die",
    "sentence": "Die Mama ist lieb.",
    "grammar": "Feminine",
    "translation": "Mommy"
  },
  {
    "noun": "Sidebar",
    "article": "Die",
    "sentence": "Die Sidebar ist nützlich.",
    "grammar": "Feminine",
    "translation": "Sidebar"
  },
  {
    "noun": "Schaf",
    "article": "Das",
    "sentence": "Das Schaf ist weiß.",
    "grammar": "Neuter",
    "translation": "Sheep"
  },
  {
    "noun": "Ingenieur",
    "article": "Der",
    "sentence": "Der Ingenieur baut.",
    "grammar": "Masculine",
    "translation": "Engineer"
  },
  {
    "noun": "Rumpf",
    "article": "Der",
    "sentence": "Der Rumpf des Schiffes.",
    "grammar": "Masculine",
    "translation": "Hull"
  },
  {
    "noun": "Geruch",
    "article": "Der",
    "sentence": "Der Geruch ist stark.",
    "grammar": "Masculine",
    "translation": "Odor"
  },
  {
    "noun": "Termin",
    "article": "Der",
    "sentence": "Der Termin ist morgen.",
    "grammar": "Masculine",
    "translation": "Appointment"
  },
  {
    "noun": "Einladung",
    "article": "Die",
    "sentence": "Die Einladung ist schön.",
    "grammar": "Feminine",
    "translation": "Invitation"
  },
  {
    "noun": "Lumpen",
    "article": "Der",
    "sentence": "Der Lumpen ist schmutzig.",
    "grammar": "Masculine",
    "translation": "Rag"
  },
  {
    "noun": "Gute",
    "article": "Das",
    "sentence": "Das Gute überwiegt.",
    "grammar": "Neuter",
    "translation": "Good"
  },
  {
    "noun": "Typ",
    "article": "Der",
    "sentence": "Der Typ ist nett.",
    "grammar": "Masculine",
    "translation": "Dude"
  },
  {
    "noun": "Behandlung",
    "article": "Die",
    "sentence": "Die Behandlung hilft.",
    "grammar": "Feminine",
    "translation": "Treatment"
  },
  {
    "noun": "Weisheit",
    "article": "Die",
    "sentence": "Die Weisheit kommt mit dem Alter.",
    "grammar": "Feminine",
    "translation": "Wisdom"
  },
  {
    "noun": "Preis",
    "article": "Der",
    "sentence": "Der Preis ist hoch.",
    "grammar": "Masculine",
    "translation": "Prize"
  },
  {
    "noun": "Element",
    "article": "Das",
    "sentence": "Das Element ist wichtig.",
    "grammar": "Neuter",
    "translation": "Element"
  },
  {
    "noun": "Riese",
    "article": "Der",
    "sentence": "Der Riese ist stark.",
    "grammar": "Masculine",
    "translation": "Giant"
  },
  {
    "noun": "Serviette",
    "article": "Die",
    "sentence": "Die Serviette ist sauber.",
    "grammar": "Feminine",
    "translation": "Napkin"
  },
  {
    "noun": "Wäsche",
    "article": "Die",
    "sentence": "Die Wäsche ist trocken.",
    "grammar": "Feminine",
    "translation": "Laundry"
  },
  {
    "noun": "Option",
    "article": "Die",
    "sentence": "Die Option ist gut.",
    "grammar": "Feminine",
    "translation": "Option"
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
