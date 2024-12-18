import { Button } from "@/components/Button"
import { Edit2, Trash2 } from "lucide-react"
import { PlusIcon } from "lucide-react"
import { Modal } from "@/components/Modal"
import { useEffect, useState } from "react"
import { EventDetails } from "@/components/EventDetails"

export default function Dashboard(){

    const [model, setModel ] = useState(true);
    useEffect(()=>{
        //axios fetch to get all the events
        
    }, [])
    
    
    return (
        <>
        <Modal open={model} onClose = { ()=>{setModel(false)} }/>
        <div className="bg-white w-full h-screen">
            <EventDetails isAdmin={true} Heading={"Event heading"} Description={"Get your bags ready for an ultimate experiecne with the devs. Make the best out of the "}/>
            <div className='flex row'>
            <div className='w-full p-6'>
                <div className='bg-[#F8FBFD]'>
                <div className='flex justify-between p-2' >
                    <h1 className='text-xl font-bold content-center'>Welcome Admin</h1>
                    <div className='flex justify-end gap-5 content-center'>
                    <Button startIcon={<Trash2 size={20}/>} variant="primary" size="sm" text= "Delete Event" ></Button>
                    <Button startIcon={<Edit2 size={20}/>} variant="primary" size="sm" text= "Edit Event" ></Button>

                    <Button startIcon={<PlusIcon/>} variant="primary" size="md" text= "Add new Event" onClick={ ()=>{setModel(true)} }></Button>
                    </div>
                </div>
                <div className='content flex flex-wrap'> 
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
      )
}
