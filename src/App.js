import './App.css';
import Navbar from './components/Navbar/Navbar';
/* import Counter from './components/Navbar/Counter/Counter'; */
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar/>
{/*         <Counter/> */}
        <ItemListContainer greeting="bienvenidx"/>
        
    </div>
  );
}


export default App;
 