import Todo from "./components/Todo";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  

  const addTodos = (id,title,desc,date)=> {
    const newTodos = {
      id: Date.now(),title,desc,date
      
    }

  } 

  }
  return (
    <div>
      <Todo />
    </div>
  );
}

export default App;
