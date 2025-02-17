
// import React, { useEffect, useState } from 'react';
// import './App.css';

// const App = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [activeLink, setActiveLink] = useState('Home');

//   const toggleNavbar = () => {
//     setIsActive(!isActive);
//   };

//   useEffect(() => {
//     const backTopBtn = document.querySelector("[data-back-top-btn]");

//     const showBackTopBtn = () => {
//       if (window.scrollY > 100) {
//         backTopBtn.classList.add("active");
//       } else {
//         backTopBtn.classList.remove("active");
//       }
//     };

//     window.addEventListener("scroll", showBackTopBtn);

//     return () => {
//       window.removeEventListener("scroll", showBackTopBtn);
//     };
//   }, []);

//   const handleNavLinkClick = (link) => {
//     setActiveLink(link);
//     setIsActive(false);
//   };

//   return (
//     <>
//       <header className={`header ${isActive ? 'active' : ''}`} data-header>
//         <div className="container">
//           <a href="#" className="logo">
//             <ion-icon name="barbell-sharp" aria-hidden="true"></ion-icon>
//             <span className="span">Fitlife</span>
//           </a>

//           <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
//             <button className="nav-close-btn" aria-label="close menu" onClick={toggleNavbar}>
//               <ion-icon name="close-sharp" aria-hidden="true"></ion-icon>
//             </button>

//             <ul className="navbar-list">
//               {['Home', 'About Us', 'Classes', 'Blog', 'Contact Us'].map((link) => (
//                 <li key={link}>
//                   <a 
//                     href={`#${link.toLowerCase().replace(' ', '-')}`} 
//                     className={`navbar-link ${activeLink === link ? 'active' : ''}`}
//                     onClick={() => handleNavLinkClick(link)}
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <a href="#" className="btn btn-secondary">Join Now</a>

//           <button className="nav-open-btn" aria-label="open menu" onClick={toggleNavbar}>
//             <span className="line"></span>
//             <span className="line"></span>
//             <span className="line"></span>
//           </button>
//         </div>
//       </header>

//       <main>
//         <article>
//           <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section
//             style={{backgroundImage: "url('C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\hero-bg.png')"}}>
//             <div className="container">
//               <div className="hero-content">
//                 <p className="hero-subtitle">
//                   <strong className="strong">The Best</strong>Fitness Club
//                 </p>
//                 <h1 className="h1 hero-title">Work Hard To Get Better Life</h1>
//                 <p className="section-text">
//                   Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.
//                 </p>
//                 <a href="#" className="btn btn-primary">Get Started</a>
//               </div>

//               <div className="hero-banner">
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\hero-banner.png" width="660" height="753" alt="hero banner" className="w-100" />
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\hero-circle-one.png" width="666" height="666" aria-hidden="true" alt=""
//                   className="circle circle-1" />
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\hero-circle-two.png" width="666" height="666" aria-hidden="true" alt=""
//                   className="circle circle-2" />
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\heart-rate.svg" width="255" height="270" alt="heart rate"
//                   className="abs-img abs-img-1" />
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\calories.svg" width="348" height="224" alt="calories" className="abs-img abs-img-2" />
//               </div>
//             </div>
//           </section>

//           <section className="section about" id="about" aria-label="about">
//             <div className="container">
//               <div className="about-banner has-after">
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\about-banner.png" width="660" height="648" loading="lazy" alt="about banner"
//                   className="w-100" />
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\about-circle-one.png" width="660" height="534" loading="lazy" aria-hidden="true"
//                   alt="" className="circle circle-1" />
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\about-circle-two.png" width="660" height="534" loading="lazy" aria-hidden="true"
//                   alt="" className="circle circle-2" />
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\fitness.png" width="650" height="154" loading="lazy" alt="fitness"
//                   className="abs-img w-100" />
//               </div>

//               <div className="about-content">
//                 <p className="section-subtitle">About Us</p>
//                 <h2 className="h2 section-title">Welcome To Our Fitness Gym</h2>
//                 <p className="section-text">
//                   Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat.
//                   Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.
//                 </p>
//                 <p className="section-text">
//                   Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante
//                   ipsum primis.
//                 </p>

//                 <div className="wrapper">
//                   <div className="about-coach">
//                     <figure className="coach-avatar">
//                       <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\about-coach.jpg" width="65" height="65" loading="lazy" alt="Trainer" />
//                     </figure>
//                     <div>
//                       <h3 className="h3 coach-name">Denis Robinson</h3>
//                       <p className="coach-title">Our Coach</p>
//                     </div>
//                   </div>
//                   <a href="#" className="btn btn-primary">Explore More</a>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="section video" aria-label="video">
//             <div className="container">
//               <div className="video-card has-before has-bg-image"
//                 style={{backgroundImage: "url('C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\video-banner.jpg')"}}>
//                 <h2 className="h2 card-title">Explore Fitness Life</h2>
//                 <button className="play-btn" aria-label="play video">
//                   <ion-icon name="play-sharp" aria-hidden="true"></ion-icon>
//                 </button>
//                 <a href="#" className="btn-link has-before">Watch More</a>
//               </div>
//             </div>
//           </section>

//           <section className="section class bg-dark has-bg-image" id="classes" aria-label="class"
//             style={{backgroundImage: "url('C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\classes-bg.png')"}}>
//             <div className="container">
//               <p className="section-subtitle">Our Classes</p>
//               <h2 className="h2 section-title text-center">Fitness Classes For Every Goal</h2>

//               <ul className="class-list has-scrollbar">
//                 {[
//                   {
//                     title: 'Weight Lifting',
//                     icon: 'class-icon-1.png',
//                     image: 'C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\class-1.jpg',
//                     progress: 85
//                   },
//                   {
//                     title: 'Cardio & Strenght',
//                     icon: 'class-icon-2.png',
//                     image: 'class-2.jpg',
//                     progress: 70
//                   },
//                   {
//                     title: 'Power Yoga',
//                     icon: 'class-icon-3.png',
//                     image: 'class-3.jpg',
//                     progress: 90
//                   },
//                   {
//                     title: 'The Fitness Pack',
//                     icon: 'class-icon-4.png',
//                     image: 'class-4.jpg',
//                     progress: 60
//                   }
//                 ].map((item, index) => (
//                   <li className="scrollbar-item" key={index}>
//                     <div className="class-card">
//                       <figure className="card-banner img-holder" style={{width: 416, height: 240}}>
//                         <img src={`./assets/images/${item.image}`} width="416" height="240" loading="lazy" alt={item.title}
//                           className="img-cover" />
//                       </figure>

//                       <div className="card-content">
//                         <div className="title-wrapper">
//                           <img src={`./assets/images/${item.icon}`} width="52" height="52" aria-hidden="true" alt=""
//                             className="title-icon" />
//                           <h3 className="h3">
//                             <a href="#" className="card-title">{item.title}</a>
//                           </h3>
//                         </div>

//                         <p className="card-text">
//                           Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
//                         </p>

//                         <div className="card-progress">
//                           <div className="progress-wrapper">
//                             <p className="progress-label">Class Full</p>
//                             <span className="progress-value">{item.progress}%</span>
//                           </div>
//                           <div className="progress-bg">
//                             <div className="progress-bar" style={{width: `${item.progress}%`}}></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>

//           <section className="section blog" id="blog" aria-label="blog">
//             <div className="container">
//               <p className="section-subtitle">Our News</p>
//               <h2 className="h2 section-title text-center">Latest Blog Feed</h2>

//               <ul className="blog-list has-scrollbar">
//                 {[
//                   {
//                     title: 'Going to the gym for the first time',
//                     image: 'blog-1.jpg'
//                   },
//                   {
//                     title: 'Parturient accumsan cacus pulvinar magna',
//                     image: 'blog-2.jpg'
//                   },
//                   {
//                     title: 'Risus purus namien parturient accumsan cacus',
//                     image: 'blog-3.jpg'
//                   }
//                 ].map((blog, index) => (
//                   <li className="scrollbar-item" key={index}>
//                     <div className="blog-card">
//                       <div className="card-banner img-holder" style={{width: 440, height: 270}}>
//                         <img src={`./assets/images/${blog.image}`} width="440" height="270" loading="lazy"
//                           alt={blog.title} className="img-cover" />
//                         <time className="card-meta" dateTime="2022-07-07">7 July 2022</time>
//                       </div>

//                       <div className="card-content">
//                         <h3 className="h3">
//                           <a href="#" className="card-title">{blog.title}</a>
//                         </h3>
//                         <p className="card-text">
//                           Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac
//                           habitasse platea dictumst.
//                         </p>
//                         <a href="#" className="btn-link has-before">Read More</a>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//         </article>
//       </main>

//       <footer className="footer">
//         <div className="section footer-top bg-dark has-bg-image" style={{backgroundImage: "url('C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\footer-bg.png')"}}>
//           <div className="container">
//             <div className="footer-brand">
//               <a href="#" className="logo">
//                 <ion-icon name="barbell-sharp" aria-hidden="true"></ion-icon>
//                 <span className="span">Fitlife</span>
//               </a>
//               <p className="footer-brand-text">
//                 Etiam suscipit fringilla ullamcorper sed malesuada urna nec odio.
//               </p>

//               <div className="wrapper">
//                 <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\footer-clock.png" width="34" height="34" loading="lazy" alt="Clock" />
//                 <ul className="footer-brand-list">
//                   <li>
//                     <p className="footer-brand-title">Monday - Friday</p>
//                     <p>7:00Am - 10:00Pm</p>
//                   </li>
//                   <li>
//                     <p className="footer-brand-title">Saturday - Sunday</p>
//                     <p>7:00Am - 2:00Pm</p>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <ul className="footer-list">
//               <li>
//                 <p className="footer-list-title has-before">Our Links</p>
//               </li>
//               {['Home', 'About Us', 'Classes', 'Blog', 'Contact Us'].map((item, index) => (
//                 <li key={index}>
//                   <a href="#" className="footer-link">{item}</a>
//                 </li>
//               ))}
//             </ul>

//             <ul className="footer-list">
//               <li>
//                 <p className="footer-list-title has-before">Contact Us</p>
//               </li>
//               <li className="footer-list-item">
//                 <div className="icon">
//                   <ion-icon name="location" aria-hidden="true"></ion-icon>
//                 </div>
//                 <address className="address footer-link">
//                   1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad
//                 </address>
//               </li>
//               <li className="footer-list-item">
//                 <div className="icon">
//                   <ion-icon name="call" aria-hidden="true"></ion-icon>
//                 </div>
//                 <div>
//                   <a href="tel:18001213637" className="footer-link">1800-121-3637</a>
//                   <a href="tel:+915552348765" className="footer-link">+91 555 234-8765</a>
//                 </div>
//               </li>
//               <li className="footer-list-item">
//                 <div className="icon">
//                   <ion-icon name="mail" aria-hidden="true"></ion-icon>
//                 </div>
//                 <div>
//                   <a href="mailto:info@fitlife.com" className="footer-link">info@fitlife.com</a>
//                   <a href="mailto:services@fitlife.com" className="footer-link">services@fitlife.com</a>
//                 </div>
//               </li>
//             </ul>

//             <ul className="footer-list">
//               <li>
//                 <p className="footer-list-title has-before">Our Newsletter</p>
//               </li>
//               <li>
//                 <form action="" className="footer-form">
//                   <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required
//                     className="input-field" />
//                   <button type="submit" className="btn btn-primary" aria-label="Submit">
//                     <ion-icon name="chevron-forward-sharp" aria-hidden="true"></ion-icon>
//                   </button>
//                 </form>
//               </li>
//               <li>
//                 <ul className="social-list">
//                   {['logo-facebook', 'logo-instagram', 'logo-twitter'].map((icon, index) => (
//                     <li key={index}>
//                       <a href="#" className="social-link">
//                         <ion-icon name={icon}></ion-icon>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="container">
//             <p className="copyright">
//               &copy; 2022 Fitlife. All Rights Reserved By <a href="#" className="copyright-link">codewithsadee.</a>
//             </p>
//             <ul className="footer-bottom-list">
//               <li>
//                 <a href="#" className="footer-bottom-link has-before">Privacy Policy</a>
//               </li>
//               <li>
//                 <a href="#" className="footer-bottom-link has-before">Terms & Condition</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>

//       <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
//         <ion-icon name="caret-up-sharp" aria-hidden="true"></ion-icon>
//       </a>
//     </>
//   );
// };

// export default App;







import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import AuthForm from './Components/Files/AuthForm';


import heroBg from './assets/hero-bg.png';
import heroBanner from './assets/hero-banner.png';
import heroCircleOne from './assets/hero-circle-one.png';
import heroCircleTwo from './assets/hero-circle-two.png';
import heartRate from './assets/heart-rate.svg';
import calorie from './assets/calories.svg';

import aboutBanner from './assets/about-banner.png';
import aboutCircleOne from './assets/about-circle-one.png';
import aboutCircleTwo from './assets/about-circle-two.png';
import fitness from './assets/fitness.png';
import aboutCoach from './assets/about-coach.jpg';

import videoBanner from './assets/video-banner.jpg';

import classesBg from './assets/classes-bg.png';

// Class Images
import class1 from './assets/class-1.jpg';
import class2 from './assets/class-2.jpg';
import class3 from './assets/class-3.jpg';
import class4 from './assets/class-4.jpg';

import classIcon1 from './assets/class-icon-1.png';
import classIcon2 from './assets/class-icon-2.png';
import classIcon3 from './assets/class-icon-3.png';
import classIcon4 from './assets/class-icon-4.png';

// Blog Images
import blog1 from './assets/blog-1.jpg';
import blog2 from './assets/blog-2.jpg';
import blog3 from './assets/blog-3.jpg';
import FitnessLanding from './Components/Files/FitnessLanding';
import Home from './pages/Home';




const Header = ({ isActive, toggleNavbar, activeLink, handleNavLinkClick }) => {
  const navigate = useNavigate();

  return (
    <header className={`header ${isActive ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          <ion-icon name="barbell-sharp" aria-hidden="true"></ion-icon>
          <span className="span">Fitlife</span>
        </a>

        <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
          <button className="nav-close-btn" aria-label="close menu" onClick={toggleNavbar}>
            <ion-icon name="close-sharp" aria-hidden="true"></ion-icon>
          </button>

          <ul className="navbar-list">
            {['Home', 'About Us', 'Classes', 'Blog', 'Contact Us'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  className={`navbar-link ${activeLink === link ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="btn btn-secondary"
          onClick={() => navigate('/signup')}
        >
          Join Now
        </button>

        <button className="nav-open-btn" aria-label="open menu" onClick={toggleNavbar}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  );
};

const MainContent = () => {
  // All your existing main content JSX

  return (
    <main>
      {/* Your existing main content */}
      <article>
          <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section
            style={{backgroundImage: `url(${heroBg})`}}>
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">
                  <strong className="strong">The Best</strong>Fitness Club
                </p>
                <h1 className="h1 hero-title">Work Hard To Get Better Life</h1>
                <p className="section-text">
                  Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.
                </p>
                <a href="#" className="btn btn-primary">Get Started</a>
              </div>

              <div className="hero-banner">
                <img src={heroBanner} width="660" height="753" alt="hero banner" className="w-100" />
                <img src={heroCircleTwo} width="666" height="666" aria-hidden="true" alt=""
                  className="circle circle-2" />
                <img src={heartRate} width="255" height="270" alt="heart rate"
                  className="abs-img abs-img-1" />
                <img src={calorie} width="348" height="224" alt="calories" className="abs-img abs-img-2" />
              </div>
            </div>
          </section>

          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <div className="about-banner has-after">
                <img src={aboutBanner} width="660" height="648" loading="lazy" alt="about banner"
                  className="w-100" />
                <img src={fitness} width="650" height="154" loading="lazy" alt="fitness"
                  className="abs-img w-100" />
              </div>

              <div className="about-content">
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">Welcome To Our Fitness Gym</h2>
                <p className="section-text">
                  Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat.
                  Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.
                </p>
                <p className="section-text">
                  Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante
                  ipsum primis.
                </p>

                <div className="wrapper">
                  <div className="about-coach">
                    <figure className="coach-avatar">
                      <img src={aboutCoach} width="65" height="65" loading="lazy" alt="Trainer" />
                    </figure>
                    <div>
                      <h3 className="h3 coach-name">Denis Robinson</h3>
                      <p className="coach-title">Our Coach</p>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary">Explore More</a>
                </div>
              </div>
            </div>
          </section>

          <section className="section video" aria-label="video">
            <div className="container">
              <div className="video-card has-before has-bg-image"
                style={{backgroundImage: `url(${videoBanner})`}}>
                <h2 className="h2 card-title">Explore Fitness Life</h2>
                <button className="play-btn" aria-label="play video">
                  <ion-icon name="play-sharp" aria-hidden="true"></ion-icon>
                </button>
                <a href="#" className="btn-link has-before">Watch More</a>
              </div>
            </div>
          </section>

          <section className="section class bg-dark has-bg-image" id="classes" aria-label="class"
            style={{backgroundImage: `url(${classesBg})`}}>
            <div className="container">
              <p className="section-subtitle">Our Classes</p>
              <h2 className="h2 section-title text-center">Fitness Classes For Every Goal</h2>

              <ul className="class-list has-scrollbar">
              {[
                { title: 'Weight Lifting', icon: classIcon1, image: class1, progress: 85 },
                { title: 'Cardio & Strength', icon: classIcon2, image: class2, progress: 70 },
                { title: 'Power Yoga', icon: classIcon3, image: class3, progress: 90 },
                { title: 'The Fitness Pack', icon: classIcon4, image: class4, progress: 60 }
              ].map((item, index) => (
                <li className="scrollbar-item" key={index}>
                  <div className="class-card">
                    <figure className="card-banner">
                      <img src={item.image} alt={item.title} />
                    </figure>
                    <div className="card-content">
                      <div className="title-wrapper">
                        <img src={item.icon} alt="" className="title-icon" />
                        <h3><a href="#" className="card-title">{item.title}</a></h3>
                      </div>
                      <p className="card-text">Suspendisse nisi libero...</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

          {/* Blog Section */}
        <section className="section blog" id="blog" aria-label="blog">
          <div className="container">
            <ul className="blog-list has-scrollbar">
              {[
                { title: 'Going to the gym for the first time', image: blog1 },
                { title: 'Parturient accumsan cacus pulvinar magna', image: blog2 },
                { title: 'Risus purus namien parturient accumsan cacus', image: blog3 }
              ].map((blog, index) => (
                <li className="scrollbar-item" key={index}>
                  <div className="blog-card">
                    <img src={blog.image} alt={blog.title} />
                    <h3><a href="#" className="card-title">{blog.title}</a></h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        </article>
    </main>
  );
};

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const showBackTopBtn = () => {
      if (window.scrollY > 100) {
        backTopBtn.classList.add("active");
      } else {
        backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", showBackTopBtn);

    return () => {
      window.removeEventListener("scroll", showBackTopBtn);
    };
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsActive(false);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header 
                isActive={isActive}
                toggleNavbar={toggleNavbar}
                activeLink={activeLink}
                handleNavLinkClick={handleNavLinkClick}
              />
              <MainContent />
              {/* Your existing footer code */}
              <footer className="footer">
        <div className="section footer-top bg-dark has-bg-image" style={{backgroundImage: "url('C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\footer-bg.png')"}}>
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <ion-icon name="barbell-sharp" aria-hidden="true"></ion-icon>
                <span className="span">Fitlife</span>
              </a>
              <p className="footer-brand-text">
                Etiam suscipit fringilla ullamcorper sed malesuada urna nec odio.
              </p>

              <div className="wrapper">
                <img src="C:\Users\am881\OneDrive\Documents\ProjectCopy\YogaMaster-\Exercise\src\assets\footer-clock.png" width="34" height="34" loading="lazy" alt="Clock" />
                <ul className="footer-brand-list">
                  <li>
                    <p className="footer-brand-title">Monday - Friday</p>
                    <p>7:00Am - 10:00Pm</p>
                  </li>
                  <li>
                    <p className="footer-brand-title">Saturday - Sunday</p>
                    <p>7:00Am - 2:00Pm</p>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Our Links</p>
              </li>
              {['Home', 'About Us', 'Classes', 'Blog', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Contact Us</p>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <ion-icon name="location" aria-hidden="true"></ion-icon>
                </div>
                <address className="address footer-link">
                  1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad
                </address>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <ion-icon name="call" aria-hidden="true"></ion-icon>
                </div>
                <div>
                  <a href="tel:18001213637" className="footer-link">1800-121-3637</a>
                  <a href="tel:+915552348765" className="footer-link">+91 555 234-8765</a>
                </div>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <ion-icon name="mail" aria-hidden="true"></ion-icon>
                </div>
                <div>
                  <a href="mailto:info@fitlife.com" className="footer-link">info@fitlife.com</a>
                  <a href="mailto:services@fitlife.com" className="footer-link">services@fitlife.com</a>
                </div>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Our Newsletter</p>
              </li>
              <li>
                <form action="" className="footer-form">
                  <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required
                    className="input-field" />
                  <button type="submit" className="btn btn-primary" aria-label="Submit">
                    <ion-icon name="chevron-forward-sharp" aria-hidden="true"></ion-icon>
                  </button>
                </form>
              </li>
              <li>
                <ul className="social-list">
                  {['logo-facebook', 'logo-instagram', 'logo-twitter'].map((icon, index) => (
                    <li key={index}>
                      <a href="#" className="social-link">
                        <ion-icon name={icon}></ion-icon>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 Fitlife. All Rights Reserved By <a href="#" className="copyright-link">codewithsadee.</a>
            </p>
            <ul className="footer-bottom-list">
              <li>
                <a href="#" className="footer-bottom-link has-before">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="footer-bottom-link has-before">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
            </>
          } 
        />
        <Route path="/signup" element={<AuthForm />} />
        <Route path="/home" element={<Home />} />

      </Routes>

      <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
        <ion-icon name="caret-up-sharp" aria-hidden="true"></ion-icon>
      </a>
    </Router>
  );
};

export default App;