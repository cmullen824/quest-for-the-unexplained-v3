// app/page.tsx

type Encounter = {
  slug: string;
  title: string;
  type: "Cryptid" | "Haunting" | "UFO" | "Glitch" | "Other";
  location: string;
  description: string;
};

const featuredEncounter: Encounter = {
  slug: "figure-on-the-bridge",
  title: "The Figure on the Bridge",
  type: "Haunting",
  location: "Point Pleasant, West Virginia",
  description:
    "A maintenance worker describes a silent figure standing on the edge of the bridge, unmoving, moments before the collapse...",
};

const latestEncounters: Encounter[] = [
  {
    slug: "something-in-the-treeline",
    title: "Something in the Treeline",
    type: "Cryptid",
    location: "Pacific Northwest, USA",
    description:
      "While camping alone, a hiker hears heavy, deliberate footsteps circling his tent long after the forest goes silent...",
  },
  {
    slug: "lights-over-the-ridge",
    title: "Lights Over the Ridge",
    type: "UFO",
    location: "Rural Arizona, USA",
    description:
      "Neighbors report a cluster of silent lights drifting against the wind, then vanishing all at once without a sound...",
  },
  {
    slug: "the-road-that-shouldnt-exist",
    title: "The Road That Shouldn’t Exist",
    type: "Glitch",
    location: "Suburban UK",
    description:
      "A late-night driver takes a wrong turn and finds a road that can’t be found again on any map—or in daylight...",
  },
];

export default function Home() {
  return (
    <main className="page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">
          <h2 className="hero-title">Step into the Unknown.</h2>
          <p className="hero-subtitle">
            Curated true encounters with cryptids, hauntings, UFOs, glitches in
            reality, and events that refuse to be explained.
          </p>
          <div className="hero-actions">
            <a href="/submit" className="btn btn-primary">
              Submit Your Encounter
            </a>
            <a href="/encounters" className="btn btn-ghost">
              Browse Encounters
            </a>
          </div>
        </div>
      </section>

      <div className="content">
        {/* FEATURED ENCOUNTER */}
        <section className="section">
          <div className="section-header">
            <h3>Featured Encounter</h3>
          </div>
          <article className="card card-featured">
            <div className="card-meta">
              <span className="pill pill-type">{featuredEncounter.type}</span>
              <span className="pill pill-location">
                {featuredEncounter.location}
              </span>
            </div>
            <h4 className="card-title">{featuredEncounter.title}</h4>
            <p className="card-text">{featuredEncounter.description}</p>
            <a
              href={`/encounters/${featuredEncounter.slug}`}
              className="card-link"
            >
              Read the full encounter →
            </a>
          </article>
        </section>

        {/* LATEST ENCOUNTERS */}
        <section className="section">
          <div className="section-header">
            <h3>Latest Encounters</h3>
          </div>
          <div className="grid">
            {latestEncounters.map((encounter) => (
              <article key={encounter.slug} className="card">
                <div className="card-meta">
                  <span className="pill pill-type">{encounter.type}</span>
                  <span className="pill pill-location">
                    {encounter.location}
                  </span>
                </div>
                <h4 className="card-title">{encounter.title}</h4>
                <p className="card-text">{encounter.description}</p>
                <a
                  href={`/encounters/${encounter.slug}`}
                  className="card-link"
                >
                  Read encounter →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="section">
          <div className="section-header">
            <h3>Explore by Category</h3>
          </div>
          <div className="pill-row">
            <a href="/encounters?type=cryptid" className="pill pill-outline">
              Cryptids
            </a>
            <a href="/encounters?type=haunting" className="pill pill-outline">
              Hauntings
            </a>
            <a href="/encounters?type=ufo" className="pill pill-outline">
              UFOs &amp; Aliens
            </a>
            <a href="/encounters?type=glitch" className="pill pill-outline">
              Glitches in Reality
            </a>
            <a href="/encounters?type=other" className="pill pill-outline">
              Other Phenomena
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
