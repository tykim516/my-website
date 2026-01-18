export default function Home() {
  return (
    <div className="flex w-full items-center justify-center bg-[#112129]">
      <main className="flex w-full min-h-screen flex-col items-center justify-center">
        {/* Title */}
        <h1 
          className="mb-20 tracking-[0.3em] text-[#BC7C5C] text-[45px]" 
          style={{ fontFamily: 'Willow' }}
        >
          EXPERIENCE & PROJECTS
        </h1>

        {/* Cards Container */}
        <div className="flex mt-[40px] w-full text-[#F0EAD6] pl-[40px] pr-[40px]">
          {/* Card 1 */}
          <div className="flex w-full nmin-h-[380px] flex-1 flex-col rounded-lg bg-[#0C1519] ml-[60px] mr-[40px] p-[20px] rounded-[10px]">
            <h2 className="text-center font-light tracking-wide mt-[5px]">
              Technical Product Manager
            </h2>
            <p className="text-center font-normal tracking-wide mt-[0px]">
              at Hewlett Packard Enterprise
            </p>
            <div className="h-[2px] w-full bg-[#BC7C5C]"></div>
            <div className="text-left">
              <p>
                Analyzed complex system telemetry and configuration data across compute, storage, and network layers to identify performance bottlenecks impacting latency, throughput, and reliability.
                Led a 12-person product organization and a 100+ member technical cohort, driving execution, product quality, and an entrepreneurial culture that consistently delivered high-impact software for nonprofit partners.
              </p>
              <p>
              </p>
            </div>
          </div>

          {/* Card 2 - Centered/Active */}
          <div className="flex min-h-[380px] flex-1 flex-col rounded-lg bg-[#0C1519] p-[20px] rounded-[10px]">
            <h2 className="mb-1 text-center font-semibold tracking-wide mt-[5px]">
              Product Manager
            </h2>
            <p className="text-center font-normal tracking-wide mt-[0px]">
              at Hack4Impact
            </p>
            <div className="h-[2px] w-full bg-[#BC7C5C]"></div>
            <div className="text-left">
              <p>
                Led a 12-person product organization and a 100+ member technical cohort, driving execution, product quality, and an entrepreneurial culture that consistently delivered high-impact software for nonprofit partners.
              </p>
              <p>
              </p>
            </div>
          </div>
          

          {/* Card 3 */}
          <div className="flex min-h-[380px] flex-1 flex-col rounded-lg bg-[#0C1519] ml-[40px] mr-[60px] p-[20px] rounded-[10px]">
            <h2 className="mb-1 text-center font-light tracking-wide mt-[5px]">
              Co-Founder
            </h2>
            <p className="w-full text-center font-normal tracking-wide mt-[0px]">
              of Devscribe
            </p>
            <div className="h-[2px] w-full bg-[#BC7C5C]"></div>
            <div className="text-left">
              <p>
                Designed core data pipelines for an API intelligence platform, transforming raw source code into structured representations for downstream analysis.
                Built automated workflows to extract, validate, and enrich metadata used in model inference and documentation generation.
              </p>
              <p>
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-[30px] mt-[40px]">
          <button 
            aria-label="Slide 1"
            className="h-[20px] w-[20px] rotate-45 bg-[#F0EAD6] border-[1px] border-[#BC7C5C]" 
          />
          <button 
            aria-label="Slide 2"
            className="h-[20px] w-[20px] rotate-45 bg-[#F0EAD6] border-[1px] border-[#BC7C5C]" 
          />
          <button 
            aria-label="Slide 3"
            className="h-[20px] w-[20px] rotate-45 bg-[#F0EAD6] border-[1px] border-[#BC7C5C]" 
          />
        </div>
      </main>
    </div>
  );
}