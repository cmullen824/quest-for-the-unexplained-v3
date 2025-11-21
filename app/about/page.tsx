// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Quest for the Unexplained",
  description:
    "Learn about the mission behind Quest for the Unexplained and how we collect and share encounters with the unknown.",
};

export default function AboutPage() {
  return (
    <main className="page">
      <div className="content">
        {/* ABOUT QUEST FOR THE UNEXPLAINED */}
        <section className="section">
          <div className="section-header">
            <h3>About Quest for the Unexplained</h3>
          </div>
          <article className="card">
            <p className="card-text">
              Quest for the Unexplained is a home for real people describing
              real encounters with things that do not fit neatly into the
              everyday world: UFOs, cryptids, hauntings, and all the strange
              moments in between.
            </p>
            <p className="card-text">
              Instead of burying these stories in scattered forum posts and
              throwaway comments, this project brings them together in one
              place, organized and presented with care.
            </p>
          </article>
        </section>

        {/* OUR MISSION */}
        <section className="section">
          <div className="section-header">
            <h3>Our Mission</h3>
          </div>
          <article className="card">
            <p className="card-text">
              The goal is simple: create a place where anyone can share their
              story without being mocked or dismissed. Whether you grew up with
              strange lights over the tree line, a shadow in the hall that did
              not belong, or something massive moving in the treeline, your
              experience deserves to be recorded and respected.
            </p>
            <p className="card-text">
              We are not here to prove or debunk. We are here to document,
              organize, and explore the unexplained together. Over time, these
              encounters form a living archive of high strangeness.
            </p>
          </article>
        </section>

        {/* WHAT WE FOCUS ON */}
        <section className="section">
          <div className="section-header">
            <h3>What We Focus On</h3>
          </div>
          <article className="card">
            <ul className="about-list">
              <li>
                <strong>UFOs and Aerial Phenomena:</strong> Lights, craft,
                impossible maneuvers, and sightings that leave more questions
                than answers.
              </li>
              <li>
                <strong>Cryptids and Creatures:</strong> Glimpses of beings
                that should not exist: bipedal shapes, strange tracks, and
                fleeting silhouettes at the tree line.
              </li>
              <li>
                <strong>Paranormal Encounters:</strong> Hauntings,
                apparitions, voices, objects moving on their own, and
                locations that feel undeniably "off."
              </li>
              <li>
                <strong>General High Strangeness:</strong> Time slips,
                missing time, synchronicities, and experiences that defy easy
                categories.
              </li>
            </ul>
          </article>
        </section>

        {/* HOW SUBMISSIONS WORK */}
        <section className="section">
          <div className="section-header">
            <h3>How Submissions Work</h3>
          </div>
          <article className="card">
            <p className="card-text">
              When you share an encounter, you are adding a data point to a
              larger map of the unexplained. Over time, patterns can emerge:
              clusters of sightings, repeated entities, recurring locations, and
              timelines that line up in surprising ways.
            </p>
            <p className="card-text">
              Submitted stories may be featured on the site as standalone
              encounter reports, grouped into collections by region or topic, or
              used to highlight emerging trends and hotspots.
            </p>
            <p className="card-text">
              You can choose how much identifying information you want to share.
              We respect privacy and the courage it takes to talk about these
              things.
            </p>
          </article>
        </section>

        {/* SHARE YOUR STORY */}
        <section className="section">
          <div className="section-header">
            <h3>Share Your Story</h3>
          </div>
          <article className="card">
            <p className="card-text">
              If you have experienced something you cannot explain, your story
              might be the missing piece that makes someone else feel less
              alone, or helps connect a pattern others have missed.
            </p>
            <p className="card-text">
              You do not have to have all the answers. You just have to tell
              what happened as clearly and honestly as you can.
            </p>
            <div style={{ marginTop: "14px" }}>
              <a href="/submit" className="btn btn-primary">
                Submit Your Encounter
              </a>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
