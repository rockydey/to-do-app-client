import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import MyTask from './Pages/MyTask/MyTask';
import Navbar from './Pages/Shared/Navbar';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignIn/SignUp';
import ToDo from './Pages/ToDo/ToDo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div className='w-10/12 mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/mytask' element={<MyTask></MyTask>}></Route>
        <Route path='/todo' element={<RequireAuth><ToDo></ToDo></RequireAuth>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
