import React from 'react';
import { ArrowRight, MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const stats = [
    { number: "4.95k", label: "AS FEATURED IN" },
    { number: "350+", label: "Video tutorial" },
    { number: "500+", label: "Free Workout Videos" }
  ];

  const programs = [
    { title: "Workout Videos", description: "Access to hundreds of free, full-length workout videos." },
    { title: "Workout Programs", description: "Affordable and effective workout programs." },
    { title: "Meal Plans", description: "Plans built with registered dietitians and nutritionists." },
    { title: "WO Plus ALL ACCESS", description: "Add powerful features to your membership." }
  ];

  const trainers = [
    { name: "Sarah Anderson", role: "BOXING COACH", image: "/api/placeholder/300/400" },
    { name: "Mark Thompson", role: "FITNESS COACH", image: "/api/placeholder/300/400" },
    { name: "Jessica Roberts", role: "GYM COACH", image: "/api/placeholder/300/400" },
    { name: "Michael Johnson", role: "BODYBUILDING COACH", image: "/api/placeholder/300/400" }
  ];

  const blogs = [
    { date: "21 FEBRUARY 2023", title: "Achieve Your Fitness Goals: Insights from Our Center", image: "/api/placeholder/400/300" },
    { date: "21 FEBRUARY 2023", title: "Achieve Your Fitness Goals: Insights from Our Center", image: "/api/placeholder/400/300" },
    { date: "21 FEBRUARY 2023", title: "Achieve Your Fitness Goals: Insights from Our Center", image: "/api/placeholder/400/300" }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">WITHIN</div>
          <div className="nav-links">
            <a href="#">HOME</a>
            <a href="#">CATALOGS</a>
            <a href="#">BLOG</a>
            <a href="#">COLLECTIONS</a>
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>WORKOUT WITH ME</h1>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="hero-description">
                Not sure where to start? Programs offer day-to-day guidance on an interactive calendar to keep you on track.
              </p>
              <button className="cta-button">Get Started</button>
            </div>
            <div className="hero-image">
              <img src="/api/placeholder/600/400" alt="Fitness Hero" />
            </div>
          </div>
        </div>
      </header>

      {/* Programs Section */}
      <section className="programs">
        <div className="container">
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="trainers">
        <div className="container">
          <h2>MEET THE PROS</h2>
          <div className="trainers-grid">
            {trainers.map((trainer, index) => (
              <div key={index} className="trainer-card">
                <img src={trainer.image} alt={trainer.name} />
                <div className="trainer-info">
                  <h3>{trainer.name}</h3>
                  <p>{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <h2>LATEST BLOGS</h2>
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-card">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-content">
                  <p className="blog-date">{blog.date}</p>
                  <h3>{blog.title}</h3>
                  <button className="read-more">
                    READ MORE <ArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-content">
            <h2>What Our Member Say About Us?</h2>
            <p className="quote">
              "Join this fitness member, the best choice that I've. They're very professional and give you suggestion about what food and nutrition that you can eat"
            </p>
            <div className="testimonial-author">
              <img src="/api/placeholder/64/64" alt="Jonathan Edward" />
              <div className="author-info">
                <p className="author-name">Jonathan Edward</p>
                <p className="author-title">Office Worker</p>
              </div>
            </div>
            <div className="customer-count">10K+ Satisfied Customer</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>CONTACT US</h3>
              <div className="info-item">
                <Mail className="icon" />
                <span>hello@pulse.com</span>
              </div>
              <div className="info-item">
                <Phone className="icon" />
                <span>+907 683 8196</span>
              </div>
            </div>
            <div className="locations">
              <h3>OUR LOCATION</h3>
              <div className="location-item">
                <MapPin className="icon" />
                <div>
                  <p>Hawaii</p>
                  <p>828 Timbercrest Road, Healy City, AK 99743</p>
                </div>
              </div>
              <div className="location-item">
                <MapPin className="icon" />
                <div>
                  <p>New York</p>
                  <p>828 Timbercrest Road, Healy City, AK 99743</p>
                </div>
              </div>
            </div>
            <div className="hours">
              <h3>OPENING HOURS</h3>
              <div className="hours-item">
                <Clock className="icon" />
                <div>
                  <p>Monday-Friday</p>
                  <p>06:00 - 22:00</p>
                </div>
              </div>
              <div className="hours-item">
                <Clock className="icon" />
                <div>
                  <p>Weekends</p>
                  <p>10:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">POWER FROM WITHIN</div>
            <div className="social-links">
              <Instagram className="social-icon" />
              <Facebook className="social-icon" />
              <Twitter className="social-icon" />
            </div>
          </div>
          <div className="copyright">
            Copyright Dotcreativemarket, All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;