window.addEventListener("load", function() {});

let listings = document.getElementById("listings");

let fetchedListings = fetch("https://api.mcmakler.de/v1/advertisements")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    listings.innerHTML = data;
  });
