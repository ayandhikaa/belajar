import { createContext, useState } from "react";

export const TodoContext = createContext();
export const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState(
        [
            {
                id : 1,
                title : "Bangun Tidur",
                desc : "ya",
                isComplete : true,
            },
            {
                id : 2,
                title : "Bangun Tidur",
                desc : "ya",
                isComplete : false,
            },
            {
                id : 3,
                title : "Bangun Tidur",
                desc : "ya",
                isComplete : false,
            },
        ]
    ); 

    const addTodo = (title, desc) => {
        let todoArray = todoList.length;
        setTodoList([
            ...todoList,
            {
                id : todoArray + 1,
                title : title,
                desc : desc,
                isComplete : false,
            },
        ]);
        setTitle("");
        setDesc("");
    };

    const changeStatusTodo = (id) => {
        setTodoList((itemTodo) =>
            itemTodo.map((data) => (
                data.id === id ? {...data, isComplete: true} : data
            ))
        )
    };

    return (
        <TodoContext.Provider value={{todoList, addTodo, changeStatusTodo}}>
            {children}
        </TodoContext.Provider>
    )
};