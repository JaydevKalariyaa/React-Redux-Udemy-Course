import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { TodosProvider } from "./store/TodoContext";
function App() {
  return (
    <TodosProvider>
      <NewTodo />
      <Todos />
    </TodosProvider>
  );
}

export default App;
