import localFont from "next/font/local";
import "./globals.css";
import Header from "../layout/Header";

const beatrice = localFont({
  src: [
    {
      path: "../public/fonts/BeatriceDeckTRIALRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BeatriceDeckTRIALBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-beatrice",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${beatrice.variable} px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16`}
>
      <body>
        <Header /> 
        {children}
      </body>
    </html>
  );
}
