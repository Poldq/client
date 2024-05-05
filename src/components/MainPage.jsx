import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../utils/contexts/UserContext';
import {LogoutButton} from './LogoutButton';
import {HabitPlanForm}from './CreateHabitPlanForm';
import { Link } from 'react-router-dom';
import { HabitPlanDetails } from './HabitPlanDetails';
import '../styles/MainPage.css';

// export function MainPage() {
//   const { isAuthenticated, display_name, hasHabitPlan } = useContext(UserContext);

//   return (
//     <nav className='bg-blue-200 border-b border-blue-300'>
//       <div className='flex justify-between items-center px-6 py-2'>
//       <div>
//         <Link className='t line' to='/'>
//           HabitTrack
//         </Link>
//       </div>
//         <div className=''>
//           {isAuthenticated ? (
//             <div className='flex items-center gap-3'>
//               <span className=''>Hello, {display_name}!</span>
//               <LogoutButton />
//               {hasHabitPlan ? <HabitPlanDetails /> : <HabitPlanForm />}
//             </div>
//           ) : (
//             <div className='flex gap-2'>
//               <button className='text-xl py-1 px-2 rounded-lg bg-blue-500 text-white'>
//                 <Link to='/login'>Login</Link>
//               </button>
//               <button className='text-xl py-1 px-2 rounded-lg bg-blue-500 text-white'>
//                 <Link to='/registration'>Register</Link>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

export function MainPage() {
  const { isAuthenticated, display_name, hasHabitPlan } = useContext(UserContext);

  return (
    <nav className='nav'>
      <div className='flex justify-between items-center px-6 py-2'>
      <div>
      <Link to="/" className="site-title">HabitTrack</Link>
      </div>
        <div className=''>
          {isAuthenticated ? (
            <div className='flex items-center gap-3'>
              <ul>
                <li>
              <span className=''>Hello, {display_name}!</span>
              </li>
              <li>
              <LogoutButton />
              </li>
              </ul>
              {hasHabitPlan ? <HabitPlanDetails /> : <HabitPlanForm />}
            </div>
          ) : (
            <div className='nav'>
              <button className='text-xl py-1 px-2 rounded-lg bg-blue-500 text-white'>
                <Link to='/login'>Login</Link>
              </button>
              <button className='text-xl py-1 px-2 rounded-lg bg-blue-500 text-white'>
                <Link to='/registration'>Register</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}










