import React, {useState, useEffect} from "react";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import TodoCard from "../../TodoCard/TodoCard";
import axios from 'axios';


function Home() {
const [todos, setTodos] = useState([]);
const URL = 'https://todos-back-devf-activa.herokuapp.com/todos/ ';

useEffect (()=>{ 
  axios.get(URL)
  .then((response)=>{
    let  allTodos = response.data
    setTodos(allTodos)
  })
  .catch((error)=>{
    console.log(error)
  });
  
},[]);

return (
    <>
      <Header />
      <h2>Bienvenido, esto es lo que hay por hacer:</h2>
      <div className="container">
      <h3>Alta</h3>
      {todos.map((todo)=>{
          return todo.priority === 1 ? 
          
          <TodoCard
          priority={todo.priority}
          name={todo.name}
          done={todo.done}
          _id={todo._id}
          key={todo._id}
          />
          : undefined;
      })}    


          <h3>Media</h3>
          {todos.map((todo)=>{
              return todo.priority === 2 ?
              <TodoCard
              priority={todo.priority}
              name={todo.name}
              done={todo.done}
              _id={todo._id}
              key={todo._id}
              />
              :undefined;

          })}

              <h3>Baja</h3>
              {todos.map((todo)=>{
                  return todo.priority === 3 ?
                  <TodoCard
                  priority={todo.priority}
                  name={todo.name}
                  done={todo.done}
                  _id={todo._id}
                  key={todo._id}
                  />
                  :undefined;

              })}


        
          
      </div>

      <Footer />
    </>
  );
}

export default Home;