import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  // firstName ve lastName adında iki state değişkeni tanımlıyoruz.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // 1. useEffect: Her render (yeniden çizim) olduğunda çalışır.
  useEffect(() => {
    console.log("her zaman çalışır")
  })

  // 2. useEffect: Sadece bileşen il kez ekrana geldiğinde (ilk render) çalışır.
  useEffect(() => {
    console.log("ilk render edildiğinde çalışır.")
    // Örneğin: API çağrısı yaparak verileri almak için kullanılabilir.
  }, []) // Bağımlılık dizisi boş olduğu için sadece ilk render'da çalışır.

  // 3. useEffect: firstName değiştiğinde çalışır.
  useEffect(() => {
    console.log("ilk render edildiğinde ve FIRSTNAME state değeri değiştiğinde çalışır. ")
  }, [firstName]) // Eğer firstName değişirse, bu useEffect tetiklenir.

  // 4. useEffect: lastName değiştiğinde çalışır.
  useEffect(() => {
    console.log("ilk render edildiğinde ve LASTNAME state değeri değiştirildiğinde çalışır")
  }, [lastName]) // Eğer lastName değişirse, bu useEffect tetiklenir.

  return (
    <div>
      <div><button onClick={() => setFirstName("FatmaNur")}>Adı Değiştir</button></div>
      <div><button onClick={() => setLastName("Karagöz")}>Soyad Değiştir</button></div>
    </div>

  )
}

export default App
