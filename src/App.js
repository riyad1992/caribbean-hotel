import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Rooms from './Pages/Rooms/Rooms';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Contact from './Pages/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
