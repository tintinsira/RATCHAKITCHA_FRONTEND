import { Kanit, Sarabun, Noto_Sans_Thai } from "next/font/google";

export const kanit = Kanit({
  weight: ["400", "700"],
  subsets: ["thai"],
  display: "swap",
  variable: "--font-kanit",
});

export const sarabun = Sarabun({
  weight: ["400", "700"],
  subsets: ["thai"],
  display: "swap",
  variable: "--font-sarabun",
});

export const notoSansThai = Noto_Sans_Thai({
  weight: ["400", "700"],
  subsets: ["thai"],
  display: "swap",
  variable: "--font-noto-thai",
});
