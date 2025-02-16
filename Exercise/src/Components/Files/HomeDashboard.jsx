// HomeDashboard.jsx
import React, { useState, useEffect } from 'react';
import './HomeDashboard.css';

const HomeDashboard = ({ username = 'Fitness Hero' }) => {
  const [stats, setStats] = useState({
    xp: 1250,
    calories: 7540,
    activeMinutes: 325,
    streak: 12
  });
  
  const [leaderboard, setLeaderboard] = useState([
    { name: 'Alex', xp: 2340 },
    { name: 'Sarah', xp: 2120 },
    { name: 'Jamie', xp: 1890 },
    { name: 'Taylor', xp: 1680 },
    { name: username, xp: stats.xp }
  ]);
  
  const [quote, setQuote] = useState('');
  const [recommendedWorkouts, setRecommendedWorkouts] = useState([
    { id: 1, name: 'HIIT Cardio Blast', duration: '20 min', intensity: 'High' },
    { id: 2, name: 'Full Body Strength', duration: '30 min', intensity: 'Medium' },
    { id: 3, name: 'Morning Yoga Flow', duration: '15 min', intensity: 'Low' }
  ]);
  
  const quotes = [
    "The only bad workout is the one that didn't happen.",
    "Your body can stand almost anything. It's your mind you have to convince.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "No matter how slow you go, you're still lapping everyone on the couch.",
    "The hard part isn't getting your body in shape. The hard part is getting your mind in shape."
  ];
  
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      // Sort leaderboard by XP
      const sortedLeaderboard = [...leaderboard].sort((a, b) => b.xp - a.xp);
      setLeaderboard(sortedLeaderboard);
      
      // Set random quote
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    }, 1000);
  }, []);
  
  const startActivity = () => {
    alert('Starting your personalized workout session...');
  };
  
  const joinChallenge = () => {
    alert('Opening challenges page...');
  };
  
  const viewProgress = () => {
    alert('Opening your progress report...');
  };
  
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>FitLife</h1>
        <div className="user-profile">
          <div className="avatar">
            <img src="/api/placeholder/40/40" alt="User avatar" />
          </div>
          <span className="username">{username}</span>
        </div>
      </header>
      
      <main className="dashboard-content">
        <section className="welcome-section">
          <h2>Hey {username}! Ready to smash your fitness goals today? Let's go! 💪</h2>
        </section>
        
        <section className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">🏅</div>
            <div className="stat-value">{stats.xp}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-value">{stats.calories}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-value">{stats.activeMinutes}</div>
          </div>
          
          <div className="stat-card streak-card">
            <div className="stat-icon">
              <div className="fire-icon">🔥</div>
            </div>
            <div className="stat-value">{stats.streak}</div>
          </div>
        </section>
        
        <section className="cta-section">
          <button className="cta-button primary" onClick={startActivity}>
            <span className="icon">🎬</span>
            Start Activity
          </button>
          
          <button className="cta-button secondary" onClick={joinChallenge}>
            <span className="icon">🏆</span>
            Join a Challenge
          </button>
          
          <button className="cta-button tertiary" onClick={viewProgress}>
            <span className="icon">📈</span>
            View Progress Report
          </button>
        </section>
        
        <section className="recommendation-section">
          <h3>Recommended Workouts</h3>
          <div className="workout-cards">
            {recommendedWorkouts.map((workout) => (
              <div className="workout-card" key={workout.id}>
                <h4>{workout.name}</h4>
                <div className="workout-details">
                  <span className="duration">{workout.duration}</span>
                  <span className={`intensity ${workout.intensity.toLowerCase()}`}>
                    {workout.intensity}
                  </span>
                </div>
                <button className="start-workout-btn">Start</button>
              </div>
            ))}
          </div>
        </section>
        
        <div className="dashboard-bottom">
          <section className="leaderboard-section">
            <h3>Leaderboard</h3>
            <ul className="leaderboard-list">
              {leaderboard.slice(0, 3).map((user, index) => (
                <li key={index} className="leaderboard-item">
                  <span className="rank">{index + 1}</span>
                  <span className="user-name">{user.name}</span>
                  <span className="user-xp">{user.xp} XP</span>
                </li>
              ))}
            </ul>
            <button className="see-more-btn">See Full Leaderboard</button>
          </section>
          
          {/* <section className="quote-section">
            <div className="quote-container">
              <p className="quote-text">"{quote}"</p>
            </div>
          </section> */}
        </div>
      </main>
    </div>
  );
};

export default HomeDashboard;