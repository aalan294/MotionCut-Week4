import React from 'react'
import {FaPlus} from "react-icons/fa";

const AddList = ({newItem,setNewItem,handleNewItem}) => {
  return (
    <form action="" onSubmit={handleNewItem} className='input'>
    <input type="text" required autoFocus placeholder='Add an Item' value ={newItem} onChange={(e)=>setNewItem(e.target.value)} />
    <button><FaPlus /></button>
    </form>
  )
}

export default AddList