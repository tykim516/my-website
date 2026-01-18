export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#112129]">
      <main className="flex min-h-screen flex-col items-center justify-center">
        {/* Title */}
        <h1 
          className="mb-20 text-2xl tracking-[0.3em] text-[#c9a772] md:text-6xl" 
          style={{ fontFamily: 'Willow' }}
        >
          EXPERIENCE & PROJECTS
        </h1>

        {/* Cards Container */}
        <div className="flex mt-[40px] text-[#F0EAD6]">
          {/* Card 1 */}
          <div className="flex min-h-[380px] flex-1 flex-col rounded-lg bg-[#0C1519] ml-[20px] mr-[60] p-[40px]">
            <h2 className="mb-1 text-center font-light tracking-wide">
              Technical Product Manager
            </h2>
            <p className="text-center font-light tracking-wide text-white/90">
              Hewlett Packard Enterprise
            </p>
          </div>

          {/* Card 2 - Centered/Active */}
          <div className="flex min-h-[380px] flex-1 flex-col rounded-lg bg-[#0C1519] p-[40px]">
            <h2 className="mb-1 text-center font-semibold tracking-wide text-white">
              Technical Product Manager
            </h2>
            <p className="text-center font-normal tracking-wide text-white">
              Hewlett Packard enterprise
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex min-h-[380px] flex-1 flex-col rounded-lg bg-[#0C1519] ml-[60px] mr-[20] p-[40px]">
            <h2 className="mb-1 text-center font-light tracking-wide text-white/90">
              Technical Product Manager
            </h2>
            <p className="text-center font-light tracking-wide text-white/90">
              Hewlett Packard Enterprise
            </p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-5">
          <button 
            aria-label="Slide 1"
            className="h-4 w-4 rotate-45 bg-[#c9a772] transition-colors hover:opacity-80" 
          />
          <button 
            aria-label="Slide 2"
            className="h-4 w-4 rotate-45 bg-white/40 transition-colors hover:bg-white/60" 
          />
          <button 
            aria-label="Slide 3"
            className="h-4 w-4 rotate-45 bg-white/40 transition-colors hover:bg-white/60" 
          />
        </div>
      </main>
    </div>
  );
}