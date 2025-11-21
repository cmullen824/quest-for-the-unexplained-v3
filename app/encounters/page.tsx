// app/encounters/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encounters | Quest for the Unexplained",
  description:
    "Browse documented encounters with cryptids, hauntings, UFOs, glitches in reality, and other unexplained phenomena.",
};

type EncounterType = "Cryptid" | "Haunting" | "UFO" | "Glitch" | "Other";

type Encounter = {
  slug: string;
  title: string;
  type: EncounterType;
  location: string;
  description: string;
};

const allEncounters: Encounter[] = [
  {
    slug: "figure-on-the-bridge",
    title: "The Figure on the Bridge",
    type: "Haunting",
    location: "Point Pleasant, West Virginia",
    description:
      "A maintenance worker describes a silent figure standing on the edge of the bridge, unmoving, moments before the collapse.",
  },
  {
    slug: "something-in-the-treeline",
    title: "Something in the Treeline",
    type: "Cryptid",
    location: "Pacific Northwest, USA",
    description:
      "While camping alone, a hiker hears heavy, deliberate footsteps circling his tent long after the forest goes silent.",
  },
  {
    slug: "lights-over-the-ridge",
    title: "Lights Over the Ridge",
    type: "UFO",
    location: "Rural Arizona, USA",
    description:
      "Neighbors report a cluster of silent lights drifting against the wind, then vanishing all at once without a sound.",
  },
  {
    slug: "the-road-that-shouldnt-exist",
    title: "The Road That Should Not Exist",
    type: "Glitch",
    location: "Suburban UK",
    description:
      "A late-night driver takes a wrong turn and finds a road that cannot be found again on any map, or in daylight.",
  },
  {
    slug: "shadow-in-the-doorway",
    title: "Shadow in the Doorway",
    type: "Haunting",
    location: "Savannah, Georgia, USA",
    description:
      "A guest at a historic inn wakes to see a tall, motionless silhouette filling the doorway, vanishing when the light is turned on.",
  },
  {
    slug: "something-in-the-corn",
    title: "Something in the Corn",
    type: "Cryptid",
    location: "Rural Iowa, USA",
    description:
      "Farmers report something large moving between rows at night, leaving prints that do not match any known animal.",
  },
  {
    slug: "silent-triangle-over-town",
    title: "Silent Triangle Over Town",
    type: "UFO",
    location: "Small Midwest Town, USA",
    description:
      "Multiple witnesses describe a huge black triangle blocking out the stars as it drifts overhead without a sound.",
  },
  {
    slug: "the-missing-hour",
    title: "The Missing Hour",
    type: "Glitch",
    location: "Interstate Highway, USA",
    description:
      "Two friends on a night drive arrive almost an hour later than they should have, with no memory of stopping.",
  },
];

const featuredEncounter = allEncounters[0];

const latestEncounters = allEncounters.slice(0, 4);

const cryptidEncounters = allEncounters.filter(
  (encounter) => encounter.type === "Cryptid"
);
const hauntingEncounters = allEncounters.filter(
  (encounter) => encounter.type === "Haunting"
);
const ufoEncounters = allEncounters.filter(
  (encounter) => encounter.type === "UFO"
);
const glitchEncounters = allEncounters.filter(
  (encounter) => encounter.type === "Glitch"
);
const otherEncounters = allEncounters.filter(
  (encounter) => encounter.type === "Other"
);

export default function EncountersPage() {
  return (
    <main className="page">
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

        {/* BROWSE BY CATEGORY */}
        <section className="section">
          <div className="section-header">
            <h3>Browse by Category</h3>
          </div>
          <div className="grid">
            {/* Cryptids */}
            <article className="card">
              <h4 className="card-title">Cryptids</h4>
              {cryptidEncounters.length === 0 ? (
                <p className="card-text">
                  No cryptid encounters have been documented yet.
                </p>
              ) : (
                <ul className="about-list">
                  {cryptidEncounters.map((encounter) => (
                    <li key={encounter.slug}>
                      <a
                        href={`/encounters/${encounter.slug}`}
                        className="card-link"
                      >
                        {encounter.title}
                      </a>
                      <span className="card-text">
                        {" "}
                        · {encounter.location}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>

            {/* Hauntings */}
            <article className="card">
              <h4 className="card-title">Hauntings</h4>
              {hauntingEncounters.length === 0 ? (
                <p className="card-text">
                  No hauntings have been documented yet.
                </p>
              ) : (
                <ul className="about-list">
                  {hauntingEncounters.map((encounter) => (
                    <li key={encounter.slug}>
                      <a
                        href={`/encounters/${encounter.slug}`}
                        className="card-link"
                      >
                        {encounter.title}
                      </a>
                      <span className="card-text">
                        {" "}
                        · {encounter.location}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>

            {/* UFOs */}
            <article className="card">
              <h4 className="card-title">UFOs &amp; Aerial Phenomena</h4>
              {ufoEncounters.length === 0 ? (
                <p className="card-text">
                  No UFO encounters have been documented yet.
                </p>
              ) : (
                <ul className="about-list">
                  {ufoEncounters.map((encounter) => (
                    <li key={encounter.slug}>
                      <a
                        href={`/encounters/${encounter.slug}`}
                        className="card-link"
                      >
                        {encounter.title}
                      </a>
                      <span className="card-text">
                        {" "}
                        · {encounter.location}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>

            {/* Glitches */}
            <article className="card">
              <h4 className="card-title">Glitches in Reality</h4>
              {glitchEncounters.length === 0 ? (
                <p className="card-text">
                  No glitches have been documented yet.
                </p>
              ) : (
                <ul className="about-list">
                  {glitchEncounters.map((encounter) => (
                    <li key={encounter.slug}>
                      <a
                        href={`/encounters/${encounter.slug}`}
                        className="card-link"
                      >
                        {encounter.title}
                      </a>
                      <span className="card-text">
                        {" "}
                        · {encounter.location}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>

            {/* Other */}
            <article className="card">
              <h4 className="card-title">Other Phenomena</h4>
              {otherEncounters.length === 0 ? (
                <p className="card-text">
                  No other encounters have been documented yet.
                </p>
              ) : (
                <ul className="about-list">
                  {otherEncounters.map((encounter) => (
                    <li key={encounter.slug}>
                      <a
                        href={`/encounters/${encounter.slug}`}
                        className="card-link"
                      >
                        {encounter.title}
                      </a>
                      <span className="card-text">
                        {" "}
                        · {encounter.location}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
