document
  .querySelector(".get-flights-button")
  .addEventListener("click", getFlights);

function getFlights(event) {
  console.log('aloo')

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8080/flight", true);

  let output = ''

  xhr.onload = function () {

    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      response.forEach(function(flight) {
        output += `<tr>`
        output += `<td>${flight.id}`
        output += `<td>${flight.departure}`
        output += `<td>${flight.arrival}`
        output += `<td>${flight.flightClass}`
        output += `<td>${flight.terminal}`
        output += `<td>${flight.flightNumber}`
        output += `</tr>`
      })

      let flightTable = document.querySelector('tbody');
      flightTable.innerHTML = output;

    }
  };

  xhr.send();

  event.preventDefault();
}
