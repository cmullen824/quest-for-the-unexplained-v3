// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quest for the Unexplained",
  description:
    "Documenting real encounters with the strange, dark, and mysterious.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* === GLOBAL HEADER (appears on every page) === */}
        <header className="site-header">
          <div className="brand">
            {/* When you're ready, drop your crest in /public and uncomment */}
            {/* <img
              src="/logo-crest.png"
              alt="Quest for the Unexplained crest"
              className="brand-logo"
            /> */}
            <div>
              <h1 className="brand-title">Quest for the Unexplained</h1>
              <p className="brand-tagline">
                Documenting real encounters with the strange, dark, and
                mysterious.
              </p>
            </div>
          </div>
          <nav className="site-nav">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/encounters" className="nav-link">
              Encounters
            </Link>
            <Link href="/submit" className="nav-link">
              Submit
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </nav>
        </header>

        {/* === PAGE-SPECIFIC CONTENT === */}
        {children}

        {/* === GLOBAL FOOTER (appears on every page) === */}
        <footer className="site-footer">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Quest for the Unexplained. All
              rights reserved.
            </p>
            <p className="footer-note">
              Calm, investigative storytelling from the edge of the unknown.
            </p>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">
              TikTok
            </a>
            <a href="#" className="footer-link">
              Instagram
            </a>
            <a href="#" className="footer-link">
              Reddit
            </a>
            <a href="#" className="footer-link">
              Discord
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
