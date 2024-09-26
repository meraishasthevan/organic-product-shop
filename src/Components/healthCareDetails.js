import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/cartAction';
import './healthCareDetails.css'
import hel1 from './images/Uniaktiv Men 60 Capsule.png';
import hel2 from './images/Uniactiv Protein for Women(F).png';
import hel3 from './images/Uniaktiv Asta-Revit 60 capsule.png';
import hel4 from './images/Uniaktiv CMD 60 ml.png';
import hel5 from './images/Nutrimark heam puls 200ml.png';
import hel6 from './images/Nutrimark Aci puls 200ml.png';
import hel7 from './images/Nutrimark Immu puls 200ml.png';
import hel8 from './images/Nutrimark respi puls 200ml.png';

const allHealthCare=[
  {
      id:1,
      image:hel1,
      name:'UniAktiv Men Protein (F)',
      price:1000,
      description:'Makardhwaj | Trivang Ras | Salampanja | Safed Musli | Kali Musli | Shilajit | Makkhan | Kokilaksha | Arginine',
      details:'Helps increase stamina, vigour, vitality in body. Helps boost Testosterone production in body. Helps increase sperm count in body & Increases energy level in body. Helps to treat male infertility. Help in disorder like Oligospermia, Azospermia, Aspermia etc.',
  },
  {
      id:2,
      image:hel2,
      name:'UniAKtiv Protein For Women',
      price:1000,
      description:'Soya Protein Isolate | Whey Protein isolate | Pea Protein Isolate | Milk Protein | Vitamins | Minerals | White Curcumin | Lactoferrin | Coral Calcium | Colostrum | Omega 3 DHA | Shatavari Beet Root Oats | Vansh | Putrajeevak',
      details:'Provides all essential macro and micro nutrients like carbohydrate, protein, fats, vitamins & minerals in balanced quantities for nutrition. Helps to boosts immunity and WBC count thereby protects from various infections. Controls nutritional deficiency and life style disorders. Unique feminine tonic to balance out female hormones estrogen & progesterone.',
  },
  {
      id:3,
      image:hel3,
      name:'UniAktiv Asta-Revit 60 Cap',
      price:1800,
      description:'Guggul | Shallaki | Rasna | Hadjod Ashwagandha | Chopchini | Pippali | Zinc',
      details:'Promotes healthy joints, bones, cartilages and ligaments. Useful in reducing symptoms of Arthritis like pain and swelling. Stops the degeneration happening at the joint level.',
  },
  {
      id:4,
      image:hel4,
      name:'UniAktiv CMD 60 ml',
      price:1650,
      description:'Concentrated Mineral Drops form Great Salt Lake Utah, USA.',
      details:'CMD comprises of macro minerals (magnesium, calcium, potassium, chloride and sulfur) and over 40 micro minerals like chromium, iodine, manganese, selenium & zinc, making it a most complete mineral supplement. It has got multi functional properties, for improving our health by boosting body immune system, for motion of new blood cells, improving body metabolism etc. CMD is made up of naturally occurring, ionized minerals which are very important for fast absorption.',
  },
  {
      id:5,
      image:hel5,
      name:'Nutrimark Haem Plus 200ml',
      price:220,
      description:'Tapyadi Loha Navayas Loha | Swarnamakshik Bhasma | Dadim | Punarnava Mandur | Kasis Bhasma | Panchkol Punarnava | Draksha | Kutki',
      details:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in nutrients and antioxidants. Helps to manage cholesterol.',
  },
  {
      id:6,
      image:hel6,
      name:'Nutrimark ACI Plus 200 ml',
      price:220,
      description:'Mukta Shukti Bhasma | Kapardika Bhasam | Soothshekhar | Jaharmohra Pishti | Yashad Bhasam | Dugdhapashana | Shankh Bhasma',
      details:'Has wonderful Antacid, Anti-diarrheal & Antispasmodic activity. Work as Appetite stimulant and Digestive. Useful in Hyper Acidity, Gastritis & Ulcers.',
  },
  {
      id:7,
      image:hel7,
      name:'Nutrimark Immu Plus 200 ml',
      price:220,
      description:'Sariva Neem | Triphala | Trikatu | Kutki | Kalmegh | Tusli | Guduchi | Lemon | Pineapple | Wheatgrass | Papaya',
      details:'Helps to boost immunity. Effect on various diseases. Very unique hepato-protective action as well. Useful in recurrent cough and cold infections. in children. Useful in allergic condition due to seasonal changes.',
  },
  {
      id:8,
      image:hel8,
      name:'Nutrimark Respi Plus 200 ml',
      price:220,
      description:'Swaskuthar Ras | LakshmiVilas Ras | Balchaturbhadra Ras | Tulsi | Yashtimadhu Navsagar | Vasa, Bharangi | Kantakari',
      details:'Build immunity to fight infections. Protect one form various Respiratory infections. Very effective in all types of cough like dry and wet. Useful in running nose, common cold, sneezing etc.',
  },
]

const HealthCareDetails = () => {
  const { id } = useParams();

  const products = allHealthCare.find(item => item.id === parseInt(id));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
      dispatch(addToCart(products));
  };
  


  const product = allHealthCare.find(item => item.id === parseInt(id));

  return (
    <div className="product-details">
    {product ? (
      <>
        <Link to="/health-care"><button className='btn btn-primary btn-health'>Back to Products</button></Link>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p className="price">Price: ₹ {product.price}</p>
        <button className='btn btn-success' onClick={handleAddToCart}>Add Cart</button>
        <p className='hel-desc'> {product.description}</p>
        <p> {product.details}</p>
       
      </>
    ) : (
      <p className="not-found">Product not found</p>
    )}
  </div>
  
  );
}

export default HealthCareDetails;
