import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Addlist, Delete, Removeall } from "./reducer/TodoSlice";

const Todolist = () => {
  const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const Result = useSelector((state) => state.Todo.todo);
  const [input, setInput] = useState("");

  const handelAdd = () => {
    if (input === "") {
      setErr("Enter value");
    } else {
      dispatch(Addlist(input));
      setInput("");
      setErr("");
    }
  };
  const handelDel = (index) => {
    dispatch(Delete(index));
  };

  const handelRemove = () => {
    dispatch(Removeall());
  };
 
  return (
    <>
      <div id="main">
        <input
        id="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        
        />
        <button id="Add_list" onClick={() => handelAdd()}>Add_list</button>
        <p id="err">{err}</p>

        <span>
        {Result.map((item, index) => {
          return (
            <div id="main1" key={index}>
              <p id="list">{item}</p>
              <button id="Delete" onClick={() => handelDel(index)}>Delete</button>
            </div>
          );
        })}
        </span>

      <button id="Delete_All" onClick={() => handelRemove()}>Remove_All</button>
      </div>
    </>
  );
};

export default Todolist;
