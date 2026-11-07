import type { Metadata } from 'next';
import './globals.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { resolveAdminMetadataBase } from '@/lib/metadata-url';

export const metadata: Metadata = {
  metadataBase: resolveAdminMetadataBase(),
  title: {
    template: '%s | Avenyn Food Admin',
    default: 'Avenyn Food Admin',
  },
  description: 'Avenyn Food administration för beställningar, restauranger och bud',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/foodflow-mark.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
  },
  openGraph: {
    title: 'Avenyn Food Admin',
    description: 'Avenyn Food trafikledning och leveranser',
    type: 'website',
    images: [{ url: '/foodflow-mark.svg', width: 512, height: 512, alt: 'Avenyn Food Admin mark' }],
  },
  twitter: { card: 'summary', title: 'Avenyn Food Admin', images: ['/foodflow-mark.svg'] },
  robots: { index: false, follow: false },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <html lang={locale}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
