 import { TaskContext } from '../context/taskContext' //ahora solo se va a importar un solo lenguaje
 import { useContext } from 'react'; // se importa para poder utilizar el contexto
// import { useTask } from "@/context/taskContext";

const Home = () => {
  const {hello, greet} = useContext(TaskContext); //TOCA REVISAAAAR PORQUE POR ALGUNA RAZÓN NO ME DAAAA
  console.log(hello);

  console.log(greet("Ligth"));



  return <div>Hello world</div>;
};
export default Home;