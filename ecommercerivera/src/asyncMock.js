const products = [
    { id: '1',  name: 'Iphone SE 2da generacion', price: 480, category: 'celular', img:'/images/iphonese.webp', stock: 25, description:'4.7", Retina HD display, 128gb'},
    { id: '2', name: 'Iphone 15 256gb', price: 900, category: 'celular', img:'/images/iphone15.webp', stock: 16, description:''},
    { id: '3', name: 'Iphone 15 Pro 528gb', price: 1300, category: 'celular', img:'/images/iphone15pro.webp', stock: 0, description:'Descripcion de Ipad'},
    { id: '4',  name: 'Ipad Air 256gb', price: 750, category: 'tablet', img:'/images/ipadair.webp', stock: 25, description:'4.7", Retina HD display, 128gb'},
    { id: '5',  name: 'Ipad Pro 12,9" 1TB', price: 1100, category: 'tablet', img:'/images/ipadpro.webp', stock: 25, description:'4.7", Retina HD display, 128gb'},
    { id: '6',  name: 'Macbook Air 15"', price: 1500, category: 'macbook', img:'/images/mba15.webp', stock: 25, description:'8-Core CPU, 10-Core GPU, 8GB Unified Memory, 512GB SSD Storage'},
    { id: '7',  name: 'Macbook Pro 14"', price: 3100, category: 'macbook', img:'/images/mbp14.webp', stock: 25, description:'12-Core CPU, 30-Core GPU, 32GB Unified Memory, 1TB SSD Storage'},
    { id: '8',  name: 'Mac Mini', price: 1300, category: 'macbook', img:'/images/macmini.webp', stock: 25, description:'10-Core CPU, 16-Core GPU, 16GB Unified Memory, 512GB SSD Storage'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}