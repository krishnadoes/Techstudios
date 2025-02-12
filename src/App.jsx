import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Faqsection from './components/Faqsection';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Content/><Stats /><Testimonials/><Footer/></>
    },
    {
      path:"/Aboutus",
      element:<><Navbar/><Aboutus/><Stats/><Testimonials /><Footer/></>
    },
    {
      path:"/Services",
      element:<><Navbar/><Services/><Footer/></>
    },
    {
      path:"/Contact",
      element:<><Navbar/><Contact/><Footer/></>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;

