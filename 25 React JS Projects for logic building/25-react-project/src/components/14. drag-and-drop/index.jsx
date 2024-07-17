import { useEffect, useState } from "react";
import "./draganddrop.css"


const DragAndDropFeature = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  async function fetchListOfTodos() {
    try {
      setLoading(true);

      const apiResponse = await fetch(
        "https://dummyjson.com/todos?limit=5&skip=0"
      );
      const result = await apiResponse.json();

      if (result && result.todos && result.todos.length > 0) {
        setLoading(false);
        const updatedTodos = result.todos.map((todoItem) => ({
          ...todoItem,
          status: "wip",
        }));
        setTodos(updatedTodos);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);
//   console.log(todos);

  function onDragStart(event, id) {
    event.dataTransfer.setData("id", id);
  }

  function onDrop(event, status) {
    const id = event.dataTransfer.getData("id");
    let updatedTodos = todos.filter((todoItem) => {
      if (todoItem.id.toString() === id) {
        todoItem.status = status;
      }
      return todoItem;
    });
    setTodos(updatedTodos);
  }

  function renderTodos() {
    const todoListToRender = {
      wip: [],// should match with the given status status: "wip",
      completed: [],
    };
    todos.forEach((todoItem) => {
      todoListToRender[todoItem.status].push(
        <div
          onDragStart={(event) => onDragStart(event, todoItem.id)}
          draggable
          key={todoItem.id}
          className="todo-card"
        >
          {todoItem.todo}
        </div>
      );
    });
    return todoListToRender;
  }

  if (loading) return <h1>Loading data please Wait</h1>;

  return (
    <div className="drag-and-drop-container">
      <h2>Drag and Drop</h2>
      <div className="drag-and-drop-board">
        <div
          onDrop={(event) => onDrop(event, "wip")}
          onDragOver={(event) => event.preventDefault()}
          className="work-in-progress"
        >
          <h3>In Progress</h3>
          <div className="todo-list-wrapper">
          {renderTodos().wip}
          </div>
        </div>
        <div
          onDrop={(event) => onDrop(event, "completed")}
          onDragOver={(event) => event.preventDefault()}
          className="completed"
        >
          <h3>Completed</h3>
          <div className="todo-list-wrapper">
          {renderTodos().completed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDropFeature;
