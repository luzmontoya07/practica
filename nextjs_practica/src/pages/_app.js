import '@/styles/globals.css'
import { TaskProvider } from '@/context/taskContext' // importe desde el context la funcion TaskProvider

export default function App({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} /> {/* cualquier componente que renderice Nextjs que podrian ser paginas o multiples componentes estan dentro del TaskProvider*/}
    </TaskProvider>
  );
   
}
