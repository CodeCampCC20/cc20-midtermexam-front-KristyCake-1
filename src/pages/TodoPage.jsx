import React, { useEffect, useState } from 'react';
import { useTaskStore } from '../store/useTaskStore';
import TodoCard from '../components/TodoCard';
import { YupToError } from '../validate/YuptoError';
import { schemaPost } from '../validate/schemaPost';
import axios from 'axios';

function TodoPage() {
  const posts = useTaskStore(state => state.posts);
  const fetchTask = useTaskStore((state) => state.fetchTaskData);
  useEffect(() => {
    fetchTask(3)
  }, []);

  const intialPost = {
    taskName: '',
    userId: 3,
  }
  const [inputTask, setInputTask] = useState(intialPost)
  const hdlChange = e => {
    setInputTask({ ...inputTask, [e.target.name]: e.target.value })
  }

  const [err, setErr] = useState({});

  const hdlSubmit = async () => {
    try {
      schemaPost.validateSync(inputTask, { abortEarly: false })
      const res = await axios.post(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos`, inputTask)
      console.log(res.data)
      fetchTask(3)
      setInputTask(intialPost)
    } catch (error) {
      const errObj = YupToError(error)
      setErr(errObj)
    }
  }

  console.log(inputTask)

  return (
    <div className='flex justify-center'>
      <p>Post page is my TOdoPage</p>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" >
        <h2 className="card-title">My Todo</h2>
        <input type="text" className="input" placeholder="new task" onChange={hdlChange} name='taskName' value={inputTask.taskName}
          onKeyDown={(e) => e.key === "Enter" && hdlSubmit()} />
        {err.taskName && <p className='text-red-500'>{err.taskName}</p>}

        <div className='flex flex-wrap justify-around gap-3'>

          {posts.map((el) => (
            <TodoCard key={el.id} item={el} />
          ))}


        </div>
      </fieldset>


      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}

export default TodoPage

// Post page is my ToDoPage
// PostCard page is my TodoCard page