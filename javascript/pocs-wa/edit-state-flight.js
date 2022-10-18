const queryString = location.search.substring(1).split("|");
const flight = {
  id: queryString[0],
  departure: queryString[1],
  arrival: queryString[2],
  flightClass: queryString[3],
  terminal: queryString[4],
  flightNumber: queryString[5],
};

console.log("flight", flight);
console.log("flight.arrival", flight.arrival);

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
            <input type="text" name="flight-class" id="flight-class" value="${flight.flightClass}">
          </div>`;
output += `<div class="form-row">
            <label for="terminal">Terminal</label>
            <input type="text" name="terminal" id="terminal" value="${flight.terminal}">
          </div>`;
output += `<div class="form-row">
            <label for="flight-number">Flight Number</label>
            <input type="text" name="flight-number" id="flight-number" value="${flight.flightNumber}">
          </div>`;


let editForm = document.querySelector("form");
editForm.innerHTML = output;
