import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
</style>


function App() {
 
 const handleOnAdd = (quantity) => {
  console.log ('cantidad de items agregados', quantity)
 }
 
  return (
    <div className="App">
      <header className='.App-header'>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path= '/' element={<ItemListContainer greeting="Hola Dev"/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path= '/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
        </BrowserRouter>
        </header>
    </div>
  );
}


export default App;
 