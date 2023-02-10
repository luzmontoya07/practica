//Esta aplicacion necesita crear, enlista, eliminar y actualizar tareas, este archivo estará encargado de de llevar ese
//estado de las tareas.

//no se que esta pasando aqui
import { createContext, useContext, useState } from "react";
import {v4 as uuid} from "uuid"

//este objeto lo voy a poder importar y exportar
export const TaskContext = createContext(); // es el que tienen los datos


export const useTask = () => useContext(TaskContext);


export const TaskProvider = ({children}) =>{

  const [tasks, setTasks] = useState([{id: '1', titulo: 'first task', descripcion:'some task'}]); //variable para guardar datos y alterar datos

  
  
//Función para crear una tarea...
  const createTask = (titulo, descripcion) => 
    setTasks([...tasks, {titulo, descripcion, id: uuid()}])
  

  //Función para actualizar la tarea...
  const updateTask = (id, taskActualizada) => 
    setTasks ([...tasks.map(task => task.id === id ? {...task, ...taskActualizada} : task)]);
  


  return(
    <TaskContext.Provider value={{tasks, createTask, updateTask}}>{children}</TaskContext.Provider>

  );
};






//se exporta el TaskProvider una funcion que contiene a otros
// export const TaskProvider = ({children}) => { //cualquier componente que me pasen al task provider puede acceder a las otras lineas de código

//     // let hello = 'World'

//     // const greet = name => `Hello ${name}`

//     const [task, setTask] = useState([]); //podrá guardar y alterar datos


//     return<TaskContext.Provider value={{}}>{children}</TaskContext.Provider>; //cualquier componente hijo va acceder a la variable que esta dentro de las llaves
// };

//¿Que hace el task provider?
//Es pasarlo dentro de un taskcontext es decir pasa a un espacio donde puede tener datos