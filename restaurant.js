class Restaurant {
    constructor(mitarbeiter, adresse, tische, speisekarte) {
        this.mitarbeiter = mitarbeiter;
        this.adresse = adresse;
        this.tische = tische;
        this.speisekarte = speisekarte;
    }
}
const leoRestaurant = new Restaurant(
    35,
    "Maximilianstraße 5, 80796 Muenchen",
    100,
    "a3"
);
console.log(leoRestaurant);
const speisekarte = {
    fischgericht: "14€",
    fleischgericht: "16€",
    veganesessen: "10€",
};
class Personal {
    constructor(gehalt, arbeitsstunden, urlaub) {
        this.gehalt = gehalt;
        this.arbeitsstunden = arbeitsstunden;
        this.urlaub = urlaub;
    }
}
const leoRestaurantPersonal = new Personal("96€", 8, 30);
console.log(leoRestaurantPersonal);

class Kellner extends Personal {
    constructor(bestellungenaufnehmen, gehalt, arbeitsstunden, urlaub) {
        super(gehalt, arbeitsstunden, urlaub);
        this.bestellungenaufnehmen = bestellungenaufnehmen;
    }
}

const leoRestaurantKellner = new Kellner("30 täglich", "96€", 8, 30);
console.log(leoRestaurantKellner);

class Koch extends Personal {
    constructor(gehalt, arbeitsstunden, urlaub, kochen, bestellungenaufnehmen) {
        super(gehalt, arbeitsstunden, urlaub, bestellungenaufnehmen);
        this.kochen = kochen;
    }
}
const leoRestaurantKoch = new Koch(
    "96€",
    8,
    30,
    "300 Gerichte täglich",
    "30mal täglich"
);
console.log(leoRestaurantKoch);
