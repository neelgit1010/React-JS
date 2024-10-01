import Navbar from "./components/Navbar"
import Product from "./components/Product"
import Products from "./components/Products"
import Cart from "./components/Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
function App() {
  const navWrapper = [
    "Clear",
    "Mobiles",
    "Laptops",
    "Tablets",
    ">=29999",
    ">=49999",
    ">=69999",
    ">=89999",
  ];

  const [getItem, setGetItem] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar navWrapper={navWrapper} getItem={setGetItem} search={setSearchItem} cart={cart}/>
        <Routes>
          <Route path="/" element={getItem !== "" ? <Products navItem={getItem} search={searchItem} cart={cart} setCart={setCart} /> : <Products search={searchItem} cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<Product cart = {cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
