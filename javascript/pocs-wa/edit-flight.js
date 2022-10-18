document
  .querySelector(".flight-list-table")
  .addEventListener("click", dispatchFlight);

function dispatchFlight(event) {
  if (event.target.classList.contains("edit-flight-button")) {
    const parentElement = event.target.parentElement.parentElement;

    const flightId = parentElement.children[0].textContent;
    const flightDeparture = parentElement.children[1].textContent;
    const flightArrival = parentElement.children[2].textContent;
    const flightClass = parentElement.children[3].textContent;
    const flightTerminal = parentElement.children[4].textContent;
    const flightNumber = parentElement.children[5].textContent;

    console.log(flightId);
    console.log(flightDeparture);
    console.log(flightArrival);
    console.log(flightClass);
    console.log(flightTerminal);
    console.log(flightNumber);

    console.log(
      "Redirecting to",
      "edit-flight.html?" +
        flightId +
        "|" +
        flightDeparture +
        "|" +
        flightArrival +
        "|" +
        flightClass +
        "|" +
        flightTerminal +
        "|" +
        flightNumber
    );

    window.location.href =
      "./edit-flight.html?" +
      flightId +
      "|" +
      flightDeparture +
      "|" +
      flightArrival +
      "|" +
      flightClass +
      "|" +
      flightTerminal +
      "|" +
      flightNumber;
  }
}
