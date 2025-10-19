import TitleHeader from "../components/TitleHeader";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";

const HomeView = () => {
    const {todoList} = useContext(TodoContext);
    return (
        <>
            <TitleHeader title="Home"/>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} : Status ({ todo.isComplete ? "selesai" : "belum" })
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HomeView;