
import React from 'react'
import { getDocs, addDoc } from '@/actions/actions'
import Image from 'next/image'

import DeleteButton from './button'
import { revalidatePath } from 'next/cache'

const medicines = async () => {
    const Medicines = await getDocs("Medicine")
    const handleSubmit=async(formdata) =>{
        "use server"
        await addDoc(formdata, "Medicine")
        revalidatePath("/medicines")
    }

    return (
        <div className='container'>
            <h1 className='text-center mt-5 text-3xl font-semibold'>Add Medicines</h1>
            <form action={handleSubmit} className='flex items-center justify-center mt-10 gap-2 flex-wrap'>
                <input type="text" name="name" id="" placeholder='medicine name' className='bg-zinc-100 p-2 rounded-xl' />
                <select name="time" id="time">
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening/Night</option>
                </select>
                <button className='bg-black p-2 text-white font-semibold rounded-xl'>add medicine</button>
            </form>
            <div>
                <div className='w-full flex justify-around  mt-5 flex-wrap gap-3'>
                    <div className=' flex flex-col w-80  p-2 rounded-xl items-center gap-2'>
                        <h1 className=' text-xl font-semibold mb-4'>Morning</h1>
                        {Medicines.map((medicine, i) => (
                            medicine.time == "morning" ?
                                <div key={i} className='flex gap-2 justify-around bg-slate-100 p-2 rounded-xl w-3/4 shadow-xl'>
                                    <Image src="/med.png" alt="me" width="40" height="40" />
                                    <div className=' font-semibold'>{medicine.name}</div>
                                    <DeleteButton>{medicine._id}</DeleteButton>
                                </div>
                                :
                                ""
                        ))}
                    </div>
                    <div className=' flex flex-col w-80  p-2 rounded-xl items-center gap-2'>
                        <h1 className=' text-xl font-semibold mb-4'>Afternoon</h1>
                        {Medicines.map((medicine, i) => (
                            medicine.time == "afternoon" ?
                                <div key={i} className='flex gap-2 justify-around bg-slate-100 p-2 rounded-xl w-3/4 shadow-xl'>
                                    <Image src="/med.png" alt="me" width="40" height="40" />
                                    <div className=' font-semibold'>{medicine.name}</div>
                                    <DeleteButton>{medicine._id}</DeleteButton>
                                </div>
                                :
                                ""
                        ))}
                    </div>
                    <div className='flex flex-col w-80 p-2 rounded-xl items-center gap-2'>
                        <h1 className=' text-xl font-semibold mb-4'>Evening/Night</h1>
                        {Medicines.map((medicine,i) => (
                            medicine.time == "evening" ?
                                <div key={i} className='flex gap-2 justify-around bg-slate-100 p-2 rounded-xl w-3/4 shadow-xl'>
                                    <Image src="/med.png" alt="me" width="40" height="40" />
                                    <div className=' font-semibold'>{medicine.name}</div>
                                    <DeleteButton>{medicine._id}</DeleteButton>
                                </div>
                                :
                                ""
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default medicines