import { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencySelect from './CurrencySelect';
import ResultBox from './ResultBox';
import History from './History';
import FavoriteCurrency from './FavoriteCurrency';


// API bilgileri
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_q5AAy6FI8cbz6mFVhAomMCcp2xY5HN8iEi8DG9H3";

// Ana bileşen
const Converter = () => {
    // State'ler
    const [amount, setAmount] = useState(''); // Kullanıcının girdiği miktar
    const [fromCurrency, setFromCurrency] = useState('USD'); // Kaynak para birimi
    const [toCurrency, setToCurrency] = useState('TRY'); // Hedef para birimi
    const [result, setResult] = useState(''); // Çeviri sonucu
    const [history, setHistory] = useState([]); // Geçmişi tutmak için state

    // // Anlık çeviri yapan useEffect
    // useEffect(() => {
    //     const convert = async () => {
    //         // Miktar boş ya da geçersizse işlem yapma
    //         if (!amount || isNaN(amount)) return;

    //         try {
    //             // API'den kur oranını al
    //             const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    //             const rate = res.data.data[toCurrency];

    //             // Sonucu hesapla ve state'e kaydet
    //             const converted = (rate * parseFloat(amount)).toFixed(2);
    //             setResult(converted);

    //             // 🆕 Yeni: İşlemi geçmişe ekle
    //             const newEntry = {
    //                 amount,
    //                 from: fromCurrency,
    //                 to: toCurrency,
    //                 result: converted,
    //             };
    //             setHistory(prev => [newEntry, ...prev.slice(0, 9)]); // Sadece son 10 çeviriyi tut

    //         } catch (err) {
    //             console.error("Çeviri hatası:", err);
    //         }
    //     };

    //     // Fonksiyonu çağır
    //     convert();
    // }, [amount, fromCurrency, toCurrency]); // Bu 3 değer değiştiğinde yeniden çalışır

    const convert = async () => {
        if (!amount || isNaN(amount)) return;
        try {
            const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
            const rate = res.data.data[toCurrency];
            const converted = (rate * parseFloat(amount)).toFixed(2);
            setResult(converted);
            const newEntry = { amount, from: fromCurrency, to: toCurrency, result: converted };
            setHistory(prev => [newEntry, ...prev.slice(0, 9)]);
        } catch (err) {
            console.error("Çeviri hatası:", err);
        }
    };


    return (
        <div className="card">

            {/* Miktar girişi */}
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input"
            />

            {/* Çeviri sonucu */}
            <ResultBox result={result} />

            {/* Para birimi seçiciler */}
            <CurrencySelect
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                setFromCurrency={setFromCurrency}
                setToCurrency={setToCurrency}
            />

            <button className="button" onClick={convert}>
                Convert
            </button>

            <History history={history} /> {/* 🆕 Yeni: Geçmiş bileşeni */}

            <FavoriteCurrency setFromCurrency={setFromCurrency} />
        </div>
    );
};

export default Converter;
