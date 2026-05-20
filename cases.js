const CASES = [
  {
    id: 'derictorii',
    title: 'Directorii',
    subtitle: 'B2B2C handyman marketplace in the US — adding new functionality and pages at scale while keeping a large, complex product coherent.',
    tags: ['UX Design', 'Design System', 'B2B SaaS'],
    year: '2025',
    status: 'In Progress',

    coverImage: 'images/Directorii.jpg',
    siteUrl: 'https://directorii.com/',

    metrics: [
      { num: '200+', label: 'Design system components' },
      { num: '30+', label: 'New pages shipped' },
      { num: '2025', label: 'Active project' },
      { num: 'B2B2C', label: 'Marketplace' },
    ],

    role: 'UX/UI & Product Designer',
    timeline: 'Ongoing',
    team: '1 PM · 4 Engineers',
    tools: ['Figma', 'Notion', 'Jira'],

    overview: 'Product-oriented UX/UI work on Directorii — a B2B2C handyman marketplace in the US. Responsible for designing complex digital product flows, interface logic, information architecture, and scalable UI patterns. The core challenge is translating business and technical requirements into clear, structured, user-facing experiences across a product with significant scope.',

    challenge: 'How do you add new functionality to a large-surface marketplace without losing coherence — and without every new feature becoming a one-off?',

    sections: [
      {
        label: 'Approach',
        title: 'Working within the existing design system',
        body: 'Each new feature starts from the existing component library. Where components cover the need, I use them directly. Where they don\'t, I extend them — new variants or components following the same token and naming conventions. Every addition goes back into the system, not just the screen. This keeps the visual language consistent even as the product surface expands.',
        visual: 'desktop',
      },
      {
        label: 'Execution',
        title: 'Designing complex flows and interface logic',
        body: 'The platform covers dozens of service categories, each with different flows, edge cases, and user types. The design challenge is keeping the interaction model consistent — same patterns for booking, filtering, profile management — regardless of category. I map reusable interaction patterns and document them to ensure new feature work doesn\'t reinvent shipped solutions.',
        visual: 'split',
      },
      {
        label: 'Delivery',
        title: 'Translating requirements into production-ready UI',
        body: 'Working on a live product means design decisions have immediate consequences. Close collaboration with engineering is built into the process — regular design reviews in Figma, shared Jira board for handoff tracking, and short feedback loops. The goal is structured, production-ready output that developers can build from without ambiguity.',
        visual: 'quote',
        quote: 'The design system doesn\'t slow you down — it removes the decisions you don\'t need to make again.',
      },
    ],

    outcome: 'New functionality ships faster because the design system covers the common cases. When engineers need a new screen, a large portion of the components are already available. Visual consistency is maintained across a product with significant surface area, and handoff friction is low.',

    learnings: 'Joining a live product mid-stream requires a different mindset than greenfield work — contribution over reinvention. Learning the existing system before proposing changes is essential. Documentation debt accumulates fast; keeping the system current is as important as shipping new screens.',
  },

  {
    id: 'profisea-labs',
    title: 'Profisea Labs',
    subtitle: 'AI-based multi-cloud FinOps platform — design system for consistency and scale, SaaS dashboard rework, and investor-grade marketing collateral.',
    tags: ['Design System', 'SaaS', 'FinOps'],
    year: '2022',
    status: 'Shipped',

    coverImage: 'images/Profisea.jpg',
    siteUrl: 'https://profisealabs.com/',

    metrics: [
      { num: '1', label: 'Design system built' },
      { num: '2', label: 'Marketing teams supported' },
      { num: '3 mo', label: 'Engagement' },
      { num: '2022', label: 'Year' },
    ],

    role: 'UX/UI Designer',
    timeline: '3 months',
    team: '1 PM · 3 Engineers',
    tools: ['Figma', 'Notion'],

    overview: 'Profisea Labs is an AI-driven platform helping engineering teams manage and reduce multi-cloud infrastructure costs. Work covered two parallel tracks: strengthening the design system for consistency and scale, and reworking the SaaS dashboard to make complex financial data more readable and actionable. Beyond product, supported two marketing teams with promotional assets and crafted investor-grade documents — white papers and pitch decks — used in fundraising communications.',

    challenge: 'How do you make complex multi-cloud cost data readable and actionable — while simultaneously building the design system foundation that makes future work possible?',

    sections: [
      {
        label: 'Design System',
        title: 'Strengthening the system for consistency and scale',
        body: 'The existing product UI had grown organically — inconsistent button styles, variable spacing, and colour values that had drifted from the brand. I audited the product, identified recurring patterns, and built a component library with a shared token layer. The token structure was co-designed with the front-end team to ensure it mapped directly to code, not just Figma.',
        visual: 'desktop',
      },
      {
        label: 'Product',
        title: 'Reworking the dashboard for readability',
        body: 'The SaaS dashboard carries high information density — cost breakdowns, cloud comparisons, anomaly detection. I reworked the data visualisation patterns: clear chart labelling, readable colour coding across multi-cloud comparisons, and summary cards that surfaced actionable metrics above the fold without requiring users to read everything.',
        visual: 'split',
      },
      {
        label: 'Marketing',
        title: 'Investor-grade documents and promotional assets',
        body: 'Alongside the product work, I designed infographics for the blog, social creatives, and crafted pitch decks and white papers used in investor outreach. The challenge was translating highly technical content — cost allocation models, AI anomaly detection — into visuals that communicated value clearly to a business audience without losing technical credibility.',
        visual: 'quote',
        quote: '"We needed materials that worked for engineers AND for investors. That\'s a harder brief than it sounds."',
      },
    ],

    outcome: 'A design system that brought visual consistency to the product and reduced UI-related feedback in development reviews. Marketing materials that supported fundraising conversations. The visual system established a brand foundation the team continued to build on.',

    learnings: 'Working across two parallel tracks (product and marketing) requires strict context switching discipline. The design system work would have moved faster with engineering involvement from the start; building component tokens in isolation from code meant some translation work later.',
  },

  {
    id: 'eco-hub-map',
    title: 'Eco Hub Map',
    subtitle: 'Full redesign of a platform for eco-friendly businesses — improving usability and visual consistency, and building a design system that made growth sustainable.',
    tags: ['UX Research', 'Redesign', 'Design System'],
    year: '2022–2023',
    status: 'Shipped',

    coverImage: 'images/Ecohub.jpg',
    siteUrl: 'https://www.ecohubmap.com/',

    metrics: [
      { num: '1', label: 'Full redesign shipped' },
      { num: '1', label: 'Design system established' },
      { num: '13 mo', label: 'Engagement' },
      { num: '2023', label: 'Year' },
    ],

    role: 'UX/UI Designer',
    timeline: '13 months',
    team: '2 PMs · 3 Engineers',
    tools: ['Figma', 'Hotjar', 'Google Analytics'],

    overview: 'Eco Hub Map is a directory platform connecting users with eco-friendly businesses worldwide. Drove a full redesign of the platform, improving usability and visual consistency across the product, and established a design system that made shipping new pages and features faster and more consistent. Closed the loop on shipped work through heatmaps, A/B tests, and user feedback, and supported brand growth with marketing materials including email templates, banners, and decks.',

    challenge: 'How do you shift a platform\'s visual identity toward something more credible — without losing the approachability that made it work for small eco businesses?',

    sections: [
      {
        label: 'Research',
        title: 'Closing the loop with heatmaps, A/B tests, and user feedback',
        body: 'Before redesigning, I mapped where the existing experience broke down. Heatmap analysis and session recordings showed consistent drop-off at the search and filter stage. User interviews revealed two distinct audiences — browsers and searchers — that the existing IA served neither well. Every design decision in the redesign was tied back to a specific finding.',
        visual: 'quote',
        quote: '"I know there must be something near me — but I can never figure out how to filter down to what I actually want."',
      },
      {
        label: 'Redesign',
        title: 'Improving usability and visual consistency across the product',
        body: 'The new IA separated discovery from search, with listing pages restructured to surface key business information above the fold. The tone shift came from typography, spacing, and colour — moving from a cluttered, colourful layout to a clean, high-contrast design. Marketing materials followed the same visual language: email templates, banners, and decks built to support brand growth.',
        visual: 'desktop',
      },
      {
        label: 'Design System',
        title: 'Making new pages faster and more consistent to ship',
        body: 'I built a design system alongside the redesign — token layer, listing card variants, and documentation covering naming and spacing conventions. Within three months of launch, the team shipped two new category pages without additional design time. The system made growth sustainable without visual drift.',
        visual: 'split',
      },
    ],

    outcome: 'A redesigned platform with stronger visual credibility and a navigable search experience. The design system enabled the team to extend the platform post-launch without design involvement for every new page. Heatmap data post-launch showed significantly more engagement with search and filter controls.',

    learnings: 'Redesigning a live platform is a stakeholder management exercise as much as a design one — being explicit about what\'s changing and why, backed by data, made decisions defensible. Building the design system during the redesign rather than after would have saved time in the final delivery sprint.',
  },

  {
    id: 'ruhanka',
    title: 'Ruhanka',
    subtitle: 'An events discovery platform for Cherkasy — my own project, built to solve the problem of scattered event information in a city with no single source.',
    tags: ['Product Design', 'MVP', 'Own Project'],
    year: '2024',
    status: 'Live (MVP)',

    coverImage: 'images/ruhanka.jpg',
    siteUrl: null,

    metrics: [
      { num: 'MVP', label: 'Live and collecting data' },
      { num: '1', label: 'City covered' },
      { num: '2024', label: 'Year' },
      { num: '100%', label: 'Self-initiated' },
    ],

    role: 'Product Designer & Owner',
    timeline: '4 months to MVP',
    team: '1 Developer · 1 Designer',
    tools: ['Figma', 'FigJam', 'Notion'],

    overview: 'Ruhanka is my own project — I am the founder and product owner. It\'s a platform that aggregates events happening in Cherkasy, Ukraine. The problem was simple: locals and tourists couldn\'t find out what was on because information was scattered across dozens of social media pages and venue accounts. We built an MVP to validate the idea, collect event data, and measure engagement before investing in v2.',

    challenge: 'How do you design and ship an MVP fast enough to test market fit — without cutting corners that create rework later?',

    sections: [
      {
        label: 'Problem',
        title: 'Information fragmentation as a UX problem',
        body: 'Research started close to home — conversations with locals and tourists about what made Cherkasy feel like "there\'s nothing to do here." The answer was consistent: not a lack of events, but no single reliable source. Events existed; they just lived in Instagram stories, Facebook groups, and venue sites nobody knew to check. The platform\'s job: be the one place to look.',
        visual: 'quote',
        quote: '"I only found out about the concert after it happened — someone mentioned it on Instagram the next day."',
      },
      {
        label: 'Design',
        title: 'Prioritising clarity over completeness in v1',
        body: 'For an MVP, every feature cut is a design decision. I focused the IA on one primary flow: browse upcoming events by date, filter by category, visit the event page. No accounts, no social features, no bookmarking in v1. A clean event card component with date, venue, category, and image was the entire browsing surface — fast to build, fast to understand.',
        visual: 'split',
      },
      {
        label: 'Analytics',
        title: 'Designing the feedback loop from day one',
        body: 'Before launch I set up event tracking to answer the questions that mattered for v2: which categories get the most clicks, what search terms people type, how far ahead they browse. Analytics as product inputs, not vanity metrics. The data shapes what we build next.',
        visual: 'desktop',
      },
    ],

    outcome: 'A live MVP actively collecting events and analytics data. The platform validated the core hypothesis: people in Cherkasy will use a centralised events source if it exists. Analytics show consistent return visits around weekends — the primary use case we designed for.',

    learnings: 'Building your own product is a different kind of pressure — there\'s no PM to push back when scope creeps, and no client deadline to force a decision. Self-discipline on scope was the hardest part. The MVP constraint was a design gift: it forced every feature to justify its v1 inclusion.',
  },
];

// Utility: get case by id
function getCaseById(id) {
  return CASES.find(c => c.id === id) || null;
}

// Utility: get next case (wraps around)
function getNextCase(id) {
  const idx = CASES.findIndex(c => c.id === id);
  return CASES[(idx + 1) % CASES.length];
}
