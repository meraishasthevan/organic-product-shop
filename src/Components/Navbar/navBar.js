import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import 'font-awesome/css/font-awesome.min.css';
import './navBar.css';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); 

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bk">
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="/">
                      <img className='logo' src='https://marketplace.canva.com/EAF35WQednU/2/0/1600w/canva-black-and-green-flat-illustrated-organic-cosmetics-logo-v8R2bKxGXsY.jpg' alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products <i className="fa fa-caret-down"></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/veterinary">Veterinary</Link></li>
                                    <li><Link className="dropdown-item" to="/health-care">Health Care</Link></li>
                                    <li><Link className="dropdown-item" to="/personal-care">Personal Care</Link></li>
                                    <li><Link className="dropdown-item" to="/agriculture">Agriculture</Link></li>
                                    <li><Link className="dropdown-item" to="/grocery">Grocery</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn-nav" type="submit">Search</button>
                        </form>
                        <div className="navbar-icons ms-3">
                            <Link className="nav-link position-relative" to="/cart">
                                Cart <i className="fa fa-shopping-cart"></i>
                                {cartCount > 0 && (
                                    <span className="cart-count badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <Link className="nav-link ms-3" to="/profile">
                                Profile <i className="fa fa-user-circle"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
