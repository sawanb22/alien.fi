import { Azeret_Mono, Poppins } from "next/font/google";
import "./landing.css";

const azeret = Azeret_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-azeret",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

/** Shared wrapper for `/` and legacy `/landing`; keeps fonts + scoped landing CSS together. */
export function LandingRouteShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`landing-shell ${azeret.variable} ${poppins.variable}`}
      data-landing="1"
    >
      {children}
    </div>
  );
}
