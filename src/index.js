document.addEventListener("DOMContentLoaded", () => {
  const createTaskFormElement = document.getElementById('create-task-form')
  createTaskFormElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const newTaskDescriptionInputElement = document.getElementById('new-task-description')
    
    const liElement = document.createElement('li')
    liElement.textContent = newTaskDescriptionInputElement.value

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "X"
    deleteButton.setAttribute('data-description', newTaskDescriptionInputElement.value)
    deleteButton.addEventListener('click', (event) => {
      // liElement.remove()
      event.target.parentNode.remove()
    })

    liElement.appendChild(deleteButton)
    
    const tasksUlElement = document.getElementById('tasks')
    tasksUlElement.appendChild(liElement)

    createTaskFormElement.reset()
  })
});
