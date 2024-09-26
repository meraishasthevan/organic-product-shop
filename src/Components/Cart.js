import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart, updateQuantity, clearCart } from './Redux/cartAction'; 
import '../Components/Cart.css'; 

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showForm, setShowForm] = useState(false); 

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveFromCart = (id, quantity) => {
        if (quantity > 1) {
            dispatch(updateQuantity({ id, quantity: quantity - 1 })); 
        } else {
            dispatch(removeFromCart(id));
        }
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleProceed = () => {
        setShowForm(true); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            alert(`Thank you, ${name}! Your email is ${email}`);
            dispatch(clearCart()); 
            setName('');
            setEmail('');
            setShowForm(false);
        } else {
            alert('Please fill out both name and email fields.');
        }
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-info">
                                    <p className="cart-item-name">{item.name}</p>
                                    <p className="cart-item-price">₹ {item.price}</p>
                                    <div className="quantity-controls">
                                        <button 
                                            className="quantity-button" 
                                            onClick={() => dispatch(decreaseQuantity(item.id))}
                                            disabled={item.quantity <= 1} 
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button 
                                            className="quantity-button" 
                                            onClick={() => dispatch(increaseQuantity(item.id))}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button 
                                        className="cart-item-remove" 
                                        onClick={() => handleRemoveFromCart(item.id, item.quantity)}
                                    >
                                        Remove One
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <p className="cart-total">Total Price: ₹ {totalPrice}</p>
                        <button className="btn-clear-cart" onClick={handleClearCart}>Clear Cart</button>                        
                        <button className="proceed-button" onClick={handleProceed}>Proceed</button> 
                    </div>

                    {showForm && (
                        <form className="cart-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-submit">Submit</button>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
