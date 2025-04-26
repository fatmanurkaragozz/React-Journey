import { useState } from 'react'; // React'in useState hook'unu içe aktarıyoruz.
import './App.css'; // CSS dosyasını içe aktarıyoruz.
import { FaMoneyBillWave, FaExchangeAlt } from 'react-icons/fa'; // React Icons kütüphanesinden simgeleri içe aktarıyoruz.
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"; // Para birimi verilerini almak için kullanılacak API URL'si.

let API_KEY = "fca_live_q5AAy6FI8cbz6mFVhAomMCcp2xY5HN8iEi8DG9H3";

function App() {
  // State tanımlamaları:
  const [amount, setAmount] = useState(''); // Kullanıcının girdiği miktarı tutar.
  const [fromCurrency, setFromCurrency] = useState('USD'); // Çevrilecek para birimini tutar (varsayılan: USD).
  const [toCurrency, setToCurrency] = useState('TRY'); // Hedef para birimini tutar (varsayılan: EUR).
  const [result, setResult] = useState(null); // Çevrim sonucunu tutar.


  // Para birimi dönüştürme işlemini gerçekleştiren fonksiyon:
  const handleConvert = async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result = ((response.data.data[toCurrency]) * amount).toFixed(2); // API'den alınan veriyi kullanarak sonucu hesaplar.
    setResult(result); // Hesaplanan sonucu state'e kaydeder.
  };

  return (
    <div className="app"> {/* Ana kapsayıcı div */}
      <h1 className="title"> {/* Başlık */}
        <FaMoneyBillWave className="icon" /> {/* Para simgesi */}
        Currency Converter {/* Başlık metni */}
      </h1>
      <div className="card"> {/* Kart tasarımı için kapsayıcı */}
        <input
          type="number" // Kullanıcının miktar gireceği kutu.
          placeholder="Enter amount" // Kullanıcıya rehberlik eden placeholder metni.
          value={amount} // Input'un değeri state'ten alınır.
          onChange={(e) => setAmount(e.target.value)} // Kullanıcı bir değer girdiğinde state güncellenir.
          className="input" // CSS sınıfı.
        />
        <div className="result-box"> {/* Çevrim sonucunu göstermek için kutu */}
          <input
            type="text" // Sadece okunabilir bir input kutusu.
            value={result || ''} // Çevrim sonucu burada gösterilir. Eğer sonuç yoksa boş bırakılır.
            placeholder="Converted amount" // Kullanıcıya rehberlik eden placeholder metni.
            readOnly // Kullanıcı bu kutuya yazamaz.
            className="input result-input" // CSS sınıfı.
          />
        </div>
        <div className="currency-select"> {/* Para birimi seçimi için kapsayıcı */}
          <select
            value={fromCurrency} // Çevrilecek para birimi state'ten alınır.
            onChange={(e) => setFromCurrency(e.target.value)} // Kullanıcı seçim yaptığında state güncellenir.
            className="select" // CSS sınıfı.
          >
            <option value="USD">🇺🇸 USD</option> {/* Para birimi seçenekleri */}
            <option value="EUR">🇪🇺 EUR</option>
            <option value="GBP">🇬🇧 GBP</option>
            <option value="TRY">🇹🇷 TRY</option>
          </select>
          <FaExchangeAlt className="exchange-icon" /> {/* İki para birimi arasındaki dönüşümü temsil eden simge */}
          <select
            value={toCurrency} // Hedef para birimi state'ten alınır.
            onChange={(e) => setToCurrency(e.target.value)} // Kullanıcı seçim yaptığında state güncellenir.
            className="select" // CSS sınıfı.
          >
            <option value="USD">🇺🇸 USD</option> {/* Para birimi seçenekleri */}
            <option value="EUR">🇪🇺 EUR</option>
            <option value="GBP">🇬🇧 GBP</option>
            <option value="TRY">🇹🇷 TRY</option>
          </select>
        </div>
        <button onClick={handleConvert} className="button"> {/* Dönüştürme işlemini başlatan buton */}
          Convert <FaMoneyBillWave /> {/* Buton metni ve simgesi */}
        </button>
      </div>
    </div>
  );
}

export default App; // App bileşenini dışa aktarıyoruz.
