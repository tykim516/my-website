"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

Analytics and visualization dashboard for the Surfrider Foundation
    
Marketing and referrals tool for the Paso Robles Food Co Op

Information logging application for the Central Coast Heritage Tree Foundation
`.trimStart()
        },
      {
        title: "Co-Founder",
        subtitle: "of Devscribe",
        description: "Designed core data pipelines for an API intelligence platform, transforming raw source code into structured representations for downstream analysis. Built automated workflows to extract, validate, and enrich metadata used in model inference and documentation generation."
      }
    ],
    // Slide 2
    [
      {
        title: "Product Manager",
        subtitle: "at Productiv",
        description: "Developed scalable microservices architecture handling millions of daily transactions. Implemented CI/CD pipelines that reduced deployment time by 60%."
      },
      {
        title: "ML Researcher",
        subtitle: "with Dr. Puneet Aggarwal",
        description: "Conducted research on machine learning applications in natural language processing. Published findings in peer-reviewed conferences."
      },
      {
        title: "Peer Leader",
        subtitle: "at the Cal Poly Center for Leadership",
        description: "Teaching organizational and personal leadership to Cal Poly students through the Center for Leadership, an organization that facilitates events and workshops for students to practice leadership philosophies. Creating and implementing social media marketing strategies through LinkedIn and Instagram." 
      }
    ],
    // Slide 3
    [
      {
        title: "National Park Service Conservation Corps",
        subtitle: "at Yellowstone National Park",
        description: ""
      },
      {
        title: "Predicting MLB At-Bat Outcomes",
        subtitle: "Personal Project",
        description: ""
      },
      {
        title: "Analyzing PGA Tour Statistics",
        subtitle: "Personal Project",
        description: "Provided strategic guidance to clients on digital transformation initiatives. Delivered workshops and training programs."
      }
    ]
  ];

  return (
    <div className="flex h-screen items-center justify-center bg-[#112129] border-double border-[8px] border-[#BC7C5C] box-border">
      <main className="flex w-full h-screen flex-col items-center justify-center">
        {/* Title */}
        <Image
          src="home-logo.svg"
          alt="Logo"
          width={180} // Specify width
          height={90}
        />
        <h1 
          className="mt-[20px] mb-20 tracking-[0.3em] text-[#BC7C5C] text-[45px]" 
          style={{ fontFamily: 'Willow' }}
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
                  className="flex min-h-[380px] flex-1 flex-col rounded-[10px] bg-[#0C1519] p-[20px] ml-[30px] mr-[30px]"
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
        <div className="flex gap-[30px] mt-[40px]">
          {[0,1,2].map((index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-[20px] w-[20px] rotate-45 border-[2.5px] border-[#BC7C5C] transition-colors ${
                currentSlide === index ? 'bg-[#BC7C5C]' : 'bg-[#112129]'
              } hover:bg-[#BC7C5C]`}
            />
          ))}  
        </div>
      </main>
    </div>
  );
}