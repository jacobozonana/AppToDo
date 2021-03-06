import React, {useState, useEffect} from "react";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import TodoCard from "../../TodoCard/TodoCard";
import axios from 'axios';


function Hechos() {
const [todos, setTodos] = useState([]);
const URL = 'https://todos-back-devf-activa.herokuapp.com/todos/ ';

useEffect (()=>{ 
  axios.get(URL)
  .then((response)=>{
    let  allTodos = response.data
    setTodos(allTodos)
  })
  .catch((err)=>{
    console.log(err)
  });
  
},[]);

return (
    <>
      <Header />
      <h2>Esto es lo que ya esta Hecho, Felicidades!</h2>
      <div className="container">
      <h3>Alta</h3>
      {todos.map((todo)=>{
          return todo.done === true && todo.priority === 1 ? 
          
          <TodoCard
          priority={todo.priority}
          name={todo.name}
          done={todo.done}
          key={todo._id}
          />
          : undefined;
      })}   
            
      </div>

      <Footer />
    </>
  );
}

export default Hechos;