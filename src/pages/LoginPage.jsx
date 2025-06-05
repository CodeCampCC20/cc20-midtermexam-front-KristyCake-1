import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { schema } from '../validate/schema';
import { YupToError } from '../validate/YuptoError';
import axios from 'axios';


function LoginPage() {
  const loginBox = {
    username: '',
    password: '',
  };
  const navi = useNavigate()
  const [formData, setFormData] = useState(loginBox);
  const [errObj, setErrObj] = useState({});
  const hdlChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const hdlSubmit = async (e) => {
    e.preventDefault()

    try {
      schema.validateSync(formData, { abortEarly: false })
      const res = await axios.post(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login`, formData

      )
      console.log(res.data)
      navi("/todo")
    } catch (error) {
      const errObj = YupToError(error)
      setErrObj(errObj)
    }
  }

  console.log(errObj)
  return (
    <div className='flex justify-center mt-5'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className='fieldsel-legend'>WELCOME</legend>

        <input type="text" className="input" placeholder="email"
          id='username' value={formData.username}
          onChange={hdlChange} />
        <p className='text-red-600 text-center'>{errObj.username}</p>

        <input type="password" className="input" placeholder="password"
          id='password' value={formData.password}
          onChange={hdlChange} />
        <p className='text-red-600 text-center'>{errObj.password}</p>

        <button className='btn btn-neutral mt-4' type='submit' onClick={hdlSubmit} >LOG IN</button>

      </fieldset>
      {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
    </div>
  )
}

export default LoginPage