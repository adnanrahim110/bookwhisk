import AppShell from "@/components/layouts/AppShell";
import { Lora, Merriweather } from "next/font/google";
import Script from "next/script";
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
        <AppShell>{children}</AppShell>
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{};
              Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script");
                var s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/690a82aa9147b8194cd11d63/1j98gsqim';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
