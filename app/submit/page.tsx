"use client";

import React, { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  location: string;
  date: string;
  category: string;
  title: string;
  story: string;
  sharePermission: boolean;
};

const CATEGORY_OPTIONS = [
  "UFOs & Aliens",
  "Cryptids",
  "Paranormal",
  "Unexplained Phenomena",
  "Other",
];

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  location: "",
  date: "",
  category: "",
  title: "",
  story: "",
  sharePermission: false,
};

export default function SubmitPage() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const storyLength = values.story.trim().length;
  const MIN_STORY_CHARS = 200;

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setValues((prev) => ({ ...prev, [name]: e.target.checked }));
    } else {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
    setSubmitted(false);
    setError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitted(false);

    if (storyLength < MIN_STORY_CHARS) {
      setError(
        `Your story is a bit short. Please write at least ${MIN_STORY_CHARS} characters so we have enough detail.`
      );
      return;
    }

    if (!values.sharePermission) {
      setError("Please confirm that we have permission to share your story.");
      return;
    }

    setSubmitting(true);

    // For now this is front-end only. Later, you can send this to an API route.
    console.log("Submitted encounter:", values);

    setValues(INITIAL_VALUES);
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <main className="page submit-page">
      <header className="submit-page-header">
        <div>
          <h1 className="submit-title">Share Your Encounter</h1>
          <p className="submit-subtitle">
            Have you seen something you can&apos;t explain? Tell us your story
            and it may be featured on <strong>Quest for the Unexplained</strong>.
          </p>
        </div>
      </header>

      <section className="submit-layout">
        <div className="submit-main">
          <form className="submit-card" onSubmit={handleSubmit}>
            <h2 className="card-title">Encounter Details</h2>

            <div className="form-grid">
              {/* Name */}
              <div className="form-field">
                <label htmlFor="name" className="field-label">
                  Name or Alias<span className="required">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  className="text-input"
                  placeholder="You can use a pseudonym if you prefer."
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="email" className="field-label">
                  Email<span className="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  className="text-input"
                  placeholder="We’ll only use this to contact you about your story."
                />
              </div>

              {/* Location */}
              <div className="form-field">
                <label htmlFor="location" className="field-label">
                  Location of Encounter
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={values.location}
                  onChange={handleChange}
                  className="text-input"
                  placeholder="City, state, country, or general area."
                />
              </div>

              {/* Date */}
              <div className="form-field">
                <label htmlFor="date" className="field-label">
                  Date of Encounter
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                  className="text-input"
                />
              </div>

              {/* Category */}
              <div className="form-field">
                <label htmlFor="category" className="field-label">
                  Category<span className="required">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={values.category}
                  onChange={handleChange}
                  className="select-input"
                >
                  <option value="">Select a category</option>
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div className="form-field form-field-full">
                <label htmlFor="title" className="field-label">
                  Story Title<span className="required">*</span>
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={values.title}
                  onChange={handleChange}
                  className="text-input"
                  placeholder="A short title that captures your encounter."
                />
              </div>

              {/* Story */}
              <div className="form-field form-field-full">
                <label htmlFor="story" className="field-label">
                  Your Story<span className="required">*</span>
                </label>
                <textarea
                  id="story"
                  name="story"
                  required
                  value={values.story}
                  onChange={handleChange}
                  className="textarea-input"
                  rows={10}
                  placeholder="Describe what happened in as much detail as you can: what you saw or felt, sounds, smells, lights, weather, time of day, and how it affected you."
                />
                <div className="field-footer">
                  <span className="helper-text">
                    Minimum {MIN_STORY_CHARS} characters. You&apos;ve written{" "}
                    {storyLength}.
                  </span>
                </div>
              </div>
            </div>

            {/* Permission */}
            <div className="form-consent">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="sharePermission"
                  checked={values.sharePermission}
                  onChange={handleChange}
                />
                <span>
                  I confirm this story is my own experience and grant permission
                  for Quest for the Unexplained to share or publish it (with
                  edits for clarity/length if needed).
                </span>
              </label>
            </div>

            {/* Messages */}
            <div
              className="form-messages"
              aria-live="polite"
              aria-atomic="true"
            >
              {error && <p className="form-error">{error}</p>}
              {submitted && !error && (
                <p className="form-success">
                  Thank you for sharing your encounter. Your story has been
                  recorded, and we&apos;ll review it soon.
                </p>
              )}
            </div>

            {/* Submit button */}
            <div className="form-actions">
              <button
                type="submit"
                className="primary-button"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Your Story"}
              </button>
              <p className="small-print">
                By submitting, you agree that your story may be edited for
                clarity and may appear on the site or in other Quest for the
                Unexplained content.
              </p>
            </div>
          </form>
        </div>

        {/* Sidebar tips */}
        <aside className="submit-sidebar">
          <div className="submit-card">
            <h2 className="card-title">Tips for a Great Submission</h2>
            <ul className="tips-list">
              <li>
                Be as specific as you can about <strong>time, place</strong>,
                and what you were doing.
              </li>
              <li>
                Describe <strong>what you sensed</strong>: sights, sounds,
                smells, emotions, temperature changes, and physical sensations.
              </li>
              <li>
                Include <strong>other witnesses</strong> if there were any, and
                whether they experienced the same thing.
              </li>
              <li>
                Let us know if you have <strong>photos, video, or audio</strong>{" "}
                you&apos;d be willing to share later.
              </li>
              <li>
                It&apos;s okay if you don&apos;t have an explanation — that&apos;s
                why we&apos;re here.
              </li>
            </ul>
          </div>

          <div className="submit-card">
            <h3 className="card-title">Privacy & Anonymity</h3>
            <p className="helper-text">
              If you prefer, use an alias instead of your real name. We&apos;ll
              never publish your email address, and we can remove or obscure
              identifying details in your story on request.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
