import { useState } from "react"
import Header from "./components/Header"
import Product from "./components/product/Product"
function App() {

  const[savedCount, setSavedCount] = useState(0);

  const handleSave = (cartCurrentValue) => {
    setSavedCount(cartCurrentValue);
  }
  const handleRemove = ()=>{
    setSavedCount(0);
  }


  return (
    <>
      <Header cartValue={savedCount} onRemove={handleRemove}/>
      <Product onSave={handleSave}/>
    </>
  )
}

export default App
