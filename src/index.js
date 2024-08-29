function handleSubmit(event){
  event.preventDefault()

  const newTaskDescription = document.getElementById('new-task-description')

  const tasksList = document.getElementById('tasks')

  const liElement = document.createElement('li')
  liElement.textContent = ` ${newTaskDescription.value} `

  const deleteButton = document.createElement('button')
  deleteButton.textContent = "X"
  deleteButton.setAttribute('data-description', newTaskDescription.value)
  deleteButton.addEventListener("click", deleteTaskLIElement)
  
  liElement.appendChild(deleteButton)
  tasksList.appendChild(liElement)

  event.target.reset()
}

function deleteTaskLIElement(event){
  event.target.parentNode.remove()
}

document.addEventListener("DOMContentLoaded", () => {  
  const createTaskForm = document.getElementById('create-task-form')
  createTaskForm.addEventListener('submit', handleSubmit)
});