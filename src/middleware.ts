// TODO: Supabase 환경변수 설정 후 아래 주석 해제하여 미들웨어 재활성화
// import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // TODO: Supabase 환경변수 설정 후 아래 로직 재활성화
  /*
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // 세션 갱신을 위해 getUser 호출
  await supabase.auth.getUser()

  return supabaseResponse
  */

  // 임시: 모든 요청 통과
  return NextResponse.next({ request })
}

export const config = {
  // TODO: Supabase 환경변수 설정 후 아래 matcher 재활성화
  // matcher: [
  //   '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  // ],
  matcher: [], // 임시: 빈 배열로 미들웨어 비활성화
}
