// TODO: replace every value below with Julia's real contact details
// before launch. See CONTENT_TODO.md.

export const contacts = {
  email: 'hello@TODO-domain.art',
  instagram: {
    handle: '@TODO_instagram',
    url: 'https://instagram.com/TODO_instagram',
  },
  telegram: {
    handle: '@TODO_telegram',
    url: 'https://t.me/TODO_telegram',
  },
  whatsapp: {
    // Full phone number in international format, digits only, e.g. 380991234567
    phone: '000000000000',
    url: 'https://wa.me/000000000000',
  },
  viber: {
    phone: '+000 00 000 0000',
    url: 'viber://chat?number=%2B000000000000',
  },
};

export type ContactChannel = keyof typeof contacts;
