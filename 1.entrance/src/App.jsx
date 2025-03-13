import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Javascript kodları bu kısma yazılır.

  // JSX (JavaScript XML), React’te kullanılan HTML benzeri bir sözdizimidir. JSX, JavaScript’in içinde HTML gibi görünen ancak aslında JavaScript kodu olan bir yapıdır. React bileşenlerini daha okunabilir ve anlaşılır hale getirir.
  // JSX içinde {} süslü parantezler kullanarak JavaScript ifadeleri yazabiliriz.

  const [count, setCount] = useState(0)

  let vize1 = 60;
  let vize2 = 80;

  let sonuc = true;

  let isimler = [
    "Burhan",
    "FatmaNur",
    "Esma",
    "Cemile"
  ]

  return (
    // HTML kodları da bu kısma yazılır.
    <>
      <div>
        <p>Ortalama : {(vize1 + vize2) / 2}</p>
        {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyeti alamazsın , kaybol</p>}

        {isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'pink',
            border: '1px solid grey'
          }}

            key={index}>{isim}</div>
        ))
        }

        {/* 
        Bu yapı, isimler adlı bir dizinin içindeki her bir öğeyi 
        map() fonksiyonu ile tek tek dolaşarak JSX içinde listeleme işlemi yapar.

        * map() Nedir?
        JavaScript’te map() metodu, bir dizi üzerindeki her elemanı alarak yeni bir dizi oluşturur. React’te genellikle JSX içinde liste render etmek için kullanılır.

       */}

      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
