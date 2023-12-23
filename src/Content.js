import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = ({list,handleDelete,handleCheck}) => {
  return (
    list.length?(
    <ul className='list'>
        {list.map((item)=>(
            <li key={item.id} className='item'>
                <input type="checkbox" checked={item.checked} onChange={()=>handleCheck(item.id)} />
                <label htmlFor="">{item.item}</label>
                <FaTrashAlt onClick={()=>handleDelete(item.id)}/>
            </li>
        ))}
    </ul>)
    : <p className='para'>The List Is Empty</p>
  )
}

export default Content