import React from 'react';
import Header from '../../components/Header/Header';
import OrSale from '../../components/CaseStudiesContent/orSale/orSale';
import SliderClientsSay from '../../components/SliderClientsSay/SliderClientsSay';
import SliderStudies from '../../components/SliderStudies/SliderStudies';
import Footer from '../../components/Footer/Footer';
import Feedback from '../../components/Feedback/Feedback';

export default function OrSalePage() {  
  return (
    <div>
      <Header/>
      <OrSale/>
      <Feedback/> 
      <SliderClientsSay/>
      <SliderStudies/>
      <Footer/>
    </div>
  );
}
