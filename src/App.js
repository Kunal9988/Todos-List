import './App.css';
import Header from './mycomponent/Header';
import { AddTodos } from './mycomponent/AddTodos';
import Todos from './mycomponent/Todos';
import Footer from './mycomponent/footer';
import About from './mycomponent/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am onDelete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("i am adding todo", title, desc);
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Kunal Todos" listOptions={true} />

        <Routes>
          <Route path="/" element={
            <>
              <AddTodos addTodos={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
