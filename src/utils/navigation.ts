// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Services', url: '/services' },
  { name: 'Contact', url: '/#contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Company',
    links: [
      { name: 'About', url: '/about' },
      { name: 'Services', url: '/services' },
      { name: 'Service Area', url: '/#service-area' },
      { name: 'FAQ', url: '/#faq' },
      { name: 'Contact', url: '/#contact' },
    ],
  },
  {
    section: 'Contact',
    links: [
      { name: 'Email', url: 'mailto:info@hawthornscapes.com' },
      { name: 'Phone', url: 'tel:7208491565' },
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
