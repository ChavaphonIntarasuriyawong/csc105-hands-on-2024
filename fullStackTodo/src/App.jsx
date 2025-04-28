//import { useState, useEffect } from 'react'
import {useEffect, useState} from "react";
import * as api from "./api.jsx";


function App() {
    const [todo, setTodo] = useState([])

    const[name, setName] = useState("");

    const getTodo = async () => {
        const response = await api.getTodo();
        setTodo(response.data)
    }

    const addTodo = async (name) => {
        await api.addTodo(name);
    }

    useEffect(() => {
        getTodo()
    },[])

    const handleEdit = async(id, newName) => {
        await api.editTodo(id, newName);
    }
    const handleDone = async(id) => {
        await api.completeTodo(id);
    }
    const handleDelete = async(id) => {
        await api.deleteTodo(id);
    }

  return (
    <div className="">
        <button className="bg-blue-600"
                onClick={() => {
                    getTodo()
                }}>
            REFRESH
        </button>
        <div className="">
            <h1>Name:</h1>
            <input
                className="border border-gray-300 rounded-md p-2"
                id="name"
                value={name}
                placeholder="Name"
                onChange={e => setName(e.target.value)}
            />
            <br></br>
            <button className="bg-blue-600"
                    onClick={() => {
                addTodo(name)
            }}>
                Add
            </button>
        </div>
        {todo.map((item) => (
            <div className="flex justify-between items-center">
                {console.log(item)}
                <p>{item.id} | task: {item.name} | completed: {item.success ? "Yes" : "No"}</p>
                <div>
                    <button className={"bg-blue-300"}
                            onClick={() => {handleEdit(item.id, document.getElementById("name").value)}}
                    >
                        EDIT
                    </button>
                    <button className={"bg-green-300"}
                            onClick={() => {handleDone(item.id)}}
                    >
                        DONE
                    </button>
                    <button className={"bg-red-300"}
                            onClick={() => {handleDelete(item.id)}}
                    >
                        DELETE
                    </button>
                </div>

            </div>
        ))}
    </div>
  )
}

export default App
