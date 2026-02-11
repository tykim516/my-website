"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [H1fontSize, setH1FontSize] = useState(48); // Default for SSR

  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth >= 1024) {
        setH1FontSize(48);
      } else if (window.innerWidth >= 768) {
        setH1FontSize(48);
      } else {
        setH1FontSize(24);
      }
    };

    // Set initial size
    updateFontSize();

    // Update on resize
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  const cardSections = [
    // Slide 1
    [
      {
        title: "Technical Product Manager",
        subtitle: "at Hewlett Packard Enterprise",
        description: `
➢ Building marketing material for block, object, and file storage integrations with Ansible and Kubernetes
        
➢ Improving user experience on the storage product UI and via the API

➢ Developing new systems to improve operational efficiency for software support contract renewals

➢ Designing business SLAs to manage risk while driving consistent revenue through product refreshes 

➢ Establishing object storage product for AI/ML workloads and applications
`.trimStart()
      },
      {
        title: "Product Manager and Director",
        subtitle: "at Hack4Impact, Cal Poly Chapter",
        description: `
➢ Led a team of 12 PMs, among a 100+ member club, to build tools for local nonprofits

➢ Some of our projects:
        
Event and volunteer management portal for the SLO Beaver Brigade

Marketing platform integrations for the Paso Robles Food Co Op

Analytics and visualization dashboard for the Surfrider Foundation
`.trimStart()
        },
      {
        title: "Co-Founder",
        subtitle: "of Devscribe",
        description: `
➢ Designed the core architecture of an AI-powered API intelligence platform combining static code analysis, data pipelines, and multi-model orchestration to generate high-fidelity API documentation

➢ Built automated workflows to extract, validate, and enrich metadata used in model inference and documentation generation

➢ Created the developer facing UI and experience to streamline adoption of documentation workflows across different API frameworks
`.trimStart()
      }
    ],
    // Slide 2
    [
      {
        title: "Product Manager",
        subtitle: "at Productiv",
        description: `
➢ Delivered ROI and technical feasibility analysis across 30+ ML and OCR platforms to automate manual workflows, reduce operational overhead, and improve data accuracy at scale

➢ Launched platform features adopted by 160+ businesses, scaling usage from 500 to 50,000 users and improving engagement

➢ Developed comprehensive PRDs, roadmaps, user stories, and prototypes, facilitating the successful implementation of key product features and aligning team efforts with product goals
`.trimStart()
      },
      {
        title: "ML Researcher",
        subtitle: "with Dr. Puneet Aggarwal",
        description: `
➢ Engineered end-to-end systems that integrated data storage, model inference, feedback loops, and evaluation metrics to solve long text decision tree and logic problems

➢ Designed and built a framework to solve complex decision analysis problems through LLM orchestration using LangChain to enhance adacemic resources to improve the learning of engineering students
`.trimStart()
      },
      {
        title: "Peer Leader",
        subtitle: "at the Cal Poly Center for Leadership",
        description: `
➢ Created marketing strategies and lesson materials for the Center for Leadership, an organization that facilitates events and workshops for Cal Poly Students to practice leadership philosophies

➢ Facilitated organizational and personal leadership development for 100+ Cal Poly students through weekly workshops, enhancing skills in communication and entrepreneurship
`.trimStart()
      }
    ],
    // Slide 3
    [
      {
        title: "National Park Service",
        subtitle: "at Yellowstone National Park",
        description: `
➢ Worked on trail restoration, erosion control, and maintenance projects throughout Yellowtone National Park

➢ Collected visitation data from various park regions to optimize resource allocation
`.trimStart()
      },
      {
        title: "Predicting MLB Batting Outcomes",
        subtitle: "Personal Project",
        description: `
➢ Trained various models to accurately predict the outcome of MLB at-bat scenarios using data provided by Baseball Reference

➢ Achieved and accuracy score of 95% on home run predictions based on park dimensions, pitch type/angle/velocity/location against batter tendenices
`.trimStart()
      },
      {
        title: "Analyzing PGA Tour Statistics",
        subtitle: "Personal Project",
        description: `
➢ Developed and launched a machine learning model to analyze the statistics of 200 players over 5 years

➢ Determined a combination of PGA player statistics that are highly correlated to future top 10 tournament finishes
`.trimStart()
      }
    ]
  ];

  return (
    <div className="flex h-screen items-center justify-center bg-[#112129] border-double border-[4px] border-[#BC7C5C] box-border">
      <main className="flex w-full h-screen flex-col items-center justify-center">
        {/* Title */}
        <Image
          src="home-logo.svg"
          alt="Logo"
          width={140} // Specify width
          height={70}
          className="mt-[40px]"
        />
        <h1 
          className="mt-[20px] mb-20 tracking-[0.3em] text-[#BC7C5C]" 
          style={{ fontFamily: 'Willow', fontSize: `${H1fontSize}px` }}
        >
          EXPERIENCE & PROJECTS
        </h1>

        {/* Cards Container */}
        <div className="relative mt-[40px] w-full max-w-[1400px] overflow-hidden">
          <div 
            className="flex transition-transform duration ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cardSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="flex min-w-full text-[#F0EAD6]"
                style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: 16 }}
              >
              {section.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="flex min-h-[380px] flex-1 flex-col bg-[#0C1519] p-[20px] ml-[30px] mr-[30px]"
                >
                  <div 
                    className="text-center tracking-wide mt-[5px]"
                    style={{ fontFamily: 'Jost', fontWeight: 600, fontSize: 20 }}
                  >
                    {card.title}
                  </div>
                  <p className="text-center tracking-wide mt-[0px]">
                    {card.subtitle}
                  </p>
                  <div className="h-[2px] w-full bg-[#BC7C5C]"></div>
                  <div className="text-left">
                    <p className="whitespace-pre-wrap">{card.description}</p>
                  </div>
                </div>
              ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-[30px] mt-[40px] mb-[60px]">
          {[0,1,2].map((index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-[20px] w-[20px] rotate-45 border-[2.5px] border-[#BC7C5C] transition-colors cursor-pointer ${
                currentSlide === index ? 'bg-[#BC7C5C]' : 'bg-[#112129]'
              } hover:bg-[#BC7C5C]`}
            />
          ))}  
        </div>
      </main>
    </div>
  );
}