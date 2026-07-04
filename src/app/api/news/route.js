import { NextResponse } from 'next/server';

// Sample static news data. In production replace with real aggregation logic.
const newsData = [
  {
    image: '/news-update-image/image2.png',
    small: 'Macro insight',
    heading: 'Central Banks Continue Gold Buying Trend',
    description: 'Reserve accumulation remains strong as global institutions seek stability amid economic uncertainty.',
    badge: { text: 'BEARISH', type: 'bearish' },
    pageUrl: '/macro',
  },
  {
    image: '/news-update-image/image1.png',
    small: 'Energy',
    heading: 'Solar Expansion Drives Silver Demand Higher',
    description: 'Growing renewable energy projects continue to increase industrial silver consumption worldwide.',
    badge: { text: 'BULLISH', type: 'bullish' },
    pageUrl: '/GreenEnergy',
  },
  {
    image: '/news-update-image/image1.png',
    small: 'Scrap Metal',
    heading: 'German Bullion Sales Reach New Monthly High',
    description: 'Investor interest in physical gold and silver remains elevated across retail markets.',
    badge: { text: 'BULLISH', type: 'bullish' },
    pageUrl: '/coinsBars',
  },
  // Add more items up to 10 as needed
];

export async function GET() {
  return NextResponse.json(newsData);
}
