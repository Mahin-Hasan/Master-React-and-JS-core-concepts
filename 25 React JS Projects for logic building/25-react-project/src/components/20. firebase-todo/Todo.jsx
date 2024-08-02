/* eslint-disable react/prop-types */
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";


const Todo = ({ todoItem, setCurrentEditedTodoId,setInputValue }) => {
  function handleDelete(getCurrentTodoId) {
    deleteDoc(doc(db, "todos", getCurrentTodoId));
  }

  return (
    <List>
      <ListItem>
        <ListItemText primary={todoItem?.todoItem?.todo} />
      </ListItem>
      <Button
        onClick={() => handleDelete(todoItem.id)}
        variant="contained"
        color="error"
      >
        Delete
      </Button>
      <Button
        onClick={() => {
            setInputValue(todoItem?.todoItem?.todo)
            setCurrentEditedTodoId(todoItem.id)
        }}
        variant="contained"
        color="info"
      >
        Edit
      </Button>
    </List>
  );
};

export default Todo;
