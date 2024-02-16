import './globals.css'
import { Inter} from 'next/font/google'
import Head from "next/head";



export const metadata = {
  title: 'OpenTalk',
  description: 'Created by jazDesign',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="keywords" content="opentalk,jazdesign,shijazks,open-talk" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
