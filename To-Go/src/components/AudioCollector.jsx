import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Button, FormControl, InputLabel, Select, MenuItem, Avatar } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import supabase from '../helper/SupabaseClient';
import { useNavigate } from 'react-router';
import TranslateIcon from '@mui/icons-material/Translate';
import Wave from 'react-wavify'



export default function AudioCollector() {
    const [isRecording, setIsRecording] = useState(false)
    const [language, setLanguage] = useState("en-US")
    const navigate = useNavigate()

    const languageSetting = (event) => {
        if (event.target.value == 'en-US') {
            setLanguage('en-US')
        } else if (event.target.value == 'ar-IQ') {
            setLanguage('ar-IQ')

        } else if (event.target.value == 'ar-SA') {
            setLanguage('ar-SA')
        }
    }

    function startRecording() {
        resetTranscript()
        setIsRecording(true)
        SpeechRecognition.startListening({ language: language, continuous: true })
    }

    function stopRecording() {
        setIsRecording(false)
        SpeechRecognition.stopListening()
    }

    const {
        transcript,
        finalTranscript,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        navigate("/login")
    }


    return (
        <>
            {/* <div className="glass flex justify-between items-center rounded-full p-2 mt-6 mx-5">
                <div className="flex flex-row items-center p-2 gap-x-2">
                    <Avatar />
                    <p>Username</p>
                </div>
                <h1 className="text-3xl">Tu<span className="text-orange-500">Go</span></h1>
                <div className="flex flex-row items-center">
                    <button onClick={signOut} className="bg-sky-500 mr-1 py-2 px-3 rounded-full text-md transition-all hover:bg-orange-400 hover:text-white hover:cursor-pointer ease-in-out duration-250">Log out</button>
                </div>
            </div> */}

            <div className=''>
                <div className=''>
                    <div className='flex flex-col items-center p-5 gap-x-5 border rounded-2xl lg:max-w-100 mx-3 glass mt-2'>
                        <div className='rounded-2xl max-w-88'>
                            <h1 className='text-sm p-1 italic text-gray-400'>Speak in {language} and it will show up below...</h1>

                            {
                                isRecording
                                    ?

                                    <p>{transcript}</p>

                                    :
                                    <p>{finalTranscript}</p>

                            }

                        </div>
                        {
                            isRecording
                                ?
                                <div className='flex mt-8 mb-3'><button onClick={stopRecording} className={`btn flex text-center scale-200 p-2 rounded-full bg-red-500 transition-all duration-200`}> <StopCircleIcon /> </button></div>
                                :
                                <div className='flex mt-8 gap-x-3 mb-3'>
                                    <button onClick={startRecording} className={`btn flex text-center py-4 px-5 p-2 rounded-full bg-green-400 transition-all duration-200`}> <PlayCircleFilledWhiteIcon /> </button>
                                    <details className="dropdown">
                                        <summary className="btn m-1 z-100"><TranslateIcon /></summary>
                                        <ul className=" flex flex-col gap-y-2 menu dropdown-content bg-base-100 rounded-box z-100 w-52 p-2 shadow-sm ">
                                            <button className='btn' value='en-US' onClick={languageSetting}>English: US</button>
                                            <button className='btn' value='ar-IQ' onClick={languageSetting}>Arabic: Iraq</button>
                                            <button className='btn' value='ar-SA' onClick={languageSetting}>Arabic: Saudi Arabia</button>
                                        </ul>
                                    </details>
                                </div>
                        }

                    </div>
                </div>
            </div>


        </>

    )
}
