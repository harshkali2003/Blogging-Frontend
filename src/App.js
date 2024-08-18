import "./App.css";
import Footer from "./Component/Footer";
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import CreatePost from "./Pages/CreatePost";
import Feedback from "./Pages/Feedback";
import About from "./Pages/About";
import MyProfile from "./Pages/MyProfile";
import PrivateComponent from "./Pages/PrivateComponent";

function App() {
  return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
<Route path="/" element={<Main/>} />
<Route element={<PrivateComponent/>} >
<Route path="/create" element={<CreatePost/>} />
<Route path="/feedback" element={<Feedback/>} />
<Route path="/about" element={<About/>} />
<Route path="/profile" element={<MyProfile/>} />
</Route>
<Route path="/log" element={<LogIn/>} />
<Route path="/sign" element={<SignUp/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App;
