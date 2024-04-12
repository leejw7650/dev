import React from "react";

const TaskList = (props) => {
    const changeTask = (todo) => {
        const temp = [...props.todoList];
        const taskInd = temp.findIndex(task => task.id === todo.id);
        temp[taskInd].isDone = temp[taskInd].isDone? false : true;
        console.log(temp);
        props.setTodoList(temp);
    }
    return (
        <div class='task-list'>
            <div class='undone'>
                <h3>할 일</h3>
                {props.todoList.filter(task => !task.isDone).map((todo) => {
                    return (
                        <div className='task-box'>
                            <h3>{todo.task}</h3>
                            <button onClick={() => changeTask(todo)}>complete</button>
                        </div>
                    )
                })}
            </div>

            <div class='done'>
                <h3>완료</h3>
                {props.todoList.filter(task => task.isDone).map((todo) => {
                    return (
                        <div className='task-box'>
                            <h3>{todo.task}</h3>
                            <button onClick={() => changeTask(todo)}>uncomplete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskList;