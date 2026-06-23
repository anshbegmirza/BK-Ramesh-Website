export const SITE_CONFIG = {
  brandName: 'BK Ramesh — Value Based Living',
  shortName: 'BK Ramesh',
  domain: 'https://transformyourlife.com',
  tagline: 'Transform Your Mind, Transform Your Life',
  altTagline: 'Change Your Self-Image & Unlock Your Real Potential',
  subtitle: 'NLP & Life Coaching by BK Ramesh',
  whatsappNumber: '919602625038',
  whatsappDefaultMessage: 'Hello BK Ramesh, I would like to know more about your coaching programs.',
  email: 'contact@transformyourlife.com',
  phone: '+91 96026 25038',
  location: 'India',
  social: {
    youtube: 'https://www.youtube.com/@rameshanandwani3103',
    instagram: 'https://www.instagram.com/bk_ramesh_?utm_source=qr&igsh=ZXQ1OHJ0bDl2a3Js',
    facebook: 'https://www.facebook.com/bkramesh.anandwani'
  },
  images: {
    cover: '/images/cover-photo.jpeg',
    profile: '/images/profile-photo-2.jpeg',
    nlpCoaching: '/images/nlp-coaching-2.jpeg',
    womenWorkshop: '/images/workshop-latest.jpeg',
    aboutSeminar: '/images/about-seminar-photo.jpeg',
    logo: '/images/bk-ramesh-logo-2.png',
    favicon: '/images/image-bk-ramesh-logo.png',
  },
  formEndpoint: '',
} as const;

export const buildWhatsappUrl = (message: string = SITE_CONFIG.whatsappDefaultMessage) => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
};
