import React from 'react'
import { Link } from 'react-router-dom';


export function Header() {
    return (
        <div className='header'>
            <Link className='link' to="/">Anasayfa</Link> |
            <Link className='link' to="/about">Hakkında</Link> |
            <Link className='link' to="/contact">İletişim</Link> |
            <Link className='link' to="/products">Ürünlerimiz</Link>
        </div>
    )
}

export default Header
