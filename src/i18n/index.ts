export type Locale = 'ua' | 'en';

export const locales: Locale[] = ['ua', 'en'];

export function otherLocale(locale: Locale): Locale {
  return locale === 'ua' ? 'en' : 'ua';
}

/** Swap the leading /ua/ or /en/ segment of a pathname for the other locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  parts[0] = target;
  return '/' + parts.join('/') + (pathname.endsWith('/') ? '/' : '');
}

export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return `/${locale}/${clean}`.replace(/\/+$/, '/') || `/${locale}/`;
}

const statusLabels = {
  ua: { available: 'Доступна', sold: 'Продана', 'on-request': 'За запитом' },
  en: { available: 'Available', sold: 'Sold', 'on-request': 'On request' },
} as const;

export function statusLabel(locale: Locale, status: 'available' | 'sold' | 'on-request') {
  return statusLabels[locale][status];
}

export const dict = {
  ua: {
    siteName: 'Юлія Поліщук',
    nav: { home: 'Головна', gallery: 'Галерея', about: 'Про мене', contact: 'Контакти' },
    hero: {
      eyebrow: 'Акварельний живопис',
      title: 'Юлія Поліщук',
      tagline: 'Портрети, у яких людина видно наскрізь — акварель, папір, дуже багато води.',
      ctaGallery: 'Переглянути галерею',
      ctaContact: 'Написати художниці',
    },
    aboutTeaser: {
      title: 'Про художницю',
      more: 'Читати більше',
    },
    selection: {
      title: 'Обрані роботи',
      viewAll: 'Уся галерея',
    },
    ctaBand: {
      title: 'Сподобалась робота?',
      text: 'Напишіть — розкажу про наявність, розмір і як домовитись про доставку.',
      button: 'Написати',
    },
    gallery: {
      title: 'Галерея робіт',
      lede: 'Усі роботи Юлії Поліщук. Натисніть на роботу, щоб побачити деталі та дізнатись про наявність.',
      filterAll: 'Усі',
    },
    work: {
      backToGallery: 'До галереї',
      year: 'Рік',
      size: 'Розмір',
      technique: 'Техніка',
      series: 'Серія',
      status: 'Наявність',
      unspecified: 'уточнити',
      ask: 'Запитати',
      related: 'Схожі роботи',
    },
    askModal: {
      title: 'Запитати про роботу',
      text: 'Оберіть зручний канал зв’язку — відповім особисто.',
      close: 'Закрити',
    },
    about: {
      title: 'Про мене',
      statementTitle: 'Мистецька заява',
      // PLACEHOLDER — replace with Julia's real biography (see CONTENT_TODO.md)
      bio: 'Тут буде біографія художниці: де навчалась, відколи працює з аквареллю, які теми досліджує у своїх роботах. Текст додасть Юлія.',
      statement: 'Тут буде коротка мистецька заява — про що ці роботи, чому саме акварель і вода як наскрізний мотив.',
    },
    contact: {
      title: 'Контакти',
      lede: 'Напишіть форму нижче або одразу в месенджер — що вам зручніше.',
      formName: "Ім'я",
      formContact: 'Email або месенджер',
      formMessage: 'Повідомлення',
      formSubmit: 'Надіслати',
      directTitle: 'Або напряму',
    },
    footer: {
      rights: 'Усі права захищено.',
      followInstagram: 'Instagram',
    },
    cookie: {
      text: 'Сайт використовує аналітику для оцінки ефективності реклами.',
      accept: 'Добре',
      decline: 'Відмовитись',
    },
  },
  en: {
    siteName: 'Julia Polishchuk',
    nav: { home: 'Home', gallery: 'Gallery', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'Watercolor painting',
      title: 'Julia Polishchuk',
      tagline: 'Portraits where a person shows straight through — watercolor, paper, a lot of water.',
      ctaGallery: 'View gallery',
      ctaContact: "Message the artist",
    },
    aboutTeaser: {
      title: 'About the artist',
      more: 'Read more',
    },
    selection: {
      title: 'Selected works',
      viewAll: 'Full gallery',
    },
    ctaBand: {
      title: 'Like a piece?',
      text: "Message me — I'll tell you about availability, size and how to arrange delivery.",
      button: 'Message me',
    },
    gallery: {
      title: 'Gallery',
      lede: "All of Julia Polishchuk's works. Open a piece to see details and availability.",
      filterAll: 'All',
    },
    work: {
      backToGallery: 'Back to gallery',
      year: 'Year',
      size: 'Size',
      technique: 'Technique',
      series: 'Series',
      status: 'Availability',
      unspecified: 'on request',
      ask: 'Ask about this piece',
      related: 'Related works',
    },
    askModal: {
      title: 'Ask about this piece',
      text: 'Pick whichever channel is easiest — I’ll reply personally.',
      close: 'Close',
    },
    about: {
      title: 'About',
      statementTitle: 'Artist statement',
      // PLACEHOLDER — replace with Julia's real biography (see CONTENT_TODO.md)
      bio: "Julia's biography goes here: education, how long she has worked with watercolor, the themes she explores. Text to be provided by Julia.",
      statement: 'A short artist statement goes here — what these pieces are about, and why watercolor and water as a recurring motif.',
    },
    contact: {
      title: 'Contact',
      lede: 'Use the form below or reach out directly on a messenger — whichever is easier.',
      formName: 'Name',
      formContact: 'Email or messenger',
      formMessage: 'Message',
      formSubmit: 'Send',
      directTitle: 'Or reach out directly',
    },
    footer: {
      rights: 'All rights reserved.',
      followInstagram: 'Instagram',
    },
    cookie: {
      text: 'This site uses analytics to measure ad performance.',
      accept: 'Accept',
      decline: 'Decline',
    },
  },
} as const;

export function t(locale: Locale) {
  return dict[locale];
}
