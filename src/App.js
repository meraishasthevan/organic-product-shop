import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import './App.css';
import Navbar from './Components/Navbar/navBar';
import Banner from './Components/Banner/banner';
import CardComponent from './Components/product/product';
import Footer from './Components/Footer/footer';
import Promotional from './Components/promotional/promotional';
import Acheivers from './Components/ourAcheivers/acheivers';
import VeterinaryPage from './Components/VeterinaryPage'; 
import VeterinaryDetails from './Components/VeterinaryDetails';
import HealthCare from './Components/health-care';
import HealthCareDetails from './Components/healthCareDetails';
import PersonalCare from './Components/personal-care';
import PersonalCareDetails from './Components/personalCare-Details';
import Agriculture from './Components/agriculture';
import AgricultureDetails from './Components/agricultureDetails';
import Grocery from './Components/grocery';
import GroceryDetails from './Components/groceryDetails';
import Cart from './Components/Cart';

function App() {
  const location = useLocation();
  
  return (
    <div className="">
      <Navbar />
     
      <Routes>
        <Route path="/" element={
          <>
           <Banner />
            <CardComponent />
            <Promotional />
            <Acheivers />
          </>
        } />
  
        <Route path="/veterinary" element={<VeterinaryPage />} />
        <Route path="/veterinary/:id" element={<VeterinaryDetails />} />
        <Route path="/health-care" element={<HealthCare/>} />
        <Route path="/health-care/:id" element={<HealthCareDetails />} />
        <Route path='personal-care' element={<PersonalCare/>} />
        <Route path='/Details/:id' element={< PersonalCareDetails/>} />
        <Route path='/agriculture' element={<Agriculture/>} />
        <Route path='/agriDetails/:id' element={<AgricultureDetails />} />
        <Route path='/grocery' element={<Grocery/>} />
        <Route path='/groceryDetails/:id' element={<GroceryDetails/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      {location.pathname !== '/cart' && <Footer />}
    </div>
  );
}

export default App;
