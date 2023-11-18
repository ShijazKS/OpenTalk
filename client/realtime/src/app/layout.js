import './globals.css'
import { Inter} from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenTalk',
  description: 'Created by jazDesign',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="keywords" content="opentalk,jazdesign,shijazks" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
