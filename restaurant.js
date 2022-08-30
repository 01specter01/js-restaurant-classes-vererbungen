// Restaurant
// + Speisekarte
// + geöffnet/geschlossen
// + Kasse
// - Personal bezahlen
class Restaurant {
    constructor(speisekarte, kassenbestand) {
        this.speisekarte = speisekarte;
        this.kassenbestand = kassenbestand;
        this.time = new Date().getHours();
    }

    personalBezahlen() {}
    besucherZeiten() {
        if (this.time >= 12 && this.time <= 20) {
            console.log(`Es ist ${this.time}Uhr, wir haben geoeffnet!`);
        } else {
            console.log(`Es ist ${this.time}Uhr, wir haben geschlossen!`);
        }
    }
}

const restaurant = new Restaurant([{ name: "Pizza", preis: 10 }], 0);

restaurant.besucherZeiten();
class Bestellung {
    constructor() {
        this.gericht;
    }
}
console.log(restaurant);

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
    constructor(restaurant, lohn, gericht) {
        super(lohn);
        this.restaurant = restaurant;
        this.gericht = gericht;
    }

    bestellungAufnehmen(gericht) {
        console.log("Bestellung aufgenommen:", this.gericht);
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
// kellner.bestellungAufnehmen();
class Koch extends Personal {
    constructor(restaurant, lohn, gericht) {
        super(lohn);
        this.restaurant = restaurant;
        this.gericht = gericht;
    }
    bestellungErhalten() {}
    bestellungZubereiten() {}
}
const koch = new Koch();
console.log(koch);
// Koch (erbt von Personal)
// - Bestellung erhalten
// - Bestellung zubereiten

// Gast
// - bestellen
// - bezahlen
class Gast extends Restaurant {
    constructor(speisekarte, kassenbestand, kellner) {
        super(speisekarte, kassenbestand);
        this.kellner = kellner;
    }

    bestellen(gericht) {
        this.gericht = gericht;
    }

    bezahlen() {
        console.log(`zu bezahlen: ${this.gericht.preis}€`);
        for (let x = 0; x < this.gericht.length; x++) {
            this.kassenbestand += this.gericht.preis[x];
        }
    }
}

const kellner = new Kellner({ gericht: "Pizza", lohn: 96 });

const gast1 = new Gast("speisekarte", 0, "kellner");

kellner.bestellungAufnehmen();
gast1.bestellen([
    { name: "Pizza", preis: 10 },
    { name: "Pizza", preis: 10 },
]);

gast1.bezahlen();
console.log(restaurant);
