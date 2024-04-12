import React, {useState} from "react";

const InputTask = (props) => {
    const [taskName, setTaskName] = useState('');
    const addTask = () => {
        props.setTodoList(prev => [...prev, {'id':prev.length, 'task': taskName, 'isDone': false}]);
        setTaskName("");
    }

    return (
        <div>
            <input value={taskName} type='text' placeholder="할 일을 입력해주세요."
            onChange={(event) => setTaskName(event.target.value)}
            />
            <button onClick={addTask}>추가</button>
        </div>
    )
}

export default InputTask;