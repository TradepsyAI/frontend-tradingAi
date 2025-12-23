import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Brokers from './components/Brokers';
import './App.css';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brokers" element={<Brokers />} />
      </Routes>
    </Router>
  );
}

export default App;
