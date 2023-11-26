import React from 'react'
import { addDoc } from '@/actions/actions'
import { getDocs } from '@/actions/actions'
import DeleteButton from './button'
import { revalidatePath } from 'next/cache'
const page = async () => {
  const EmergencyContacts = await getDocs("Emergency")
  const handleSubmit = async (formdata) => {
    "use server"
    addDoc(formdata, "Emergency")
    revalidatePath("/emergency")
  }
  return (
    <div className='container'>
      <h1 className='text-center mt-5 text-3xl font-semibold'>Add Emergency Contact</h1>

      <form action={handleSubmit} className='flex items-center justify-center mt-10 gap-2'>
        <input type="text" name="name" id="" placeholder='name' className='bg-zinc-100 p-2 rounded-xl' />
        <input type="number" name="number" id="" placeholder='mobile no' className='p-2' />

        <button className='bg-black p-2 text-white font-semibold rounded-xl'>add</button>

      </form>

      <div className='bg-zinc-200 flex flex-col w-80  p-2 rounded-xl items-center m-auto mt-10 gap-2'>
        <h1 className=' text-xl font-semibold mb-4'>Emergency Contacts</h1>
        <div className='flex gap-2 justify-around bg-slate-100 p-2 rounded-xl w-full shadow-xl'>
            <div className=' font-semibold'>Emergency</div>
            <a href={`tel:$112`}>112</a>
          </div>
          <div className='flex gap-2 justify-around bg-slate-100 p-2 rounded-xl w-full shadow-xl'>
            <div className=' font-semibold'>Ambulance</div>
            <a href={`tel:$102`}>102</a>
          </div>
        {EmergencyContacts?.map((contact, i) => (
          <div key={i} className='flex gap-2 justify-around bg-slate-100 p-2 rounded-xl w-full shadow-xl'>
            <div className=' font-semibold'>{contact.name}</div>
            <a href={`tel:${contact.number}`}>{contact.number}</a>
            <DeleteButton>{contact._id}</DeleteButton>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page