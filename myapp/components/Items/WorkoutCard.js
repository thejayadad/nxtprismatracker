'use client'
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import AddExercise from '../Form/AddExercise';

const WorkoutCard = ({ workout }) => {
  return (
    <Accordion variant="splitted">
      <AccordionItem key={workout.id} aria-label={workout.title} title={workout.title} asChild>
        <div>
          {workout.exercises.length > 0 ? (
            <ul>
              {workout.exercises.map((exercise) => (
                <li key={exercise.id}>{exercise.title} - Duration: {exercise.duration} seconds</li>
              ))}
            </ul>
          ) : (
            <div className='flex flex-col'>
            <p>No exercises added. Add an exercise to this workout!</p>
            <AddExercise workoutId={workout.id} />
            </div>              
          )}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default WorkoutCard;

