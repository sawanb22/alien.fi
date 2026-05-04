import Link from "next/link";

export const metadata = {
  title: "Inventory · Alien.fi",
  description: "Map of legacy HTML and JSX sources (repo paths).",
};

export default function InventoryPage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "48px 24px 80px",
        fontFamily: "var(--af-font-mono, monospace)",
      }}
    >
      <p className="af-meta" style={{ marginBottom: 24 }}>
        <Link href="/" style={{ color: "var(--af-accent-strong)" }}>
          ← Home
        </Link>
        {" · "}
        <Link href="/landing" style={{ color: "var(--af-accent-strong)" }}>
          AI landing (Next)
        </Link>
      </p>
      <h1 className="af-h1" style={{ marginBottom: 16 }}>
        Project inventory
      </h1>
      <p className="af-body" style={{ marginBottom: 32 }}>
        Paths are relative to the repository root (
        <code style={{ opacity: 0.85 }}>alien.fi/</code>). Open these files in
        the editor or via the file system; they are not served as Next routes
        yet.
      </p>

      <section style={{ marginBottom: 40 }}>
        <h2 className="af-h3" style={{ marginBottom: 12 }}>
          ui_kits/web (marketing kit)
        </h2>
        <ul className="af-body" style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <code>ui_kits/web/index.html</code> — entry (React + Babel in
            browser)
          </li>
          <li>
            <code>ui_kits/web/web.css</code>,{" "}
            <code>colors_and_type.css</code> (repo root)
          </li>
          <li>
            Loaded JSX: <code>Primitives.jsx</code>, <code>Navbar.jsx</code>,{" "}
            <code>Footer.jsx</code>, <code>HomePage.jsx</code>,{" "}
            <code>AboutPage.jsx</code>, <code>PortfolioPage.jsx</code>,{" "}
            <code>CareersPage.jsx</code>
          </li>
          <li>
            Present but not wired in <code>index.html</code>:{" "}
            <code>HomeScreen.jsx</code>, <code>Header.jsx</code>,{" "}
            <code>Atoms.jsx</code>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 className="af-h3" style={{ marginBottom: 12 }}>
          Root HTML prototypes
        </h2>
        <ul className="af-body" style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <code>Landing Page.html</code> — uses{" "}
            <code>tweaks-panel.jsx</code>
          </li>
          <li>
            <code>Solutions.html</code>, <code>Services.html</code>,{" "}
            <code>Industries.html</code>, <code>Contact.html</code>,{" "}
            <code>Case Studies.html</code> — each uses{" "}
            <code>shared/components.jsx</code>, <code>shared/core.css</code>,{" "}
            <code>shared/cursor.js</code>
          </li>
          <li>
            Case studies (8 files): <code>Case Study - *.html</code> — seven
            use <code>shared/case-study-template.jsx</code>;{" "}
            <code>Case Study - Meridian Insurance.html</code> is inline-only
            (no template file)
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 className="af-h3" style={{ marginBottom: 12 }}>
          shared/
        </h2>
        <ul className="af-body" style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <code>shared/components.jsx</code> — atoms, nav, loader (
            <code>window.AF</code> tokens)
          </li>
          <li>
            <code>shared/case-study-template.jsx</code>
          </li>
          <li>
            <code>shared/core.css</code>, <code>shared/cursor.js</code>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 className="af-h3" style={{ marginBottom: 12 }}>
          preview/
        </h2>
        <p className="af-body">
          Static design-system HTML cards (e.g.{" "}
          <code>preview/colors-surface.html</code>,{" "}
          <code>preview/component-buttons.html</code>, …) — no shared JSX.
        </p>
      </section>

      <section>
        <h2 className="af-h3" style={{ marginBottom: 12 }}>
          next-app/
        </h2>
        <p className="af-body">
          Tokens for this app are synced to{" "}
          <code>public/colors_and_type.css</code> from repo-root{" "}
          <code>colors_and_type.css</code> on <code>npm run dev</code> /{" "}
          <code>npm run build</code> (<code>npm run sync:tokens</code>).
        </p>
      </section>
    </main>
  );
}
