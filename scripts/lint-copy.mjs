#!/usr/bin/env node
/**
 * §5.3 — copy linter.
 *
 * Fails the build on marketing language that a carrier compliance reviewer or
 * Google Ads policy reviewer would treat as a misrepresentation: claims of being
 * the carrier, unverifiable superlatives, manufactured urgency, and absolute
 * promises the operator cannot keep.
 *
 * Scope is user-visible copy only — .tsx/.ts under src/ plus the app's metadata.
 * Matching is case-insensitive and word-boundary aware so "no fees" does not
 * trip on "no feespec". Exempt a genuine false positive by adding the narrowest
 * possible substring to lint-allowlist.txt, never by weakening a rule here.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const SRC = join(ROOT, 'src');

/** [pattern, why it is banned] */
const RULES = [
  // --- identity: claiming to BE the carrier -----------------------------
  [/\bofficial (?:site|website|dealer|store|provider)\b/i, 'implies this is the carrier itself'],
  [/\bwe are (?:rise|the carrier)\b/i, 'claims carrier identity'],
  [/\bdirect from (?:rise|the provider)\b/i, 'implies a direct carrier channel'],

  // --- unverifiable superiority ----------------------------------------
  [/\b(?:best|cheapest|lowest|fastest|#\s?1|number one)\s+(?:price|deal|rate|internet|provider|speed)/i, 'unverifiable superlative'],
  [/\bguaranteed\s+(?:lowest|best|savings|speed)/i, 'guarantee the operator cannot honour'],
  [/\bUS-based\b/i, 'staffing-location claim the operator cannot verify'],
  [/\bno hidden (?:fees|charges|costs)\b/i, 'absolute claim contradicted by the published fee schedule'],
  [/\bfree installation\b/i, 'a $99 connection fee applies'],
  [/\bunlimited everything\b/i, 'overbroad absolute claim'],

  // --- manufactured urgency / scarcity ----------------------------------
  [/\b(?:hurry|act now|limited time only|today only|ends tonight|while supplies last)\b/i, 'manufactured urgency'],
  [/\bonly \d+ (?:spots|slots|left)\b/i, 'fabricated scarcity'],
  [/\blast chance\b/i, 'manufactured urgency'],

  // --- unsupportable service claims -------------------------------------
  [/\b(?:local|nearby) technician\b/i, 'technician dispatch is the carrier\u2019s; locality is not knowable'],
  [/\bsame[- ]day (?:install|installation|service)\b/i, 'install scheduling is set by the carrier'],
  [/\bavailable (?:now|everywhere|in your area)\b/i, 'availability is address-by-address and unknown at render time'],
  [/\b(?:100%|always) (?:reliable|uptime|available)\b/i, 'absolute reliability claim'],
  [/\bno credit check\b/i, 'the carrier may run one'],

  // --- placeholders that must never ship --------------------------------
  [/\blorem ipsum\b/i, 'placeholder copy'],
  [/TODO\(client\)/, 'unresolved client placeholder'],
  [/\byour company\b/i, 'unreplaced template placeholder'],
];

const allowlist = readFileSync(join(ROOT, 'scripts', 'lint-allowlist.txt'), 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === 'node_modules' || name === '.next') continue;
      walk(full, out);
    } else if (/\.(tsx?|mdx?)$/.test(name)) {
      out.push(full);
    }
  }
  return out;
}

let failures = 0;
for (const file of walk(SRC)) {
  const rel = relative(ROOT, file).split(sep).join('/');
  const lines = readFileSync(file, 'utf8').split('\n');

  lines.forEach((line, i) => {
    if (allowlist.some((a) => line.includes(a) || rel.includes(a))) return;

    for (const [pattern, why] of RULES) {
      const hit = line.match(pattern);
      if (!hit) continue;
      failures += 1;
      console.error(`${rel}:${i + 1}  "${hit[0]}"\n    \u2192 ${why}\n`);
    }
  });
}

if (failures) {
  console.error(`\u2717 lint-copy: ${failures} banned phrase${failures === 1 ? '' : 's'}.`);
  process.exit(1);
}
console.log('\u2713 lint-copy: no banned phrases.');
