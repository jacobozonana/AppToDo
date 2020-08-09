import React, {useState} from "react";
import axios from "axios";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";

function Create() {
  const URL = 'https://todos-back-devf-activa.herokuapp.com/todos/ '
  const [name, setName] = useState('');
  const [done, setDone] = useState(false);
  const [priority, setPriority] = useState ('');


  const clear = ()=>{
    setName('');
    setDone(false);
    setPriority('');
    };

  const saveTodo = (event) => {
    event.preventDefault();
    console.log('Dieron Click en enviar!');
    console.log(done)
    if (priority == 0){
      alert('Tu prioridad no es valida, por favor selecciona una opcion')
    }else{
    axios.post(URL, {
      name,
      done,
      priority
  }).then(()=>{
    alert('Creado con Exito')
    clear() 

  }).catch((error)=>{
    alert('Hubo un Error')
    console.log(error)
  })
}
  }

  return (
    <>
      <Header />
      <h3>Que tienes que hacer?</h3>
      <form onSubmit={saveTodo}>
        <div className="form-group">
          <input className="form-control" 
          type="text" 
          placeholder="Nombre"
          value={name}
          required
          onChange={(e) => {setName(e.target.value)
          }} 
          />
          <label>Ya esta hecho?</label>
          <input className="form-control" 
          type="checkbox" 
          placeholder="true o false"
          value={done}
          onChange={() => {
            if (!done){
              setDone(true);
            }else{
              setDone(false)
            }
          }}
          />
         
          <label>Selecciona el nivel de prioridad</label>
          
          <select 
          className="form-control"
          name="priority"
          value={priority} 
          onChange={(e) => {setPriority(e.target.value)
          }}
          >
          <option value="0">Selecciona una opcion</option>  
          <option value="3">Baja</option>
          <option value="2">Media</option>
          <option value="1">Alta</option>
          </select>

          <button type="submit" 
          className="btn btn-danger">
          Crear To Do
          </button>
        </div>

      </form>

        <Footer />
    </>
  );
}

export default Create;
