"use client";

import Form from "next/form";
import registerAction from "./registerAction";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);
  
  return (
    <>
    {state?.success === false && (
        <div className="text-xs mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong>Erro!</strong>
            <span className="block sm:inline">{state?.message}</span>  
        </div>
    )}
        <Form action={formAction}>
            <div>
                <label>Nome:</label>
                <input type="text" name="name" placeholder="Meu nome" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" placeholder="eu@exemplo.com" />
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" name="password" placeholder="********" />
            </div>
            <div>
                <button className="border m-2">Registar</button>
            </div>                        
        </Form>
    </>
  );
}
