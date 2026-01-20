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
        company: "at Hewlett Packard Enterprise",
        description: "Analyzed complex system telemetry and configuration data across compute, storage, and network layers to identify performance bottlenecks impacting latency, throughput, and reliability."
      },
      {
        title: "Product Manager",
        company: "at Hack4Impact",
        description: "Led a 12-person product organization and a 100+ member technical cohort, driving execution, product quality, and an entrepreneurial culture that consistently delivered high-impact software for nonprofit partners."
      },
      {
        title: "Co-Founder",
        company: "of Devscribe",
        description: "Designed core data pipelines for an API intelligence platform, transforming raw source code into structured representations for downstream analysis. Built automated workflows to extract, validate, and enrich metadata used in model inference and documentation generation."
      }
    ],
    // Slide 2
    [
      {
        title: "Product Manager",
        company: "at Productiv",
        description: "Developed scalable microservices architecture handling millions of daily transactions. Implemented CI/CD pipelines that reduced deployment time by 60%."
      },
      {
        title: "ML Researcher",
        company: "with Dr. Puneet Aggarwal",
        description: "Conducted research on machine learning applications in natural language processing. Published findings in peer-reviewed conferences."
      },
      {
        title: "Peer Leader",
        company: "at the Cal Poly Center for Leadership",
        description: "Teaching organizational and personal leadership to Cal Poly students through the Center for Leadership, an organization that facilitates events and workshops for students to practice leadership philosophies. Creating and implementing social media marketing strategies through LinkedIn and Instagram." 
      }
    ],
    // Slide 3
    [
      {
        title: "Data Analyst",
        company: "at Analytics Firm",
        description: "Analyzed large-scale datasets to derive actionable business insights. Created dashboards and reports for C-level executives."
      },
      {
        title: "Project Coordinator",
        company: "at Non-Profit Org",
        description: "Coordinated cross-functional teams to deliver community impact projects. Managed budgets and stakeholder relationships."
      },
      {
        title: "Consultant",
        company: "at Advisory Group",
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
          width={100} // Specify width
          height={50}
        />
        <h1 
          className="mb-20 tracking-[0.3em] text-[#BC7C5C] text-[45px]" 
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
                style={{ fontFamily: 'Jost' }}
              >
              {section.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="flex min-h-[380px] flex-1 flex-col rounded-[10px] bg-[#0C1519] p-[20px] ml-[30px] mr-[30px]"
                >
                  <h2 className="text-center tracking-wide mt-[5px] font-light">
                      {card.title}
                    </h2>
                    <p className="text-center tracking-wide mt-[0px]">
                      {card.company}
                    </p>
                    <div className="h-[2px] w-full bg-[#BC7C5C]"></div>
                    <div className="text-left">
                      <p>{card.description}</p>
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