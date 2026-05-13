import './App.css';
import Navbar from './components/Navbar';
import Announcement from './sections/Announcement';
import Hero from './sections/Hero';
import Features from './sections/Features';
import ClickGUI from './sections/ClickGUI';
import Modules from './sections/Modules';
import Install from './sections/Install';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Features />
        <div className="divider" />
        <ClickGUI />
        <div className="divider" />
        <Modules />
        <div className="divider" />
        <Install />
        <div className="divider" />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
