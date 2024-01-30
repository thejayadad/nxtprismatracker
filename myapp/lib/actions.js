'use server'
import { revalidatePath } from "next/cache";
import getServerUser from "./getServerUser";
import prisma from "@/lib/prisma"


export const addWorkout = async (formData) => {
    const user = await getServerUser()
    const email = user.email
    console.log("user " + email)
    const { title, category } =
    Object.fromEntries(formData);
    try {
        await prisma.workout.create({
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
}

export const addExercise = async (formData) => {
    const user = await getServerUser()
    const email = user.email
    console.log("user " + email)
    const { title, duration, workoutId} =
    Object.fromEntries(formData);
    try {
        await prisma.exercise.create({
           data: {
            title, duration: parseInt(duration), 

             workout: {
                connect: {
                    id: workoutId
                }
             }
           },
         });
         revalidatePath("/dashboard")
         
   } catch (error) {
       throw new Error("Failed To Create Exercise " + error)
   }
   revalidatePath("/dashboard")
}