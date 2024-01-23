import {useContext,useState} from "react";
import {authContext} from '../context/AuthContext';
import MyBooking from "../Dashboard/MyBooking";
import Profile from '../Dashboard/Profile';
import useGetProfile from '../hooks/useFetchData';
import { BASE_URL } from "../config";
import Loading from "../components/Loading";
const MyAccount =()=>{
  const {dispatch} = useContext(authContext);
  const [tab,setTab] = useState('bookings');
  const {data:userData, loading, error}= useGetProfile(`${BASE_URL}/users/profile/me`)

  console.log(userData, 'userdata');
  const handleLogout =()=>{
    dispatch({type:'LOGOUT'});
  }
  return(
    <section>

     <div className="max-w-7xlxl mx-auto flex flex-row">
        <div className="flex flex-col items-center justify-center w-[500px] p-8">
          <figure className="w-[120px] h-[120px] rounded-full border-2 border-solid border-blue-700 ">
                <img src={userData.photo} alt="" className="w-full h-full rounded-full"/>
          </figure>
          <h3 className="text-[18px] leading-[30px] text-black font-bold">
          {userData.name }
          </h3>
          <p className="text-black text-[15px] leading-6 font-medium">
           {userData.email}
          </p>
          <p className="text-black text-[15px] leading-6 font-medium">
            Blood Type:<span className="ml-2 text-black text-[22px] leading-8">
             {userData.bloodType}
            </span>
          </p>
          <button onClick={handleLogout} className=" bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md mt-4 w-full text-white">
            Logout
          </button>
          <button className=" bg-red-600 text-white p-3 text-[16px] leading-7 rounded-md mt-4 w-full">
            Delete Account
          </button>
        </div>
      <div className="max-w-2xl">
        <div className="md:col-span-2 md:px-[30px] ">
          <div>
            <button onClick={()=>setTab('bookings')}
             className={`${tab === 'bookings' && 'bg-blue-700 text-white font-normal'}p-2 mr-5 px-5 rounded-md text-black 
             font-semibold text-[16px] leading-7 border
              border-solid border-blue-400`}>
              My Bookings
            </button>
            <button onClick={()=>setTab('settings')}
             className={`${tab === 'settings' && 'bg-blue-700 text-white font-normal'}py-2  px-5 rounded-md text-black
              font-semibold text-[16px] leading-7 border
               border-solid border-blue-400`}>
              Profile Settings
            </button>
          </div>
  
          {
            tab ==='bookings' && <MyBooking/>
          }
          {
            tab ==='settings' && <Profile user={userData}/>
          }
             
        </div>
      </div>
    </div>
    
      
    </section>
  
  );
};
export default MyAccount;


