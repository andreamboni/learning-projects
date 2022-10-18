const http = new httpLib;

const queryString = location.search.substring(1).split("|");
const flight = {
  id: queryString[0],
  departure: queryString[1],
  arrival: queryString[2],
  flightClass: queryString[3],
  terminal: queryString[4],
  flightNumber: queryString[5],
};

let output = "";

output += `<div class="form-row">
              <label for="id">ID</label>
              <input type="text" name="id" id="id" value="${flight.id}" disabled="disabled">
            </div>`;
output += `<div class="form-row">
              <label for="departure">Departure</label>
              <input type="text" name="departure" id="departure" value="${flight.departure}">
            </div>`;
output += `<div class="form-row">
            <label for="arrival">Arrival</label>
            <input type="text" name="arrival" id="arrival" value="${flight.arrival}">
          </div>`;
output += `<div class="form-row">
            <label for="flight-class">Flight Class</label>
            <input type="text" name="flightClass" id="flightClass" value="${flight.flightClass}">
          </div>`;
output += `<div class="form-row">
            <label for="terminal">Terminal</label>
            <input type="text" name="terminal" id="terminal" value="${flight.terminal}">
          </div>`;
output += `<div class="form-row">
            <label for="flight-number">Flight Number</label>
            <input type="text" name="flight-number" id="flightNumber" value="${flight.flightNumber}">
          </div>`;

let editForm = document.querySelector("form");
editForm.innerHTML = output;

document
  .querySelector(".edit-flight-button")
  .addEventListener("click", editFlight);

function editFlight() {
  const request = {
    departure: departure.value,
    arrival: arrival.value,
    flightClass: flightClass.value,
    terminal: terminal.value,
    flightNumber: flightNumber.value,
  };

  console.log("PUT Request", request);

  http.put("http://localhost:8080/flight/", id.value, request, function(response) {
    console.log(response)

    window.location.href = "./get-flights.html"
  })

}

