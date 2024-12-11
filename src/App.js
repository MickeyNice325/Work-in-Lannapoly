
import './App.css';
import './css/cardroom.css';
import './css/nav.css';
import Navbar from './components/Navbar.js';
import Carousel from './pages/index/carousel.js';
import Room from './pages/index/room.js';
import Footer from './pages/index/footer.js';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Carousel />
      <Room />
      <Footer />

    </div>
  );
}

export default App;
