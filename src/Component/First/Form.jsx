import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate();
  const clickHandler = () =>{
    navigate("/product")
  }
  return (
    <div className="container d-flex flex-column " >
        <input type="text" name="userName" id="" className='p-2 m-3'  placeholder='userName'/>
        <input type="password" name="passWord" id="" className='p-2 m-3' placeholder='password'/>
        <button className='btn btn-primary' onClick={clickHandler}>submit</button>
    </div>
  )
}

export default Form