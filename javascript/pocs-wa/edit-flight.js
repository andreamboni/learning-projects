document
  .querySelector(".flight-list-table")
  .addEventListener("click", editFlight);

function editFlight(event) {
  if (event.target.classList.contains("edit-flight-button")) {
    const editFlight = {
      id: document.querySelector(".flight-id").textContent,
      departure: document.querySelector(".flight-departure").textContent,
      arrival: document.querySelector(".flight-arrival").textContent,
      flightClass: document.querySelector(".flight-flightClass").textContent,
      terminal: document.querySelector(".flight-terminal").textContent,
      flightNumber: document.querySelector(".flight-flightNumber").textContent,
    };

    console.log(editFlight);
    console.log(editFlight.id);
    console.log(editFlight.departure);
    console.log(editFlight.arrival);
    console.log(editFlight.flightClass);
    console.log(editFlight.terminal);
    console.log(editFlight.flightNumber);

    // window.location.href =
    //   "./edit-flight.html?" +
    //   editFlight.id +
    //   "|" +
    //   editFlight.departure +
    //   "|" +
    //   editFlight.arrival +
    //   "|" +
    //   editFlight.flightClass +
    //   "|" +
    //   editFlight.terminal +
    //   "|" +
    //   editFlight.flightNumber;

  }
}
