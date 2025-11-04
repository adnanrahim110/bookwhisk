import AppShell from "@/components/layouts/AppShell";
import { Lora, Merriweather } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "BookWhisk - Self-Publishing Facilitators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${merriweather.variable} antialiased`}
      >
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
