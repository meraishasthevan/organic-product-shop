import React from 'react';
import './Veterinary.css';
import { Link } from 'react-router-dom';
import vet1 from '../Components/images/vet1.png';
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
        description: 'Sodium Per Carbonate Sodium Per Borate',
        details: 'Releases dissolved oxygen levels quickly & enhances the total DO (Dissolved Oxygen) levels in the pond...',
    },
    {
        id: 2,
        image: vet2,
        name: 'Paw Mark TOXI GO - 500gm',
        price: 200,
        description: 'Zeolite Minerals | Bacillus sps.',
        details: 'Improves pond health. Adsorbs toxic gases like Carbon monoxide...',
    },
    {
        id: 3,
        image: vet3,
        name: 'Paw Mark AFS - 500gm',
        price: 600,
        description: 'Protein | Vitamins | Minerals | Prebiotics | Probiotics Bypass Fat',
        details: 'Cows & Buffalos: Increases Milk Yield by 10-15% according to breed...',
    },
    {
        id: 4,
        image: vet4,
        name: 'Paw Mark ACIGUT - 500ml',
        price: 500,
        description: 'Acetic Acid Propionic Acid | Benzoic Acid | Sorbic Acid Beta Glucans | Essential Oils...',
        details: 'As a Routine acidifier & conditioner. Make gut conditioned and functional...',
    },
    {
        id: 5,
        image: vet5,
        name: 'Paw Mark AQUA - KLEAR - 500gm',
        price: 1400,
        description: 'Yucca Schidigera | Bacillus Subtilis | Bacillus Polymyxa | Lactobacillus Acidophilus...',
        details: 'Eliminates Ammonia from the pond bottom as well as in the pond water...',
    },
    {
        id: 6,
        image: vet6,
        name: 'Paw Mark PROGEN - 500ml',
        price: 600,
        description: 'Saccharomyces Boulardii | Streptococcus Faecium | Lactobacillus Acidophilus...',
        details: 'Improves meat quality in broilers. Improves tenderness & juice of the meat...',
    },
    {
        id: 7,
        image: vet7,
        name: 'Paw Mark TOXIBIND - 500gm',
        price: 750,
        description: 'Yucca Schidigera | Natural Siliceous Earth Powder | Ammonium Binding Agents...',
        details: 'Controls excess moisture in the finished feed. Broad spectrum mold inhibitor...',
    },
    {
        id: 8,
        image: vet8,
        name: 'Paw Mark VIMIN - 500ml',
        price: 650,
        description: 'Vitamins Minerals | Amino Acids | Yeast Extract',
        details: 'Prevents and corrects avitaminosis and nutritional deficiency...',
    },
];

const VeterinaryPage = () => {
    const handleLinkClick = (link) => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='bac-vet-pro'>
            <div className="veterinary-container container">
                <h1 className='vet-title'>Veterinary Products</h1>
                <div className="card-grid">
                    {allVeterinary.map(product => (
                        <div className="card" key={product.id}>
                            <img src={product.image} alt={product.name} className="cards-image" />
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-price">₹ {product.price}</p>
                            <Link to={`/veterinary/${product.id}`} className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VeterinaryPage;
