// import useFetchData from "../hooks/useFetchData"
// import { BASE_URL } from "../config"
// import DoctorCard from '../components/DoctorCard';


// const MyBooking = () => {
//     const {data:appointments} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`) 
//      return (
//      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">{
//         appointments.map(doctor =>{
//             <DoctorCard doctor={doctor} key={doctor._id}/>
//         })
//      }

//      </div>
//      )
// }

// <h2 className="mt-5 "> You did not book any doctor yet!</h2>

// export default MyBooking
import useFetchData from "../hooks/useFetchData"
import { BASE_URL } from "../config"
import DoctorCard from '../components/DoctorCard';

const MyBooking = () => {
  const { data: appointments } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {appointments.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      ) : (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-blue-600">You did not book any doctor yet!</h2>
      )}
    </div>
  );
}

export default MyBooking;
