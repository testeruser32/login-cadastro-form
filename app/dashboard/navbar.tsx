import Link from "next/link";
import { auth } from "@/auth";
import Form from "next/form";
import logoutAction from "../(auth)/(logout)/logoutAction";

export default async function Navbar() {
  const session = await auth();
  const userName = session?.user?.name
  const userEmail = session?.user?.email
  console.log(session);
  return (
    <div>
      <div>
        <div>Nome: {userName}</div>
        <div>E-mail: {userEmail}</div>
      </div>
      <Form action={logoutAction}>
        <button className="border m-2">Logout</button>
      </Form>
      <Link href="/" className="border m-2">
        Home
      </Link>
    </div>
  );
}
