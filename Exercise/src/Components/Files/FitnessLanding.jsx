// import React from 'react';
// import { Play } from 'lucide-react';
// import './FitnessLanding.css';

// const FitnessLanding = () => {
//   const handleWatchDemo = () => {
//     const youtubeUrl = 'https://youtu.be/51VupvTTSno?si=QOhpACuKgCcDlDLy';
//     window.open(youtubeUrl, '_blank');
//   };

//   return (
//     <div className="landing-container">
//       <div className="background-overlay" />
      
//       <div className="content-container">
//         <p className="tagline">Transform Your Life</p>
        
//         <h1 className="main-heading">
//           Strength Begins
//         </h1>
//         <h2 className="sub-heading">
//           In The Mind
//         </h2>
        
//         <p className="description">
//           Join our community of warriors who push their limits every day. 
//           Your journey to peak fitness starts here.
//         </p>

//         <div className="button-container">
//           <button className="start-button">
//             Start Today
//           </button>
          
//           <button 
//             onClick={handleWatchDemo}
//             className="demo-button"
//           >
//             <Play size={24} />
//             Watch Demo
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FitnessLanding;


import React from 'react';
import { Play } from 'lucide-react';
import './FitnessLanding.css';

const FitnessLanding = () => {
  const handleWatchDemo = () => {
    const youtubeUrl = 'https://www.youtube.com/watch?v=UItWltVZZmE';
    window.open(youtubeUrl, '_blank');
  };

  return (
    <div className="landing-container">
      <div className="background-overlay" />
      
      <div className="content-container">
        <p className="tagline">Transform Your Life</p>
        
        <h1 className="main-heading">
          Strength Begins
        </h1>
        <h2 className="sub-heading">
          In The Mind
        </h2>
        
        <p className="description">
          Join our community of warriors who push their limits every day. 
          Your journey to peak fitness starts here.
        </p>

        <div className="button-container">
          <button className="start-button">
            Start Today
          </button>
          
          <button 
            onClick={handleWatchDemo}
            className="demo-button"
          >
            <Play size={24} />
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitnessLanding;