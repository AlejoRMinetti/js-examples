"use client"
import { useUser, UserProvider } from './UserContext';

const Home = () => {
  const { user, setUser } = useUser();

  return (
    <div>
      <h1>Hello, {user || 'Guest'}!</h1>
      <button onClick={() => {
        setUser('CHAMA');
      }}>Change to CHAMA</button>
      <br />
      <button onClick={() => {
    setUser('ROBERTITO');
  }}>Change to Robert</button>
    </div>
  );
};

const HomePage = () => {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
};

export default HomePage;
