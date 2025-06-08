import React, { useRef, useState } from 'react'
import { Carousel } from 'flowbite-react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

function App() {
  // Combine all events into one array with a year for sorting
  const allEvents = [
    { date: '8 June 2024', iso: '2024-06-08', event: 'Parklife Festival (VIP Stage)', location: 'Manchester', bold: true },
    { date: '13 July 2024', iso: '2024-07-13', event: 'TRNSMT Festival (FourLoko Crate)', location: 'Glasgow', bold: false },
    { date: '24 August 2024', iso: '2024-08-24', event: 'Leeds Festival (FourLoko Crate)', location: 'Leeds', bold: false },
    { date: '16 November 2024', iso: '2024-11-16', event: "Burning Man 'Decompression' (The Cause, 1k+ cap)", location: 'London', bold: true },
    { date: '25 May 2024', iso: '2024-05-25', event: "Spilt Milk 'Queer Feminist Art Afterparty' (VFD)", location: 'London', bold: false },
    { date: '1 November 2024', iso: '2024-11-01', event: "TUSH 'Inclusive Rave' (Jaguar Shoes)", location: 'London', bold: false },
    { date: '25 October 2024', iso: '2024-10-25', event: "Looney Grooves 'UKGirls: Hallowqueen' (XLR)", location: 'Manchester', bold: false },
    { date: '18 January 2025', iso: '2025-01-18', event: "Faded Society 'The Reset' (Club Makossa)", location: 'London', bold: false },
    { date: '22 January 2025', iso: '2025-01-22', event: 'Mode Radio Takeover', location: 'London', bold: false },
    { date: 'January - March 2025', iso: '2025-03-28', event: "Gordon Ramsay's Lucky Cat", location: 'Manchester & Mayfair', bold: false },
    { date: '19 February 2025', iso: '2025-02-19', event: 'BMC Radio Takeover', location: 'London', bold: false },
    { date: '21 February 2025', iso: '2025-02-21', event: "TUSH 'Inclusive Rave' (Cu)", location: 'London', bold: false },
    { date: '7 March 2025', iso: '2025-03-07', event: 'Mischief (Metropolis)', location: 'London', bold: false },
    { date: '15 March 2025', iso: '2025-03-15', event: 'TG March Ball (Electrowerkz - 1.5K cap)', location: 'London', bold: true },
    { date: '8 April 2025', iso: '2025-04-08', event: 'Lollapalooza', location: 'Osaka, Japan', bold: false },
    { date: '10 April 2025', iso: '2025-04-10', event: 'FT & Blueflower (Club Circus)', location: 'Tokyo, Japan', bold: true },
    { date: '18 April 2025', iso: '2025-04-18', event: 'Mischief (Metropolis)', location: 'London', bold: false },
    { date: '20 April 2025', iso: '2025-04-20', event: "Resurge 'No Drama' (the DBA)", location: 'Manchester', bold: false },
    { date: '26 April 2025', iso: '2025-04-26', event: 'Cyberdog (DJ residency)', location: 'London', bold: false },
    { date: '17-25 May 2025', iso: '2025-05-25', event: "Ibiza.PlayAbout 'Annual Music Festival' (Ibiza Jet)", location: 'Ibiza', bold: true },
    { date: '30 May 2025', iso: '2025-05-30', event: "TUSH 'Inclusive Rave' (Night Tales)", location: 'London', bold: false },
    { date: '7 June 2025', iso: '2025-06-07', event: 'Secret Valley Festival', location: 'Wales', bold: true },
    { date: '23 August 2025', iso: '2025-08-23', event: 'Cyberdog (DJ residency)', location: 'London', bold: false },
    { date: '7 September 2025', iso: '2025-09-07', event: 'Cyberdog (DJ residency)', location: 'London', bold: false },
  ];

  // Sort newest (future) events first using the ISO date
  const sortedEvents = [...allEvents].sort((a, b) => new Date(b.iso).getTime() - new Date(a.iso).getTime());

  // Show only the most recent 10 by default
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? sortedEvents : sortedEvents.slice(0, 10);

  // Refs for smooth scroll
  const bioRef = useRef(null)
  const eventsRef = useRef(null)
  const feedbackRef = useRef(null)
  const galleryRef = useRef(null)
  const mapRef = useRef(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Gallery images with date and location fields
  const galleryImages = [
    { filename: 'chastingtigers-0115.jpg', date: '15 March 2025', location: 'Electrowerkz, London' },
    { filename: 'chastingtigers-8511.jpg', date: '15 March 2025', location: 'Electrowerkz, London' },
    { filename: 'DSC01427.jpg', date: '20 April 2025', location: 'The DBA, Manchester' },
    { filename: 'DSC01286.jpg', date: '20 April 2025', location: 'The DBA, Manchester' },
    { filename: 'DSC01346.jpg', date: '20 April 2025', location: 'The DBA, Manchester' },
    { filename: 'DSC01443.jpg', date: '20 April 2025', location: 'The DBA, Manchester' },
    { filename: 'DSC01288.jpg', date: '20 April 2025', location: 'The DBA, Manchester' },
    { filename: 'Keepers club 22nd LR-14.JPG', date: '22nd March 2025', location: 'Keeper, Ibiza' },
    { filename: 'Keepers club 22nd LR-16.JPG', date: '22nd March 2025', location: 'Keeper, Ibiza' },
    { filename: 'Kassita - Zerdazi (TUSH at Night Tales) 30-05-25 - 00004.jpg', date: '30 May 2025', location: 'Night Tales, London' },
    { filename: 'Kassita Leeds Festival 2024.jpeg.jpg', date: '24 August 2024', location: 'Leeds Festival' },
  ];

  // Helper to find event info for a gallery image (by filename)
  function getEventInfoForImage(filename: string) {
    // Try to find an event whose event name or location is in the filename (case-insensitive)
    const lower = filename.toLowerCase();
    return allEvents.find(e =>
      lower.includes(e.location.toLowerCase()) ||
      lower.includes(e.event.toLowerCase().split('(')[0].trim().toLowerCase())
    );
  }

  // England, Scotland, and Wales are all part of GBR in most world topojsons
  const highlightedCountries = ["GBR", "ESP", "JPN"]; // United Kingdom, Spain, Japan
  const geoUrl = "world.json";

  function NeonScratchMap() {
    return (
      <div className="flex flex-col items-center block-scratch-map">
        <div className="flex justify-center w-full max-w-3xl">
          <ComposableMap
            projectionConfig={{ scale: 140 }}
            style={{ width: "100%", height: "auto", filter: "drop-shadow(0 0 0px #7ceffa)" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = highlightedCountries.includes(geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? "#fa5da2" : "none"}
                      stroke="#00fff7"
                      strokeWidth={isHighlighted ? 1 : 0.4}
                      style={{
                        default: {
                          filter: isHighlighted
                            ? "drop-shadow(0 0 3px #00fff7)"
                            : "drop-shadow(0 0 1.5px #00fff7)",
                          transition: "all 0.3s",
                          pointerEvents: "none",
                        }
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-primary">
      {/* Top Bar with Logo, Title, and Social Icons */}
      <div className="top-bar">
        <div className="top-bar-left">
          <img src="header.gif" alt="Kassita Logo" className="top-bar-logo" />
          <span className="top-bar-title">KASSITA</span>
        </div>
        <div className="top-bar-right">
          <a href="mailto:kassitasound@gmail.com" className="text-4xl top-bar-icon" title="Email" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/sita_sound/" className="text-4xl top-bar-icon" title="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://soundcloud.com/sita_sound" className="text-4xl top-bar-icon" title="SoundCloud" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-soundcloud"></i>
          </a>
          <a href="https://ra.co/dj/kassita" className="text-4xl top-bar-icon" title="Resident Advisor" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-music"></i>
          </a>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mb-10 mt-60 md:mt-36">
        <button className="nav-btn nav-btn-pink text-kassita" onClick={() => scrollToSection(bioRef)}>Bio</button>
        <button className="nav-btn nav-btn-pink text-kassita" onClick={() => scrollToSection(galleryRef)}>Gallery</button>
        <button className="nav-btn nav-btn-purple text-kassita" onClick={() => scrollToSection(eventsRef)}>Shows & Events</button>
        <button className="nav-btn nav-btn-teal text-kassita" onClick={() => scrollToSection(feedbackRef)}>Promoter Feedback</button>
        <button className="nav-btn nav-btn-blue text-kassita" onClick={() => scrollToSection(mapRef)}>Scratch Map</button>
      </div>

      {/* Content */}
      <div className="max-w-4xl px-4 pb-12 mx-auto">
        {/* Bio Section */}
        <div ref={bioRef} id="bio" className="block-bio">
          <h2 className="mb-4 text-2xl font-bold text-kassita header-bio">Bio</h2>
          <p className="mb-4">
            From living in Manchester, Bristol and then London over the past 10 years, experiencing the nightlife in each city, Kassita absorbed a plethora of culture and sound that gives her mixes a unique edge that keeps you coming back for more. Her expert track selection takes you on a journey through house/tech house, techno, breaks and bass genres, seeking to explore the different perspectives of electronic music to introduce the audience to something new, while carefully tailoring her performances to the venue and crowd.
          </p>
          <p>
            Kassita won a mix competition to <span className="font-semibold">DJ at Parklife Festival</span> and has since gone on to perform at two other UK festivals as well as perform at multiple events across the UK, including at iconic venue 'The Cause' in London. She has founded her own electronic music event called "TUSH" (@tush_space) which is an inclusive rave aimed at fostering a playful, respectful space that encourages mutual appreciation and open mindedness within the sanctuary of good music. Kassita also has <span className="font-semibold">radio residencies at <a href="https://subtleradio.com/" className="link-bio link-underline" target="_blank" rel="noopener noreferrer">Subtle</a></span> (Hackney) and <a href="https://mode.london/" className="font-semibold link-bio link-underline">Mode</a> (London).
          </p>
        </div>

        {/* Gallery Section */}
        <div ref={galleryRef} id="gallery" className="mb-12 block-gallery">
          <h2 className="mb-6 text-2xl font-bold text-kassita header-bio">Gallery</h2>
          <div className="h-80 sm:h-96 xl:h-[32rem] 2xl:h-[40rem] w-full max-w-3xl mx-auto">
            <Carousel slideInterval={4000} pauseOnHover>
              {galleryImages.map((img, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center w-full h-full">
                  <img
                    src={`/gallery/${img.filename}`}
                    alt={img.filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')}
                    className="object-contain w-full max-h-[90%] bg-black rounded-lg"
                    loading="lazy"
                  />
                  {(img.date || img.location) && (
                    <div className="flex flex-row items-center justify-between w-full px-6 py-3 mt-2 bg-black rounded-lg bg-opacity-80">
                      {img.date && (
                        <span className="text-lg font-bold text-primary drop-shadow-lg text-kassita">{img.date}</span>
                      )}
                      {img.location && (
                        <span className="text-lg font-bold text-secondary drop-shadow-lg text-kassita">{img.location}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Shows & Events Section */}
        <div ref={eventsRef} id="events" className="block-events">
          <h2 className="mb-8 text-2xl font-bold text-kassita header-events">Shows & Events</h2>
          <div className="timeline-container">
            {visibleEvents.map((event, index) => (
              <div key={index} className="timeline-event">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="font-semibold timeline-date">{event.date}</span>
                  <span className={event.bold ? "timeline-title font-bold" : "timeline-title"}>{
                    event.event
                      .replace(/Subtle Radio/g, '<a href="https://subtleradio.com/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Subtle Radio</a>')
                      .replace(/Mode Radio/g, '<a href="https://mode.london/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Mode Radio</a>')
                  }</span>
                  <span className="timeline-location">{event.location}</span>
                </div>
              </div>
            ))}
          </div>
          {sortedEvents.length > 10 && (
            <div className="flex justify-center mt-4">
              <button
                className="px-6 py-2 rounded-full bg-[#a36bb3] text-black font-bold text-kassita border-2 border-[#a36bb3] hover:bg-black hover:text-[#a36bb3] transition-colors duration-200"
                onClick={() => setShowAll(v => !v)}
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
          <p className="pt-5">
            as well as numerous private parties, radio show residencies at <a href="https://subtleradio.com/" className="link-bio link-underline" target="_blank" rel="noopener noreferrer">Subtle Radio</a> and <a href="https://mode.london/" className="link-bio link-underline" target="_blank" rel="noopener noreferrer">Mode Radio</a>, and other events.
          </p>
        </div>

        {/* Promoter Feedback Section */}
        <div ref={feedbackRef} id="feedback" className="block-feedback">
          <h2 className="mb-6 text-2xl font-bold text-kassita header-feedback">Promoter Feedback</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-secondary text-kassita header-feedback">Four Loko</h3>
              <p className="italic">
                "Kassita has been nothing short of amazing to work with over the past few months. 
                She has been a phenomenal addition to our FourLoko DJ booth at three major festivals this summer - she kept the crowd pumping with her distinctive tune selection and her mixing skills are excellent. I couldn't recommend her more!"
              </p>
              <p className="font-semibold text-right">Peter F., Junior Brand Manager</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-secondary text-kassita header-feedback">Spilt Milk</h3>
              <p className="italic">
                "Kassita takes you on a journey that knows no bounds - she effortlessly navigates genres and styles, embracing diversity and versatility."
              </p>
              <p className="font-semibold text-right">Andra S., Visual/Art Director</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-secondary text-kassita header-feedback">Looney Grooves</h3>
              <p className="italic">
                "Kassita was part of our all-girls lineup for 'UKGirls' - she was an absolute pleasure to host at our event and an absolute sheller with the tunes! From getting stuck in with the build-up promo, to seamless mixing on the night, she's a DJ to look out for."
              </p>
              <p className="font-semibold text-right">Josh M., Event Manager</p>
            </div>
          </div>
        </div>

        {/* Neon Scratch Map Section */}
        <div ref={mapRef} id="scratch-map" className="block-scratch-map">
          <NeonScratchMap />
        </div>
      </div>
    </div>
  )
}

export default App
