'use client'
import React from 'react'
import {FiPlus, FiPenTool, Fi} from "react-icons/fi"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";


const CreateWorkout = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
          <Input
            autoFocus
            endContent={
              <FiPenTool className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Title"
            placeholder="Title"
            variant="bordered"
          />
          <Input
            // endContent={
            //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            // }
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={onClose}>
            Close
          </Button>
         </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>
</>
  )
}

export default CreateWorkout