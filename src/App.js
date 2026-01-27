import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SignupHero from './SignupHero';
import Signup from './Signup';
import Dashboard from './Dashboard';

function App() {
  return (
      <Routes>
      <Route path="/" element={<SignupHero/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
       <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
  );
}

export default App;
