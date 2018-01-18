window.addEventListener("load", function() {});

let listings = document.getElementById("listings");
let resultJson;

let fetchedListings = fetch("https://api.mcmakler.de/v1/advertisements?callback=JSONP_CALLBACK",  {'mode': 'no-cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    resultJson = data.data;
  });


  class card {
    constructor(arguments) {
this.sourceImage = arguments.advertisementAssets.advertisementThumbnails.inventory_m.url;
this.cardTitle = arguments.title;
this.priceRent = arguments.advertisementPrice.baseRent;
this.priceSell = arguments.advertisementPrice.sellprice;
this.furnished = arguments.hasFurniture;
this.rooms = arguments.realestateSummary.numberOfRooms;
this.address = arguments.realestateSummary.address;
this.space = arguments.realestateSummary.space;
      this.cardHtml = `<div class="row">
  <div class="col s12 m6">
    <div class="card">
      <div class="card-image">
        <img src=${this.sourceImage}>
        <span class="card-title">${this.cardTitle}</span>
      </div>
      <div class="card-content">
        ${cardContent}
      </div>
      <div class="price">
        ${this.priceRent} ${this.priceSell}
      </div>

      <div class="rooms">
        ${this.rooms}
      </div>

      <div class="space">
        ${this.space}
      </div>
    </div>
  </div>
</div>
`
listings.innerHTML += this.card;
    }
  }



  if (resultJson.length < 10){
    const importCines = function() {
      const imported = require("./advertisements.json");
      imported.data.forEach(function(item) {
        new card(item);
      });
    };
  } else {
    for (i = 0; i < 10; i ++){
      new card(resultJson.data[i]);
     }
  }

