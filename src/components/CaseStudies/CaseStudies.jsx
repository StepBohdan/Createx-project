import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NationalLogo from "./CaseStudiesImages/nationalLogo.svg?react";
import DelMarLogo from "./CaseStudiesImages/delMarLogo.svg?react";
import OrSaleLogo from "./CaseStudiesImages/orSaleLogo.svg?react";
import SunSetLogo from "./CaseStudiesImages/sunSetLogo.svg?react";
import HigherFitLogo from "./CaseStudiesImages/higherFitLogo.svg?react";
import SentinalLogo from "./CaseStudiesImages/sentinalLogo.svg?react";
import Convert from "./CaseStudiesImages/Convert.svg?react";
import Arrow from "./CaseStudiesImages/arrow.svg?react";
import "./CaseStudies.scss";

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [duplicatesAdded, setDuplicatesAdded] = useState(0);
  const [caseStudies, setCaseStudies] = useState([
  
    {
      logo: <NationalLogo />,
      title: "Charity organisation",
      background: "national",
      category: "Social Media",
      stats: [
        {
          icon: <img src="/src/components/CaseStudies/CaseStudiesImages/engagement.png" alt="Engagement Icon" />,
          value: "90%",
          label: "Engagement",
        },
        {
          icon: <img src="/src/components/CaseStudies/CaseStudiesImages/roi.png" alt="Deliverability Icon" />,
          value: "100%",
          label: "Deliverability",
        },
      ],
      description: "Createx SEO Agency helped JNational Inc. increase their MQL to SQL conversion rate by 300%.",
      viewCaseLink: "/case-studies/or-sale",
    },
    {
      logo: <DelMarLogo />,
      title: "Oil and natural resources",
      background: "delmar",
      category: "SEO",
      stats: [
        {
          icon: <img src="/src/components/CaseStudies/CaseStudiesImages/growth.png" alt="Growth Icon" />,
          value: "200%",
          label: "Growth in sales",
        },
        {
          value: "1,400",
          label: "Target investors",
        },
      ],
      description: "With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate.",
      viewCaseLink: "/case-studies/or-sale",
    },
    {
      logo: <OrSaleLogo />,
      title: "Electric company",
      background: "orsale",
      category: "Research",
      stats: [
        {
          icon: <img src="/src/components/CaseStudies/CaseStudiesImages/openRate.png" alt="Open Rate Icon" />,
          value: "80%",
          label: "Open Rate",
        },
        {
          value: "1,840",
          label: "Target investors",
        },
      ],
      description: "With an advanced A/B testing and usability analysis, Createx SEO Agency helps Lovato see a 200% increase in conversion rate.",
      viewCaseLink: "/case-studies/or-sale",
    },
    {
      logo: <SunSetLogo />,
      title: "Personal care",
      background: "sunset",
      category: "Content & PR",
      stats: [
        {
          icon: <img src="/src/components/CaseStudies/CaseStudiesImages/openRate.png" alt="Open Rate Icon" />,
          value: "70%",
          label: "Open Rate",
        },
        {
          icon: <img src="/src/components/CaseStudies/CaseStudiesImages/growth2.png" alt="Growth Icon" />,
          value: "200%",
          label: "Growth in sales",
        },
      ],
      description: "We helped Sunset company break through a noisy industry and better understand their buyer’s journey.",
      viewCaseLink: "/case-studies/or-sale",
    },
    {
      logo: <HigherFitLogo />,
      title: "Departments stores",
      background: "higherfit",
      category: "Payed Traffic",
      stats: [
        {
          icon: <img src="/src/components/CaseStudies/CaseStudiesImages/increaseInLeads.png" alt="Increase in Leads Icon" />,
          value: "70%",
          label: "Increase in leads",
        },
        {
          value: "190+",
          label: "Prospects",
        },
      ],
      description: "We helped Dove company break through a noisy industry and better understand their buyer’s journey.",
      viewCaseLink: "/case-studies/or-sale",
    },
    {
      logo: <SentinalLogo />,
      title: "Electric cars, solar & clean energy",
      background: "sentinal",
      category: "Social Media",
      stats: [
        {
          icon: <img src="/src/components/CaseStudies/CaseStudiesImages/roi.png" alt="ROI Icon" />,
          value: "200%",
          label: "ROI",
        },
        {
          value: "$12,000",
          label: "Increase per month",
        },
      ],
      description: "We helped Sentinal company break through a noisy industry and better understand their buyer’s journey.",
      viewCaseLink: "/case-studies/or-sale",
    },
  ]);

  const addDuplicates = () => {
    if (duplicatesAdded < 2) { 
      const duplicates = [
        {
          logo: <NationalLogo />,
          title: "Charity organisation",
          background: "national",
          category: "Social Media",
          stats: [
            {
              icon: <img src="/src/components/CaseStudies/CaseStudiesImages/engagement.png" alt="Engagement Icon" />,
              value: "90%",
              label: "Engagement",
            },
            {
              icon: <img src="/src/components/CaseStudies/CaseStudiesImages/roi.png" alt="Deliverability Icon" />,
              value: "100%",
              label: "Deliverability",
            },
          ],
          description: "Createx SEO Agency helped JNational Inc. increase their MQL to SQL conversion rate by 300%.",
          viewCaseLink: "/case-studies/or-sale",
        },
        {
          logo: <DelMarLogo />,
          title: "Oil and natural resources",
          background: "delmar",
          category: "SEO",
          stats: [
            {
              icon: <img src="/src/components/CaseStudies/CaseStudiesImages/growth.png" alt="Growth Icon" />,
              value: "200%",
              label: "Growth in sales",
            },
            {
              value: "1,400",
              label: "Target investors",
            },
          ],
          description: "With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate.",
          viewCaseLink: "/case-studies/or-sale",
        },
        {
          logo: <OrSaleLogo />,
          title: "Electric company",
          background: "orsale",
          category: "Research",
          stats: [
            {
              icon: <img src="/src/components/CaseStudies/CaseStudiesImages/openRate.png" alt="Open Rate Icon" />,
              value: "80%",
              label: "Open Rate",
            },
            {
              value: "1,840",
              label: "Target investors",
            },
          ],
          description: "With an advanced A/B testing and usability analysis, Createx SEO Agency helps Lovato see a 200% increase in conversion rate.",
          viewCaseLink: "/case-studies/or-sale",
        },
        {
          logo: <SunSetLogo />,
          title: "Personal care",
          background: "sunset",
          category: "Content & PR",
          stats: [
            {
              icon: <img src="/src/components/CaseStudies/CaseStudiesImages/openRate.png" alt="Open Rate Icon" />,
              value: "70%",
              label: "Open Rate",
            },
            {
              icon: <img src="/src/components/CaseStudies/CaseStudiesImages/growth2.png" alt="Growth Icon" />,
              value: "200%",
              label: "Growth in sales",
            },
          ],
          description: "We helped Sunset company break through a noisy industry and better understand their buyer’s journey.",
          viewCaseLink: "/case-studies/or-sale",
        },
        {
          logo: <HigherFitLogo />,
          title: "Departments stores",
          background: "higherfit",
          category: "Payed Traffic",
          stats: [
            {
              icon: <img src="/src/components/CaseStudies/CaseStudiesImages/increaseInLeads.png" alt="Increase in Leads Icon" />,
              value: "70%",
              label: "Increase in leads",
            },
            {
              value: "190+",
              label: "Prospects",
            },
          ],
          description: "We helped Dove company break through a noisy industry and better understand their buyer’s journey.",
          viewCaseLink: "/case-studies/or-sale",
        },
        {
          logo: <SentinalLogo />,
          title: "Electric cars, solar & clean energy",
          background: "sentinal",
          category: "Social Media",
          stats: [
            {
              icon: <img src="/src/components/CaseStudies/CaseStudiesImages/roi.png" alt="ROI Icon" />,
              value: "200%",
              label: "ROI",
            },
            {
              value: "$12,000",
              label: "Increase per month",
            },
          ],
          description: "We helped Sentinal company break through a noisy industry and better understand their buyer’s journey.",
          viewCaseLink: "/case-studies/or-sale",
        },
      ];
      setCaseStudies(prevCaseStudies => [...prevCaseStudies, ...duplicates]);
      setDuplicatesAdded(prevCount => prevCount + 1);
    }
  };

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(caseStudy => caseStudy.category === selectedCategory);

  const visibleCaseStudies = filteredCaseStudies.slice(0, visibleCount);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6); 
  };

  const handleLoadMore = (event) => {
    event.preventDefault();
    setVisibleCount(prevCount => prevCount + 2);
    addDuplicates(); 
  };

  return (
    <div className='case-studies'>
      <ul className="case-studies-navigator-list">
        <li><a href='#' className={`case-studies-navigator-list-item ${selectedCategory === 'All' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleCategoryChange('All'); }}>All case studies</a></li>
        <li><a href='#' className={`case-studies-navigator-list-item ${selectedCategory === 'Social Media' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleCategoryChange('Social Media'); }}>Social Media</a></li>
        <li><a href='#' className={`case-studies-navigator-list-item ${selectedCategory === 'SEO' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleCategoryChange('SEO'); }}>SEO</a></li>
        <li><a href='#' className={`case-studies-navigator-list-item ${selectedCategory === 'Research' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleCategoryChange('Research'); }}>Research</a></li>
        <li><a href='#' className={`case-studies-navigator-list-item ${selectedCategory === 'Content & PR' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleCategoryChange('Content & PR'); }}>Content & PR</a></li>
        <li><a href='#' className={`case-studies-navigator-list-item ${selectedCategory === 'Payed Traffic' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleCategoryChange('Payed Traffic'); }}>Payed Traffic</a></li>
      </ul>
      <ul className="case-studies-cards-list">
        {visibleCaseStudies.map((caseStudy, index) => (
          <li className="case-studies-card" key={index}>
            <div className={`card-logo ${caseStudy.background}`}>
              <div>{caseStudy.logo}</div>
              {caseStudy.title}
            </div>
            <div className="card-header-wrapper">
              {caseStudy.stats && caseStudy.stats.length > 0 ? (
                caseStudy.stats.map((stat, i) => (
                  <div className="card-header-info" key={i}>
                    <div className="card-header-ico">{stat.icon}</div>
                    <div className="card-header-text">
                      <h2 className="card-header-title">{stat.value}</h2>
                      <p className="card-header-subtitle">{stat.label}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div>No stats available</div>
              )}
            </div>
            <div className="line"></div>
            <h1 className="card-title">{caseStudy.description}</h1>
            <div className='card-link-wrap'><Link className='card-link'  to={caseStudy?.viewCaseLink || '#'}>View case <Arrow /></Link></div>
          </li>
        ))}
      </ul>
      <a href="#" className="view-more" onClick={handleLoadMore}><Convert />Load More</a>
    </div>
  );
}
