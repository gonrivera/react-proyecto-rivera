import Navbar from './components/Navbar/Navbar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListConteiner greeting={'Bienvenido Ishopp tienda oficial de Apple'}/>} />
          <Route path='/category/:categoryId' element={<ItemListConteiner greeting={'Productos filtrados '}/>} />
          <Route path='/item/:itemId' element= {<ItemDetailConteiner />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
