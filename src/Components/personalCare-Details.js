import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/cartAction';
import './personalCare-Details.css';
import per1 from './images/Hair oil.png';
import per2 from './images/Myristika Foot cream.png';
import per3 from './images/Myristika Herbal Toothpaste.png';
import per4 from './images/Myristika pain relief gel.png';
import per5 from './images/Ocean fresh cool cool oil 100ml.png';
import per6 from './images/Ocean fresh anti-pimple cream 60gm.png';
import per7 from './images/ocean fresh anti septic cream60gm.png';
import per8 from './images/Ocean Fresh body lotion 250 ml.png';


const allPersonalCare=[
    {
        id:1,
        image:per1 ,
        name:'Myristika Hair Oil',
        description:'Vitamin E | Bioti | Sesame Oil | Coconut Oil | Olive Oil | Argan Oil | Almond Oil | Sunflower Oil | Jojoba Oil | Avacado Oil | Flax seed Oil | Wheatgerm Oil | Rosemary Oil | Tea Tree Oil',
        price:480,
        details:'All 12 oils helps in reducing hair fall. Prevents premature hair greying. Helpful in alopecia. Reduces dryness & gives healthy and shiny hair. Reduce stress related to insomnia and hypertension.',
    },
    {
        id:2,
        image: per2,
        name:'Myristika Foot Cream',
        description:'Castor Oil | Shea Butter | Shorea Robusta | Salicylic | Glycolic Acid | White Curcumin | Tea Tree Oil',
        price:144,
        details:'It moisturizes and protect your foot or sole skin. It is very helpful in repairing and preventing cracked heels. It relieves you from pain caused by cracked heels or by ill-fitting foot wares. It helps in preventing hyperkeratosis (thickening of foot skin) & hyperpigmentation (Blackening) syndrome. It has calming and relaxing effects on skin. 11 Myristik',
    },
    {
        id:3,
        image: per3,
        name:'Myristika Herbal Toothpaste',
        description:'Coral Calcium | Arginine | White Curcumin | Bromelain | Irimedadai Tailam',
        price:120,
        details:'Helps to fight against dental problems like plaque, tartar, tooth decay etc. Helps in Pyorrhea, Swelling & bleeding gums. Protects enamel from erosion due to natural calcium Natural whitening of teeth due to plant enzyme bleaching effect. Relieves teeth sensitivity.',
    },
    {
        id:4,
        image: per4,
        name:'Myristika Pain Relief Gel',
        description:'Menthol Wintergreen Oil | Thymol | Peppermint Oil | Eucalyptus Oil | Camphor | Pepper Oil Ginger Ext | Dashmool Ext | Capsicum Oleoresin',
        price:200,
        details:'Helps in muscle & joint pain. Helps in relieving headache. It acts as antiseptic and astringent. Amazing ingredients used in it helps in Osteoarthritis and Rheumatoid arthritis. The ingredients used in it provide aid in joint flexibility. It has anti-inflammatory properties. It also helps in sports related injuries like sprain, twisting, cartilage damage and ligament tear etc.',
    },
    {
        id:5,
        image: per5,
        name:'Ocean fresh Cool Cool Oil 100ml',
        description:'Dead Sea Minerals | Sesame Oil | Eucalyptus Oil | Amla Oil | Bhringraj Oil | Alovera Oil BENEFITS',
        price:140,
        details:'Prevents premature hair greying. Gives healthy and shiny hair. Helpful in alopecia. Reduce stress related to insomnia and hypertension. Reduces dryness and makes hair silky.',
    },
    {
        id:6,
        image:per6 ,
        name:'Ocean Fresh Anti-Pimple Cream 60gm',
        description:'Dead Sea Minerals | Aloevera | Neem | Haldi | Tea Tree Oil | Clove Oil | Rosemary Oil',
        price:144,
        details:'Helps to remove excess oil secretion from skin. Helps to minimize acne & pimples. Helps to reduce scarring due to acne & pimple.',
    },
    {
        id:7,
        image:per7 ,
        name:'Ocean Fres Anti Septic Cream 60gm',
        description:'Dead Sea Minerals | Neem Oil | Karanj Oil BENEFITS',
        price:144,
        details:'Heals, Protects, and Moisturizes the skin. Helps in various skin disorders like eczema dermatitis by providing nourishment to skin. Oceanfresh antiseptic cream also helps in excessive dry skin, dry lips, cracked heels, cuts, minor wounds, burns etc.',
    },
    {
        id:8,
        image:per8 , 
        name:'Ocean Fresh Body Lotion 250ml',
        description:'Dead Sea Minerals Cocoa Butter Shea Butter | Almond | Jojoba | Sunflower',
        price:220,
        details:'Protecting the skin from sun damage. Nourishing the skin to make it radiant. Helps in regeneration of skin cells.',
    },
    
 ]

const PersonalCareDetails = () => {

    const { id } = useParams();
    const product = allPersonalCare.find(item => item.id === parseInt(id));

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className='pcd-bki'>
        <div className="personal-details-container">
        {product ? (
            
            <div className="personal-details-content">
                
                <img className="personal-details-image" src={product.image} alt={product.name} />
                <h1 className="personal-details-name">{product.name}</h1>
                <p className="personal-details-price">Price: <span>  ₹ {product.price}</span></p>
                <button className='btn btn-danger' onClick={handleAddToCart}>Add Cart</button>
                <h2 className="personal-details-description">{product.description}</h2>

                 <h4>Description</h4>
               
                <p className="personal-details-details">{product.details}</p>
              
            </div>
        ) : (
            <p className="personal-details-not-found">Product not found</p>
        )}
    </div>
    </div>
    );
};

export default PersonalCareDetails;
