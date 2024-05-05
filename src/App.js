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
import PreLoader from './components/PreLoader';
import { useState } from 'react';

// ByteXync theme color: "text-white bg-gradient-to-bl from-pink/rose-950 to-fuchsia-950"

function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 4500)

  return (
    <div className="App bg-zinc-900 min-h-lvh max-h-full text-white scrollbar-thin scrollbar-webkit">
      <div className="h-full w-full bg-black bg-dot-green-400/[0.2] pb-12">
        {
          loading ?
            <PreLoader />
            : <>
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
            </>
        }
      </div>
    </div>
  );
}

export default App;