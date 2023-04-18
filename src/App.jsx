import './App.css'
import data from '../data.json'
import Job from './components/jobContainer/Job'

function App() {


  return (
    <main className="app-container">
    <header>
      <img src={'/public/bg-header-desktop.svg'} alt="" />
    </header>
    <section className='jobs-container'>
      <Job data={data}/>
    </section>
    </main>
  )
}
 
export default App
