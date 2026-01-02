import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

// TODO: Supabase 환경변수 설정 후 아래 주석 해제
// import { createClient } from "@/lib/supabase/server";
// import { logout } from "@/app/login/actions";

const navItems: { href: string; label: string }[] = [];

export async function Header() {
  // TODO: Supabase 환경변수 설정 후 아래 주석 해제하여 인증 로직 재활성화
  // const supabase = await createClient();
  // const { data: { user } } = await supabase.auth.getUser();
  const user = null; // 임시: 항상 미로그인 상태

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🏕️</span>
          <span className="text-xl font-bold text-primary">NomadKorea</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">
                {user}
              </span>
              {/* TODO: Supabase 환경변수 설정 후 로그아웃 폼 재활성화
              <form action={logout}>
                <Button variant="ghost" size="sm" type="submit">
                  로그아웃
                </Button>
              </form>
              */}
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  로그인
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">
                  회원가입
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <hr className="my-4" />
              {user ? (
                <>
                  <span className="text-sm text-muted-foreground py-2">
                    {user}
                  </span>
                  {/* TODO: Supabase 환경변수 설정 후 로그아웃 폼 재활성화
                  <form action={logout}>
                    <Button variant="outline" className="w-full" type="submit">
                      로그아웃
                    </Button>
                  </form>
                  */}
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      로그인
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full">
                      회원가입
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
