import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "NomadKorea - 대한민국 디지털 노마드 도시 평가 플랫폼",
  description: "대한민국에서 디지털 노마드 라이프를 꿈꾸는 사람들이 최적의 도시를 발견하고, 실제 경험자들의 생생한 리뷰를 통해 현명한 선택을 할 수 있도록 돕는 플랫폼",
  openGraph: {
    title: "NomadKorea - 대한민국 디지털 노마드 도시 평가 플랫폼",
    description: "한국에서 노마드하기 좋은 도시를 찾아보세요",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
