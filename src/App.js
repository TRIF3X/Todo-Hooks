import React, { useState } from "react";
import TodoForm from "./Components/TodoForm.js";
import Todo from "./Components/Todo.js";
import "./app.css";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about react",
      isCompleted: false
    },
    {
      text: "React hooks is awesome",
      isCompleted: false
    },
    {
      text: "Clean the apartment",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const NewTodos = [...todos, { text }];
    setTodos(NewTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];

    const complete = newTodos[index].isCompleted;

    complete === true
      ? (newTodos[index].isCompleted = false)
      : (newTodos[index].isCompleted = true);

    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];

    if (newTodos[index].isCompleted === true) {
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
