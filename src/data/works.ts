import type { ImageMetadata } from 'astro';

import img01 from '../assets/works/1.jpg';
import img02 from '../assets/works/2.jpg';
import img03 from '../assets/works/3.jpg';
import img04 from '../assets/works/4.jpg';
import img05 from '../assets/works/5.jpg';
import img06 from '../assets/works/6.jpg';
import img07 from '../assets/works/7.jpg';
import img08 from '../assets/works/8.jpg';
import img09 from '../assets/works/9.jpg';
import img10 from '../assets/works/10.jpg';

export type WorkStatus = 'available' | 'sold' | 'on-request';

export interface Work {
  slug: string;
  image: ImageMetadata;
  titleUa: string;
  titleEn: string;
  /** Watercolor series/theme grouping. Undefined until Julia assigns it — leave unset rather than guessing. */
  series?: string;
  year?: number;
  size?: string;
  technique: string;
  status: WorkStatus;
  descriptionUa?: string;
  descriptionEn?: string;
}

// PLACEHOLDER CONTENT — titles, year, size, description and status below are
// not real. Fill in real values per work before launch, see CONTENT_TODO.md.
// `technique` is a reasonable default (paint tubes visible in the photos are
// watercolor) but should be confirmed per piece.
export const works: Work[] = [
  { slug: 'work-01', image: img01, titleUa: 'Робота 01', titleEn: 'Artwork 01', technique: 'Акварель, папір', status: 'available' },
  { slug: 'work-02', image: img02, titleUa: 'Робота 02', titleEn: 'Artwork 02', technique: 'Акварель, папір', status: 'available' },
  { slug: 'work-03', image: img03, titleUa: 'Робота 03', titleEn: 'Artwork 03', technique: 'Акварель, папір', status: 'available' },
  { slug: 'work-04', image: img04, titleUa: 'Робота 04', titleEn: 'Artwork 04', technique: 'Акварель, папір', status: 'available' },
  { slug: 'work-05', image: img05, titleUa: 'Робота 05', titleEn: 'Artwork 05', technique: 'Акварель, папір', status: 'available' },
  { slug: 'work-06', image: img06, titleUa: 'Робота 06', titleEn: 'Artwork 06', technique: 'Акварель, папір', status: 'available' },
  { slug: 'work-07', image: img07, titleUa: 'Робота 07', titleEn: 'Artwork 07', technique: 'Акварель, папір', status: 'available' },
  { slug: 'work-08', image: img08, titleUa: 'Робота 08', titleEn: 'Artwork 08', technique: 'Акварель, папір', status: 'available' },
  { slug: 'work-09', image: img09, titleUa: 'Робота 09', titleEn: 'Artwork 09', technique: 'Акварель, папір', status: 'available' },
  { slug: 'work-10', image: img10, titleUa: 'Робота 10', titleEn: 'Artwork 10', technique: 'Акварель, папір', status: 'available' },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function relatedWorks(current: Work, count = 3): Work[] {
  const sameSeries = works.filter((w) => w.slug !== current.slug && w.series && w.series === current.series);
  const rest = works.filter((w) => w.slug !== current.slug && !sameSeries.includes(w));
  return [...sameSeries, ...rest].slice(0, count);
}
