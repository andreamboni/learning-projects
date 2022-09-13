const form = document.querySelector("#flight-form");
const flightList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-flights");
const filter = document.querySelector("#filter");
const flightInput = document.querySelector("#flight");

loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addFlight);
}

function addFlight(event) {
  if (flightInput.value === "") {
    alert("Add a flight");
  }

  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(flightInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  flightList.appendChild(li);

  flightInput.value = '';

  event.preventDefault();
}
