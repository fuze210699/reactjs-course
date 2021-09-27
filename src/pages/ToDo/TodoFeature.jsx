import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./style.css";
function TodoFeature(props) {
  const InitTodoData = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Drink",
      status: "new",
    },
    {
      id: 3,
      title: "Sleep",
      status: "completed",
    },
  ];

  const [todoData, setTodoData] = useState(InitTodoData);
  const [filter, setFilter] = useState("all");

  const handleTodoClick = (todo, index) => {
    //   Clone current array to the new one
    const newTodoData = [...todoData];
    // toggle State

    newTodoData[index] = {
      ...newTodoData[index],
      status: newTodoData[index].status === "new" ? "completed" : "new",
    };

    // update data
    setTodoData(newTodoData);
  };
  const handleShowAll = () => [setFilter("all")];
  const handleShowCompleted = () => [setFilter("completed")];
  const handleShowNew = () => [setFilter("new")];
  const filterData = todoData.filter(
    (item) => filter === "all" || item.status === filter
  );
  return (
    <ul>
      <TodoItem onTodoClick={handleTodoClick} todoData={filterData} />
      <div>
        <button onClick={handleShowAll} type="button">
          Show All
        </button>
        <button onClick={handleShowCompleted} type="button">
          Show Completed
        </button>
        <button onClick={handleShowNew} type="button">
          Show New
        </button>
      </div>
    </ul>
  );
}

export default TodoFeature;
