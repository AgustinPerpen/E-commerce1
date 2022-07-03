import './App.css';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <Header  />
      <ItemListContainer greeting='Bienvenido'/>
      <ItemDetailContainer/>
     
    </div>
  );
}

export default App;
