import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Solution from './components/Solution';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Solution></Solution>
      <Booking></Booking>
      <Footer></Footer>
    </div>
  );
}

export default App;
