import './App.css'
import {SearchBar} from './componets/SearchBar'
import {HeroSection} from './componets/HeroSection'
function App() {
  return (
    <>
    <div className='background-video'>
      <video autoPlay loop muted>
        <source  src='public\suny-daya.mp4' type='video/mp4'/>
      </video>
      <div className="overlay"></div>
       <div className="content">
        <SearchBar/>
        <HeroSection/>
      </div>
    </div>
    </>
  )
}

export default App
