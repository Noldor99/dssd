import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Typography, Box
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo, toggleTodo } from "../../store/slice/todoSlice";
import MainLayout from "../../layouts/MainLayout";

export default function TodoApp() {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();
  //@ts-ignore
  const { todos } = useSelector((state) => state.todo);
  console.log(todos);

  return (
    <MainLayout>
      <Container maxWidth="sm" sx={{ paddingTop: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Todo App
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <TextField
            label="New Todo"
            variant="outlined"
            fullWidth
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              }
            }}
          />
          <Button variant="contained" color="primary"
            //@ts-ignore
            onClick={() => dispatch(addTodo({ id: new Date().toString(), text: newTodo, completed: false }))}>
            Add
          </Button>
        </Box>
        <List>
          {todos.map((todo, index) => (
            <ListItem
              key={index}
              button
              onClick={() => toggleTodo(index)}
              sx={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <ListItemText primary={todo.text} />
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      </Container >
    </MainLayout>
  );
}
