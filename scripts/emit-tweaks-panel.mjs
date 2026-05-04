import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "..", "..", "tweaks-panel.jsx");
const out = path.join(__dirname, "..", "components", "tweaks-panel", "tweaks-panel.tsx");

let s = fs.readFileSync(src, "utf8");
const start = s.indexOf("const __TWEAKS_STYLE");
const skipUse = s.indexOf("// ── TweaksPanel");
const end = s.indexOf("Object.assign(window");
if (start < 0 || skipUse < 0 || end < 0) throw new Error("parse bounds");
s = (s.slice(start, skipUse).trim() + "\n\n" + s.slice(skipUse, end).trim()).trim();

const header = `"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

function postToParent(msg: unknown) {
  if (typeof window === "undefined") return;
  try {
    if (window.parent !== window) window.parent.postMessage(msg, "*");
  } catch {
    /* ignore */
  }
}

export function useTweaks<T extends Record<string, unknown>>(defaults: T): [T, (key: keyof T | Partial<T>, val?: unknown) => void] {
  const [values, setValues] = useState<T>(defaults);
  const setTweak = useCallback((keyOrEdits: keyof T | Partial<T>, val?: unknown) => {
    const edits =
      typeof keyOrEdits === "object" && keyOrEdits !== null && !Array.isArray(keyOrEdits)
        ? (keyOrEdits as Partial<T>)
        : ({ [keyOrEdits as string]: val } as Partial<T>);
    setValues((prev) => ({ ...prev, ...edits }));
    postToParent({ type: "__edit_mode_set_keys", edits });
  }, []);
  return [values, setTweak];
}

`;

s = s.replace(/function TweaksPanel\(\{ title = 'Tweaks', children \}\)/, "function TweaksPanel({ title = 'Tweaks', children, defaultOpen = false }: { title?: string; children?: ReactNode; defaultOpen?: boolean })");
s = s.replace(
  "const [open, setOpen] = React.useState(false);",
  "const [open, setOpen] = useState(!!defaultOpen);",
);
s = s.replace(/React\.useState/g, "useState");
s = s.replace(/React\.useRef/g, "useRef");
s = s.replace(/React\.useEffect/g, "useEffect");
s = s.replace(/React\.useCallback/g, "useCallback");
s = s.replace(/window\.parent\.postMessage/g, "postToParent");

s += `

export {
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton,
};
`;

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, header + s, "utf8");
console.log("Wrote", out);
