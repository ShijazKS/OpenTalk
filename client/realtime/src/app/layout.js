import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head";



// export const metadata = {
//   title: 'OpenTalk',
//   description: 'Created by jazDesign',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="keywords" content="opentalk,jazdesign,shijazks,open-talk,open talk" />
        <meta name="description" content="Realtime room-based authentless chat application" />
        <meta name="application-name" content="OpenTalk" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="OpenTalk" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <title>OpenTalk</title>
      <body>{children}</body>
    </html>
  )
}
