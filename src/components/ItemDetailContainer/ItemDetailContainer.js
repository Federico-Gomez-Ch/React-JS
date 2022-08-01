import { useState, useEffect} from 'react'
import { getDetail } from "../../asyncMock"
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = ()=> {
    
        const [products,setProducts] = useState()
        const [loading, setLoading] = useState(true)
        
        const {productId} = useParams()

        useEffect(() => {
            getDetail(productId).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })  
        }, [productId])
    
        if(loading) {
            return  <div className="spinner"></div>
        }
    
        return (
            <>
            <ItemDetail {...products}/>
            </>
        )
    
}
export default ItemDetailContainer