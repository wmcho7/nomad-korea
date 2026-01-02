import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/login/actions";
import { VotedCitiesList } from "@/components/VotedCitiesList";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";

export default async function MyPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 pb-24 md:pb-8">
        {/* 프로필 섹션 */}
        <section className="mb-8 p-6 bg-white rounded-lg border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">마이페이지</h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <form action={logout}>
            <Button type="submit" variant="outline" className="w-full sm:w-auto">
              <LogOut className="h-4 w-4 mr-2" />
              로그아웃
            </Button>
          </form>
        </section>

        {/* 활동 내역 섹션 */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-6">나의 활동</h2>
          <VotedCitiesList />
        </section>
      </main>

      <Footer />
      <MobileNavigation />
    </div>
  );
}
