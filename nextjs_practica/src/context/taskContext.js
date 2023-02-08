//Esta aplicacion necesita crear, enlista, eliminar y actualizar tareas, este archivo estará encargado de de llevar ese
//estado de las tareas.

//no se que esta pasando aqui
import { createContext, useContext } from "react";

//este objeto lo voy a poder importar y exportar
const TaskContext = createContext(); // es el que tienen los datos

export const useTask = () => { //esta funcion siver para no tener que importar el use context en cada componente que que quirea actualizar
  const context  =   useContext(TaskContext)
  return context
}



//se exporta el TaskProvider una funcion que contiene a otros
export const TaskProvider = ({children}) => { //cualquier componente que me pasen al task provider puede acceder a las otras lineas de código

    let hello = 'World'

    const greet = name => `Hello ${name}`
   
    return<TaskContext.Provider>{children}</TaskContext.Provider>; //cualquier componente hijo va acceder a la variable que esta dentro de las llaves
};

//¿Que hace el task provider?
//Es pasarlo dentro de un taskcontext es decir pasa a un espacio donde puede tener datos