import { Button, TextField } from "@mui/material";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import Todo from "./Todo";
import "./todo.css";

const q = query(collection(db, "todos"), orderBy("timeStamp", "desc"));

const FirebaseTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentEditedTodoId, setCurrentEditedTodoId] = useState(null);

  useEffect(() => {
    onSnapshot(q, (snapShot) => {
      console.log(snapShot);
      setTodos(
        snapShot.docs.map((docItem) => ({
          id: docItem.id,
          todoItem: docItem.data(),
        }))
      );
    });
  }, [inputValue]);
  function handleAddOrEditTodo(e) {
    e.preventDefault();

    currentEditedTodoId !== null
      ? updateDoc(doc(db, "todos", currentEditedTodoId), {
          todo: inputValue,
        })
      : addDoc(collection(db, "todos"), {
          todo: inputValue,
          timeStamp: serverTimestamp(),
        }); //collection name should be same as the set collectoin name in the firebase created collection
    setInputValue("");
    setCurrentEditedTodoId(null);
  }
  console.log(todos);

  return (
    <div className="firebase-todo-wrapper">
      <h2>Firebase Todo Application</h2>
      <form onSubmit={handleAddOrEditTodo}>
        <TextField
          id="todo"
          label="Create Todo"
          variant="outlined"
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          {currentEditedTodoId !== null ? "Edit Todo" : "Add Todo"}
        </Button>
      </form>
      <ul>
        {todos && todos.length > 0 ? (
          todos.map((todoItem) => (
            <Todo
              key={todoItem.id}
              todoItem={todoItem}
              setCurrentEditedTodoId={setCurrentEditedTodoId}
              setInputValue={setInputValue}
            />
          ))
        ) : (
          <h3>No Todos Available!! Please Add Todos</h3>
        )}
      </ul>
    </div>
  );
};

export default FirebaseTodo;
