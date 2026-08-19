/**
 * The nine reseller policy pages (§7.2). Order is preserved in the footer.
 *
 * "Do Not Sell or Share" is last by convention but is NOT optional: the CPRA
 * requires the opt-out link to be reachable from every page, which the footer
 * satisfies on every route.
 */
export const legalPages = [
  { href: '/privacy-policy', label: 'Privacy & Data Protection' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/cookies-policy', label: 'Cookies Policy' },
  { href: '/tcpa-policy', label: 'TCPA Policy' },
  { href: '/trademarks', label: 'Trademarks' },
  { href: '/marketing-policy', label: 'Marketing Policy' },
  { href: '/service-fulfillment', label: 'Service Fulfillment' },
  { href: '/pci-dss', label: 'PCI DSS Compliance' },
  { href: '/do-not-sell', label: 'Do Not Sell or Share My Personal Information' },
] as const;

