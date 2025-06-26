import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EleganceEstate - Real Estate Agent Portfolio",
  description: "Elegant static portfolio site for real estate professionals.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Modern Elegant Sans Font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-secondary text-primary font-sans antialiased fade-in">
        {children}
      </body>
    </html>
  );
}
