import { Azeret_Mono, Poppins } from "next/font/google";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Alien.fi — AI Consultancy",
  description:
    "Full-service AI consultancy — strategy, custom development, implementation, and managed services.",
};

export default function LandingLayout({
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
