import { useContext,useState } from "react"
import { CartContext } from '../../context/CartContext'
import {addDoc, collection, Timestamp,getDocs, documentId,query,where, writeBatch} from 'firebase/firestore'
import {db} from '../../services/firebase/index'
import  './Checkout.css'

const Checkout = () => {
    const { cart, clearCart, getTotal} = useContext(CartContext)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [mail, setMail] = useState("");

    const generateOrder = async () => {
        try{
    const order = {
        buyer:{
            name: name,
            phone: phone,
            emai: mail
        },
        items:cart,
        date: Timestamp.fromDate(new Date()),
        total: getTotal()
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
        <div className="formContainer">
            <form className="form">
                <h2>Complete el formulario</h2>
                <p type='Nombre:'>
                    <input type="text" placeholder="Nombre completo" onChange={(e) => {setName(e.target.value)}}/>
                    </p>

                <p type='Email:'>
                    <input type="text"  placeholder="Email" onChange={(e) => {setMail(e.target.value)}}/>
                    </p>

                <p type='Telefono:'>
                    <input type="number"  placeholder="Numero de telefono" onChange={(e) => {setPhone(e.target.value)}}/>
                    </p> 
            </form>
            <button className="generateBtn" onClick={generateOrder}>Comprar</button>
        </div>
    )
}

export default Checkout