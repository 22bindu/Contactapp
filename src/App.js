
import Navbar from '../src/navbar/Navbar';
import SectionTwo from './navbar/SectionTwo';
import './App.css';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
       <ToastContainer theme="colored"></ToastContainer>
     <Navbar/>
     <SectionTwo/>
    </div>
  );
}

export default App;
