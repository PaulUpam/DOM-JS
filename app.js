 function getClick () {
  //get user input
  const getInput = document.querySelector("#userInput");

  const userInputValue = getInput.value;

  //create list item for printing
  const listItem = document.createElement("li");

  // Set the text content of the list item
  listItem.textContent = userInputValue;

  // Get the unordered list element by its ID
  const countrylist = document.querySelector("ul");

  // Append the new list item to the unordered list
  countrylist.append(listItem);
  // Clear the input field after adding the item
  getInput.value = "";
};
function KeyPress(event) {
  //if the pressed key is Enter
  if (event.keyCode === 13) {
      // Prevent the default action of the Enter key (form submission)
      event.preventDefault();

      // Trigger the "Add country" functionality
      getClick ();
  }
}
