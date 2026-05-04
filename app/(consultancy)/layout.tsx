import { Azeret_Mono, Poppins } from "next/font/google";
import type { Metadata } from "next";
import { ConsultancyChrome } from "@/components/consultancy/ConsultancyChrome";
import { ConsultancyResponsiveProvider } from "@/components/consultancy/ConsultancyResponsiveProvider";
import "./consultancy-core.css";

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
  title: "Alien.fi — Consultancy",
  description:
    "AI consultancy — services, industries, solutions, and case studies.",
};

export default function ConsultancyGroupLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConsultancyResponsiveProvider>
      <div
        className={`consultancy-shell ${azeret.variable} ${poppins.variable}`}
        data-consultancy="1"
      >
        <ConsultancyChrome />
        {children}
      </div>
    </ConsultancyResponsiveProvider>
  );
}
