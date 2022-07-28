const products = [
    { 
        id: '1', 
        name: 'Expresso', 
        price: 100, 
        category: 'Cafe', 
        img:'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 
        stock: 25, 
        description:'Descripcion cafe expresso'
    },

    { id: '2', 
    name: 'Cafe Cortado', 
    price: 150, 
    category: 'cafe', 
    img:'https://images.unsplash.com/photo-1563520506621-9c3a3587aea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 
    stock: 16, 
    description:'Excelente cafe cortado con medialunas'},
    
    { id: '3', 
    name: 'Capuccino', 
    price: 180, 
    category: 'cafe', 
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80',
    stock: 10, 
    description:'Descripcion capuccino'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 2000
        )
    })
}

export const getDetail =()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[1])
        }, 2000)
    })
}


