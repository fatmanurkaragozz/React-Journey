import { FaExchangeAlt } from 'react-icons/fa';

// Para birimi seçme bileşeni (Krallık temalı)
const CurrencySelect = ({ fromCurrency, toCurrency, setFromCurrency, setToCurrency }) => (
    <div className="currency-select">
        {/* Kaynak para birimi (React Krallığı'ndan) */}
        <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="select kingdom-select"
        >
            <option value="USD">🟦 React Dinarı (USD)</option>
            <option value="EUR">🟨 Component Altını (EUR)</option>
            <option value="GBP">🟩 State Sterlini (GBP)</option>
            <option value="TRY">🟥 Hook Lirası (TRY)</option>
        </select>

        {/* Değişim ikonu */}
        <FaExchangeAlt className="exchange-icon" />

        {/* Hedef para birimi (React Krallığı'ndan) */}
        <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="select kingdom-select"
        >
            <option value="USD">🟦 React Dinarı (USD)</option>
            <option value="EUR">🟨 Component Altını (EUR)</option>
            <option value="GBP">🟩 State Sterlini (GBP)</option>
            <option value="TRY">🟥 Hook Lirası (TRY)</option>
        </select>
    </div>
);

export default CurrencySelect;
