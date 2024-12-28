import './App.css';
import About from './components/About';
import Review from './components/Review';
import Customers from './components/Customers';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Work from './components/Work';
import ServiceState from "./context/service/serviceState";
import ReviewwState from "./context/review/reviewState";
import WorkState from "./context/work/workState"
import Adminpage from './components/Adminpage';
import Input from './components/Input';
import ImageState from './context/image/imageState';


function App() {


  const isAdmin = window.location.pathname === "/crochet/admin/saif"

  return (
    <div className="App scroll-smooth z-[100] relative" >
      <ImageState>
      {isAdmin ? (
        <WorkState>
          <Adminpage />
          {/* <Input/> */}
        </WorkState>
      ) : (
        // Otherwise render the regular SPA components
        <>
          <Navbar />
          <Home />
          <About />
          <WorkState>
            <Work />
          </WorkState>
          <ReviewwState>
            <Customers />
          </ReviewwState>
          <ServiceState>
            <Service />
          </ServiceState>
          <ReviewwState>
            <Review />
          </ReviewwState>
          <Footer />
        </>
      )}
      </ImageState>
    </div>
  );
}

export default App;
