class card {
  constructor(args) {
    this.sourceImage =
      args.advertisementAssets.advertisementThumbnails.inventory_m.url;
    this.cardTitle = args.title;
    this.priceRent = args.advertisementPrice.baseRent;
    this.priceSell = args.advertisementPrice.sellprice;
    this.furnished = args.hasFurniture;
    this.rooms = args.realestateSummary.numberOfRooms;
    this.address = args.realestateSummary.address;
    this.space = args.realestateSummary.space;
    this.cardHtml = `<div class="row">
  <div class="col s12 m6">
    <div class="card">
      <div class="card-image">
        <img src=${this.sourceImage}>
        <span class="card-title">${this.cardTitle}</span>
      </div>
      <div class="card-content">
        ${this.cardContent}
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
`;
    listings.innerHTML += this.cardHtml;
  }
}

let listings = document.getElementById("listings");
window.resultJson = {};

// fetch(
//   "https://api.mcmakler.de/v1/advertisements?callback=JSONP_CALLBACK",
//   { mode: "no-cors" }
// )
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     resultJson = data.data;
//   });

if (window.resultJson.length < 10) {
  const imported = require("./advertisements.json");
  imported.data.forEach(function(item) {
    new card(item);
  });
}
//  else {
//   for (let i = 0; i < 10; i++) {
//     new card(resultJson.data[i]);
//   }
// }
