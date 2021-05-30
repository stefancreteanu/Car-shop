import React, { useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [Cart, setCart] = useState('');
    const [marca, setMarca] = useState('');
    const [serie, setSerie] = useState('');
    const [pret, setPret] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [payMessage, setPayMessage] = useState('');
    const [checkCart, setCheckCart] = useState(false);

    const addToCart = () => {
        axios.get('http://localhost:8080/cart', {
            headers: {
                cart: Cart
            }
        }).then((response) => {      
            setMarca(response.data.marca);
            setSerie(response.data.serieCaroserie);
            setPret(response.data.pretEuro);           
        })
    }

    const cartCheck = () => {
        if(marca.length > 0) {
            setSuccessMessage(`Ai adaugat in cos masina ${marca} cu seria ${serie}`);
        } else if (Cart === '') {
            setSuccessMessage('Va rugam inserati o serie de caroserie.');
        } else if (!marca) {
            setSuccessMessage('Masina cu aceasta serie nu se afla in baza noastra de date.')
        }
    }

    return (
        <div className="container">
            <h1>Cos</h1>
            <div className="addCart">
                <h2>Inserati seria de caroserie a masinii pentru a o adauga in cos.</h2>
                <input type="text" placeholder='Serie caroserie' className='car-field' onChange={(e) => {setCart(e.target.value)}}/>
                <input type="submit" value='Add to cart' className='btn' onClick={() => {addToCart(); cartCheck()}}/>
            </div>
            <div className="cart">
                <p>{successMessage}</p>
            </div>
        </div>
    )
}

export default Cart;