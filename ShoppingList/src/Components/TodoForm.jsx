import { useState } from 'react'; // Importing the useState hook from React
import '../styles/TodoForm.css'; // Importing the CSS file for styling

export const TodoForm = ({ addTodo }) => {
    // State to manage the input value of the todo
    const [value, setValue] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing default form submission behavior
        if (value) {
            // If the input value is not empty
            addTodo(value); // Calling the addTodo function passed as prop from the parent component with the input value as parameter
            setValue(''); // Clearing the input value after submission
        }
    };

    // Rendering the todo form
    return (
        <form onSubmit={handleSubmit} className="TodoForm"> {/* Form element with onSubmit event handler */}
            <input
                type="text"
                value={value} // Binding the input value to the state variable 'value'
                onChange={(e) => setValue(e.target.value)} // Handling onChange event to update the state with the input value
                className="todo-input"
                placeholder='Type the task here' // Placeholder text for input field
            />
            <button type="submit" className='todo-btn'>Add Task</button> {/* Button to submit the form */}
        </form>
    );
};