import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const userName = session?.user?.name ?? "";
  return (
    <main>
      <section>
        <nav>
          <div>
            {session && (
              <Link href="/dashboard">
                <button className="border m-2">Dashboard</button>
              </Link>
            )}
            {!session && (
              <div>
                <Link href="/login">
                  <button className="border m-2">login</button>
                </Link>
                <Link href="/cadastro">
                  <button className="border m-2">Cadastro</button>
                </Link>
              </div>
            )}
          </div>
          <div>{userName && `${userName}, `}</div>
        </nav>
        <div>Home</div>
      </section>
    </main>
  );
}
