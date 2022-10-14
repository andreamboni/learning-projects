const http = new httpLib();

document
  .querySelector(".get-flights-button")
  .addEventListener("click", getFlights);

function getFlights(event) {
  http.get("http://localhost:8080/flight/", function (error, response) {
    let output = "";

    JSON.parse(response).forEach(function (flight) {
      output += `<tr>`;
      output += `<td>${flight.id}`;
      output += `<td>${flight.departure}`;
      output += `<td>${flight.arrival}`;
      output += `<td>${flight.flightClass}`;
      output += `<td>${flight.terminal}`;
      output += `<td>${flight.flightNumber}`;
      output += `<td><button class="delete-flight-button">Delete</button>`
      output += `</tr>`;
    });

    let flightTable = document.querySelector("tbody");
    flightTable.innerHTML = output;
  });
}

