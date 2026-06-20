export const SITE_CONFIG = {
  brandName: 'BK Ramesh — Value Based Living',
  shortName: 'BK Ramesh',
  domain: 'https://transformyourlife.com',
  tagline: 'Transform Your Mind, Transform Your Life',
  altTagline: 'Change Your Self-Image & Unlock Your Real Potential',
  subtitle: 'NLP & Life Coaching by BK Ramesh',
  whatsappNumber: '919876543210',
  whatsappDefaultMessage: 'Hello BK Ramesh, I would like to know more about your coaching programs.',
  email: 'contact@transformyourlife.com',
  phone: '+91 98765 43210',
  location: 'India',
  social: {
    youtube: 'https://youtube.com/@bkramesh',
    instagram: 'https://instagram.com/bkramesh',
  },
  images: {
    cover: '/images/cover-photo.jpeg',
    profile: '/images/profile-photo.jpeg',
    nlpCoaching: '/images/nlp-coaching.jpeg',
  },
  formEndpoint: '',
} as const;

export const buildWhatsappUrl = (message: string = SITE_CONFIG.whatsappDefaultMessage) => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
};
