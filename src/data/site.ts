// Central site configuration (formerly _data/settings.yml). Edit this to change
// navigation, quick links, logos, or the People page sections.
//
// Colors and font sizes live at the top of src/styles/style.scss.

export const site = {
  title: 'Aerospace Controls Laboratory',
  tagline: 'Massachusetts Institute of Technology',
  description: 'The Aerospace Controls Lab @ MIT',
  url: 'https://acl.mit.edu',
  faviconFolder: '/images/favicons',
  defaultImage: '/images/social.jpg',
  fontEmbed: 'https://fonts.googleapis.com/css?family=Montserrat:300,500',

  header: {
    logo: '/images/logos/acl_logo.svg',
    mit: { logo: '/images/logos/mit_logo.svg', url: 'https://mit.edu/' },
    lids: { logo: '/images/logos/lids_logo.png', url: 'https://lids.mit.edu' },
    aeroastro: { logo: '/images/logos/aeroastro_logo.svg', url: 'https://aeroastro.mit.edu/' },
    accessibility: { url: 'https://accessibility.mit.edu/', label: 'Accessibility' },
  },

  menuItems: [
    { title: 'Home', url: '/' },
    { title: 'People', url: '/people' },
    { title: 'Projects', url: '/projects' },
    { title: 'Publications', url: '/publications' },
    { title: 'Contact', url: '/contact' },
  ],

  quickLinks: [
    { title: 'Prof. Jonathan How', url: 'https://www.mit.edu/~jhow/' },
    { title: 'ACL Admin Assistant', url: '/people/bryt' },
    { title: 'MIT AeroAstro', url: 'https://aeroastro.mit.edu/' },
    { title: 'YouTube Channel', url: 'https://www.youtube.com/user/AerospaceControlsLab' },
    { title: 'GitHub', url: 'https://www.github.com/mit-acl' },
    { title: 'ACL Wiki (internal)', url: 'https://wikis.mit.edu/confluence/display/acl/Home' },
  ],

  // Social icons shown in the header/footer. Keys are Font Awesome brand names
  // (e.g. github, youtube, linkedin); empty or missing entries are hidden.
  socials: {} as Record<string, string>,

  // People page sections for members with a profile page, in display order.
  // `type` matches the `position` field in src/content/members/*.md.
  positions: [
    { type: 'Admin', header: 'Administrative Assistants' },
    { type: 'Research', header: 'Research Scientists' },
    { type: 'Postdoc', header: 'Postdoctoral Scholars' },
    { type: 'PhD', header: 'PhD Students' },
    { type: 'Master', header: "Master's Students" },
    { type: 'Visiting', header: 'Visiting Scholars' },
  ],

  // Number of news posts per page on the home page.
  postsPerPage: 6,

  // Google Analytics tag. Set to '' to disable.
  analyticsId: 'UA-47348607-4',
};
