import './App.css';
import Login from "./Pages/loginpage";
import Navbar from "./component/navbar";
import Signup from "./Pages/signup";
import HomePage from "./Pages/homePage";
import {Route,Routes} from 'react-router-dom';
import Speciality from "./Pages/speciality";
import Timings from "./Pages/timings";
import Contacts from "./Pages/contacts";
import About from "./Pages/about";

function App() {
  return (
      <>
          <header>
              <Navbar/>


          </header>

          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/speciality' element={<Speciality/>}/>
              <Route path='/timings' element={<Timings/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/signUP' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>

          </Routes>

      </>
  );
}

export default App;
