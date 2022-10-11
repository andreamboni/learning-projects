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
      output += `</tr>`;
    });

    let flightTable = document.querySelector("tbody");
    flightTable.innerHTML = output;
  });
}

// function getFlights(event) {
//   console.log("aloo");

//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "", true);

//   xhr.onload = function () {
//     if (this.status === 200) {

//     }
//   };

//   xhr.send();

//   event.preventDefault();
// }
