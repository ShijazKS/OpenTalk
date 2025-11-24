import "./globals.css";
import { SocketProvider } from "@/providers/SocketProvider";

// export const metadata = {
//   title: "OpenTalk",
//   description: "Anonymous chat rooms made easy.",
// };

export const metadata = {
  title: "OpenTalk",
  description: "Anonymous chat rooms made easy",
  keywords: ["opentalk", "jazdesign", "shijazks", "open-talk", "open talk","chatroom", "anonymous", "realtime"],
  generator: "Next.js",
  manifest: "/manifest.json",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "Shijaz KS",
      url: "https://github.com/shijazks/",
    },
     { name: "Sameemul Haque", url: "https://github.com/sameemul-haque/" },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
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
