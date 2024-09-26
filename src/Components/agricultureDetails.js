import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/cartAction';
import './agricultureDetails.css';
import agri1 from './images/Unimark Uni-Spase 100ml.png';
import agri2 from './images/UniRich-500ml.png';
import agri3 from './images/Unimark UNIPH-500 ml.png';
import agri4 from './images/UniCarbN 5 Liter.png';
import agri5 from './images/Unimark UNISIL-1LTR.png';
import agri6 from './images/Unimark Top Soil 1kg.png';
import agri7 from './images/Unimark UNIFERT-P-5ltr.png';
import agri8 from './images/Unimark UNIFERT-K-5ltr.png';


const allAgriculture = [
    {
        id:1,
        image:agri1 ,
        name:'UNI-SPACE 100ml',
        price:325,
        description:'Super Silicon Spreader',
        details:'It is developed to improve the wetting, spreading and penetration of agriculture chemicals, especially. herbicides, insecticides, fungicides & plant growth regulators that are water soluble. It reduces the surface tension to a very low level, resulting in a rapid wetting cum spreading on leaves. When incorporated with agriculture chemicals, near complete coverage of leaf is achieved. It is multifunctional and acts as Sticker, Penetrator, Activator, Spreader and Emulsifier.',
    },
    {
        id:2,
        image:agri2 ,
        name:'UNIRICH 500ml',
        price:750,
        description:'Seaweed Protein | Amino Acids',
        details:'Enhances seed germination. Boosts root formation. Increases yield/produce. Help plant to achieve stronger resistance Promotes rapid root & shoot development. Promotes root mass. Promotes flower blossom & fruiting Help plant endure environmental stress Help to stop fruit & flower dropping',
       },
       {
        id:3,
        image:agri3 ,
        name:'UNIPH - 500ml',
        price:800,
        description:'Weak Acids',
        details:'Always add to spray water before addition of spray components in mixing tank & check pH of spray solution as per requirement. It never retains any stains over applied area of plant. It contains week acids which helps to make spray solution acidic in nature. Standard pH 5.5 to 6.5 for spray solution.',
       },
       {
        id:4,
        image: agri4,
        name:'UNICARBN - 5 LTR',
        price:850,
        description:'Natural Proteins | Organic Acids',
        details:'It helps to improve mineral uptake through roots and between cells as well as speeding cellular metabolism. Increases. buffering properties of soil. It promotes vegetative growth of differents plant at differents stages. Helping Plants to resist drought. Increases root respiration and root formation. Increases germination resulting in to uniform crop. It contains naturally derived aminoacid in the form of proteinsIt ',
       },
       {
        id:5,
        image:agri5 ,
        name:'UNISIL - 1 LTR',
        price:1200,
        description:'Mono-Silicic Acid | Potash',
        details:'Makes silicon available to plant in bioavailable form. Reduces biotic & abiotic stress on crops Enhances plants ability to resist metal toxification Strengthens stems of crops so that they dont collapse due to heavy rain & wind. Reduces stem breakage Increase resistence against fungal attacks.',
       },
       {
        id:6,
        image:agri6 ,
        name:'TOPSOIL - 1 kg',
        price:800,
        description:'Castor Extract | Karanj Extract | Enzymes | Fillers Bentonites',
        details:'Top Soil is based on principles of organic management of crops. It also has herbal extract which are known in Ayurveda to boost plant immunity against natural attacks of soil borne. pests (White Grubs, Termites and Root Borers) due to climate change on crops like fruits & vegetables.',
       },
       {
        id:7,
        image:agri7 ,
        name:'UNIFERT-P-5LTR',
        price:3250,
        description:'Phosphate Solubilizing Bacteria (CFU Min 1 X 10 cell/ml)',
        details:'UNIFERT-P is a liquid bio-fertilizer made of pure culture of naturally occurring soil-borne Phosphorus solubilizing bacteria (PSB). When applied to the soil, the bacteria multiplies & produces organic acids & converts insoluble inorganic phosphatic compounds in soil into soluble form & makes them available to plants.',
       },
       {
        id:8,
        image:agri8 ,
        name:'UNIFERT-k-5LTR',
        price:3250,
        description:'Potash Mobilizing Bacteria (CFU Min 1 X 10 cell/ml)',
        details:'UNIFERT-K is a liquid bio-fertilizer made of pure culture of naturally occurring soil borne Potash Mobilizing bacteria (KMB). When applied to soil, Potash Mobilizing Bacteria helps to mobilize potassium fixed in soil. This mobilize potassium is easily available to the crops.',
       },
];


const AgricultureDetails = () => {

    const { id } = useParams();
    
    const product = allAgriculture.find(item => item.id === parseInt(id));

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    if (!product) {
        return <h2 className='agri-no-product'>Product Not Found</h2>;
    }

    return (
        <div className='ag-det-bk'>

   
        <div className='agri-details-container'>
            <h1 className='agri-details-title'>{product.name}</h1>
            <div className='agri-details-card'>
                <img className='agri-details-image' src={product.image} alt={product.name} />
                <div className='agri-details-content'>
                    <p className='agri-details-price'><strong>₹ </strong> {product.price}</p>
                    <button className='btn btn-danger' onClick={handleAddToCart}>Add Cart</button>
                    <p className='agri-details-description'><strong>Description:</strong> {product.description}</p>
                    <p className='agri-details-details'><strong>Benifits:</strong> {product.details}</p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default AgricultureDetails;