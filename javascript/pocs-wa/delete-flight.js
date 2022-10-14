document
  .querySelector(".flight-list-table")
  .addEventListener("click", deleteFlight);

function deleteFlight(event) {
  if(event.target.classList.contains("delete-flight-button")) {
    
    const listId = event.target;

    console.log(listId)


  }
}
