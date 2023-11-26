"use client"
import React from 'react'

import { deleteDoc } from '@/actions/actions'
const DeleteButton = ({children}) => {
  return (
    <div onClick={()=>deleteDoc(children, "Emergency")}>X</div>
  )
}

export default DeleteButton