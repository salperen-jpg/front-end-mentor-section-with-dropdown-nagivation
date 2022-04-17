import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context/context';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
