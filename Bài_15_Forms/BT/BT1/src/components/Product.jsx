import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Product() {
    const navigate = useNavigate();
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }
    const { productId } = useParams();
    return (
        <div>
            ProductDetail {productId}
            <button style={buttonStyle} onClick={() => { navigate('/') }}>Back </button>

        </div>

    )
}