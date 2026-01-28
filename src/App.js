import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SignupHero from './SignupHero';
import Signup from './Signup';
import Workspace from './Workspace';
import AddMembers from './AddMembers';
import Dashboard from './Dashboard';

function App() {
  return (
      <Routes>
      <Route path="/" element={<SignupHero/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/workspace" element={<Workspace/>} />
      <Route path= "/addmembers" element={<AddMembers/>}/>
      <Route path= "/dashboard" element={<Dashboard/>}/>
      </Routes>
  );
}

export default App;
