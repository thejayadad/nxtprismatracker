'use server'
import getServerUser from "./getServerUser"
import prisma from "@/lib/connect"


export const getUserWorkouts = async() => {
    const user = await getServerUser()
    try {
        const workouts = await prisma.workout.findMany({
            include: {
                exercises: true,
              },
              where: {
                userId: user?.id,
              },
        })
        return workouts
    } catch (error) {
        throw new Error("Failed to fetch workouts! " + error);

    }
}
