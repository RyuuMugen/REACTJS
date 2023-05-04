import React from 'react'
import Home from './Home'
import Product from './Product'
import Admin from './Admin'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Ex1() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
