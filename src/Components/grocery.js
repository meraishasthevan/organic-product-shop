import React from 'react';
import { Link } from 'react-router-dom';
import './grocery.css';
import gro1 from './images/tandoori chicken masala.png';
import gro2 from './images/chole masala.png';
import gro3 from './images/kitchen king masala.png';
import gro4 from './images/egg curry masla.png';
import gro5 from './images/chaat masala.png';
import gro6 from './images/mutton masala.png';
import gro7 from './images/fish fry masala.png';
import gro8 from './images/sabji masala.png';

const allGrocery = [
    {
        id: 1,
        image: gro1,
        name: 'Tandoori Chicken Masala - 100gm',
        price: 120,
        description: 'UNYK | Tandoori | Chicken | Masala.',
        details: 'UNYK Tandoori Masala mix is a combination of spices that gives you restaurant-style tandoori (chicken, paneer, mushroom baby corn) in minutes. UNYK Tandoori Masala infuses rich aroma in everything that goes into the Tandoor. Enjoy your Barbeque style homemade foods.',
    },
    {
        id: 2,
        image: gro2,
        name: 'UNYK Chole Masala - 100gm',
        price: 60,
        description: 'UNYK | Chole | Masala.',
        details: 'Chhole Masala is the most excellent ingredient to make spicy, delicious and tasty chhole masala. A perfect blend of spices and others so evenly balanced that it not only adds taste but also enhances the flavour and also imparts really natural taste of chhole/Chana.',
    },
    {
        id: 3,
        image: gro3,
        name: 'Kitchen King Masala - 100gm',
        price: 60,
        description: 'UNYK | Kitchen | King | Masala.',
        details: 'Made by using organic spices with cold press technology to keep essential oils intact for aromatic and rich flavour. Helps to enhance and make your dish tasty. Ideal for all dishes & Easy to use.',
    },
    {
        id: 4,
        image: gro4,
        name: 'UNYK Egg Curry Masala - 100gm',
        price: 70,
        description: 'UNYK | Egg | Curry | Masala.',
        details: 'Egg lovers can now relish their favourite food with tangy, tasty recipe full of rich aroma & flavour. Makes super hotel style gravy which can increase your cravings.',
    },
    {
        id: 5,
        image: gro5,
        name: 'UNYK Chaat Masala - 100gm',
        price: 50,
        description: 'UNYK | Chaat | Masala.',
        details: 'UNYK Chaat Masala is an all-in- one seasoning. It adds a tangy flavour and zesty twist to any meal, leaving a savoury in your tastebuds. UNYK Chaat Masala Powder is a blend of many spices that adds a perfect tanginess and elevates the richness of fruits and vegetables.',
    },
    {
        id: 6,
        image: gro6,
        name: 'UNYK Mutton Masala - 100gm',
        price: 80,
        description: 'UNYK | Mutton | Masala.',
        details: 'UNYK Mutton Masala is a blend of pepper-coriander chilli based combine that gives a hot taste to non-veg dishes, particularly meat. It enhances texture, taste and flavour of the meat to give you unique experience of meat like never before',
    },
    {
        id: 7,
        image: gro7,
        name: 'UNYK Fish Fry Masala - 100gm',
        price: 80,
        description: 'UNYK | Fish | Fry | Masala.',
        details: 'Seafood lovers have nothing to worry as UNYK Fish Fry Masala is a perfect blend to make traditional Fish Fry at home and this masala brings out the true flavour and aroma of Fish. So relish on your favourite sea food with the masala.',
    },
    {
        id: 8,
        image: gro8,
        name: 'UNYK Sabji Masala - 100gm',
        price: 70,
        description: 'UNYK | Sabji | Masala.',
        details: 'UNYK Sabji Masala is a spice full combination that enhances the taste of any vegetable dish. It is the secret of making lip-smacking curries, tasty everyday veggies, and special preparations.',
    },
];

const Grocery = () => {
    return (
        <div className='grocery-bi'>


        <div className="grocery-container container">
        <h1 className="grocery-title">Grocery Items</h1>
        <div className="grocery-grid">
            {allGrocery.map(item => (
                <div key={item.id} className="grocery-card">
                    <div className="grocery-card-inner">
                        <div className="grocery-card-front">
                            <img src={item.image} alt={item.name} className="grocery-image" />
                            <h2 className="grocery-name">{item.name}</h2>
                            <p className="grocery-price">  ₹  {item.price}</p>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                        <div className="grocery-card-back">
                            <h2 className="details-title">About Product</h2>
                            <p className="details-description">{item.details}</p>
                            <Link to={`/groceryDetails/${item.id}`}>
                                <button className='agri-view-details-button'>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
    );
};


export default Grocery;
