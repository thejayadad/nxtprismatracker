'use client'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import {Input, Button} from "@nextui-org/react";
import { addExercise } from '@/lib/actions';


const AddExercise = () => {
  return (
    <div>AddExercise
        <form
        action={addExercise}
        className='w-full flex gap-4'
        >
        <Input
          type="text"
          name="title"
          placeholder="Exercise Title"
        />
        <Input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
        />
        <Button type="submit" className="bg-primary text-white p-4">
          <FiPlus />
        </Button>
        </form>
    </div>
  )
}

export default AddExercise