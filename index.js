// Javascript array is a data structure to hold values.
const beersToAddArray = [
    'Athena',
    'Tritonia',
    'Athenamosa'
];

class BeerService  {
    addBeer(beerName) {
        const list           = $("ul")[0];
        const newBeer        = document.createTextNode(beerName);
        const newBeerElement = document.createElement("li");

        newBeerElement.appendChild(newBeer);
        list.appendChild(newBeerElement);
    };

    removeAllBeers() {
        const list = $("ul")[0];
        const children = list.children;

        while(children.length > 0) {
            list.removeChild(children[0]);
        }
    };
}

$(document).ready(function() {
    const service = new BeerService();

    $("#submit-button").click(function(evt) {
        const beerToAdd = $("input")[0].value;
        service.addBeer(beerToAdd);
    });

    $("#clear-button").click(function(evt) {
        service.removeAllBeers();
    });

    service.removeAllBeers();

    for(var index = 0; index < beersToAddArray.length; index++) {
        service.addBeer(beersToAddArray[index]);
    };
});