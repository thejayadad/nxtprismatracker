import CreateWorkout from '@/components/Form/CreateWorkout';
import WorkoutCard from '@/components/Items/WorkoutCard';
import NoWorkoutMessage from '@/components/NoWorkoutMessage';
import { getUserWorkouts } from '@/lib/data'
import getServerUser from '@/lib/getServerUser'
import React, { Suspense } from 'react'


const DashboardPage = async () => {
  return (
    <div className='flex flex-col'>
    <Suspense fallback={<WelcomeFallback />}>
        <WelcomeMessage />
    </Suspense>
    <Suspense fallback={<div>Loading.....</div>}>
        <WorkoutList />
    </Suspense>
    </div>
  )
}

async function WelcomeMessage(){
    const user = await getServerUser()
    const email = user.email
    if(!user){
        return <h2 className='text-center'>Error Accessing</h2>
    }
    return (
        <div className="flex w-full mb-12 p-12">
            <h1 className='text-4xl font-bold'>
                Welcome Back, <br /> {email}
            </h1>
        </div>
    )
}
function WelcomeFallback(){
    return (
        <div className="flex w-full mb-12">
              <h1 className="text-4xl font-bold">
                Loading....
              </h1>            
        </div>
    )
}

async function WorkoutList(){
    const user = await getServerUser()
    const workouts = await getUserWorkouts()

    if(workouts.length === 0){
        return (
        <div className='flex items-center flex-col gap-4'>
        <NoWorkoutMessage />
        <CreateWorkout />
        </div>
        )
    }
    return (
        <>
      <CreateWorkout />
      <div className="flex flex-col gap-4 mt-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
        
        </>
    )
}


export default DashboardPage