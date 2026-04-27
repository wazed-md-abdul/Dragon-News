
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);


import { Merriweather, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "NewsJournal",
  description: "Modern journalism with sharper context and calmer reading.",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${poppins.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
