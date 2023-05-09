import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    { id: 1, text: 'Sample todo 1', completed: false },
    { id: 2, text: 'Sample todo 2', completed: true },
    { id: 3, text: 'Sample todo 3', completed: false },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const updatedTodo = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (todoIndex !== -1) {
        state.todos[todoIndex] = updatedTodo;
      }
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      const todo = state.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
