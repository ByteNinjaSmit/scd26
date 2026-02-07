import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWS Student Community Day 2026 | Sanjivani College of Engineering",
  description: "Join us on March 15, 2026 at Sanjivani College of Engineering, Kopargaon for AWS Student Community Day - A day of cloud learning, networking, and innovation. Workshops, expert talks, and hands-on labs for all skill levels.",
  keywords: [
    "AWS",
    "Amazon Web Services",
    "Cloud Computing",
    "Student Community Day",
    "Sanjivani College of Engineering",
    "Cloud Learning",
    "DevOps",
    "AWS Workshop",
    "Kopargaon",
    "Maharashtra",
    "Tech Conference",
    "Student Developer",
    "AWS Cloud Club",
  ],
  authors: [{ name: "AWS Cloud Club Sanjivani" }],
  creator: "AWS Cloud Club Sanjivani",
  publisher: "AWS Cloud Club Sanjivani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://awscommunityday.sanjivani.edu"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AWS Student Community Day 2026 | Sanjivani College of Engineering",
    description: "Join us on March 15, 2026 for a day of cloud learning, networking, and innovation. Workshops, expert talks, and hands-on labs for all skill levels.",
    url: "https://awscommunityday.sanjivani.edu",
    siteName: "AWS Student Community Day 2026",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AWS Student Community Day 2026 at Sanjivani College of Engineering",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Student Community Day 2026 | Sanjivani College of Engineering",
    description: "Join us on March 15, 2026 for a day of cloud learning, networking, and innovation.",
    site: "@awscloudclub",
    creator: "@awscloudclub",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "AWS Student Community Day 2026",
              description: "A day of cloud learning, networking, and innovation at Sanjivani College of Engineering",
              startDate: "2026-03-15T08:00:00+05:30",
              endDate: "2026-03-15T18:00:00+05:30",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Sanjivani College of Engineering",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Station Road, Opposite Sanjivani Factory",
                  addressLocality: "Kopargaon",
                  addressRegion: "Maharashtra",
                  postalCode: "423603",
                  addressCountry: "IN",
                },
              },
              image: "https://awscommunityday.sanjivani.edu/og-image.png",
              organizer: {
                "@type": "Organization",
                name: "AWS Cloud Club Sanjivani",
                url: "https://awscloudclub.dev",
              },
              offers: {
                "@type": "Offer",
                name: "Regular Ticket",
                price: "249",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                validFrom: "2026-02-07",
              },
            }),
          }}
        />
      </head>
      <body className="font-ember antialiased">
        <TooltipProvider>
          <Analytics />
          <ThemeProvider>
            {children}
            <Toaster />
            <SonnerToaster />
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
