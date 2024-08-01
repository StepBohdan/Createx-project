import React from 'react'
import CreatexEgency from '../CreatexEgency/CreatexEgency'
import Services from '../Services/Services'
import "./Main.scss"
import Feedback from '../Feedback/Feedback'
import AskQuestions from '../AskQuestions/AskQuestions'
import SliderStudies from '../SliderStudies/SliderStudies'
import Benefits from '../Benefits/Benefits'
import PricingPlans from '../PricingPlans/PricingPlans'
import SliderClientsSay from '../SliderClientsSay/SliderClientsSay'
import LatestNews from '../LatestNews/LatestNews'


export default function Main() {
  return (
    <main>
      <CreatexEgency/>
      <Services/>
      <Feedback/>
      <AskQuestions/>
      <SliderStudies/>
      <Benefits/>
      <PricingPlans/>
      <SliderClientsSay/>
      <LatestNews/>
    </main>
  )
}
