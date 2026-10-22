import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Promotion Services",
  description:
    "YouTube promotion services for creators and brands, including channel strategy, video SEO, paid promotion, and audience growth.",
};

const services = [
  {
    title: "YouTube Channel Strategy",
    description:
      "A clear content and growth plan built around your niche, audience, goals, and the videos you want to be known for.",
    features: [
      "Channel positioning and content pillars",
      "Audience and competitor research",
      "Publishing roadmap and growth targets",
    ],
  },
  {
    title: "Video SEO & Discovery",
    description:
      "Make every upload easier to discover with search-focused optimization that improves relevance, clicks, and watch time.",
    features: [
      "Keyword and topic research",
      "Titles, descriptions, tags, and metadata",
      "Thumbnail and click-through guidance",
    ],
  },
  {
    title: "YouTube Promotion Campaigns",
    description:
      "Put your best videos in front of relevant viewers through targeted campaigns designed to build genuine channel momentum.",
    features: [
      "Audience and placement targeting",
      "Campaign setup and optimization",
      "Performance tracking and reporting",
    ],
  },
  {
    title: "Audience & Channel Growth",
    description:
      "Turn attention into an engaged audience with consistent optimization across your content, channel experience, and community.",
    features: [
      "Retention and watch-time analysis",
      "Content performance reviews",
      "Ongoing experiments and recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">YouTube Promotion</span>
            <h1>Get discovered. Get watched. Grow on YouTube.</h1>
            <p>
              Focused promotion and channel growth support for creators and
              brands that want to build a stronger presence on YouTube.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card reveal" key={service.title}>
                <div>
                  <svg
                    className="icn"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m10 9 5 3-5 3V9Z" />
                  </svg>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="btn btn-signal"
                  style={{
                    marginTop: "20px",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Grow Your Channel &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="wrap">
          <div className="cta-box reveal">
            <h2>Ready to grow your YouTube presence?</h2>
            <p>
              Tell us about your channel and we&apos;ll recommend the right
              promotion plan for your goals.
            </p>
            <Link href="/contact" className="btn btn-hero-primary">
              Get Your YouTube Plan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
