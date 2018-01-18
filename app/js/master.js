class Card {
  constructor(args) {
    this.sourceImages = args.advertisementAssets;
    for (const key in this.sourceImages) {
      if (this.sourceImages[key].titlePicture) {
        this.sourceImage = this.sourceImages[
          key
        ].advertisementThumbnails.inventory_m.url;
      }
    }
    this.cardTitle = args.title;
    this.priceRent = args.advertisementPrice.baseRent;
    this.priceSell = args.advertisementPrice.sellprice;
    this.furnished = args.hasFurniture;
    this.rooms = args.realestateSummary.numberOfRooms;
    this.address = args.realestateSummary.address;
    if (
      args.userWishes.visibleAddress &&
      args.realestateSummary.address
    ) {
      this.fullAddress =
        args.realestateSummary.address.postalCode +
        " " +
        args.realestateSummary.address.street;
    } else {
      this.fullAddress = "";
    }
    this.space = parseInt(args.realestateSummary.space, 10);
    if (this.priceRent !== undefined) {
      this.price = parseInt(this.priceRent, 10);
      this.rental = "Mieten";
    } else {
      this.price = parseInt(this.priceSell, 10);
      this.rental = "Kaufen";
    }
    this.cardHtml = `<div class="">
  <div class="col s12 m6 l4">
    <div class="card small">
      <div class="card-image">
        <img src=${this.sourceImage}>
      </div>
      <a class="rentalStatus waves-effect waves-light btn grey-text text-lighten-1 white">${
        this.rental
      }</a>
      <div class="card-content row">
        <span class="title col s12">${this.cardTitle}</span>
        <span class="description col s12">${this.fullAddress}</span>
        <div class="card-action">
          <div class="price col s2">${this.price}&#8364
          </div>
          
          <div class="room col s10 right-align">
          ${this.rooms} Zimmer | ab ${this.space} m<sup>2</sup>
          </div>
          </div>
          
      </div>
    </div>
  </div>
</div>
`;
    listings.innerHTML += this.cardHtml;
  }
}

let listings = document.getElementById("listings");

window.resultJson = require("./advertisements.json");

for (let index = 0; index < 10; index++) {
  new Card(window.resultJson.data[index]);
}
