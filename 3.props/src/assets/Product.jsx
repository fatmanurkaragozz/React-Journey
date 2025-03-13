import React from 'react'

function Product({ productName, price }) {

    // Destructuring Assignment: props içindeki productName ve price değerlerini ayıklıyoruz.
    // props = { productName: 'Ayakkabı', price: 3200 } şeklinde bir nesne geldiğinde,
    // aşağıdaki satır sayesinde productName = 'Ayakkabı' ve price = 3200 değişkenlerine atanır.

    // const { productName, price } = props; //{productName: 'Ayakkabı', price: 3200}

    return (
        <div>
            <div> ÜRÜN BİLGİLERİ </div>

            <div>
                <div> İsim: {productName}</div>
                <div> Fiyat: {price} TL </div>
            </div>
        </div>
    )
}

export default Product
