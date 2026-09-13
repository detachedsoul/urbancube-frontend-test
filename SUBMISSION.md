# Frontend Technical Assessment — Submission Note

## Approach

I approached the assessment by first breaking the supplied Figma designs into their major page sections and identifying reusable UI patterns before implementing the individual screens.

For the landing page, I focused on accurately reproducing the supplied desktop and mobile designs while maintaining responsive behavior across screen sizes. I also implemented the navigation states and interactions shown in the design, including the responsive mobile navigation, dropdown navigation sections, account actions, and the app-download interaction.

For the admin dashboard, I focused on building the main dashboard content using reusable components and static mock data, as no backend or API integration was required for the assessment. The implemented dashboard includes the statistics cards, transaction volume visualization, transaction period filters, bills payment success-rate visualization, and new-user sign-up table.

The implementation uses Next.js, React, TypeScript, Tailwind CSS, and Recharts where appropriate for the dashboard visualizations.


## Component Structure

I separated the implementation into page-level components and smaller reusable UI components based on their responsibilities.

## Landing Page

The landing page is composed of:

- `HeaderContainer` — combines the site header and hero section and handles the hero background assets.
- `Header` — manages the primary header layout, responsive navigation state, and account actions.
- `NavBar` — handles the navigation links, dropdown menus, and responsive mobile navigation.
AuthButtons` — provides reusable authentication/account actions across responsive layouts.
- `HeroSection` — contains the main hero content and app-download interaction.
- `WhyUs` — renders the product benefits using reusable data-driven sections.
- `HowItWorks` — renders the onboarding steps from a reusable data structure.
- `Features` — renders the spotlight feature cards from a reusable feature configuration.
- `Footer` — contains the final call-to-action and app-download links.

Where multiple elements followed the same visual pattern, I used arrays and .map() rather than duplicating markup. This made sections such as the navigation links, product benefits, feature cards, and onboarding steps easier to maintain.


## Admin Dashboard

The admin dashboard is broken into focused components:

- `StatsCards` — displays the dashboard statistics and period-based comparisons.
- `TransactionVolume` — manages the transaction-volume filters and chart data.
- `TransactionChart` — handles the transaction trend visualization using Recharts.
- `SuccessRate` — displays the bills payment success-rate visualization.
- `NewSignUps` — renders the recent user sign-up table.
- `Header` — provides the dashboard header area.

Dashboard data is kept separately in utility files such as stats-cards-data.ts and chart-data.ts, allowing the UI components to remain focused on presentation and interaction rather than having the mock data embedded throughout the components.

## Assumptions

- The assessment does not require backend or API integration, so static/mock data was used for dashboard statistics, charts, and user records.
- The supplied Figma design was treated as the primary source of truth for spacing, typography, layout, colors, and responsive behavior.
- Navigation links that point to areas outside the selected assessment screens were treated as navigation targets rather than fully implemented pages, in line with the assessment instructions.
- App Store and Google Play buttons were implemented as visual/download CTAs since no actual store URLs were provided.
- The dashboard visualizations use representative static data to reproduce the supplied design rather than real transaction data.

## Remaining Work / Improvements

The landing page implementation is complete for the sections and interactions provided in the supplied Figma designs.

The admin dashboard is partially complete. The main dashboard content and visualizations have been implemented, but the dashboard shell/navigation remains unfinished. Specifically, the sidebar navigation and the remaining header content/interactions would need to be completed to fully match the supplied Figma screen.

With additional time, I would:

1. Complete the admin dashboard sidebar/navigation and header to match the Figma design.
2. Review all responsive edge cases on the landing page across additional viewport sizes.
3. Run a final accessibility and code-quality pass, including keyboard navigation, semantic elements, and interactive-state checks.
4. Perform a final production build and regression check across both projects.

Overall, I prioritized completing the supplied landing-page experience and implementing the core admin dashboard content and component structure within the available assessment window.
