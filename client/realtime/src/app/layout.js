import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head";



export const metadata = {
  title: 'OpenTalk',
  description: 'Realtime room-based authentless chat application',
  keywords: ["opentalk", "jazdesign", "shijazks", "open-talk", "open talk"],
  generator: "Next.js",
  manifest: "/manifest.json",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Shijaz KS" },
    {
      name: "Shijaz KS",
      url: "https://github.com/shijazks/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <meta name="keywords" content="opentalk,jazdesign,shijazks,open-talk,open talk" />
        <meta name="description" content="Realtime room-based authentless chat application" />
      </Head> */}
      {/* <title>OpenTalk</title> */}
      <body>{children}</body>
    </html>
  )
}
