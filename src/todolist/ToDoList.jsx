import React, { useState } from "react";
import ToDoData from "./ToDoData";

const ToDoList = () => {
  let [task, setTask] = useState("");
  let [list, setList] = useState([]);

  let handleSubmit = e => {
    e.preventDefault();
    setList([...list, task]);
    setTask("");
  };
  


  return (
    <section className="todosec">
      <article>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Whats the plan for today</h1>
            <br />
            <input
              type="text"
              onChange={e => setTask(e.target.value)}
              value={task}
            />
            <button>Add</button>
          </form>
          <br />
          <div>
            {list.map(e => {
              return <ToDoData value={ e}/>
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ToDoList;
