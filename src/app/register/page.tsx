import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signup } from "./actions";

export default function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-3xl">🏕️</span>
            <span className="text-2xl font-bold text-primary">NomadKorea</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">회원가입</CardTitle>
            <CardDescription>
              NomadKorea에 가입하고 최적의 노마드 도시를 찾아보세요
            </CardDescription>
          </CardHeader>

          <CardContent>
            <RegisterForm searchParams={searchParams} />
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              이미 계정이 있으신가요?{" "}
              <Link
                href="/login"
                className="font-medium text-primary hover:underline"
              >
                로그인
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

async function RegisterForm({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>
}) {
  const { error, message } = await searchParams;

  if (message === 'check_email') {
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-4">📧</div>
        <h3 className="text-lg font-medium mb-2">이메일을 확인해주세요</h3>
        <p className="text-sm text-muted-foreground">
          가입 확인 링크가 이메일로 발송되었습니다.
          <br />
          이메일을 확인하여 가입을 완료해주세요.
        </p>
      </div>
    );
  }

  return (
    <form action={signup} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          회원가입에 실패했습니다. 다시 시도해주세요.
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          이메일
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          비밀번호
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />
        <p className="text-xs text-muted-foreground">
          8자 이상, 영문/숫자/특수문자 포함
        </p>
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          className="mt-1 h-4 w-4 rounded border-border"
          required
        />
        <label htmlFor="terms" className="text-sm text-muted-foreground">
          <Link href="/terms" className="text-primary hover:underline">
            이용약관
          </Link>{" "}
          및{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            개인정보처리방침
          </Link>
          에 동의합니다
        </label>
      </div>

      <Button type="submit" className="w-full">
        가입하기
      </Button>
    </form>
  );
}
