import React from 'react';
import './banner.css';
import carousel8 from '../images/Banner 8.jpg';
import carousel4 from '../images/Banner 4.jpg';
import carousel9 from '../images/Banner 9.jpg';

const Banner = () => {
    return (
        <div className='ban-sec'>

                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner ban-images">
                    <div class="carousel-item active">
                    <img src={carousel8} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={carousel4} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={carousel9} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            
        </div>
    );
};

export default Banner;