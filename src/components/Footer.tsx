import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-12">
        {/* Logo & Description */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🏕️</span>
            <span className="text-xl font-bold text-primary">NomadKorea</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            대한민국에서 디지털 노마드 라이프를 꿈꾸는 사람들을 위한 도시 평가 플랫폼
          </p>
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
