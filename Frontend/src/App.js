import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Contacts from './addContact';
import ContactDetail from './ContactShow';
import UpdateContacts from './updateContact';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />

      <Route element={<ProtectedRoute/>}>
      <Route path="/addContact" element={<Contacts/>} />
      <Route path="/contacts/" element={<ContactDetail/>}/>
      <Route path="/updateContact/:id" element={<UpdateContacts/>}/>
      </Route>
    </Routes>
  );
}

export default App;