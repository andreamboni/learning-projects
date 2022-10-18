const http = new httpLib();

document
  .querySelector(".get-flights-button")
  .addEventListener("click", getFlights);

function getFlights(event) {
  http.get("http://localhost:8080/flight/", function (error, response) {
    let output = "";

    JSON.parse(response).forEach(function (flight) {
      output += `<tr class="flight-value">`;
      output += `<td class="flight-id">${flight.id}`;
      output += `<td class="flight-departure">${flight.departure}`;
      output += `<td class="flight-arrival">${flight.arrival}`;
      output += `<td class="flight-flightClass">${flight.flightClass}`;
      output += `<td class="flight-terminal">${flight.terminal}`;
      output += `<td class="flight-flightNumber">${flight.flightNumber}`;
      output += `<td><button class="edit-flight-button">Edit</button>`
      output += `<td><button class="delete-flight-button">Delete</button>`
      output += `</tr>`;
    });

    let flightTable = document.querySelector("tbody");
    flightTable.innerHTML = output;
  });
}

