'use client'
import React from 'react'
import {FiPlus, FiPenTool, Fi} from "react-icons/fi"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Select, Input, SelectItem,} from "@nextui-org/react";
import { addWorkout } from '@/lib/actions';


const CreateWorkout = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const cats = ["HIIT", "LowImpact", "HighImpact", "Maintenance"];
    return (
<>
<Button
    onPress={onOpen}
    className='w-full hover:bg-primary hover:text-white' color="secondary" variant="bordered" startContent={<FiPlus/>}>
    Create Workout
  </Button>
  <Modal 
  isOpen={isOpen} 
  onOpenChange={onOpenChange}
  placement="top-center"
  backdrop="blur" 

>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Create Workout</ModalHeader>
        <ModalBody>
            <form
            action={addWorkout}
            className='flex flex-col gap-4'
            >
          <Input
            autoFocus
            label="Title"
            placeholder="Title"
            variant="bordered"
            name='title'
          />
            <Select label="Category" name="category" variant="bordered" className='w-full'>
                {cats.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </Select> 
          <Button
          className='w-full'
          type='submit'>Create Workout</Button>
          </form>
        </ModalBody>
      </>
    )}
  </ModalContent>
</Modal>
</>
  )
}

export default CreateWorkout