//  import { TaskContext } from '../context/taskContext' //ahora solo se va a importar un solo lenguaje
//  import { useContext } from 'react'; // se importa para poder utilizar el contexto
import { useTask } from "../context/taskContext";
import Layout from "../components/Layout";
import {VscTrash} from "react-icons/vsc";
import { useRouter } from "next/router";

const Home = () => {
  const {tasks} = useTask()
  const {push} = useRouter()




  return(
    //ESTA VAINA NO FUNCIONA HAY QUE REVISAR (Parece que si funcionó pero no como debería xd)
    <Layout>
      <div className="flex justify-center">
      {tasks.length === 0 ?(
          <h2>No hay tareas mija</h2>
        ): (
          <div className="w-7/12">
            {tasks.map((task,i) => (
            <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex 
            justify-between item-center "
            key={task.id}
            onClick={() => push("/edit/" + task.id)}>  {/* al hacer clic en la targeta la llevará a la pagina de edit, y se llevará el id de la tarea */}
              <span className="text-5xl m-5 ">{i}</span>
              <div className="w-full">
                <div className="flex justify-between">
                  <h1 className="font-bold">{task.titulo}</h1>
                  <button className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center">
                    <VscTrash className="mr-2"/>
                    Delete
                    </button>
                </div>
              <p className="text-gray-300">{task.descripcion}</p>
              <span className="text-gray-400">{task.id}</span>
              </div>
            </div>
          ))}
          </div>
        )}

      </div>
    </Layout>
  );
};

  export default Home;