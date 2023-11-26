import React from 'react'
import { addDoc } from '@/actions/actions'
import { getDocs } from '@/actions/actions'
import DeleteButton from './button'
import { revalidatePath } from 'next/cache'
export const dynamic = 'force-dynamic'
const page = async () => {
  const Appointments = await getDocs("Appointment")
  const handleSubmit = async (formdata) => {
    "use server"
    await addDoc(formdata, "Appointment")
    revalidatePath("/appointment")
  }
  return (
    <div className='container'>
      <h1 className='text-center mt-5 text-3xl font-semibold'>Add Appointment</h1>

      <form action={handleSubmit} className='flex items-center justify-center mt-10 gap-2'>
        <input type="text" name="name" id="" placeholder='Dr name/ Hospital' className='bg-zinc-100 p-2 rounded-xl' />
        <input type="datetime-local" name="time" id="" />
        <button className='bg-black p-2 text-white font-semibold rounded-xl'>add appointment</button>
      </form>

      <div className='bg-zinc-50 flex flex-col w-80  p-2 rounded-xl items-center m-auto mt-10 gap-2'>
        <h1 className=' text-xl font-semibold mb-4'>Next Appointments</h1>
        {Appointments?.map((appointment, i) => (
          <div key={i} className='flex gap-2 justify-around bg-slate-100 p-2 rounded-xl w-full shadow-xl'>
            <div className=' font-semibold'>{appointment.name}</div>
            <div>{appointment.time}</div>
            <DeleteButton>{appointment._id}</DeleteButton>
          </div>
        ))}
      </div>


    </div>
  )
}

export default page