'use client'
import React, {useState} from 'react'
import {FiPlus, FiPenTool, Fi} from "react-icons/fi"
import {Modal, ModalContent, ModalHeader, ModalBody,  Button, useDisclosure, Select, Input, SelectItem,} from "@nextui-org/react";
import { addWorkout } from '@/lib/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


const CreateWorkout = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
  
    const cats = ["HIIT", "LowImpact", "HighImpact", "Maintenance"];
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          await addWorkout(e);
          toast.success('Workout created successfully!', { position: toast.POSITION.TOP_RIGHT });
          router.push('/dashboard');
        } catch (error) {
          console.error('Failed to create workout:', error);
          toast.error('Failed to create workout. Please try again.', { position: toast.POSITION.TOP_RIGHT });
        } finally {
          setLoading(false);
        }
      };
    
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
            onSubmit={handleSubmit}
            >
          <Input
            autoFocus
            label="Title"
            placeholder="Title"
            variant="bordered"
            name='title'
            autoComplete='off'
          />
            <Select label="Category" name="category" variant="bordered" className='w-full'>
                    {cats.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </Select>
 
            <Button className='w-full' type='submit' loading={loading}>
            Create Workout
            </Button>
          </form>
        </ModalBody>
      </>
    )}
  </ModalContent>
</Modal>
<ToastContainer />
</>
  )
}

export default CreateWorkout