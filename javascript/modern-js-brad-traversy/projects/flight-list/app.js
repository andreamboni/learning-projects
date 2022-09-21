const form = document.querySelector("#flight-form");
const formValues = Array.from(document.querySelectorAll(".form-value"));
const flightList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-flights");
const filter = document.querySelector("#filter");
const flightInput = document.querySelector("#flight");

loadEventListeners();

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getFlights);
  form.addEventListener("submit", addFlight);
  flightList.addEventListener("click", deleteFlight);
  clearButton.addEventListener("click", clearFlights);
  filter.addEventListener("keyup", filterFlights);
}

function addFlight(event) {
  const flight = [];

  formValues.forEach((formValue) => {
    if (formValue.value == "") {
      alert("All fields needs to be filled");
      return;
    }

    flight.push(formValue.value);

    formValue.value = "";
  });

  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(flight));

  storeFlightInLocalStorage(flight);

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  flightList.appendChild(li);

  event.preventDefault();
}

function deleteFlight(event) {
  if (
    event.target.parentElement.classList.contains("delete-item") &&
    confirm("Are you sure?")
  ) {
    event.target.parentElement.parentElement.remove();

    removeFlightFromLocalStorage(event.target.parentElement.parentElement);
  }
}

function clearFlights(event) {
  // flightList.innerHTML = "";

  // Parece ser mais rapido, mas se escrever errado para o Live Server
  while (flightList.firstChild) {
    flightList.removeChild(flightList.firstChild);
  }

  clearFlightFromLocalStorage();
}

function filterFlights(event) {
  const text = event.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function storeFlightInLocalStorage(flight) {
  let flights;

  if (localStorage.getItem("flights") === null) {
    flights = [];
  } else {
    flights = JSON.parse(localStorage.getItem("flights"));
  }

  flights.push(flight);

  localStorage.setItem("flights", JSON.stringify(flights));
}

function getFlights() {
  let flights;

  if (localStorage.getItem("flights") === null) {
    flights = [];
  } else {
    flights = JSON.parse(localStorage.getItem("flights"));
  }

  flights.forEach(function (flight) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(flight));

    storeFlightInLocalStorage(flight);

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    flightList.appendChild(li);
  });
}

function removeFlightFromLocalStorage(flightItem) {
  let flights;

  if (localStorage.getItem("flights") === null) {
    flights = [];
  } else {
    flights = JSON.parse(localStorage.getItem("flights"));
  }

  flights.forEach(function (flight, index) {
    if (flightItem.textContent === flight) {
      flights.splice(index, 1);
    }
  });

  localStorage.setItem("flights", JSON.stringify(flights));
}

function clearFlightFromLocalStorage() {
  localStorage.clear();
}
