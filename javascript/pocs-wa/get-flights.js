const http = new httpLib();

document
  .querySelector(".get-flights-button")
  .addEventListener("click", getFlights);

function getFlights(event) {
  http.get("http://localhost:8080/flight/", function (error, response) {
    let output = "";

    JSON.parse(response).forEach(function (flight) {
      output += `<tr class="flight-value">`;
      output += `<td id="id" class="flight-id">${flight.id} </td>`;
      output += `<td class="flight-departure">${flight.departure} </td>`;
      output += `<td class="flight-arrival">${flight.arrival} </td>`;
      output += `<td class="flight-flightClass">${flight.flightClass} </td>`;
      output += `<td class="flight-terminal">${flight.terminal} </td>`;
      output += `<td class="flight-flightNumber">${flight.flightNumber} </td>`;
      output += `<td><button class="edit-flight-button">Edit</button> <button class="delete-flight-button">Delete</button> </td>`;
      output += `</tr>`;
    });

    let flightTable = document.querySelector("tbody");
    flightTable.innerHTML = output;
  });
}
