document
  .querySelector(".flight-list-table")
  .addEventListener("click", deleteFlight);

function deleteFlight(event) {
  if (event.target.classList.contains("delete-flight-button")) {
    const parentElement = event.target.parentElement.parentElement;
    const flightId = parentElement.children[0].textContent;

    console.log("Taking the flight id = ", flightId);

    http.delete(
      "http://localhost:8080/flight/",
      flightId,
      function (error, response) {
        console.log("Deleting the flight id = ", flightId);

        getFlights();
      }
    );
  }
}
