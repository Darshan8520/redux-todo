import React from 'react'
import './TodoItem.css'
import { Checkbox } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setcheck } from '../features/todoSlice'
const TodoItem = ({name,id,done}) => {
  const dispatch = useDispatch()
  const handleCheck=()=>{
      dispatch(setcheck(id))
  }
  return (
    <div className='todoItem'>
      < Checkbox
       checked={done}
       color='primary'
       onChange={handleCheck}
       inputProps={{'aria-label': 'secondary checkbox'}}/>
      <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem
