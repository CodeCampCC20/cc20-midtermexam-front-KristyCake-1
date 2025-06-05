import { OctagonX } from 'lucide-react';
import { useTaskStore } from '../store/useTaskStore';
import axios from 'axios';
import { useState } from 'react';

function TodoCard({ item }) {
  const fetchTask = useTaskStore((state) => state.fetchTaskData);
  const hdlDelete = async (id) => {
    await axios.delete(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}/3`)
    fetchTask(3)
  }
  const intialUpdate = {
    taskName: item.taskName,
    completed: item.completed
  }
  const [isCheck, setIsCheck] = useState(item.completed);
  const [taskUpdate, setTaskUpdate] = useState(intialUpdate);
  const hdlChange = async (e, id) => {
    setTaskUpdate({ ...intialUpdate, [e.target.name]: e.target.checked })
    fetchTask(3)
    try {
      const data = {
        taskName: taskUpdate.taskName,
        completed: !taskUpdate.completed,
      }
      const res = await axios.patch(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}/3`, data)
      setIsCheck(!isCheck)
      fetchTask(3)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className='flex  bg-amber-100 border-base-300 shadow-sm h-10 rounded-box w-xs border p-4 items-center justify-between'>
        <div className='flex gap-3'>
          <input type='checkbox' name='completed' checked={isCheck} onChange={(e) => hdlChange(e, item.id)} />
          <h1 className={`${isCheck && 'line-through'} font-bold`}>{item.taskName}</h1>
        </div>

        <OctagonX className='cursor-pointer' onClick={() => { hdlDelete(item.id) }} />

      </div>
    </div>
  )
}

export default TodoCard