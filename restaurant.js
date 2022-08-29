// Restaurant
// + Speisekarte
// + geöffnet/geschlossen
// + Kasse
// - Personal bezahlen
class Restaurant {
    constructor(speisekarte, kassenbestand) {
        this.speisekarte = speisekarte;
        this.kasse = kassenbestand;
        this.geoeffnet = false;
    }

    personalBezahlen() {
        // ...
    }

    oeffnen() {
        this.geoeffnet = true;
    }

    schliessen() {
        this.geoeffnet = false;
    }

    // DEBUG --------
    status() {
        console.log("geöffnet?", this.geoeffnet);
    }
}

const restaurant = new Restaurant([], 0);

// Personal
// + Anfangswert ausgezahlter Lohn: 0€
// - Lohn erhalten
class Personal {
    constructor() {
        this.lohn = 0;
    }

    lohnErhalten(lohn) {
        this.lohn += lohn;
    }
}

const personal = new Personal();

// Kellner (erbt von Personal)
// - Bestellung aufnehmen
// - Bestellung weitergeben
// - Bestellung ausgeben
// - abkassieren
class Kellner extends Personal {
    bestellungAufnehmen(gericht) {
        console.log("Bestellung aufgenommen:", gericht);
        // ...
    }

    bestellungWeitergeben() {
        // ...
    }

    bestellungAusgeben() {
        // ...
    }

    abkassieren(gericht) {
        console.log("Bestellung abgerechnet:", gericht);
        // ...
    }
}

// Koch (erbt von Personal)
// - Bestellung erhalten
// - Bestellung zubereiten

// Gast
// - bestellen
// - bezahlen
class Gast {
    constructor(kellner) {
        this.kellner = kellner;
    }

    bestellen(gericht) {
        this.gericht = gericht;
        this.kellner.bestellungAufnehmen(gericht);
    }

    bezahlen() {
        console.log(`zu bezahlen: ${this.gericht.preis}€`);
        this.kellner.abkassieren(this.gericht);
    }
}

const kellner = new Kellner();

const gast1 = new Gast(kellner);
const gast2 = new Gast(kellner);

gast1.bestellen({ name: "Pizza", preis: 10 });
gast2.bestellen({ name: "Pasta", preis: 8 });

gast1.bezahlen();
gast2.bezahlen();
