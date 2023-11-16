document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasksUlElement = document.getElementById('tasks')

  const createTaskForm = document.getElementById('create-task-form')
  createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const inputTaskElement = document.getElementById('new-task-description')

    const liElement = document.createElement('li')
    liElement.textContent = inputTaskElement.value + " "

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "X"
    deleteButton.setAttribute('data-description', inputTaskElement.value)
    deleteButton.addEventListener('click', deleteTask)

    liElement.appendChild(deleteButton)

    tasksUlElement.appendChild(liElement)

    createTaskForm.reset()
  })
});

function deleteTask(e){
  e.target.parentNode.remove()
}