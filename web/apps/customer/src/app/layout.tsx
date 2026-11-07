import type { Metadata, Viewport } from 'next';
import './globals.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { AuthProvider } from '@/lib/auth-provider';
import { CartProvider } from '@/lib/cart-store';
import { LanguageProvider } from '@/lib/language-context';

export const metadata: Metadata = {
  title: { template: '%s | Avenyn Food', default: 'Avenyn Food — Beställ mat i Göteborg' },
  description: 'Beställ mat från lokala restauranger i Göteborg med Avenyn Food.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/foodflow-mark.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#1665c1',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="font-sans">
        <LanguageProvider>
          <AuthProvider>
            <CartProvider>{children}</CartProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
