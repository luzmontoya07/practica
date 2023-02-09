//  import { TaskContext } from '../context/taskContext' //ahora solo se va a importar un solo lenguaje
//  import { useContext } from 'react'; // se importa para poder utilizar el contexto
import { useTask } from "../context/taskContext";
import Layout from "../components/Layout";

const Home = () => {
 
  const {tasks} = useTask()

  console.log(tasks)


  return(

    //ESTA VAINA NO FUNCIONA HAY QUE REVISAR
    <Layout>
      
      {
        tasks.length === 0 ?(
          <h2>No hay tareas mija</h2>
        ): (
          <div>
            {tasks.map (task => (
            <div>
              <h1>{task.titulo}</h1>
            </div>
          ))}
          </div>
        )
      }
    </Layout>
  );
};

  export default Home;