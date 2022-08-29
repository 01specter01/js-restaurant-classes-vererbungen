class Restaurant {
    constructor(speisekarte, kasse) {
        this.speisekarte = speisekarte;
        this.kasse = kasse;
        this.geoeffnet = false;
    }
    personalBezahlen() {
        //..
    }
    oeffnen() {
        this.geoeffnet = true;
    }
    schliessen() {
        this.geoeffnet = false;
    }
    status() {
        console.log("geoeffnet?", this.geoeffnet);
    }
}
const restaurant = new Restaurant([], 0);
restaurant.oeffnen();
restaurant.status();

// const leoRestaurant = new Restaurant();
// console.log(leoRestaurant);
// const speisekarte = {
//     fischgericht: "14€",
//     fleischgericht: "16€",
//     veganesessen: "10€",
//     alkoholischesgetränk: "8€",
//     unalkhoolischegetränk: "7€",
// };
// class Personal {
//     constructor(gehalt, arbeitsstunden, urlaub) {
//         this.gehalt = gehalt;
//         this.arbeitsstunden = arbeitsstunden;
//         this.urlaub = urlaub;
//     }
// }
// const leoRestaurantPersonal = new Personal("96€", 8, 30);
// console.log(leoRestaurantPersonal);

// class Kellner extends Personal {
//     constructor(bestellungenaufnehmen, gehalt, arbeitsstunden, urlaub) {
//         super(gehalt, arbeitsstunden, urlaub);
//         this.bestellungenaufnehmen = bestellungenaufnehmen;
//     }
// }

// const leoRestaurantKellner = new Kellner("30 täglich", "96€", 8, 30);
// console.log(leoRestaurantKellner);

// class Koch extends Personal {
//     constructor(gehalt, arbeitsstunden, urlaub, kochen, bestellungenaufnehmen) {
//         super(gehalt, arbeitsstunden, urlaub, bestellungenaufnehmen);
//         this.kochen = kochen;
//     }
// }
// const leoRestaurantKoch = new Koch(
//     "96€",
//     8,
//     30,
//     "300 Gerichte täglich",
//     "30mal täglich"
// );
// console.log(leoRestaurantKoch);

class Gast {
    constructor(kellner) {
        this.kellner = kellner;
    }
    bestellen(gericht) {
        this.gericht = gericht;
        this.kellner.bestellungenaufnehmen(gericht);
    }
    bezahlen() {
        console.log(`zu bezahlen: ${this.gericht.preis}€`);
        this.kellner.abkassieren(this.gericht);
    }
}
// const leoRestaurantGäste = new Gäste(
//     `${speisekarte.fischgericht.key} ,${speisekarte.alkoholischesgetränk}`
// );
// console.log(leoRestaurantGäste);
const kellner = new Kellner();
const gast1 = new Gast(kellner);
const gast2 = new Gast(kellner);

gast1.bestelllen({ name: "Pizza", preis: 10 });
gast2.bestelllen({ name: "Pasta", preis: 8 });

gast1.bezahlen();

gast2.bezahlen();
