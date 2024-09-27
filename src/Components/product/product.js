import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'; 
import vetImage from '../images/cat7.jpg';
import healthCare from '../images/cat6.jpg';
import personalCare from '../images/cat5.jpg';
// import homeCare from '../images/cat3.jpg';
import agriculture from '../images/cat4.jpg';
import masala from '../images/cat2.jpg'
// import promo from '../images/cat1.jpg'

const CardComponent = () => {
    const cards = [
        { title: 'Veterinary', image:vetImage , link: '/veterinary' },
        { title: 'Health Care', image:healthCare, link: '/health-care' },
        { title: 'Personal Care', image: personalCare , link: '/personal-care' },
        //{ title: 'Home Care', image:homeCare, link: '/home-care' },
        { title: 'Agriculture', image: agriculture, link: '/agriculture' },
        { title: 'Grocery', image:masala, link: '/grocery' },
        //{ title: 'Packing & Promotion', image:promo, link: '/packing-promotion' },
    ];

    return (
        <div className="card-container">
            <h1 className='cat-title'>Category</h1>
            <div className="card-grids container">
                {cards.map((card, index) => (
                    <Link to={card.link} key={index} className="cardds">
                        <img src={card.image} alt={card.title} className="card-images" />
                        <h2 className="card-titles">{card.title}</h2>

                      
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CardComponent;
