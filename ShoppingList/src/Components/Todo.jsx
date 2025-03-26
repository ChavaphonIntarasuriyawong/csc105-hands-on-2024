import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon from the react-fontawesome library
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Importing the pen icon from FontAwesome
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Importing the trash icon from FontAwesome
import '../styles/Todo.css';
import {useState} from "react"; // Importing the CSS file for styling

export const Todo = ({ task, todos, setTodos}) => {

    const[selectedId, setSelectedId] = useState(0);
    // Function to toggle the completion status of a todo
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo // Toggling completed status of the todo with the specified id
            )
        );
    }

    return (
        <div className="Todo"> {/* Container for the todo item */}
            <div style={{ display: 'flex', alignItems: 'center' }}> {/* Container for the todo text and completion button */}
                <p
                    className={`${task.completed ? 'completed' : ''}`} // Applying completed class if the task is completed
                    style={{ marginLeft: '10px', flex: 1, outline: "none" }} // Styling for the todo text
                    contentEditable={selectedId === task.id}
                >
                    {task.task}
                </p>
            </div>
            <div> {/* Container for the edit and delete icons */}
                {/* Edit icon */}
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => setSelectedId(task.id)}/> {/* Calling editTodo function when the edit icon is clicked */}
                {/* Delete icon */}
                <FontAwesomeIcon icon={faTrash} onClick={() => toggleComplete(task.id)} /> {/* Calling deleteTodo function when the delete icon is clicked */}
            </div>
        </div>
    );
};