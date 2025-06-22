import AudioCollector from '../components/AudioCollector'
import AiProcess from '../components/AiProcess'
import TodoMaker from '../components/TodoMaker'
import Navigation from '../components/Navigation'
import { UserAuth } from '../AuthContext'

function Dashboard() {
    const { session, signOut } = UserAuth()
    return (
        <>
            <div className='flex'>

                <div className='flex flex-col w-full'>
                    <div className='flex content-around items-center glass mx-3 h-22 rounded-xl p-2 mt-4'>
                        <h1 className='lg:text-xl text-2xl'>Hi, {session?.user?.email}</h1>
                        <button className='border ml-5 rounded-2xl px-2 py-1'>logout</button>
                    </div>
                    <AudioCollector />
                    <div className='flex justify-center max-w-88 ml-8'>
                        <AiProcess />
                    </div>
                    <div className='glass h-full ml-4 mb-4 max-w-98'>
                        HISTORY
                    </div>
                </div>

                <div>

                </div>
                {/* <div className='flex-1 glass min-h-148 min-w-svw ml-5 mr-5 mb-5 mt-14'>
                    your to-do list will show up here
                </div> */}

                {/* <Navigation />
                <AudioCollector /> */}
            </div>
        </>
    )
}

export default Dashboard