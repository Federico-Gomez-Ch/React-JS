import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
</style>


function App() {

  const [show, setShow] = useState(true)
 
 const handleOnAdd = (quantity) => {
  console.log ('cantidad de items agregados', quantity)
 }
 
  return (
    <div className="App">
      <header className='.App-header'>
        <Navbar/>
        <ItemListContainer show={show} setShow={setShow} greeting="Hola Dev"/>
        <ItemDetailContainer show={show} setShoe={setShow}/>
        </header>
    </div>
  );
}


export default App;
 