import { AiOutlinePlus } from 'react-icons/ai' //se importó el icono
import Link from 'next/link' //importamos el componente link desde Nextjs para que podamos navegar
import { useRouter } from 'next/router' //es otra forma de navegar en Nextjs
import { useTask } from '../context/taskContext' 

const Layout = ({children}) => {

    const router = useRouter();
    const {tasks} = useTask();

  return (
    <div className="h-screen bg-gray-900 text-white">
        <header className="flex items-center bg-gray-800 text-white px-28 py-5">
            <Link href="/">
            
                <h1 className='font-black text-lg'>Task App</h1>
            
            </Link>
           <span className='ml-2 text-gray-400 font-bold'>
            {tasks.length} Task
           </span>
        
        <div className="flex-grow text-right">
            <button className="bg-green-500 hover:bg-green-400 px-5 py-2 font-bold rounded-sm inline-flex
             items-center" onClick={()=> router.push('/new')}> {/* cuando haga clic en el botón debe navegar a otra página */}
                <AiOutlinePlus className='mr-2'/>
                Add Task</button>
        </div>
        </header>

        <main className="px-28">
        {children}
        </main>

        
    </div>
  )
}

export default Layout