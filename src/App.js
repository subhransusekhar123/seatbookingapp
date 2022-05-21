
import './App.css';
import NavBar from './Component/Navbar';
import Form from './Component/First/Form';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Component/First/Login';
import Second from './Component/second/Second';
import { thunkGet } from './Redux/Thunk';
import BookSeat from './Component/BookSeat/BookSeat';
import LastPage from './Component/PayFinal/LastPage';


const App=()=> {
 

  return (
   <>
   <Router>
     <Routes>
       <Route path='/' element={ <Login/>}></Route>
       <Route path='/product' element={<Second/>}></Route>
       <Route path='/bookseat' element={<BookSeat/>}></Route>
       <Route path='/lastpage' element={<LastPage/>}></Route>


     </Routes>
   </Router>
  

   </>
  )
}

export default App;
