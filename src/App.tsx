import React, { useRef, useState, memo } from 'react'
import { Carousel } from 'flowbite-react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Move these outside the component to avoid recreation on every render
const highlightedCountries = ["GBR", "ESP", "JPN", "FRA"]; // United Kingdom, Spain, Japan
const geoUrl = "world.json";

// Move NeonScratchMap outside App to avoid unnecessary re-renders
const NeonScratchMap = memo(function NeonScratchMap() {
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
});

function App() {
  // Combine all events into one array with a year for sorting
  const allEvents = [
    { date: '8 June 2024', iso: '2024-06-08', event: 'Parklife Festival (VIP Stage)', location: 'Manchester', bold: false },
    { date: '13 July 2024', iso: '2024-07-13', event: 'TRNSMT Festival (FourLoko Crate)', location: 'Glasgow', bold: false },
    { date: '24 August 2024', iso: '2024-08-24', event: 'Leeds Festival (FourLoko Crate)', location: 'Leeds', bold: false },
    { date: '16 November 2024', iso: '2024-11-16', event: "Burning Man 'Decompression' (The Cause)", location: 'London', bold: false },
    { date: '25 May 2024', iso: '2024-05-25', event: "Spilt Milk 'Queer Feminist Art Afterparty' (VFD)", location: 'London', bold: false },
    { date: '1 November 2024', iso: '2024-11-01', event: "TUSH 'Inclusive Rave' (Jaguar Shoes)", location: 'London', bold: false },
    { date: '25 October 2024', iso: '2024-10-25', event: "Looney Grooves 'UKGirls: Hallowqueen' (XLR)", location: 'Manchester', bold: false },
    { date: '18 January 2025', iso: '2025-01-18', event: "Faded Society 'The Reset' (Club Makossa)", location: 'London', bold: false },
    { date: '22 January 2025', iso: '2025-01-22', event: 'Mode Radio Takeover', location: 'London', bold: false },
    { date: 'January - March 2025', iso: '2025-03-28', event: "Gordon Ramsay's Lucky Cat", location: 'Manchester & Mayfair', bold: false },
    { date: '19 February 2025', iso: '2025-02-19', event: 'BMC Radio Takeover', location: 'London', bold: false },
    { date: '21 February 2025', iso: '2025-02-21', event: "TUSH 'Inclusive Rave' (Cu)", location: 'London', bold: false },
    { date: '7 March 2025', iso: '2025-03-07', event: 'Mischief (Metropolis)', location: 'London', bold: false },
    { date: '15 March 2025', iso: '2025-03-15', event: 'TG March Ball (Electrowerkz)', location: 'London', bold: false },
    { date: '8 April 2025', iso: '2025-04-08', event: 'Lollapalooza', location: 'Osaka, Japan', bold: false },
    { date: '10 April 2025', iso: '2025-04-10', event: 'FT & Blueflower (Club Circus)', location: 'Tokyo, Japan', bold: false },
    { date: '18 April 2025', iso: '2025-04-18', event: 'Mischief (Metropolis)', location: 'London', bold: false },
    { date: '20 April 2025', iso: '2025-04-20', event: "Resurge (The DBA)", location: 'Manchester', bold: false },
    { date: '26 April 2025', iso: '2025-04-26', event: 'Cyberdog (DJ residency)', location: 'London', bold: false },
    { date: '17-25 May 2025', iso: '2025-05-25', event: "Ibiza.PlayAbout 'Annual Music Festival' (Ibiza Jet)", location: 'Ibiza', bold: false },
    { date: '30 May 2025', iso: '2025-05-30', event: "TUSH: House, Disco & Garage Night with <a href='https://www.instagram.com/reimonduk/' class='link-bio link-underline' target='_blank' rel='noopener noreferrer'>Reimond</a> (Night Tales)", location: 'London', bold: false },
    { date: '7 June 2025', iso: '2025-06-07', event: 'Secret Valley Festival', location: 'Wales', bold: false },
    { date: '16 July 2025', iso: '2025-07-16', event: 'BMC Radio Takeover (Faded Community)', location: 'London', bold: false },
    { date: '17 July 2025', iso: '2025-07-17', event: 'Not Bad For A Girl (Colour Factory)', location: 'London', bold: false },
    { date: '19 July 2025', iso: '2025-07-19', event: 'TUSH: Open Decks & DJ Mixer (Club Makossa)', location: 'London', bold: false },
    { date: '24 July 2025', iso: '2025-07-24', event: 'TOWIE (TV Set)', location: 'Essex', bold: false },
    { date: '27 June 2025', iso: '2025-06-27', event: 'Glastonbury Festival (Bar on the Green)', location: 'Glastonbury', bold: false },
    { date: '5 July 2025', iso: '2025-07-05', event: 'TUSH Takeover (COCO)', location: 'Lille, France', bold: false },
    { date: '11 July 2025', iso: '2025-07-11', event: 'House Rules (NQ Bloc Party)', location: 'Manchester', bold: false },
    { date: '1 August 2025', iso: '2025-08-01', event: 'Midas Label Launch with <a href="https://soundcloud.com/makandpasteman" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Mak & Pasteman</a> (<a href="https://www.instagram.com/midas.sound" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Midas</a>)', location: 'Mode Radio', bold: false },
    { date: '8 August 2025', iso: '2025-08-08', event: 'Fuss Promotions: Garage Night', location: 'Surrey', bold: false },
    { date: '20 August 2025', iso: '2025-08-20', event: 'BMC Radio Takeover (Faded Community)', location: 'London', bold: false },
    { date: '23 August 2025', iso: '2025-08-23', event: 'Cyberdog (DJ residency)', location: 'London', bold: false },
    { date: '30 August 2025', iso: '2025-08-30', event: 'Don\'t Tell The Neighbours (Oslo Hackney)', location: 'London', bold: false },
    { date: '5 September 2025', iso: '2025-09-05', event: 'TUSH: House, Disco & Garage Night with Very Special Guest (Night Tales)', location: 'London', bold: false },
    { date: '12 September 2025', iso: '2025-09-12', event: 'New York Fasion Week (Hudson Yards)', location: 'New York', bold: false },
    { date: '14 September 2025', iso: '2025-09-14', event: 'Timeless Nexus (No Nazar)', location: 'New York', bold: false },
    { date: '18 September 2025', iso: '2025-09-18', event: 'Delirium (Brooklyn)', location: 'New York', bold: false },
    { date: '7 September 2025', iso: '2025-09-07', event: 'Cyberdog (DJ residency)', location: 'London', bold: false },
    { date: '17 September 2025', iso: '2025-09-17', event: 'BMC Radio Takeover (Faded Community)', location: 'London', bold: false },
    { date: '4 October 2025', iso: '2025-10-04', event: 'TUSH: Bass, Breaks & Techno Night (Cu)', location: 'London', bold: false },
    { date: '3 October 2025', iso: '2025-10-03', event: 'Midas Launch Party with <a href="https://soundcloud.com/makandpasteman" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Mak & Pasteman</a> (<a href="https://www.instagram.com/waves.ldn">Waves</a>)', location: 'London', bold: false },
    { date: '28 November 2025', iso: '2025-11-28', event: 'Mischief (Little Nan\'s Bar)', location: 'London', bold: false },
    { date: 'TBC', event: 'Surg Radio Takeover (postponed)', location: 'Sydney, Australia', bold: false },
    { date: '11 December 2025', iso: '2025-12-11', event: 'Cyberdog Radio Takeover', location: 'London', bold: false }
  ];

  // Sort newest (future) events first using the ISO date
  const sortedEvents = [...allEvents].sort((a, b) => new Date(b.iso).getTime() - new Date(a.iso).getTime());

  // Show only the most recent 10 by default
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? sortedEvents : sortedEvents.slice(0, 10);

  // Refs for smooth scroll
  const headerRef = useRef<HTMLDivElement>(null)
  const bioRef = useRef(null)
  const eventsRef = useRef(null)
  const feedbackRef = useRef(null)
  const galleryRef = useRef(null)
  const mapRef = useRef(null)

  // Scroll to section with dynamic header offset
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const headerHeight = headerRef.current?.clientHeight || 0;
      const extraSpacing = 24; // You can tweak this for extra space below header
      const elementPosition = (ref.current as HTMLElement).getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - extraSpacing;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  // Gallery images with date and location fields
  const galleryImages = [
    { filename: 'chastingtigers-0115.jpg', date: 'March 2025', location: 'Electrowerkz, London' },
    { filename: 'chastingtigers-8511.jpg', date: 'March 2025', location: 'Electrowerkz, London' },
    { filename: 'DSC01427.jpg', date: 'April 2025', location: 'The DBA, Manchester' },
    { filename: 'DSC01286.jpg', date: 'April 2025', location: 'The DBA, Manchester' },
    { filename: 'DSC01288.jpg', date: 'April 2025', location: 'The DBA, Manchester' },
    { filename: 'DSC01346.jpg', date: 'April 2025', location: 'The DBA, Manchester' },
    { filename: 'Keepers club 22nd LR-14.JPG', date: 'May 2025', location: 'Keeper, Ibiza' },
    { filename: 'Keepers club 22nd LR-16.JPG', date: 'May 2025', location: 'Keeper, Ibiza' },
    { filename: 'Kassita - Zerdazi (TUSH at Night Tales) 30-05-25 - 00004.jpg', date: 'May 2025', location: 'Night Tales, London' },
    { filename: 'Kassita Leeds Festival 2024.jpeg.jpg', date: 'August 2024', location: 'Leeds Festival' },
  ];

  // State for current carousel index
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Handler for carousel change (no fade effect)
  const handleCarouselChange = (idx: number) => {
    setGalleryIndex(idx);
  };

  return (
    <div className="min-h-screen bg-black text-primary">
      {/* Top Bar with Logo, Title, and Social Icons */}
      <div className="top-bar" ref={headerRef}>
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
      <div className="flex flex-wrap justify-center gap-3 mb-6 nav-margin-top">
        <span
          className="px-5 py-2 mb-2 text-base cursor-pointer select-none nav-btn nav-btn-pink text-kassita"
          onClick={() => scrollToSection(bioRef)}
          tabIndex={0}
          role="button"
          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') scrollToSection(bioRef); }}
        >
          Bio
        </span>
        <span
          className="px-5 py-2 mb-2 text-base cursor-pointer select-none nav-btn nav-btn-purple text-kassita"
          onClick={() => scrollToSection(galleryRef)}
          tabIndex={0}
          role="button"
          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') scrollToSection(galleryRef); }}
        >
          Gallery
        </span>
        <span
          className="px-5 py-2 mb-2 text-base cursor-pointer select-none nav-btn nav-btn-teal text-kassita"
          onClick={() => scrollToSection(eventsRef)}
          tabIndex={0}
          role="button"
          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') scrollToSection(eventsRef); }}
        >
          Shows & Events
        </span>
        <span
          className="px-5 py-2 mb-2 text-base cursor-pointer select-none nav-btn nav-btn-pink text-kassita"
          onClick={() => scrollToSection(feedbackRef)}
          tabIndex={0}
          role="button"
          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') scrollToSection(feedbackRef); }}
        >
          Promoter Feedback
        </span>
        <span
          className="px-5 py-2 mb-2 text-base cursor-pointer select-none nav-btn nav-btn-purple text-kassita"
          onClick={() => scrollToSection(mapRef)}
          tabIndex={0}
          role="button"
          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') scrollToSection(mapRef); }}
        >
          Scratch Map
        </span>
      </div>

      {/* Content */}
      <div className="max-w-4xl px-4 pb-12 mx-auto">
        {/* Bio Section */}
        <div ref={bioRef} id="bio" className="block-bio">
          <h2 className="mb-4 text-2xl font-bold text-kassita header-bio">Bio</h2>
          <p>
  Kassita is an international DJ &amp; producer who seamlessly blends a diverse range of electronic genres in her mixes, which are always infused with upbeat energy to get you stomping.
  <br /><br />
  From living in Manchester, Bristol and London over the past 10 years, experiencing the nightlife in each city, Kassita absorbed a plethora of culture and sound that gives her mixes a unique edge that keeps you coming back for more.
  <br /><br />
  Not only has she played at multiple iconic venues across the UK, including The Cause, Electrowerkz (London) and the DBA (Manchester), just 6 months into her DJ career Kassita won a mix competition to perform at Parklife Festival 2024 (Manchester), and then went on to DJ at TRNSMT festival (Glasgow) and Leeds Festival with FourLoko later that same Summer.
  <br /><br />
  2025 has already been an unbelievable year for Kassita - she played at Glastonbury (Bar on the Green) and has ignited her international career by delivering fiery sets in Japan, France, Australia, New York and Ibiza.
  <br /><br />
  On top of this, Kassita has founded her own electronic music event called “TUSH” (<a href="https://www.instagram.com/tush_tribe" className="link-bio link-underline" target="_blank" rel="noopener noreferrer">@tush_tribe</a>) which is an inclusive rave aimed at fostering a playful, respectful space that encourages mutual appreciation and open mindedness within the sanctuary of good music. Kassita also holds down radio residencies at Subtle Radio, Mode Radio and BMC radio, each based in London. You can find her mixing house, techno, breaks, UKG and bass genres… whatever it is, she’ll create a vibe that keeps you locked in.
</p>
        </div>

        {/* Gallery Section */}
        <div ref={galleryRef} id="gallery" className="mb-12 block-gallery-purple">
          <h2 className="mb-6 text-2xl font-bold text-kassita header-bio">Gallery</h2>
          <div className="w-full max-w-3xl mx-auto">
            <div className="h-80 sm:h-96 xl:h-[32rem] 2xl:h-[40rem]">
              <Carousel
                slideInterval={4000}
                pauseOnHover
                onSlideChange={handleCarouselChange}
              >
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="w-full h-full">
                    <img
                      src={`/gallery/${img.filename}`}
                      alt={img.filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')}
                      className="object-contain w-full h-full bg-black rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            {/* Date and Location below carousel */}
            <div className="mt-6 text-center">
              {galleryImages[galleryIndex].date && (
                <div className="mb-1 text-lg font-bold text-primary drop-shadow-lg text-kassita">{galleryImages[galleryIndex].date}</div>
              )}
              {galleryImages[galleryIndex].location && (
                <div className="text-lg font-bold text-secondary drop-shadow-lg text-kassita">{galleryImages[galleryIndex].location}</div>
              )}
            </div>
          </div>
        </div>

        {/* Shows & Events Section */}
        <div ref={eventsRef} id="events" className="block-events-teal">
          <h2 className="mb-8 text-2xl font-bold text-kassita header-events">Shows & Events</h2>
          <div className="timeline-container">
            {visibleEvents.map((event, index) => (
              <div key={index} className="timeline-event">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="font-semibold timeline-date">{event.date}</span>
                  <span
                    className={event.bold ? "timeline-title font-bold" : "timeline-title"}
                    dangerouslySetInnerHTML={{
                      __html: event.event
                        .replace(/@tush_space/g, '<a href="https://www.instagram.com/tush_tribe/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">@tush_tribe</a>')
                        .replace(/TUSH(?![\w])/g, '<a href="https://www.tushspace.com/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">TUSH</a>')
                        .replace(/Spilt Milk/g, '<a href="https://www.instagram.com/spiltmilkkkkkk/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Spilt Milk</a>')
                        .replace(/Looney Grooves/g, '<a href="https://www.instagram.com/looney.grooves/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Looney Grooves</a>')
                        .replace(/Faded Society/g, '<a href="https://www.instagram.com/thefadedcommunity" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Faded Society</a>')
                        .replace(/Burning Man 'Decompression'/g, '<a href="https://londondecom.org/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Burning Man \'Decompression\'</a>')
                        .replace(/Secret Valley Festival/g, '<a href="https://www.secretvalleyfest.com/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Secret Valley Festival</a>')
                        .replace(/Ibiza.PlayAbout/g, '<a href="https://www.ibizaplayabout.com/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Ibiza.PlayAbout</a>')
                        .replace(/Cyberdog/g, '<a href="https://www.cyberdog.net/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Cyberdog</a>')
                        .replace(/Mischief/g, '<a href="https://www.instagram.com/mischief.london" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Mischief</a>')
                        .replace(/Derby Brewery Arms|The DBA/gi, '<a href="https://www.instagram.com/derbybreweryarms/?hl=en" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">The DBA</a>')
                        .replace(/Lollapalooza/g, '<a href="https://www.instagram.com/lollapalooza.cafe/?hl=en" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Lollapalooza</a>')
                        .replace(/Club Circus/g, '<a href="https://www.instagram.com/circus_tokyo/?hl=en" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Club Circus</a>')
                        .replace(/Electrowerkz/g, '<a href="https://www.electrowerkz.co.uk/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Electrowerkz</a>')
                        .replace(/Leeds Festival/g, '<a href="https://www.leedsfestival.com/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Leeds Festival</a>')
                        .replace(/TRNSMT Festival/g, '<a href="https://trnsmtfest.com/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">TRNSMT Festival</a>')
                        .replace(/BMC Radio/g, '<a href="https://www.instagram.com/bmc.radio/?hl=en" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">BMC Radio</a>')
                        .replace(/Cu/g, '<a href="https://www.instagram.com/cu_dalston/?hl=en" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Cu</a>')
                        .replace(/Subtle Radio/g, '<a href="https://subtleradio.com/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Subtle Radio</a>')
                        .replace(/Mode Radio/g, '<a href="https://mode.london/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Mode Radio</a>')
                        .replace(/Parklife Festival/g, '<a href="https://parklife.uk.com/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Parklife Festival</a>')
                        .replace(/The Cause/g, '<a href="https://www.thecause.london/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">The Cause</a>')
                        .replace(/Not Bad For A Girl/g, '<a href="https://www.instagram.com/notbadforagirluk/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Not Bad For A Girl</a>')
                        .replace(/TOWIE/g, '<a href="https://www.instagram.com/towie/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">TOWIE</a>')
                        .replace(/Fuss Promotions/g, '<a href="https://www.instagram.com/fuss_promotions/" class="link-bio link-underline" target="_blank" rel="noopener noreferrer">Fuss Promotions</a>')
                    }}
                  />
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
            as well as numerous private parties, radio show Residencies at <a href="https://subtleradio.com/" className="link-bio link-underline" target="_blank" rel="noopener noreferrer">Subtle Radio</a> and <a href="https://mode.london/" className="link-bio link-underline" target="_blank" rel="noopener noreferrer">Mode Radio</a>, and other events.
          </p>
        </div>

        {/* Neon Scratch Map Section */}
        <div ref={mapRef} id="scratch-map" className="oval-map-container mb-12">
          <NeonScratchMap />
        </div>

        {/* Promoter Feedback Section */}
        <div ref={feedbackRef} id="feedback" className="block-bio">
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
            <div>
              <h3 className="mb-2 text-xl font-semibold text-secondary text-kassita header-feedback">Secret Valley Festival</h3>
              <p className="italic">
                "Kassita was incredibly easy to work with, always super prompt and communicative, a killer DJ, totally delivered."
              </p>
              <p className="font-semibold text-right">Coren, Festival Organiser</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
