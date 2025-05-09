function App() {
  const events2024 = [
    { date: '8 June', event: 'Parklife Festival (VIP Stage)', location: 'Manchester', bold: true },
    { date: '13 July', event: 'TRNSMT Festival (FourLoko Crate)', location: 'Glasgow', bold: false },
    { date: '24 Aug', event: 'Leeds Festival (FourLoko Crate)', location: 'Leeds', bold: false },
    { date: '16 Nov', event: 'Burning Man \'Decompression\' (The Cause, 1k+ cap)', location: 'London', bold: true },
    { date: '25 May', event: 'Spilt Milk \'Queer Feminist Art Afterparty\' (VFD)', location: 'London', bold: false },
    { date: '1 Nov', event: 'TUSH \'Inclusive Rave\' (Jaguar Shoes)', location: 'London', bold: false },
    { date: '25 Oct', event: 'Looney Grooves \'UKGirls: Hallowqueen\' (XLR)', location: 'Manchester', bold: false }
  ]

  const events2025 = [
    { date: '18 Jan', event: 'Faded Society \'The Reset\' (Club Makossa)', location: 'London', bold: false },
    { date: '22 Jan', event: 'Mode Radio Takeover', location: 'London', bold: false },
    { date: 'Jan - March', event: 'Gordon Ramsay\'s Lucky Cat', location: 'Manchester & Mayfair', bold: false },
    { date: '19 Feb', event: 'BMC Radio Takeover', location: 'London', bold: false },
    { date: '21 Feb', event: 'TUSH \'Inclusive Rave\' (Cu)', location: 'London', bold: false },
    { date: '7 March', event: 'Mischief (Metropolis)', location: 'London', bold: false },
    { date: '15 March', event: 'TG March Ball (Electrowerkz - 1.5K cap)', location: 'London', bold: true },
    { date: '8 April', event: 'Lollapalooza', location: 'Osaka, Japan', bold: false },
    { date: '10 April', event: 'FT & Blueflower (Club Circus)', location: 'Tokyo, Japan', bold: true },
    { date: '18 April', event: 'Mischief (Metropolis)', location: 'London', bold: false },
    { date: '20 April', event: 'Resurge \'No Drama\' (the DBA)', location: 'Manchester', bold: false },
    { date: '26 April', event: 'Cyberdog', location: 'London', bold: false },
    { date: '17-25 May', event: 'Ibiza.PlayAbout \'Annual Music Festival\' (Ibiza Jet)', location: 'Ibiza', bold: true },
    { date: '30 May', event: 'TUSH \'Inclusive Rave\' (Night Tales)', location: 'London', bold: false },
    { date: '7 June', event: 'Secret Valley Festival', location: 'Wales', bold: true },
    { date: '23 Aug & 7 Sept', event: 'Cyberdog', location: 'London', bold: false }
  ]

  return (
    <div className="bg-white text-primary">
      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4">
        <img 
          src="image1.jpg" 
          alt="Kassita" 
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-heading">KASSITA</h1>
          <div className="h-1 bg-primary w-48 mx-auto mb-8"></div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-12 justify-center">
          <a href="mailto:kassitasound@gmail.com" className="link-underline inline-flex items-center">
            <i className="fas fa-envelope mr-2"></i>kassitasound@gmail.com
          </a>
          <a href="https://www.instagram.com/sita_sound/" className="link-underline inline-flex items-center">
            <i className="fab fa-instagram mr-2"></i>sita_sound
          </a>
          <a href="https://soundcloud.com/sita_sound" className="link-underline inline-flex items-center">
            <i className="fab fa-soundcloud mr-2"></i>Kassita
          </a>
          <a href="https://ra.co/dj/kassita" className="link-underline inline-flex items-center">
            <i className="fas fa-music mr-2"></i>Kassita · Artist Profile (RA)
          </a>
        </div>

        {/* Bio Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4 text-heading">Bio</h2>
          <p className="mb-4">
            From living in Manchester, Bristol and then London over the past 10 years, experiencing the nightlife in each city, Kassita absorbed a plethora of culture and sound that gives her mixes a unique edge that keeps you coming back for more. Her expert track selection takes you on a journey through house/tech house, techno, breaks and bass genres, seeking to explore the different perspectives of electronic music to introduce the audience to something new, while carefully tailoring her performances to the venue and crowd.
          </p>
          <p>
            Kassita won a mix competition to <span className="font-semibold">DJ at Parklife Festival</span> and has since gone on to perform at two other UK festivals as well as perform at multiple events across the UK, including at iconic venue 'The Cause' in London. She has founded her own electronic music event called "TUSH" (@tush_space) which is an inclusive rave aimed at fostering a playful, respectful space that encourages mutual appreciation and open mindedness within the sanctuary of good music. Kassita also has <span className="font-semibold">radio residencies at <a href="https://subtleradio.com/" className="link">Subtle</a></span> (Hackney) and <a href="https://mode.london/" className="font-semibold link">Mode</a> (London).
          </p>
        </div>

        {/* Shows & Events Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6 text-heading">Shows & Events</h2>
          
          {/* 2024 Events */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-secondary mb-4 text-heading">2024 highlights...</h3>
            <div className="ml-5 space-y-4">
              {events2024.map((event, index) => (
                <div key={index} className="">
                  <span className="font-semibold mr-2">{event.date}:</span>
                  <span className={event.bold ? "font-bold" : ""}>{event.event}</span>
                  <span className="text-secondary"> in {event.location}</span>
                </div>
              ))}
            </div>
            <p className="pt-5">as well as numerous private parties and other events.</p>
          </div>

          {/* 2025 Events */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4 text-heading">2025 so far...</h3>
            <div className="ml-5 space-y-4">
              {events2025.map((event, index) => (
                <div key={index} className="">
                  <span className="font-semibold mr-2">{event.date}:</span>
                  <span className={event.bold ? "font-bold" : ""}>{event.event}</span>
                  <span className="text-secondary"> in {event.location}</span>
                </div>
              ))}
            </div>
            <p className="pt-5">as well as my monthly radio show residencies at Subtle Radio and Mode Radio, London.</p>
          </div>
        </div>

        {/* Promoter Feedback Section */}
        <div>
          <h2 className="text-2xl font-bold text-accent mb-6 text-heading">Promoter Feedback</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2 text-heading">Four Loko</h3>
              <p className="italic">
                "Kassita has been nothing short of amazing to work with over the past few months. 
                She has been a phenomenal addition to our FourLoko DJ booth at three major festivals this summer - she kept the crowd pumping with her distinctive tune selection and her mixing skills are excellent. I couldn't recommend her more!"
              </p>
              <p className="text-right font-semibold">Peter F., Junior Brand Manager</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2 text-heading">Spilt Milk</h3>
              <p className="italic">
                "Kassita takes you on a journey that knows no bounds - she effortlessly navigates genres and styles, embracing diversity and versatility."
              </p>
              <p className="text-right font-semibold">Andra S., Visual/Art Director</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2 text-heading">Looney Grooves</h3>
              <p className="italic">
                "Kassita was part of our all-girls lineup for 'UKGirls' - she was an absolute pleasure to host at our event and an absolute sheller with the tunes! From getting stuck in with the build-up promo, to seamless mixing on the night, she's a DJ to look out for."
              </p>
              <p className="text-right font-semibold">Josh M., Event Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
