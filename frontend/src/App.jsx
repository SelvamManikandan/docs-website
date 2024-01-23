import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Doctors from './pages/Doctors/Doctors'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import DoctorsDetails from './pages/Doctors/DoctorsDetails'
import Services from './pages/Services'
import Header from './components/Header';
import MyAccount from './Dashboard/MyAccount';
import Footer from './components/Footer';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard/Dashboard';

function App() {
 
  return (
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/doctors/:id' element={<DoctorsDetails/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute>}/>
      <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard/></ProtectedRoute>}/>
     
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}

export default App
