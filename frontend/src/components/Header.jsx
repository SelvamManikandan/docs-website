import { useEffect,useRef,useContext } from 'react';
import logo from '../images/logo.png'
import { NavLink,Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi';
import { authContext } from '../context/AuthContext';

const navLinks=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/doctors',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  },

]



const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user, role, token} = useContext(authContext)

  const handleStickyHeader =()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop> 80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    handleStickyHeader()

    return()=> window.removeEventListener('scroll', handleStickyHeader)
  });

  const toggleMenu =()=> menuRef.current.classList.toggle('show__menu')
  return( 
  <header className='bg-blue-900' ref={headerRef}>
    <div className='container'>
      <div className='flex flex-row items-center justify-between'>
        {/* {======logo====} */}
        <div>
          <img src={logo} className='flex rounded-md mt-3 mb-3 w-32 ' alt=""/>
        </div>

        {/* =====menu===== */}
        <div className='navigation' ref={menuRef} onClick={toggleMenu}>
        <ul className='menu flex  items-center  gap-[2.7rem]'>
                <Link to='/home'>
                    <li className=' text-white hover:text-black cursor-pointer'>Home</li>
                </Link>
                <Link to='/services'>
                    <li className='  text-white hover:text-black cursor-pointer'>Service</li>
                </Link>
                <Link to='/doctors'>
                    <li className='  text-white hover:text-black cursor-pointer'>Find a Doctor</li>
                </Link>
                <Link to='/contact'>
                    <li className='  text-white hover:text-black cursor-pointer'>Contact</li>
                </Link>
            </ul>
        </div>
        {/* ====nav right===== */}
        <div className='flex items-center gap-4'>

          {
            token && user ? (
             <div >
            <Link to={`${role==='doctor'
            ?'/doctors/profile/me'
             : '/users/profile/me'}`}
             >
             <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
               <img 
               src={user?.photo} 
               className='w-full h-full rounded-full'
               alt=""/>
             </figure>
            </Link>
       </div>
       ): (
       <Link to='/login'>
            <button className='bg-blue-300 py-2
             px-6 text-white font-[600] h-[44px] 
             flex items-center justify-center rounded-[50px]'>
              Login
              </button>
          </Link>
          )}
         
       
         
          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
          </span>
        </div>
        </div>
    </div>
  </header>
    );
  
};

export default Header

