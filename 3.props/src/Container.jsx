import React from 'react'

// 📌 Container bileşeni bir "parent" bileşen gibi çalışır ve içine gelen "children" prop'unu kullanarak içeriğini dinamik hale getirir.
function Container({ children }) {
    return (
        <div>
            <div>Container componenti çalıştı!</div>
            <hr />

            {/* 📌 children prop'u sayesinde, Container içine eklenen tüm bileşenler burada görüntülenir. */}
            {children}
        </div>
    )
}

export default Container
