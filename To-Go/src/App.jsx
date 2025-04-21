import AiProcess from "./components/AiProcess"
import AudioCollector from "./components/AudioCollector"
import Navigation from "./components/Navigation"


function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-linear-to-r from-white to-sky-500 glass h-svh">
        <div className="flex flex-col justify-center items-center  px-15 py-20 rounded-2xl mx-75 glass">
          <h1 className="text-6xl">Tu<span className="text-orange-500">Go</span></h1>
          <p className="text-xl"> The App for all your todo lists!</p>
          <div className="flex justify-between">
            <AudioCollector />
            <AiProcess />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
