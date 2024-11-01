import React from 'react'
import Header from '../../components/Header/Header'
import Companies from "../../components/Companies/Companies"
import SliderClientsSay from "../../components/SliderClientsSay/SliderClientsSay"
import LatestNews from "../../components/LatestNews/LatestNews"
import Footer from "../../components/Footer/Footer"
import CaseStudies from '../../components/CaseStudies/CaseStudies'

export default function CaseStudiesPage() {
  return (
    <div>
      <Header/>
      <CaseStudies/>
      <Companies/>
      <SliderClientsSay/>
      <LatestNews/>
      <Footer/>
    </div>
  )
}
