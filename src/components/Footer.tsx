import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  service: {
    title: "서비스",
    links: [
      { href: "/cities", label: "도시 목록" },
      { href: "/guide", label: "리뷰 가이드" },
      { href: "/community", label: "커뮤니티" },
      { href: "/partnership", label: "제휴 문의" },
    ],
  },
  support: {
    title: "고객지원",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "문의하기" },
      { href: "/terms", label: "이용약관" },
      { href: "/privacy", label: "개인정보처리방침" },
    ],
  },
  social: {
    title: "소셜",
    links: [
      { href: "https://instagram.com", label: "Instagram", external: true },
      { href: "https://twitter.com", label: "Twitter", external: true },
      { href: "https://blog.com", label: "Blog", external: true },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-12">
        {/* Logo & Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏕️</span>
              <span className="text-xl font-bold text-primary">NomadKorea</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              대한민국에서 디지털 노마드 라이프를 꿈꾸는 사람들을 위한 도시 평가 플랫폼
            </p>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {footerLinks.service.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.service.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {footerLinks.support.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {footerLinks.social.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.social.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 NomadKorea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
