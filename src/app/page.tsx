import Link from "next/link";

const highlights = [
  "Composable UI ready for Vercel deployment",
  "Fast refresh development experience",
  "Zero-config TypeScript setup"
];

export default function HomePage() {
  return (
    <main>
      <h1>Hi there 👋</h1>
      <p>
        Welcome aboard! This Next.js experience is prepped with modern tooling so
        you can ship dynamic ideas to the web without friction.
      </p>
      <section aria-label="Highlights">
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <Link className="cta" href="https://nextjs.org/docs">
        Explore Next.js Docs <span>→</span>
      </Link>
    </main>
  );
}
