import React, { useState } from 'react'
import OpenAI from 'openai'
import { useSpeechRecognition } from 'react-speech-recognition'
import { FormControlLabel, List, Checkbox, FormGroup, ListItem, Button, CircularProgress } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: 'true'
})


export default function AiProcess() {
    // const date = new Date()
    const [text, setText] = useState('')
    const [textArray, setTextArray] = useState([])
    const [loading, setLoading] = useState(false)
    // const [preText, setPreText] = useState(true)


    const {
        finalTranscript,
    } = useSpeechRecognition();

    async function ProcessedText() {
        setText('')
        setLoading(true)
        console.log("Request going out")
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: "user",
                content: `Make a todo list from this transcript: "${finalTranscript}" it should be in this format -(task) xx:xx to yy:yy. If the transcript is in arabic, make the output in Iraqi arabic, otherwise output it in english`
            }]
        })
        setText(response.output_text)
        console.log(text)
        setTextArray(text.split("-"))
        const el = textArray[0]
        if (el === '') {
            console.log('array shifta w kabab')
            textArray.shift()
        }
        console.log(textArray)
        if (response.choices[0].finish_reason === 'stop') {
            const outputText = response.choices[0].message.content;
            setText(outputText);
            setTextArray(outputText.split("-"));
            setLoading(false)
            console.log(textArray[0])
            // setPreText(true)
        }


    }

    return (
        <>
            <div className='flex flex-col items-center gap-5 mt-15'>
                <div className='flex flex-row gap-10'>
                    {/* {preText ? <h1 className='text-xl'>Click Generate to make your Todo! </h1> : <h1>Your todo list for {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h1>} */}
                    <Button onClick={ProcessedText} variant='contained' startIcon={<AutoAwesomeIcon />}>
                        Generate
                    </Button>
                </div>
                <List />
                <div className='flex text-lg'>
                    {loading ? <CircularProgress className='m-5' /> : <ul className='flex flex-col'>
                        {textArray.map((todo) => {
                            if (todo == "") {
                                return
                            }
                            return <>
                                <div key={todo} className='flex gap-y-2.5 items-center mb-2'>
                                    <Checkbox color='primary' name={todo} key={todo} />
                                    <label htmlFor="" key={todo + "-label"}>{todo}</label>
                                </div>
                            </>
                        })}
                    </ul>}
                </div>
            </div >

        </>
    )
}
