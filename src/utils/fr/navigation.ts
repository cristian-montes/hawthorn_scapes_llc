const navBarLinks = [
  { name: 'Accueil', url: '/fr' },
  { name: 'Services', url: '/fr/services' },
  { name: 'Contact', url: '/fr/contact' },
];

const footerLinks = [
  {
    section: 'Services',
    links: [
      { name: 'Entretien de pelouse', url: '/fr/services' },
      { name: 'Installation et conception', url: '/fr/services' },
      { name: 'Aménagements et structures', url: '/fr/services' },
    ],
  },
  {
    section: 'Société',
    links: [
      { name: 'À propos', url: '/fr' },
      { name: 'Zone desservie', url: '/fr/#service-area' },
      { name: 'FAQ', url: '/fr/#faq' },
      { name: 'Contact', url: '/fr/contact' },
    ],
  },
];

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
