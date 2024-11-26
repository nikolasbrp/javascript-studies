const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


function addTask(event) {

    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    listItem.innerHTML = `
   
        <div class="row">
            <div class="col-auto">                
                <label for="labelTask" class="visually-hidden">Task</label>
                <input type="text" class="form-control" id="inputPassword2" placeholder="Password" value="${taskText}">                
            </div>
            <div class="col-auto">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button class="btn btn-md btn-success mark-complete"><i class="bi bi-check-circle"></i></button>                
                    <button class="btn btn-md btn-danger delete-task"><i class="bi bi-x-circle"></i></button>
                </div>
            </div>
        </div>
  
    `;

    listItem.querySelector('.mark-complete').addEventListener('click', function () {
        listItem.querySelector('span').classList.toggle('text-decoration-line-through');
    });

    listItem.querySelector('.delete-task').addEventListener('click', function () {
        listItem.remove();
    });

    taskList.appendChild(listItem);

    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);
