import React from 'react'
import Header from '../../components/Header/Header'
import MainServices from "../../components/MainServices/MainServices"
import FeedBack from "../../components/Feedback/Feedback"
import SliderStudies from "../../components/SliderStudies/SliderStudies"
import Companies from "../../components/Companies/Companies"
import LatestNews from '../../components/LatestNews/LatestNews'
import Footer from '../../components/Footer/Footer'

export default function SecondPage() {
  return (
    <div>
      <Header/>
      <MainServices/>
      <FeedBack/>
      <SliderStudies/>
      <Companies/>
      <LatestNews/>
      <Footer/>
    </div>
  )
}
