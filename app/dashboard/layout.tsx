import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "./navbar";

export default async function DashboardLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    const session = await auth();
    if(!session) {
        redirect('/login')
    }

    return(
        <div>
            <Navbar/ >
            <main>{children}</main>
        </div>
    )
}