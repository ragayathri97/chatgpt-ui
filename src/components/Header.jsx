import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; // Import auth from your config

export default function Header({ onLogout }) {
  const handleLogout = () => {
    signOut(auth).then(() => onLogout());
  };

  return (
    <header>
      <img src="/vite.svg" alt="Logo" className="logo" />
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}