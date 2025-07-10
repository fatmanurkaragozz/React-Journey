import React from 'react'
import { useNavigate } from 'react-router-dom';

// Sadece bir ürünün detayını gösterir
export function Product({ product }) {

    const { id, name, price } = product;

    const navigate = useNavigate(); // Tıklandığında bir url'e yönlendirmek için kullanılan hooktur.

    return (
        <div style={{ marginBottom: '40px', backgroundColor: 'lightgreen' }}>
            <div>Ürün Detayı</div>
            <h3>İsim : {name}</h3>
            <h3>Fiyatı : {price}</h3>
            <button onClick={() => navigate("/product-details/" + id)}>Detayına Git</button>
        </div>
    )
}

export default Product