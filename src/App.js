import Home from './components/Home';
import Header from './components/Header';
import './index.css'
import About from './components/About';
import Themes from './components/Themes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Venue from './components/Venue';

// ByteXync theme color: "text-white bg-gradient-to-bl from-pink/rose-950 to-fuchsia-950"

function App() {
  return (
    <div className="App max-w-screen bg-zinc-950 min-h-lvh max-h-full m-0 p-0 text-white">
      <Header />
      <hr />
      <Home />
      <About />
      <Themes />
      <Sponsors />
      <FAQ />
      <Venue />
    </div>
  );
}

export default App;
