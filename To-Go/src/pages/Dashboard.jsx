import AudioCollector from '../components/AudioCollector'
import AiProcess from '../components/AiProcess'
import TodoMaker from '../components/TodoMaker'
import Navigation from '../components/Navigation'

function Dashboard() {

    return (
        <>
            <div className=''>
                <Navigation />
                <AudioCollector />
                <AiProcess />
            </div>
        </>
    )
}

export default Dashboard