import React, { useState } from 'react'
import OpenAI from 'openai'
import { useSpeechRecognition } from 'react-speech-recognition'
import { List, Checkbox, Button, CircularProgress } from '@mui/material';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: 'true'
})

const todoItem = {
    todo: "",
    category: "",
    duration: "",
    completed: false,
}


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
                content: `Take this transcript "${finalTranscript}" and make to-do list items out of it, make them in blocks. Each block contains a certain property about the to-do item, 1.the category it falls in, 2. the duration it should ideally take to complete, 3. the actual task, and 4. a short description of the task and how to achieve it in time . End each line with a comma except the last line. Do not diplay block numbers or names. If the transcript is given in iraqi, respond as such, otherwise keep it in english.`
            }]
        })

        if (response.choices[0].finish_reason === 'stop') {
            const outputText = response.choices[0].message.content
            setText(outputText)
            setTextArray(outputText.split(","))
            textArray.pop()

            //The prompt returns blocks of 3 properties per to-do
            //The for-loop splits the outputText per each 3 elements

            setLoading(false)
            for (let index = 0; index < textArray.length; index++) {
                console.log(textArray[index]);

            }
            console.log(textArray)
            console.log()
        }
    }



    return (
        <>
            <div className='flex flex-col items-center gap-5 mt-7'>
                <div className='flex flex-row gap-10'>
                    {/* {preText ? <h1 className='text-xl'>Click Generate to make your Todo! </h1> : <h1>Your todo list for {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h1>} */}
                    <button onClick={ProcessedText} className='btn'>
                        Generate
                    </button>
                </div>
                <List />

                <div className='flex text-lg rounded-3xl p-3'>
                    {loading ? <CircularProgress className='m-5' /> : <ul className='flex flex-col'>
                        {textArray.map((todo, index) => {
                            let counter = 0
                            // if (todo == "") {
                            //     return
                            // } else if ((index + 1) % 2 == 0) {
                            //     return <div className='badge' key={todo + "duration"}>{todo}</div>
                            // }
                            // else if (((index + 1) % 3) == 0) {
                            //     return <>
                            //         <div key={todo} className='flex gap-y-2.5 items-center mb-2'>
                            //             <Checkbox color='primary' name={todo} key={todo} />
                            //             <label htmlFor="" key={todo + "-label"}>{todo}</label>
                            //         </div>
                            //     </>
                            // } else {
                            //     return <div className='badge-secondary' key={todo + counter}>{todo}</div>
                            // }

                            let pos = (index + 1) % 3
                            if (pos == 1) {
                                //category
                                return <div className=' badge flex mt-3 p-3' key={Math.random() * 1000000}>{todo}</div>
                            } else if (pos == 2) {
                                //duration
                                return <div className='badge flex mt-3' key={Math.random() * 1000000}>{todo}</div>
                            }
                            else {
                                //task
                                //return <div className='flex text-sm h-3' key={Math.random() * 1000}>{todo}</div>
                                return <div key={todo} className='flex gap-x-2.5 items-center mb-2 '>
                                    <input id={counter} value="checked" name={todo} type='checkbox' className='checkbox' color='primary' key={todo} />
                                    <label htmlFor={todo} key={todo + "-label"}>{todo}</label>
                                </div>
                            }
                        })}
                    </ul>}
                </div>
                <div className='flex flex-col gap-y-2'>
                </div>
            </div>
        </>
    )
}
