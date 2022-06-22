import './App.css';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header  />
      <ItemListContainer greeting='Bienvenido'/>
    </div>
  );
}

export default App;
