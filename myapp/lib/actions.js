'use server'
import { revalidatePath } from "next/cache";
import prisma from "@/lib/connect"
import getServerUser from "./getServerUser";


export const addWorkout = async (formData) => {
    const user = await getServerUser()
    const email = user.email
    console.log("user " + email)
    const { title, category } =
    Object.fromEntries(formData);
    try {
        await prisma.post.create({
           data: {
            title, category,
             userId: email, 
           },
         });
         revalidatePath("/dashboard")
         
   } catch (error) {
       throw new Error("Failed To Create Exercise " + error)
   }
   revalidatePath("/dashboard")
   redirect(`/dashboard`)
}