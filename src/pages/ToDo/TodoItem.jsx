import React from "react";
import classnames from "classnames";

// export mà k có default {} , export default ABC
import PropTypes from "prop-types";
function TodoItem({ todoData, onTodoClick }) {
  TodoItem.propTypes = {
    todoData: PropTypes.array,
    onTodoClick: PropTypes.func,
  };
  TodoItem.defaultProps = {
    todoData: [],
    onTodoClick: null,
  };
  const handleTodoClick = (todo, index) => {
    console.log("Item", todo);
    if (!onTodoClick) {
      return;
    }
    onTodoClick(todo, index);
  };
  return (
    <>
      {todoData.map((item, index) => {
        return (
          <li
            key={index}
            className={classnames({
              todoLi: true,
              completed: item.status === "completed",
            })}
            onClick={() => handleTodoClick(item, index)}
          >
            {item.title}
          </li>
        );
      })}
    </>
  );
}

export default TodoItem;
