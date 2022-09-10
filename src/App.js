import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src='https://www.ackee.cz/blog/wp-content/uploads/2018/11/react_hooks_web-min.png' alt='logo.png' className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Lista de tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
