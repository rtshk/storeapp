"use server"
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createClient();
  const data = {
    email : formData.get('email') as string,
    password : formData.get('password') as string,
  }
  const {error} = await supabase.auth.signInWithPassword(data);

  if(error){
    throw new Error(error.message);
  }{
    revalidatePath('/', 'layout');
    redirect('/');
  }
}
