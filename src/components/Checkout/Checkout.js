import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import {addDoc, collection, Timestamp,getDocs, documentId,query,where, writeBatch} from 'firebase/firestore'
import {db} from '../../services/firebase/index'

const Checkout = () => {
    const { cart, clearCart, total} = useContext(CartContext)

    const generateOrder = async () => {
        try{
    const order = {
        buyer:{
            name: 'federico gomez',
            phone: '123456',
            emai: 'fedeg@hotmail.com'
        },
        items:cart,
        date: Timestamp.fromDate(new Date()),
        total: `${total}`
    }

    const productsids = cart.map(prod => prod.id)
    const prodRef = collection(db,'products')
    
    const productsAddFirestore = await getDocs(query(prodRef,where(documentId(),'in',productsids)))
    
    const {docs} = productsAddFirestore
    const noStock = []

    const batch = writeBatch(db)

    docs.forEach(doc=>{
        const docData = doc.data()
        const dbStock = docData.stock
        
        const prodAdded = cart.find(prod => prod.id === doc.id)
        const prodQuantity = prodAdded?.quantity
        
        if (dbStock >= prodQuantity){
        batch.update(doc.ref, {stock: dbStock - prodQuantity})
        }else{
            noStock.push ({id: doc.id, ...docData})
        }

    })

    if(noStock.length === 0) {
        const refOrder = collection(db, 'orders')
        const orderAdded =  addDoc(refOrder, order)
        batch.commit()
        console.log(orderAdded.id)
        clearCart()
    } else {
        console.log('no hay stock de estos productos')
    }


    }catch(error) {
    }finally {   
    console.log('se termino la ejecucion de la funcion createOrder')
    }
}

    return(
        <div>
            <h1>checkout</h1>
            <h2>formulario</h2>
            <button className="ButtonOpcion" onClick={generateOrder}>Comprar</button>

        </div>
    )
}

export default Checkout