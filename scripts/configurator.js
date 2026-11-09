const params = new URLSearchParams(window.location.search);
const selectedBike = params.get("bike");

console.log(selectedBike);