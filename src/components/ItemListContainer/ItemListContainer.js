import { useState, useEffect } from "react";
import {getProduct, getProductsByCategory} from '../../asyncMock';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";

const ItemListContainer = ({}) => {
const [products, setProducts]= useState ([])
const [loading, setLoading] = useState( true)

const {categoryId} = useParams()
useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProduct
    
    asyncFunction(categoryId).then(response => {
        setProducts(response)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })
}, [categoryId])


if (loading){
return <div className="spinner"></div>
}


return (
    <>

        <ItemList products={products}/>
    </>
    )
}

export default ItemListContainer
