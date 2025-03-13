import { useState } from 'react'
import './App.css'

function App() {

  // String tc = "12345678912"
  // String firstName = "FatmaNur"

  // useState : hooks
  // useState : React'in state yönetimi için kullanılan bir hook'tur.
  // Bu hook, bileşen içinde bir state (durum) oluşturmayı sağlar.

  const [firstName, setFirstname] = useState('FatmaNur');
  const [lastName, setLastName] = useState('Karagöz')
  const [names, setNames] = useState(["Elif", "Mahir", "Necla", "Mesut"])
  const [userInfo, setUserInfo] = useState({ username: "fkaragoz", password: "2365" })
  const [show, setShow] = useState(false);

  // useState : Bir state'in değerini set metodunu kullanarak değiştirdiğimizde component yeniden render edilir. Bu durum da performans zayıflığına sebep olur. Sistemimiz yavaşlar.

  const [count, setCount] = useState(0);
  // 1000 satır kod olduğunu düşünelim ?

  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  console.log("Componenet render edildi!")


  // = () =>, ES6 ile gelen bir fonksiyon tanımlama yöntemidir.
  // Daha kısa ve okunaklıdır.
  // this bağlamını değiştirmez, normal fonksiyonlardan farklıdır.
  // Tek satırlık işlemler için {} ve return yazmaya gerek yoktur.

  // handleChange fonksiyonu, butona tıklandığında firstName state'ini günceller.
  const handleChange = () => {
    debugger; // Kodun çalışmasını durdurup tarayıcının geliştirici araçlarında inceleme yapmamızı sağlar.
    setFirstname("Feyza")
  }

  return (
    <div>

      <div>{firstName} {lastName}</div>
      <div><button onClick={() => { setFirstname("Ayşenur") }}>İsmi Değiştir</button></div>

      <hr />

      <div><button onClick={handleChange}>İsmi Değiştir</button></div>

      <hr />

      <div>{names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
      </div>

      <hr />

      <div>
        {userInfo.username} {userInfo.password}
      </div>

      <hr />

      <div>
        {show ? <div> {userInfo.username} {userInfo.password} </div> : <div>bilgileri gösterme</div>}
      </div>

      <hr />

      <div> {count} </div>
      <div> <button onClick={arttir}>Arttır</button></div>
      <div><button onClick={azalt}>Azalt</button></div>


    </div>
  )
}

export default App
