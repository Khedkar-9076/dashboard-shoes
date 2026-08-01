import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProductCard from "./comman/ProductCard"
import Products from "./pages/Products"

function App() {
  

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/product_det" element={<product_det/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App
