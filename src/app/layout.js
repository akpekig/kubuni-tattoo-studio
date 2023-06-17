import "./globals.css";
import Header from "./components/header";
import { Lato, Comforter_Brush } from "next/font/google";

const comforter = Comforter_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comforter",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata = {
  title: "Kubuni Tattoo Studio",
  description: "Professional tattoos from native artists",
  themeColor: "#2B2B2B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${comforter.variable} ${lato.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
