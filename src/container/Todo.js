import { Todo } from "components";
import React, { useState } from "react";
import * as GoIcons from "react-icons/go";
import * as MdIcons from "react-icons/md";
import "components/Todo/styles/style.css";

export default function TodoContainer() {
  const [listTodo, setListTodo] = useState([]);
  const [todo, setTodo] = useState();
  const handleAdd = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("Không Có Dữ Liệu");
      return;
    }
    setListTodo([...listTodo, todo]);
  };
  return (
    <>
      <Todo className="todo-box">
        <Todo.Title className="todo-title">Practice Create Todo App</Todo.Title>
        <Todo.Form className="todo-form">
          <Todo.Input
            setListTodo={setTodo}
            className="todo-input"
            type="text"
            placeholder="Nhập Todo"
          />
          <Todo.Add onClick={handleAdd} className="todo-add" type="submit">
            <GoIcons.GoPlus />
          </Todo.Add>
        </Todo.Form>

        <Todo.Ul className="todo-ul">
          {listTodo &&
            listTodo.map((item, index) => (
              <Todo.Li className="todo-li" key={index}>
                <span className="content">{item}</span>
                <Todo.Complete className="todo-complete">
                  <MdIcons.MdDone />
                </Todo.Complete>
                <Todo.Delete className="todo-delete">
                  <MdIcons.MdDelete />
                </Todo.Delete>
              </Todo.Li>
            ))}
        </Todo.Ul>
      </Todo>
    </>
  );
}
