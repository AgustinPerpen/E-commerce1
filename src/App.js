import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import {  BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenido'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenido'/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

/*<Route path="/category/:categoryId" element={<ItemListContainer greeting='Bienvenido'/>}/> */