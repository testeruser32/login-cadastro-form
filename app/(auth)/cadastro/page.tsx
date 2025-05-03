import RegisterForm from "./register-form";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <>
      <div className="Card-content bg-stone-50 border border-black-400 px-4 py-3 rounded relative">
        <RegisterForm />
      </div>
      <p>
        <Link href="/login" className="border m-2">
          Login
        </Link>
      </p>
      <p>
        <Link href="/" className="border m-2">
          Home
        </Link>
      </p>
    </>
  );
}
