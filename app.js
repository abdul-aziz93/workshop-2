import { useState } from "react";

export default function App() {
    const [count, setCount] = usestate(0);

    function increment() {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }
    console.log(count);
    
    return (
        <div className="app">
            <h1>count: {count}</h1>
            <button onClick={increment}>add</button>

        </div>
    );
}


export default function App() {
    const [todos, setTodos] = useState([
        { id: 1, content: "august"},
        { id: 1, content: "September"},
        { id: 1, content: "October"},

    ]);

    function addTodo() {
        setTodos([
            ...todos.slice(0,1),
            { ...todos.slice(0,1), content: "madness"},
            ...todos.slice(1+1)
        ]);
    }

    return (
        <div>
            {todos.map((todo) (
                <p>(todo.content)</p>
            ))}
            <button onclick={addtodo}>add</button>
        </div>
    );
}

let arr = [];

arr.push();