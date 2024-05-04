import Home from './components/Home';
import Header from './components/Header';
import './index.css'
import About from './components/About';
import Themes from './components/Themes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Venue from './components/Venue';
import Countdown from './components/Countdown';
// import { GridBackgroundDemo } from './components/Background';
// import { TracingBeamDemo } from './components/ui/TracingBeamDemo';
import { TracingBeam } from './components/ui/TracingBeam';
import Queries from './components/Queries';
import Timeline from './components/Timeline';

// ByteXync theme color: "text-white bg-gradient-to-bl from-pink/rose-950 to-fuchsia-950"

function App() {
  return (
    <div className="App max-w-screen bg-zinc-900 min-h-lvh max-h-full text-white">
      <div className="h-full w-full bg-black bg-grid-small-white/[0.5] pb-12">
        <Header />
        <TracingBeam className='p-4'>
          <Home />
          <Countdown />
          <About />
          <Themes />
          <Timeline />
          <Venue />
          <Sponsors />
          <FAQ />
          <Queries />
        </TracingBeam>
      </div>
    </div>
  );
}

export default App;