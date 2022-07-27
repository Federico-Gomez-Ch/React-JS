import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
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
        {/* <Counter show={show} stock={10} initial={1} onAdd={handleOnAdd}/> */}
        <ItemListContainer show={show} setShow={setShow} greeting="Hola Dev"/>
        </header>
    </div>
  );
}


export default App;
 