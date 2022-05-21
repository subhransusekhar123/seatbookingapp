import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkGet } from '../../Redux/Thunk'
import NavBar from '../Navbar'
import Carousal from './Carousal'
import MovieList from './MovieList'



const Second = () => {
    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(  thunkGet())
      

    },[])
  return (
    <>
        <NavBar/>
        <Carousal/>
        <MovieList/>
    </>
  )
}

export default Second