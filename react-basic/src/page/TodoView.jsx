import TitleHeader from '../components/TitleHeader';
import { TodoContext, TodoProvider } from '../context/TodoContext';
import { useState, useEffect, useContext } from "react";


const TodoView = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const {todoList, addTodo, changeStatusTodo} = useContext(TodoContext);

    const inputTitle = (event) => {
        setTitle(event.target.value)
    };

    const inputDesc = (event) => {
        setDesc(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(title, desc);
    };

    const changeStatus = (id) => {
        changeStatusTodo(id);
    };

    useEffect(() => {
        console.log("todo terupdate:", todoList)
    }, [todoList]
);

    return (
        <>
            <TitleHeader title="Todo List"/>
            <div className='grid gap-6 mb-6 grid-cols-2'>
                {/* tambah form todo */}
                <div className='border p-3'>
                    <h1 className='text-3xl text-center- font-semibold my-3'>Tambah</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-6'>
                            <label className='block mb-2 font-medium'>Title</label>
                            <input type="text" onChange={inputTitle} 
                            value={title}
                            className='bg-gray-50 border-gray-300 rounded-lg block w-full p-2'></input>
                        </div>
                        <div className='mb-6'>
                            <label className='block mb-2 font-medium'>Body</label>
                            <input type="text" onChange={inputDesc} 
                            value={desc}
                            className='bg-gray-50 border-gray-300 rounded-lg block w-full p-2'></input>
                        </div>
                        <div className='mb-6'>
                            <input type="submit" className='bg-green-400 border rounded-lg block w-full p-2 cursor-pointer hover:bg-green-600'></input>
                        </div>
                    </form>
                </div>
                {/* tabel todo  */}
                <div className='border p-3'>
                    <h1 className='text-3xl text-center my-3 font-semibold'>TABEL ToDo</h1>
                    <table className='w-full text-sm text-left'>
                        <thead className="bg-green-300 text-center uppercase">
                            <tr>
                                <th scope="col" className='px-6 py-3'>No</th>
                                <th scope="col" className='px-6 py-3'>Title</th>
                                <th scope="col" className='px-6 py-3'>Desc</th>
                                <th scope="col" className='px-6 py-3'>Status</th>
                                <th scope="col" className='px-6 py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100 text-center'>
                            {todoList.map((todo) => (
                                <tr key={todo.id}>
                                    <td className='px-6 py-3'>{todo.id}</td>
                                    <td className='px-6 py-3'>{todo.title}</td>
                                    <td className='px-6 py-3'>{todo.desc}</td>
                                    <td className='px-6 py-3'>{todo.isComplete ? "✅" : "❌" }</td>
                                    <td className='px-6 py-3'>
                                        {todo.isComplete ? (
                                            <span>✅</span>
                                        ) : ( <button 
                                                onClick={() => changeStatus(todo.id)}
                                                className='font-bold border rounded-lg p-3 bg-green-400 hover:bg-green-600'>success</button> )
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TodoView;