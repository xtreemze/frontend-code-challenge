window.addEventListener("load", function() {});

let listings = document.getElementById("listings");

let fetchedListings = fetch("https://api.mcmakler.de/v1/advertisements")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    listings.innerHTML = data;
  });


  class card {
    constructor(arguments) {
      this.cardHtml = `
      
  <div class="row">
  <div class="col s12 m6">
    <div class="card">
      <div class="card-image">
        <img src="${sourceImage}">
        <span class="card-title">${cardTitle}</span>
        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>
      <div class="card-content">
${cardContent}
      </div>
    </div>
  </div>
</div>
      `
    }
  }
