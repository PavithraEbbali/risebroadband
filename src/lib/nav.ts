/**
 * Primary navigation. Single source for the header, the mobile drawer and the
 * footer's Explore column, so the three can never drift apart.
 */
export const primaryNav = [
  { label: 'Plans', href: '#plans' },
  { label: 'Full cost', href: '#fine-print' },
  { label: 'Add-ons', href: '#add-ons' },
  { label: 'Why us', href: '#why-us' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
] as const;

/** Same targets, absolute — the footer renders on legal routes too. */
export const primaryNavAbsolute = primaryNav.map((item) => ({
  label: item.label,
  href: `/${item.href}`,
}));
