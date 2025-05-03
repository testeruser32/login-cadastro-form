'use server'
import Link from "next/link";
import LoginForm from "./login-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <>
          
      <div className="Card-content bg-stone-50 border border-black-400 px-4 py-3 rounded relative">
        <div>Dados de sessao  {/*<pre>{JSON.stringify(session)}</pre>*/}  </div>        
        <LoginForm />                
      </div>             
      <p><Link href="/cadastro" className="border m-2">Registre-se</Link></p> 
      <p><Link href="/" className="border m-2">Home</Link></p>
    </>
  );
}
