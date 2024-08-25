import React from 'react'
import CreatexEgency from '../../components/CreatexEgency/CreatexEgency'
import Services from '../../components/Services/Services'
import Feedback from '../../components/Feedback/Feedback'
import AskQuestions from '../../components/AskQuestions/AskQuestions'
import SliderStudies from '../../components/SliderStudies/SliderStudies'
import Benefits from '../../components/Benefits/Benefits'
import PricingPlans from '../../components/PricingPlans/PricingPlans'
import SliderClientsSay from '../../components/SliderClientsSay/SliderClientsSay'
import LatestNews from '../../components/LatestNews/LatestNews'
import Rewards from '../../components/Rewards/Rewards'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import "./FirstPage.scss"
import Companies from '../../components/Companies/Companies'



export default function Main() {
  return (
    <main>
      <Header/>
      <Rewards/>
      <Companies/>
      <CreatexEgency/>
      <Services/>
      <Feedback/>
      <AskQuestions/>
      <SliderStudies/>
      <Benefits/>
      <PricingPlans/>
      <SliderClientsSay/>
      <LatestNews/>
      <Footer/>
    </main>
  )
}
