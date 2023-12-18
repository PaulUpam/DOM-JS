const getClick = document.querySelector("#userClick");

getClick.addEventListener("click", function () {
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
});
