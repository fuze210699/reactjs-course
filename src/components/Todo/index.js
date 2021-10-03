import React from "react";

export default function Todo({ children, ...restProps }) {
  return <div {...restProps}> {children} </div>;
}

Todo.Title = function TodoTitle({ children, ...restProps }) {
  return <h1 {...restProps}>{children}</h1>;
};

Todo.Form = function TodoForm({ children, ...restProps }) {
  return <form {...restProps}>{children}</form>;
};

Todo.Input = function TodoInput({ setListTodo, ...restProps }) {
  return (
    <input
      onChange={({ target }) => {
        setListTodo(target.value);
      }}
      {...restProps}
    />
  );
};

Todo.Add = function TodoAdd({ children, ...restProps }) {
  return <button {...restProps}>{children}</button>;
};
Todo.Ul = function TodoUl({ children, ...restProps }) {
  return <ul {...restProps}>{children}</ul>;
};
Todo.Li = function TodoLi({ children, ...restProps }) {
  return <li {...restProps}>{children}</li>;
};
Todo.Complete = function TodoComplete({ children, ...restProps }) {
  return <span {...restProps}>{children}</span>;
};
Todo.Delete = function TodoDelete({ children, ...restProps }) {
  return <span {...restProps}>{children}</span>;
};
