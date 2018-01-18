window.addEventListener("load", function() {});

let listings = document.getElementById("listings");
let resultJson;

let fetchedListings = fetch("https://api.mcmakler.de/v1/advertisements")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    resultJson = data.data;
  });


  class card {
    constructor(arguments) {
this.sourceImage = arguments.advertisementAssets[0].advertisementThumbnails.inventory_m.url;
this.cardTitle = arguments.title;
this.priceRent = arguments.advertisementPrice.baseRent;
this.priceSell = arguments.advertisementPrice.sellprice;
this.furnished = arguments.hasFurniture;
      this.cardHtml = `<div class="row">
  <div class="col s12 m6">
    <div class="card">
      <div class="card-image">
        <img src=${this.sourceImage}>
        <span class="card-title">${this.cardTitle}</span>
        <a class="btn-floating halfway-fab waves-effect waves-light red">
          <i class="material-icons">add</i>
        </a>
      </div>
      <div class="card-content">
        ${cardContent}
      </div>
      <div class="price">
${this.priceRent}
${this.priceSell}
      </div>
    </div>
  </div>
</div>
`
    }
  }

  for (i = 0; i < 10; i ++){
    new card(resultJson.data[i]);
   }
