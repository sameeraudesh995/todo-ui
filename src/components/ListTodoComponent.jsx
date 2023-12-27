import React, { useEffect, useState } from 'react';
import { getAllTodos } from '../services/TodoService';


const ListTodoComponent = () => {
    // const dummyData = [
    //     {
    //         "id": 1,
    //         "title": "Learn Core Java",
    //         "description": "Learn Core java with Example",
    //         "completed": false
    //     },
    //     {
    //         "id": 2,
    //         "title": "Learn Spring Core",
    //         "description": "Learn Core Spring with Example",
    //         "completed": false
    //     },
    //     {
    //         "id": 3,
    //         "title": "Learn Spring Boot",
    //         "description": "Learn Spring with Example",
    //         "completed": false
    //     }
    // ];

    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        listTodos();
    },[])

    function listTodos(){
        getAllTodos().then((response)=> {
            setTodos(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className='container'>
            <h2 className='text-center'>List of Todo</h2>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListTodoComponent;
