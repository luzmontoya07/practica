import { useState } from "react"
import Layout from "../components/Layout"
import { useTask } from "../context/taskContext"
import { useRouter } from "next/router"

const TaskFormPage = () => {

    const[task, setTask] = useState({
        titulo: "",
        descripcion: "",
    });
    const {createTask} = useTask()
     const { push } = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask ({...task, [name]: value})
        
    };

    //Es el que se va a ejecutar cuando el formulario sea enviado
    const handleSubmit = e => {

        e.preventDefault() //evita que se refresque la pagina
        createTask(task.titulo, task.descripcion) //crea la tarea
        push('/')
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <h1>Agregar tarea</h1>

                <input type="text"
                    name="titulo"
                    placeholder='Escriba el titulo'
                    className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                    onChange={handleChange} />

                <textarea rows="2"
                    placeholder="Coloque la descripción"
                    className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                    name="descripcion"
                    onChange={handleChange}></textarea>

                <button
                 className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
                 disabled={!task.titulo} //el botón se deshabilita si la tarea no tiene titulo
                 >
                    Guardar
                </button>
            </form>

        </Layout>
    )
}

export default TaskFormPage