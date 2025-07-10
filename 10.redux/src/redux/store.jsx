// store.jsx: Uygulamanın Merkezi (Veri Deposu)
import { configureStore } from '@reduxjs/toolkit' // Redux Toolkit'te store (veri merkezi) oluşturur.
import counterReducer from '../redux/counterSlice'
import userReducer from '../redux/userSlice'

export const store = configureStore({
    reducer: { // Hangi slice'ları (alt verileri) yöneteceğini belirler.
        counter: counterReducer, // sayaç verilerini tutan reducer
        user: userReducer // kullanıcı verilerini yöneten reducer
    },
})