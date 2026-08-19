/**
 * Total Home Advanced Wi-Fi content. Specs and the eero disclaimer are verbatim from
 * riseinternet.com/advanced-wifi (captured 2026-08-06, see docs/scrape-report.md §4).
 */

export const meshSpecs = [
  { label: 'Wired throughput', value: 'Up to 2.3 Gbps' },
  { label: 'Wireless throughput', value: 'Up to 1.8 Gbps' },
  { label: 'Coverage per unit', value: 'Up to 2,000 sq. ft.' },
  { label: 'Connected devices', value: '120+ supported' },
  { label: 'Bands', value: 'Dual-band 2.4 GHz & 5 GHz' },
  { label: 'Ethernet', value: '2 × 2.5 GbE auto-sensing' },
] as const;

/** Feature labels and descriptions verbatim from the "A BETTER WAY TO INTERNET" grid. */
export const meshFeatures = [
  {
    id: 'threat',
    title: 'Active threat protection',
    body:
      'Automatically blocks malicious sites from phishing prompts, viruses, and advanced cyberattacks.',
  },
  {
    id: 'insights',
    title: 'Network insights',
    body:
      'View network activity, data use, security scans, and more from a simple dashboard to quickly understand ' +
      'and adjust network settings and performance.',
  },
  {
    id: 'adblock',
    title: 'Ad blocking',
    body:
      'Removes inappropriate pop-ups, dangerous clickbait, and harmful ads to control what reaches your family ' +
      'online.',
  },
  {
    id: 'scheduling',
    title: 'Advanced Wi-Fi scheduling',
    body:
      'Schedule online and offline time for specific apps to limit screen time — on individual devices or ' +
      'across the whole house.',
  },
  {
    id: 'blocklist',
    title: 'Block and allow sites',
    body: 'Block or allow specific websites on your network or devices.',
  },
  {
    id: 'filter',
    title: 'Content filter',
    body:
      'Block access to categories of websites for different age groups — like adult content, violence, or ' +
      'illegal activity.',
  },
  {
    id: 'hotspot',
    title: 'Hotspot backup',
    body:
      'Wirelessly connect your eero network to a backup hotspot to keep your wifi up and running even when your ' +
      'eero connection goes down.',
  },
] as const;

/** Verbatim page-level disclaimer from /advanced-wifi. */
export const MESH_DISCLAIMER =
  'eero products and services are subject to the disclaimers located at: eero.com/legal/disclaimers. ' +
  'Wi-Fi 7 speeds require compatible client devices. Rise Internet service availability and pricing terms ' +
  'apply — see riseinternet.com for details.';
