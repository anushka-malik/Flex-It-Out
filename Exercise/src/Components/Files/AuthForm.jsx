// import React, { useState } from 'react';
// import './AuthForm.css';

// const AuthForm = () => {
//   const [isSignUp, setIsSignUp] = useState(true);
  
//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-form-container">
//         <div className="auth-tabs">
//           <div 
//             className={`auth-tab ${!isSignUp ? 'active' : ''}`}
//             onClick={() => setIsSignUp(false)}
//           >
//             SIGN IN
//           </div>
//           <div 
//             className={`auth-tab ${isSignUp ? 'active' : ''}`}
//             onClick={() => setIsSignUp(true)}
//           >
//             SIGN UP
//           </div>
//         </div>
        
//         {isSignUp ? (
//           <form className="auth-form">
//             <div className="form-group">
//               <label htmlFor="username">USERNAME</label>
//               <input type="text" id="username" className="form-control" />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="password">PASSWORD</label>
//               <input type="password" id="password" className="form-control" />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="repeatPassword">REPEAT PASSWORD</label>
//               <input type="password" id="repeatPassword" className="form-control" />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="email">EMAIL ADDRESS</label>
//               <input type="email" id="email" className="form-control" />
//             </div>
            
//             <button type="submit" className="submit-btn">SIGN UP</button>
//           </form>
//         ) : (
//           <form className="auth-form">
//             <div className="form-group">
//               <label htmlFor="username">USERNAME</label>
//               <input type="text" id="username" className="form-control" />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="password">PASSWORD</label>
//               <input type="password" id="password" className="form-control" />
//             </div>
            
//             <div className="form-group checkbox-group">
//               <input type="checkbox" id="keepSignedIn" />
//               <label htmlFor="keepSignedIn">Keep me Signed in</label>
//             </div>
            
//             <button type="submit" className="submit-btn">SIGN IN</button>
            
//             <div className="forgot-password">
//               <a href="#">Forgot Password?</a>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    repeatPassword: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const validateSignUpForm = () => {
    if (!formData.username || !formData.password || !formData.repeatPassword || !formData.email) {
      setError('All fields are required');
      return false;
    }
    if (formData.password !== formData.repeatPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email');
      return false;
    }
    return true;
  };

  const validateSignInForm = () => {
    if (!formData.username || !formData.password) {
      setError('Username and password are required');
      return false;
    }
    return true;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');

    if (!validateSignUpForm()) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if username already exists
    if (users.some(user => user.username === formData.username)) {
      setError('Username already exists');
      return;
    }

    // Add new user
    users.push({
      username: formData.username,
      password: formData.password,
      email: formData.email
    });

    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful! Please sign in.');
    setIsSignUp(false);
    setFormData({
      username: '',
      password: '',
      repeatPassword: '',
      email: ''
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');

    if (!validateSignInForm()) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === formData.username);

    if (user && user.password === formData.password) {
      if (keepSignedIn) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      navigate('/');
    } else {
      setError('Invalid username or password');
      setFormData(prevData => ({
        ...prevData,
        password: ''
      }));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="auth-tabs">
          <div 
            className={`auth-tab ${!isSignUp ? 'active' : ''}`}
            onClick={() => {
              setIsSignUp(false);
              setError('');
              setFormData({
                username: '',
                password: '',
                repeatPassword: '',
                email: ''
              });
            }}
          >
            SIGN IN
          </div>
          <div 
            className={`auth-tab ${isSignUp ? 'active' : ''}`}
            onClick={() => {
              setIsSignUp(true);
              setError('');
              setFormData({
                username: '',
                password: '',
                repeatPassword: '',
                email: ''
              });
            }}
          >
            SIGN UP
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}
        
        {isSignUp ? (
          <form className="auth-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="username">USERNAME</label>
              <input 
                type="text" 
                id="username" 
                className="form-control"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input 
                type="password" 
                id="password" 
                className="form-control"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="repeatPassword">REPEAT PASSWORD</label>
              <input 
                type="password" 
                id="repeatPassword" 
                className="form-control"
                value={formData.repeatPassword}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input 
                type="email" 
                id="email" 
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <button type="submit" className="submit-btn">SIGN UP</button>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="username">USERNAME</label>
              <input 
                type="text" 
                id="username" 
                className="form-control"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input 
                type="password" 
                id="password" 
                className="form-control"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group checkbox-group">
              <input 
                type="checkbox" 
                id="keepSignedIn"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
              />
              <label htmlFor="keepSignedIn">Keep me Signed in</label>
            </div>
            
            <button type="submit" className="submit-btn">SIGN IN</button>
            
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;