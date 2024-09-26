import React from 'react';
import './promitional.css';
import carousel5 from '../images/Banner 5.jpg';
import carousel6 from '../images/Banner 6.jpg';
import carousel7 from '../images/Banner 7.jpg';

const Promotional = () => {
    return (
        <div className='promo-sec'> 
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <i className="fas fa-tags" style={{ fontSize: '2rem', color: '#007bff' }}></i>
            </div>
            <h1 style={{ textAlign: 'center' }} className='pro-title'>Promotional Offers</h1>

            <div className='ban2'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner promo-img">
                        <div className="carousel-item active">
                            <img src={carousel5} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={carousel6} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={carousel7} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Promotional;
