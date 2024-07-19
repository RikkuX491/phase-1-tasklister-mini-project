document.addEventListener("DOMContentLoaded", () => {
  // First, search for the <form> element and store a reference to it in a variable
  const createTaskForm = document.getElementById('create-task-form')

  // Next, add an event listener to the <form> element so that the <form> element will listen for a submit event and code will be executed in response to the submit event
  createTaskForm.addEventListener('submit', (event) => {
    // Call the preventDefault() method to prevent the page from refreshing upon form submission
    event.preventDefault()

    // Search for the <ul> element where tasks need to be added to
    const tasksList = document.getElementById('tasks')

    // Create a new <li> element for the new task data to go inside of
    const taskLI = document.createElement('li')

    // Search for the <input> element where the user will type text into
    const newTaskDescriptionInputElement = document.getElementById('new-task-description')

    // Append the string containing within the value attribute for the <input> element inside of the new <li> element
    taskLI.append(newTaskDescriptionInputElement.value + " ")

    // Create a new <button> element that will be used to delete the new task when clicked
    const deleteTaskButton = document.createElement('button')

    // Set the textContent attribute for the button so that it has the value of "X"
    deleteTaskButton.textContent = "X"

    // Create a new attribute named "data-description" for the <button> element. The attribute's value will be the name of the new task
    deleteTaskButton.setAttribute('data-description', newTaskDescriptionInputElement.value)

    // Add an event listener to the <button> element so that the <li> element is removed when the <button> is clicked
    deleteTaskButton.addEventListener('click', () => {
      // Removes the <li> element in response to clicking the delete <button>
      taskLI.remove()

      // Here's another way to access the parent element for an element that is referenced using event.target (don't forget to include the event parameter in the callback function for the event listener)
      // console.log(event.target.parentNode)
    })

    // Append the <button> element inside of the <li> element
    taskLI.append(deleteTaskButton)

    // Final step - append the new <li> element inside of the <ul> element
    tasksList.appendChild(taskLI)

    // Clear the <input>s within the <form> after we're finished with our work
    createTaskForm.reset()
  })
});