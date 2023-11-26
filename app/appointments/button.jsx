"use client"
import React from 'react'

import { deleteDoc } from '@/actions/actions'
const DeleteButton = ({children}) => {
  return (
    <div onClick={()=>deleteDoc(children, "Appointment")}>X</div>
  )
}

export default DeleteButton