import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero'
import Team from './components/Team'
import Check from './components/Check'
import Reach from './components/Reach'
import Footer from './components/Footer'
import Work from './components/Work'

function App() {

  return (
    <div className='parent-class'>
      <div className='wrapper container my-5 d-flex flex-column gap-3'>
        <Hero />
        <Team />
        <Work />
        <Check></Check>
        <Reach></Reach>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
