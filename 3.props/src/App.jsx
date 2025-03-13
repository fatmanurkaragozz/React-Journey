import { useState } from 'react'
import './App.css'
import Product from './assets/Product'
import Container from './Container';

function App() {
  const [count, setCount] = useState(0)

  // 📌 Değişken kullanarak bir ürün ismi belirliyoruz.
  const productName = "Buzdolabı";

  return (
    <>
      <div>
        {/* 
          📌 Container bileşeni "parent" olarak kullanılıyor.
          📌 İçine eklediğimiz "Product" bileşenleri Container içinde "children" olarak iletiliyor.
        */}
        <Container>
          <Product productName="Ayakkabı" price={3200} />
          <hr />
          <Product productName="Pantolon" price={950} />
          <hr />
          <Product productName={productName} price={15000} />
        </Container>
      </div>

      <hr />
    </>
  )
}

export default App
