import type { Metadata } from 'next';
import LegalShell from '@/components/layout/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cookies Policy',
  description:
    'What cookies and similar technologies this site uses, what each category does, how long they last, ' +
    'and how to control them.',
  alternates: { canonical: '/cookies-policy' },
};

export default function CookiesPolicyPage() {
  return (
    <LegalShell
      title="Cookies Policy"
      summary="The cookies and similar technologies this website uses, what each one is for, and how to turn the optional ones off."
      updated="2026-08-06"
      callout={
        <p>
          <strong>Strictly necessary cookies are always on</strong> — the site cannot function
          without them. Everything else (analytics, advertising) is off until you consent, and you
          can change your mind at any time.
        </p>
      }
    >
      <section>
        <h2>What cookies are</h2>
        <p>
          A cookie is a small text file placed on your device by a website. It lets the site
          remember something between page loads or between visits. We also use closely related
          technologies that serve the same purpose and are covered by this policy: local storage and
          session storage, pixels and tracking beacons, and software development kits embedded in
          third-party scripts. Where this policy says &ldquo;cookies&rdquo;, it means all of these.
        </p>
      </section>

      <section>
        <h2>Categories we use</h2>

        <h3>1. Strictly necessary — always active</h3>
        <p>
          These make the site work. They cannot be switched off through our consent banner because
          disabling them would break core functionality. They do not track you across other sites.
        </p>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>What it does</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Consent state</td>
              <td>Remembers which cookie categories you accepted, so we stop asking.</td>
              <td>12 months</td>
            </tr>
            <tr>
              <td>Session continuity</td>
              <td>Keeps your form entries intact as you move around the site.</td>
              <td>Session</td>
            </tr>
            <tr>
              <td>Security and abuse prevention</td>
              <td>
                Detects automated submissions and protects forms against cross-site request forgery.
              </td>
              <td>Session</td>
            </tr>
            <tr>
              <td>Load balancing</td>
              <td>Routes your requests consistently to the same server.</td>
              <td>Session</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Analytics — requires your consent</h3>
        <p>
          These tell us how the site is used in aggregate: which pages people read, where they stop
          scrolling, which buttons get clicked and where visitors give up. We use this to fix what
          is not working. Analytics identifiers are pseudonymous and IP addresses are truncated
          where the provider supports it.
        </p>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>What it does</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Visitor measurement</td>
              <td>Distinguishes new from returning visitors and counts sessions.</td>
              <td>Up to 24 months</td>
            </tr>
            <tr>
              <td>Session analytics</td>
              <td>Groups page views into a single visit for path analysis.</td>
              <td>30 minutes</td>
            </tr>
            <tr>
              <td>Performance monitoring</td>
              <td>
                Records page load timings and Core Web Vitals so we can find slow pages.
              </td>
              <td>Session</td>
            </tr>
          </tbody>
        </table>

        <h3>3. Advertising and attribution — requires your consent</h3>
        <p>
          These let us understand which advertisements led to an enquiry and avoid showing you the
          same advertisement repeatedly. They may be set by advertising platforms and can be used by
          those platforms to build a profile of your interests across sites.
        </p>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>What it does</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conversion attribution</td>
              <td>Connects an availability enquiry back to the advertisement that led to it.</td>
              <td>Up to 90 days</td>
            </tr>
            <tr>
              <td>Audience and remarketing</td>
              <td>
                Allows advertising platforms to show relevant advertisements after your visit.
              </td>
              <td>Up to 13 months</td>
            </tr>
            <tr>
              <td>Frequency capping</td>
              <td>Limits how often the same advertisement is shown to you.</td>
              <td>Up to 30 days</td>
            </tr>
          </tbody>
        </table>
        <p>
          We do not use advertising cookies to infer sensitive characteristics, and we do not permit
          our advertising partners to sell data collected on this site.
        </p>
      </section>

      <section>
        <h2>How to control cookies</h2>
        <ul>
          <li>
            <strong>Our consent banner</strong> — appears on your first visit and lets you accept or
            reject analytics and advertising separately. Your choice is remembered for 12 months.
          </li>
          <li>
            <strong>Change your mind later</strong> — email{' '}
            <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> and we will reset your
            preference, or clear this site&rsquo;s cookies in your browser to be re-prompted.
          </li>
          <li>
            <strong>Global Privacy Control</strong> — if your browser or extension sends a GPC
            signal, we treat it as a rejection of all non-essential cookies without you having to
            interact with the banner.
          </li>
          <li>
            <strong>Browser settings</strong> — every major browser lets you block or delete
            cookies. Blocking strictly necessary cookies will prevent parts of this site from
            working, including the availability checker.
          </li>
          <li>
            <strong>Device-level controls</strong> — mobile operating systems offer settings that
            limit advertising identifiers across all apps and sites.
          </li>
        </ul>
      </section>

      <section>
        <h2>Third-party cookies</h2>
        <p>
          Some cookies described above are set by third parties rather than by us. Those parties act
          as independent controllers for the data they collect and their own privacy policies apply.
          We only allow those cookies to be set after you consent to the relevant category. If you
          follow a link from this site to riseinternet.com or any other site, that site&rsquo;s own
          cookie practices apply from the moment you arrive.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          As we add or remove tools, this policy will change. The &ldquo;last updated&rdquo; date
          above reflects the most recent revision. Where a change introduces a new category of
          cookie, we will ask for consent again rather than relying on your previous answer.
        </p>
        <p>
          Cookies are one of several ways we handle personal data — see our{' '}
          <a href="/privacy-policy">Privacy &amp; Data Protection</a> policy for the full picture.
        </p>
      </section>
    </LegalShell>
  );
}
