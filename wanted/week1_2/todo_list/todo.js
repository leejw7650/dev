window.addEventListener('load', function () {
    const formElem = this.document.querySelector('form');
    formElem.onsubmit = addTask;
})

const undoneList = document.querySelector("ul.undone");
const doneList = document.querySelector("ul.done");

const makeNewTaskElement = (taskTextMain, taskTextMemo) => {
    const newTask = document.createElement("li");
    const taskBox = document.createElement("div");
    const taskMain = document.createElement("div");
    const taskMemo = document.createElement("div");
    const removeButton = document.createElement("button");
    
    newTask.className = "task";

    taskBox.className = "task-box";

    taskMain.className = "task-main";
    taskMemo.className = "task-memo";
    removeButton.className = "button-remove";
    removeButton.onclick = function() {
        const isDone = newTask.closest('ul').className;
        console.log(isDone);
        newTask.remove();
        if (isDone == 'done') {
            undoneList.appendChild(newTask);
        } else {
            doneList.appendChild(newTask);
        }
    };

    taskMain.textContent = taskTextMain;
    taskMemo.textContent = taskTextMemo
    removeButton.textContent = 'complete';

    taskBox.appendChild(taskMain);
    taskBox.appendChild(taskMemo);
    taskBox.appendChild(removeButton);

    newTask.appendChild(taskBox);
    return newTask
}

const addTask = (e) => {
    e.preventDefault()
    const taskInputMain = document.querySelector("input[name='task-main']");
    const taskInputMemo = document.querySelector("input[name='task-memo']");
    const taskTextMain = taskInputMain.value.trim(); // trim 함수는 좌우 space 지워줌.
    const taskTextMemo = taskInputMemo.value;


    if (taskTextMain !== "") {
        const newTask = makeNewTaskElement(taskTextMain, taskTextMemo);
        undoneList.appendChild(newTask);
    }

    taskInputMain.value = "";
    taskInputMemo.value = "";
}