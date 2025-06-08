import React, { useRef } from 'react'

function App() {
  // Combine all events into one array with a year for sorting
  const allEvents = [
    { date: '8 June 2024', event: 'Parklife Festival (VIP Stage)', location: 'Manchester', bold: true },
    { date: '13 July 2024', event: 'TRNSMT Festival (FourLoko Crate)', location: 'Glasgow', bold: false },
    { date: '24 Aug 2024', event: 'Leeds Festival (FourLoko Crate)', location: 'Leeds', bold: false },
    { date: '16 Nov 2024', event: "Burning Man 'Decompression' (The Cause, 1k+ cap)", location: 'London', bold: true },
    { date: '25 May 2024', event: "Spilt Milk 'Queer Feminist Art Afterparty' (VFD)", location: 'London', bold: false },
    { date: '1 Nov 2024', event: "TUSH 'Inclusive Rave' (Jaguar Shoes)", location: 'London', bold: false },
    { date: '25 Oct 2024', event: "Looney Grooves 'UKGirls: Hallowqueen' (XLR)", location: 'Manchester', bold: false },
    { date: '18 Jan 2025', event: "Faded Society 'The Reset' (Club Makossa)", location: 'London', bold: false },
    { date: '22 Jan 2025', event: 'Mode Radio Takeover', location: 'London', bold: false },
    { date: 'Jan - March 2025', event: "Gordon Ramsay's Lucky Cat", location: 'Manchester & Mayfair', bold: false },
    { date: '19 Feb 2025', event: 'BMC Radio Takeover', location: 'London', bold: false },
    { date: '21 Feb 2025', event: "TUSH 'Inclusive Rave' (Cu)", location: 'London', bold: false },
    { date: '7 March 2025', event: 'Mischief (Metropolis)', location: 'London', bold: false },
    { date: '15 March 2025', event: 'TG March Ball (Electrowerkz - 1.5K cap)', location: 'London', bold: true },
    { date: '8 April 2025', event: 'Lollapalooza', location: 'Osaka, Japan', bold: false },
    { date: '10 April 2025', event: 'FT & Blueflower (Club Circus)', location: 'Tokyo, Japan', bold: true },
    { date: '18 April 2025', event: 'Mischief (Metropolis)', location: 'London', bold: false },
    { date: '20 April 2025', event: "Resurge 'No Drama' (the DBA)", location: 'Manchester', bold: false },
    { date: '26 April 2025', event: 'Cyberdog', location: 'London', bold: false },
    { date: '17-25 May 2025', event: "Ibiza.PlayAbout 'Annual Music Festival' (Ibiza Jet)", location: 'Ibiza', bold: true },
    { date: '30 May 2025', event: "TUSH 'Inclusive Rave' (Night Tales)", location: 'London', bold: false },
    { date: '7 June 2025', event: 'Secret Valley Festival', location: 'Wales', bold: true },
    { date: '23 Aug & 7 Sept 2025', event: 'Cyberdog', location: 'London', bold: false }
  ];

  // Helper to parse dates for sorting (handles ranges and months)
  function parseEventDate(dateStr) {
    // Try to get the first date in the string
    const match = dateStr.match(/(\d{1,2}) ([A-Za-z]+)(?: (\d{4}))?/);
    if (!match) return new Date(0);
    const day = parseInt(match[1], 10);
    const month = match[2];
    const year = match[3] ? parseInt(match[3], 10) : 2024;
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const monthIdx = months.findIndex(m => month.startsWith(m));
    if (monthIdx === -1) return new Date(0);
    return new Date(year, monthIdx, day);
  }

  // Sort newest (future) events first
  const sortedEvents = [...allEvents].sort((a, b) => parseEventDate(b.date) - parseEventDate(a.date));

  // Refs for smooth scroll
  const bioRef = useRef(null)
  const eventsRef = useRef(null)
  const feedbackRef = useRef(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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
        <button className="nav-btn nav-btn-purple text-kassita" onClick={() => scrollToSection(eventsRef)}>Shows & Events</button>
        <button className="nav-btn nav-btn-teal text-kassita" onClick={() => scrollToSection(feedbackRef)}>Promoter Feedback</button>
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
            Kassita won a mix competition to <span className="font-semibold">DJ at Parklife Festival</span> and has since gone on to perform at two other UK festivals as well as perform at multiple events across the UK, including at iconic venue 'The Cause' in London. She has founded her own electronic music event called "TUSH" (@tush_space) which is an inclusive rave aimed at fostering a playful, respectful space that encourages mutual appreciation and open mindedness within the sanctuary of good music. Kassita also has <span className="font-semibold">radio residencies at <a href="https://subtleradio.com/" className="link-bio link-underline">Subtle</a></span> (Hackney) and <a href="https://mode.london/" className="font-semibold link-bio link-underline">Mode</a> (London).
          </p>
        </div>

        {/* Shows & Events Section */}
        <div ref={eventsRef} id="events" className="block-events">
          <h2 className="mb-8 text-2xl font-bold text-kassita header-events">Shows & Events Timeline</h2>
          <div className="timeline-container">
            {sortedEvents.map((event, index) => (
              <div key={index} className="timeline-event">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date font-semibold">{event.date}</span>
                  <span className={event.bold ? "timeline-title font-bold" : "timeline-title"}>{event.event}</span>
                  <span className="timeline-location">{event.location}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="pt-5">as well as numerous private parties, radio show residencies at Subtle Radio and Mode Radio, and other events.</p>
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
      </div>
    </div>
  )
}

export default App
