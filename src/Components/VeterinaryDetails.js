import React from 'react';
import './VeterinaryDetails.css';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/cartAction';

import vet1 from'../Components/images/vet1.png';
// import vet2 from '../Components/images/vet2.jpg';
import vet2 from './images/vet2.png';
import vet3 from '../Components/images/vet3.png';
import vet4 from '../Components/images/vet4.png';
import vet5 from '../Components/images/vet5.png';
import vet6 from '../Components/images/vet6.png';
import vet7 from '../Components/images/vet7.png';
import vet8 from '../Components/images/vet8.png';


const allVeterinary = [
    {
        id: 1,
        image: vet1,
        name: 'Paw Mark OXY - UP 500gm',
        price: 800,
        description:'Sodium Per Carbonate Sodium Per Borate',
        details:'Releases dissolved oxygen levels quickly & enhances the total DO (Dissolved Oxygen) levels in the pond. Animals get complete relaxation from stress. Prevents mass mortalities. Helps to reduce toxic gases/pond pollution.',
    },
    {
        id: 2,
        image:vet2 ,
        name: 'Paw Mark TOXI GO - 500gm',
        price: 200,
        description:'Zeolite Minerals | Bacillus sps.',
        details:'Improves pond health. Adsorbs toxic gases like Carbon monoxide etc. from pond water by its unique molecular pore structures. Neutralizes the adsorbed toxic ammonia by ion exchanging the free ammonium. Prevents bad/noxious odors from pond water by neutralizing the noxious ammonia. Helps to improve dissolved oxygen and Natural food). Makes the animals fresh by phytoplankton levels ( relieving stress caused due to toxic gases & other pollutants. Helps to improve growth, health & immunity. Minerals helps for better health, strength & growth. Activates the gut for better nutrients absorption. Helps for more gut health, feeding & growth.',
    },
    {
        id: 3,
        image:vet3 ,
        name: 'Paw Mark AFS - 500gm',
        price: 600,
        description:'Protein | Vitamins | Minerals | Prebiotics | Probiotics Bypass Fat',
        details:'Cows & Buffalos: Increases Milk Yield by 10-15% according to breed. Increase SNF and Fat in Milk making Milk more valuable and economical for farmers. Helps to attain 1 calf per year. Increases Overall growth of cattles. Reduces cattle diseases probability. Goats, Pigs & Sheep: Increases weight of goats making them economically more viable. Increases milk yield and fertility yield as well. Horses: Provides pre workout energy for races. Provides post work out energy after races. Increases skin coat and hair lustre. Fisheries: Increase weight of fishes. Reduces mortality of fishes. Poultry: Increase weight of poultry by helping them to attain weight in 30 days only making more economical for poultry breeders. Increase Immunity and reduces mortality chances in birds. Dogs & Cats: Overall growth and immunity.',

    },
    {
        id: 4,
        image:vet4 ,
        name: 'Paw Mark ACIGUT - 500ml',
        price: 500,
        description:'Acetic Acid Propionic Acid | Benzoic Acid | Sorbic Acid Beta Glucans | Essential Oils (Cardamom & Ginger Oil) | Stabilizers',
        details:'As a Routine acidifier & conditioner. Make gut conditioned and functional. Maintains optimum pH.',
    },
    {
        id: 5,
        image: vet5,
        name: 'Paw Mark AQUA - KLEAR - 500gm',
        price: 1400,
        description:'Yucca Schidigera | Bacillus Subtilis | Bacillus Polymyxa | Lactobacillus Acidophilus | Nitrosomonas Nitrobacter',
        details:'Eliminates Ammonia from the pond bottom as well as in the pond water, Relieves the stress of aquatic animals caused due to toxic gases.. Prevents the production of toxic gases like Ammonia, Hydrogen sulphide etc. Reduces the pathogenic microbial load by competing for same food source by the probiotic present in AQUA- KLEAR. Helps for more freshness of pond & aquatic animals there by animals feels nil stress. Improves feed intake and so helps for fast growth and better body weight. Reduces the sludge volume in the pond bottom by effective bio- degradation',
    },
    {
        id: 6,
        image:vet6 ,
        name: 'Paw Mark PROGEN - 500ml',
        price: 600,
        description:'Saccharomyces Boulardii | Streptococcus Faecium | Lactobacillus Acidophilus | Lactobacillus Casei | Bifidobacterium Bifidum Torulopsis Spp | Haematococcus Pluvialis',
        details:'Improves meat quality in broliers. Improves tenderness & juice of the meat.. Provides attractive & appetizing colour to the meat. Improves weight gain & FCR. Effectively maintains gut health and improve feed digestion & nutrient absorption.',
    },
    {
        id: 7,
        image: vet7,
        name: 'Paw Mark TOXIBIND - 500gm',
        price: 750,
        description:'Yucca Schidigera | Natural Siliceous Earth Powder | Ammonium Binding Agents | Bacilius Subtilis',
        details:'Controls excess moisture in the finished feed. Broad spectrum mould inhibitor. Selective toxin adsorbant additives. Improves liver function. Prevents multi-function of pathogenic bacteria in the Gut.',
    },
    {
        id: 8,
        image: vet8,
        name: 'Paw Mark VIMIN - 500ml',
        price: 650,
        description:'Vitamins Minerals | Amino Acids | Yeast Extract',
        details:'Prevents and corrects avitaminosis and nutritional deficiency. Helps to reduce mortality. Work as a supportive therapy in state like Moulting, Anorexia, Fatty Liver, Early chick mortality etc. Improves growth rapidly. Highly recommended during first week of life in chicks.',

    },
];



const VeterinaryDetails = () => {

    const { id } = useParams();
    const product = allVeterinary.find(item => item.id === parseInt(id));
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    if (!product) {
        return <div>Product not found!</div>;
    }


    return (
        <div className='back-vet'>
            <div className="details-container container">
            <Link to="/veterinary"><button className='btn btn-primary'>Back to Products</button></Link>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} className="details-image" />
            <p><strong>Price:</strong> ₹ {product.price}</p>
            <button className='btn btn-danger buy' onClick={handleAddToCart}>Add to Cart</button>
            <p className='vet-desc'><b>Description:</b>  <br></br> {product.description}</p>
            <p> <b>Benifits:</b>  <br></br>{product.details}</p>

        </div>
            
        </div>
    );
};

export default VeterinaryDetails;