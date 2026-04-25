// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Service Area', url: '/#service-area' },
  { name: 'FAQ', url: '/#faq' },
  { name: 'Contact', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Services',
    links: [
      { name: 'Lawn & Maintenance', url: '/services' },
      { name: 'Installation & Design', url: '/services' },
      { name: 'Hardscape & Structures', url: '/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About', url: '/' },
      { name: 'Service Area', url: '/#service-area' },
      { name: 'FAQ', url: '/#faq' },
      { name: 'Contact', url: '/contact' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: '#',
  x: '#',
  github: '#',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
