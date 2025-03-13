import React from 'react'

export const users = [
    {
        username: "fatmanur",
        password: "1"
    },
    {
        username: "burhan",
        password: "2"
    }
]

function Login() {

    // React’te <Fragment>...</Fragment> veya kısaca <>...</> olarak kullanılan Fragment, gereksiz <div> etiketleri oluşturmadan birden fazla JSX öğesini gruplayan bir yapıdır.

    return (
        <>
            <div>

                <div>
                    <p>Kullanıcı Adınız: </p>
                    <input type="text" />
                </div>

                <div>
                    <p>Şifreniz: </p>
                    <input type="text" />
                </div>

                <button>Giriş Yap</button>
            </div>
        </>
    )
}

export default Login
