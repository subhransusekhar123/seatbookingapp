import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Seats from './Seats';


const Class1 = [
  {
    class:1,
    price:250,
   

  },
  {
    class:2,
    price:250,
    

  },
  {
    class:3,
    price:250,
    

  },
  {
    class:4,
    price:250,
    

  },
  {
    class:5,
    price:250,
    

  },
  {
    class:6,
    price:250,
    

  },
  {
    class:7,
    price:250,
    

  },
  {
    class:8,
    price:250,
    

  },
  {
    class:9,
    price:250,
    

  },
  {
    class:1,
    price:250,
    

  },
  {
    class:11,
    price:250,
    

  },
  {
    class:12,
    price:250,
    

  },
  
]

const class2 = [
  {
    class:13,
    price:350,
    
  },
  {
    class:14,
    price:350,
    
  },
  {
    class:15,
    price:350,
    
  },
  {
    class:16,
    price:350,
    
  },
  {
    class:17,
    price:350,
    
  },
  {
    class:18,
    price:350,
    
  },
  {
    class:19,
    price:350,
    
  },
  {
    class:20,
    price:350,
    
  },
  {
    class:21,
    price:350,
    
  },
  {
    class:22,
    price:350,
    
  },
  {
    class:23,
    price:350,
    
  },
  
]

const class3 = [
  {
    class:24,
    price:450,
    
  },
  {
    class:25,
    price:450,
    
  },
  {
    class:26,
    price:450,
    
  },
  {
    class:27,
    price:450,
    
  },  {
    class:28,
    price:450,
    
  },
  {
    class:29,
    price:450,
    
  },  {
    class:30,
    price:450,
    
  },
  {
    class:31,
    price:450,
    
  },  {
    class:32,
    price:450,
    
  },
  {
    class:33,
    price:450,
    
  },
]




const BookSeat = () => {

  

 
  
  return (
    
    <div className='container d-flex flex-column justify-content-center'>
      <div className='accordian-div m-5'>
       {
         Class1.map((ele,index)=>{
           return <Seats index={index} ele={ele}/>
         })
       }

      </div>

      <div className='accordian-div m-5'>
        {
          class2.map((ele,index) => {
            return (<Seats index = {index} ele={ele} />)
          })
        }

      </div>

      <div className='accordian-div m-5'>
        {
          class3.map((ele,index) => {
            return (<Seats index = {index} ele={ele}/>)
          })
        }

      </div>

      <div className="container">
          <div className="container">
            <button className="btn btn-success">b</button>-booked
          </div>

          <div className="container">
            <button className="btn btn-secondary">num</button>-available
          </div>
        </div>

      <div className="container my-5 p-1 bg-warning">
        

      </div>
      <div className="cotainer d-flex justify-content-center">

      screen
      </div>

      <Link to="/lastPage">
        <button className="btn btn-primary">checkout</button>
      </Link>
    

    </div>
  )
}

export default BookSeat;