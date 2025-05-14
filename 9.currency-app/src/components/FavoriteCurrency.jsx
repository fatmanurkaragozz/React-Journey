import { useEffect, useState } from 'react';

const FavoriteCurrency = ({ setFromCurrency }) => {
    const [favorite, setFavorite] = useState(() => {
        // Sayfa yüklenirken localStorage'dan favoriyi al
        return localStorage.getItem('favoriteCurrency') || 'USD';
    });

    // Favori para birimi değiştiğinde localStorage'a kaydet
    useEffect(() => {
        localStorage.setItem('favoriteCurrency', favorite);
    }, [favorite]);

    const handleChange = (e) => {
        const newFav = e.target.value;
        setFavorite(newFav);
        setFromCurrency(newFav); // Favoriyi aynı zamanda kaynak para birimi olarak ayarla
    };

    return (
        <div className="favorite-box">
            <label htmlFor="favorite-select">⭐ Favorite Currency:</label>
            <select id="favorite-select" value={favorite} onChange={handleChange} className="select kingdom-select">
                <option value="USD">🟦 React Dinarı (USD)</option>
                <option value="EUR">🟨 Component Altını (EUR)</option>
                <option value="GBP">🟩 State Sterlini (GBP)</option>
                <option value="TRY">🟥 Hook Lirası (TRY)</option>
            </select>
        </div>
    );
};

export default FavoriteCurrency;
