// counterSlice.jsx: Sayaç (Statik Veri) Yönetimi
import { createSlice } from '@reduxjs/toolkit'

const initialState = { // Başlangıç değeri
    value: 55,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {  // 3 adet reducer fonksiyonu tanımlıyoruz
        increment: (state) => {

            // Redux Toolkit, reducer'lar içinde "değiştiriyormuşuz gibi" yazmamıza izin verir.
            // Aslında state'i gerçekten değiştirmez çünkü altında Immer kütüphanesini kullanır.
            // Bu kütüphane, bir "taslak state" üzerinde yapılan değişiklikleri algılar
            // ve bu değişikliklere dayalı olarak yeni, değişmez (immutable) bir state üretir.

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Her reducer fonksiyonu için aksiyon oluşturucular (action creator) otomatik olarak oluşturulur
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer