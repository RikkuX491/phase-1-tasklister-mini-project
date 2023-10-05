document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById('create-task-form')
  createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newTaskDescriptionInputElement = document.getElementById('new-task-description')
    const tasksULElement = document.getElementById('tasks')
    const newTaskLIElement = document.createElement('li')
    newTaskLIElement.textContent = newTaskDescriptionInputElement.value + " "
    tasksULElement.append(newTaskLIElement)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "X"
    deleteButton.setAttribute('data-description', newTaskDescriptionInputElement.value)
    newTaskLIElement.appendChild(deleteButton)
    deleteButton.addEventListener('click', (event) => {
      event.target.parentNode.remove()
    })
    createTaskForm.reset()
  })
});
