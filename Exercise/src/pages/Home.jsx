
// import React from 'react'
// import LandingPage from '../Components/Files/LandingPage'
// import HomeDashboard from '../Components/Files/HomeDashboard'

// const Home = () => {
//   return (
//     <div>
//       <LandingPage/>
//       <HomeDashboard/>
//     </div>
//   )
// }

// export default Home


import React from 'react';
import LandingPage from '../Components/Files/LandingPage';
import HomeDashboard from '../Components/Files/HomeDashboard';
import AuthForm  from '../Components/Files/AuthForm';

const Home = () => {
  return (
    <div>
      <LandingPage />
      <HomeDashboard />
       <AuthForm/>
     
    </div>
  );
};

export default Home;
