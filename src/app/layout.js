import "./globals.css";
import { SocketProvider } from "@/providers/SocketProvider";



export const metadata = {
  title: {
    default: "OpenTalk",
    template: "%s | OpenTalk",
  },
  applicationName: "OpenTalk",
  description: "Anonymous chat rooms made easy",
  keywords: [
    "opentalk",
    "jazdesign",
    "shijazks",
    "open-talk",
    "open talk",
    "chatroom",
    "anonymous",
    "realtime",
  ],
  authors: [
    {
      name: "Shijaz KS",
      url: "https://github.com/shijazks/",
    },
  ],
  generator: "Next.js",

  openGraph: {
    title: "OpenTalk",
    description: "Anonymous chat rooms made easy",
    url: "https://open-talk.vercel.app",
    siteName: "OpenTalk",
    type: "website",
  },

  manifest: "/manifest.json",
};


// 👇 NEW required export for Next.js 13.4+ (fixes all warnings)
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#fff" },
  ],
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  shrinkToFit: "no",
  viewportFit: "cover",
};


export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ background: "var(--bg-gradient)" }}>
        <SocketProvider>{children}</SocketProvider>
      </body>
    </html>
  );
}
