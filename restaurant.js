// Restaurant
// + Speisekarte
// + geöffnet/geschlossen
// + Kasse
// - Personal bezahlen
class Restaurant {
    constructor(speisekarte, kassenbestand, oeffnungszeiten) {
        this.speisekarte = speisekarte;
        this.kasse = kassenbestand;
        this.oeffnungszeiten = oeffnungszeiten;
        this.geoeffnet = false;
        this.time = new Date().getHours();
    }

    personalBezahlen() {}
    besucherZeiten() {
        if (this.time >= 11 && this.time <= 19) {
            console.log(`Es ist ${this.time}Uhr, wir haben geoeffnet!`);
        } else {
            console.log(`Es ist ${this.time}Uhr, wir haben geschlossen!`);
        }
    }

    oeffnen() {
        this.geoeffnet = true;
    }

    schliessen() {
        this.geoeffnet = false;
    }

    //DEBUG --------
    status() {
        console.log("geöffnet?", this.geoeffnet);
    }
}

const restaurant = new Restaurant([], 0);

restaurant.status();
restaurant.oeffnen();
restaurant.status();
restaurant.schliessen();
restaurant.status();
restaurant.besucherZeiten();
// Personal
// + Anfangswert ausgezahlter Lohn: 0€
// - Lohn erhalten
class Personal {
    constructor() {
        this.lohn = 0;
    }

    lohnErhalten(lohn) {
        this.lohn += lohn;
        console.log(`Der ${lohn}€ würde gerade ausgezahlt.`);
        return;
    }
}
const personal = new Personal();
personal.lohnErhalten(96);
console.log(personal);

// Kellner (erbt von Personal)
// - Bestellung aufnehmen
// - Bestellung weitergeben
// - Bestellung ausgeben
// - abkassieren
class Kellner extends Personal {
    constructor(lohn, gericht) {
        super(lohn);
        this.gericht = gericht;
    }

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

const kellner = new Kellner({ gericht: "Pizza", lohn: 96 });

const gast1 = new Gast(kellner);
const gast2 = new Gast(kellner);

gast1.bestellen({ name: "Pizza", preis: 10 });
gast2.bestellen({ name: "Pasta", preis: 8 });

gast1.bezahlen();
gast2.bezahlen();
