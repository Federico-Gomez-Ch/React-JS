import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext'
import { UserContextProvider} from './context/UserContext'
import CartContainer from './components/CartContainer/CartContainer'
import { NotificationProvider} from './Notification/Notification'
<style>
@import url(//db.onlinewebfonts.com/c/d7e8a95865396cddca89b00080d2cba6?family=SoDo+Sans+SemiBold);
</style>


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <NotificationProvider>
        <UserContextProvider>
        <CartContextProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path= '/' element={<ItemListContainer greeting="Hola Dev"/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path= '/detail/:productId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<CartContainer/>} />
        <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        </BrowserRouter>
        </CartContextProvider>
        </UserContextProvider>
        </NotificationProvider>
        </header>
    </div>
  );
}
<footer>ppp
</footer>
export default App; 