import {z} from 'zod'

const createWorkoutSchema = z.object({
    title: z.string().min(3, {message: "Use atleast 3 characters"}),
    category: z.enum(['HIIT', 'LowImpact', 'HighImpact', 'Maintenance']).optional(), 
    exercises: z.array(
        z.object({
          title: z.string().min(3),
          duration: z.number().int().min(1), 
        })
      ),
})

export default createWorkoutSchema