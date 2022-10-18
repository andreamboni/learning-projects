document
  .querySelector(".flight-list-table")
  .addEventListener("click", deleteFlight);

function deleteFlight(event) {
  if (event.target.classList.contains("delete-flight-button")) {
    const flightId = document.querySelector(".flight-id").textContent

    // console.log("Flight: ", flight); 
    console.log("Taking the flight id = ", flightId);

    http.delete("http://localhost:8080/flight/", flightId, function(error, response) {
      console.log("Deleting the flight id = ", flightId);

      getFlights();
    })

  }
}
