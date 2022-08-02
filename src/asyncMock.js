const products = [
    { 
        id: '1', 
        name: 'Expresso', 
        price: 100, 
        category: 'Cafe', 
        img:'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 
        stock: 25, 
        description:'Cafe expresso'
    },

    { id: '2', 
    name: 'Medialunas', 
    price: 150, 
    category: 'Comida', 
    img:'https://images.unsplash.com/photo-1450862479751-84eeaf2fcca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80', 
    stock: 16, 
    description:'Excelente medialunas hechas en nuestro local'},
    
    { id: '3', 
    name: 'Box degustacion', 
    price: 180, 
    category: 'Box', 
    img: 'https://cdn.shopify.com/s/files/1/0500/8182/4922/products/Degustacion2.0_1_720x.jpg?v=1658937979',
    stock: 10, 
    description:'Box degustativo con variedades de cafe'}
]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 1000
        )
    })
}

export const getDetail = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 200)
    })
}
