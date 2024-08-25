import React from 'react'
import Header from '../../components/Header/Header'
import Companies from '../../components/Companies/Companies'
import SuccessfulSeo from '../../components/SuccessfulSeo/SuccessfulSeo'
import SeoSerives from '../../components/SeoServices/SeoSerives'
import SeoAnalysis from '../../components/SeoAnalysis/SeoAnalysis'
import Steps from '../../components/Steps/Steps'
import PricingPlans from "../../components/PricingPlans/PricingPlans"
import SliderStudies from "../../components/SliderStudies/SliderStudies"
import Services from "../../components/Services/Services"
import Footer from "../../components/Footer/Footer"

export default function ThirdPage() {
  return (
    <div>
      <Header/>
      <Companies/>
      <SuccessfulSeo/>
      <SeoSerives/>
      <SeoAnalysis/>
      <Steps/>
      <PricingPlans/>
      <SliderStudies/>
      <Services/>
      <Footer/>
    </div>
  )
}
