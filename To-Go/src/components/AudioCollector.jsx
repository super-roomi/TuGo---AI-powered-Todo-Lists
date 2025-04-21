import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AiProcess from './AiProcess';



export default function AudioCollector() {
    const [reset, setReset] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const [language, setLanguage] = useState("en-US")

    const languageSetting = (event) => {
        if (event.target.value == 'en-US') {
            setLanguage('en-US')
        } else if (event.target.value == 'ar-IQ') {
            setLanguage('ar-IQ')
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

    if (finalTranscript.includes("-")) {
        setReset(true)
    }

    return (
        <>
            <div className='flex flex-col p-4 gap-x-5 w-100 border-r-1 mt-10 mr-5'>
                <div className='flex justify-center flex-row gap-2 '>
                    <FormControl fullWidth>
                        <InputLabel id="Language-Select">Language</InputLabel>
                        <Select
                            labelId="Language-Select"
                            id="Language-Select"
                            value={language}
                            label="Language"
                            onChange={languageSetting}
                        >
                            <MenuItem id='en' value={'en-US'}>English-US</MenuItem>
                            <MenuItem id='ar' value={"ar-IQ"}>Arabic-IQ</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant='contained' onClick={startRecording} size='large' className='flex gap-2 border flex-row p-2 rounded-full px-10 py-5 hover:bg-green-400 transition-colors hover:cursor-pointer text-xl'>Start</Button>
                    <Button variant='outlined' onClick={stopRecording} size='small' color='error'>Stop</Button>
                    {reset && <Button onClick={resetTranscript} className='rounded-full bg-slate-400 cursor-pointer px-6 scale-60'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    </Button>}
                </div>
                <h1 className='text-2xl underline font-bold mt-5'>Transcript:</h1>
                {
                    isRecording
                        ?
                        <p>{transcript}</p>
                        :
                        <p>{finalTranscript}</p>
                }
            </div>
        </>
    )
}
