import { accordionData } from './constant/data'
import Accordion from './components/Accordion'
import './App.css'

function App() {

  return (
    <>
      <h1>Accordion React Typescript</h1>
      <div className="accordion">
        {accordionData.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
    </>
  )
}

export default App
