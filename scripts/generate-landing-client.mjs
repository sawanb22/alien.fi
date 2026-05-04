import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..", "..");
const htmlPath = path.join(repoRoot, "Landing Page.html");
const outPath = path.join(__dirname, "..", "app", "landing", "LandingPageClient.tsx");

const html = fs.readFileSync(htmlPath, "utf8");
const babelStart = html.indexOf('<script type="text/babel">');
const babelOpenLen = '<script type="text/babel">'.length;
const reactDomIdx = html.indexOf("ReactDOM.createRoot", babelStart);
if (babelStart < 0 || reactDomIdx < 0) throw new Error("Could not find babel block");

let body = html.slice(babelStart + babelOpenLen, reactDomIdx).trim();
body = body.replace(/^const \{useState,useEffect,useRef,useCallback\}=React;\s*/m, "");
body = body.replace(/^const TD=/m, "const TWEAK_DEFAULTS=");
body = body.replace(/useTweaks\(TD\)/g, "useTweaks(TWEAK_DEFAULTS)");
body = body.replace(/function App\(\)/g, "export default function LandingPageClient()");
body = body.replace(/src="assets\//g, 'src="/assets/');
body = body.replace(/logo-icon\.png/g, "logo-icon.svg");
body = body.replace(/logo-with-font\.png/g, "logo-with-font.svg");
body = body.replace(/logo-3d\.png/g, "logo-3d.svg");

// Nav: HTML file links -> Next routes
body = body.replace(
  /<a href="Landing Page\.html"/g,
  '<Link href="/landing"',
);
body = body.replace(
  /\{\[\['Services','Services\.html'\],\['Industries','Industries\.html'\],\['Solutions','Solutions\.html'\],\['Case Studies','Case Studies\.html'\],\['Contact','Contact\.html'\]\]\.map\(\(\[l,h\]\)=>/g,
  "{[['Services','/services'],['Industries','/industries'],['Solutions','/solutions'],['Case Studies','/case-studies'],['Contact','/contact']].map(([l,h])=>",
);
body = body.replace(
  /<a key=\{l\} href=\{h\}/g,
  "<Link key={l} href={h}",
);
body = body.replace(
  /onMouseLeave=\{e=>e\.target\.style\.color='rgba\(0,0,0,0\.6\)'\}>\{l\}<\/a>/g,
  "onMouseLeave={e=>e.currentTarget.style.color='rgba(0,0,0,0.6)'}>{l}</Link>",
);

// Hero CTAs
body = body.replace(
  /<a href="Contact\.html"/g,
  '<Link href="/contact"',
);
body = body.replace(
  /(<Link href="\/contact"[^>]*>Start a project[\s\S]*?<\/a>)/,
  (m) => m.replace("</a>", "</Link>"),
);
body = body.replace(
  /<a href="Services\.html"/g,
  '<Link href="/services"',
);
body = body.replace(
  /(See services →)<\/a>/,
  "$1</Link>",
);

// TweakToggle: wire to tweaks state (replace broken id-only usage)
body = body.replace(
  /<TweakToggle id="showStats" label="Show stats strip"\/>/g,
  '<TweakToggle label="Show stats strip" value={!!tweaks.showStats} onChange={(v) => setTweak(\'showStats\', v)} />',
);

// TweaksPanel: visible when not in iframe host
body = body.replace(
  /<TweaksPanel>/g,
  "<TweaksPanel defaultOpen>",
);

// Rename [tweaks, setTweak] - App uses tweaks - the destructuring is const [tweaks,setTweak]=useTweaks - good

const header = `'use client';

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  TweaksPanel,
  TweakSection,
  TweakToggle,
  useTweaks,
} from "@/components/tweaks-panel/tweaks-panel";
import { LandingChrome } from "./LandingChrome";

`;

const footer = `
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, header + body + footer, "utf8");
console.log("Wrote", outPath, "bytes", fs.statSync(outPath).size);
