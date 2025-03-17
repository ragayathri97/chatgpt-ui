import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import '../styles.css';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (isSignup && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        onLogin();
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        onLogin();
      }
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="login-container">
      <img src="/vite.svg" alt="Logo" className="logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {isSignup && (
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        )}
        <button type="submit">{isSignup ? 'Sign up' : 'Log in'}</button>
      </form>
      {error && <p className="error">{error}</p>}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsSignup(!isSignup);
          setError('');
        }}
      >
        {isSignup ? 'Already have an account? Log in' : 'Sign up'}
      </a>
    </div>
  );
}