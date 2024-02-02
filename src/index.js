document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById('create-task-form')
  const tasksULElement = document.getElementById('tasks')
  const newTaskDescriptionInputElement = document.getElementById('new-task-description')

  createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const liElement = document.createElement('li')
    liElement.textContent = newTaskDescriptionInputElement.value + " "
    // liElement.append(newTaskDescriptionInputElement.value)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "X"
    deleteButton.setAttribute('data-description', newTaskDescriptionInputElement.value)
    deleteButton.addEventListener('click', (event) => {
      // deleteButton.parentNode.remove()
      event.target.parentNode.remove()
    })

    liElement.appendChild(deleteButton)
    tasksULElement.appendChild(liElement)
  })
});