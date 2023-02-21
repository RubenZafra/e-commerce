import './App.css';
import { CardDisplay } from './Components/Card/CardDisplay';
import { NavBar } from './Components/NavBar/NavBar';
//import Btn from './Components/Button/Button'

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardDisplay />
    </div>
  );
}

export default App;
