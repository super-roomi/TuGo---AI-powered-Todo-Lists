import React, { useState } from 'react'
import OpenAI from 'openai'
import { useSpeechRecognition } from 'react-speech-recognition'
import { List, Checkbox, Button, CircularProgress } from '@mui/material';
import TodoMaker from './TodoMaker';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: 'true'
})



export default function AiProcess() {
    // const date = new Date()
    const [text, setText] = useState('')
    const [textArray, setTextArray] = useState([])
    const [loading, setLoading] = useState(false)
    const [isChecked, setisChecked] = useState(false)


    const handleChecked = () => {
        if (isChecked == false) {
            setisChecked(true)
        } else {
            setisChecked(false)
        }
    }

    // const todoItem = {
    //     id,
    //     key,
    //     task,
    //     description,
    //     duration,
    //     category,
    //     isChecked
    // }

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
                content: `Take this transcript "${finalTranscript}" and make to-do list items out of it, make them in blocks. Each block contains a certain property about the to-do item, 1.the category it falls in, 2. the duration it should ideally take to complete, 3. the actual task. End each line with a comma except for the last line. Do not diplay block numbers or names. If the transcript is given in iraqi, respond as such, otherwise keep it in english.`
            }]
        })

        if (response.choices[0].finish_reason === 'stop') {
            const outputText = response.choices[0].message.content
            setText(outputText)
            setTextArray(outputText.split(","))
            textArray.pop()

            //The prompt returns blocks of 3 items per to-do
            //The for-loop splits the outputText per each 3 elements

            setLoading(false)
            for (let index = 0; index < textArray.length; index++) {
                console.log(textArray[index]);

            }
            console.log()
        }

    }



    return (
        <>
            <div className='flex flex-col gap-5 mt-7 mb-7'>
                <div className='flex flex-row gap-10'>
                    {/* {preText ? <h1 className='text-xl'>Click Generate to make your Todo! </h1> : <h1>Your todo list for {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h1>} */}
                    <button onClick={() => ProcessedText} className='btn'>
                        Go!
                    </button>
                </div>

                {/* <div className='flex text-lg rounded-3xl p-3'>
                    {loading ? <CircularProgress className='m-5' /> : <ul className='flex flex-col'>
                        {textArray.map((todo, index) => {
                            let pos = (index + 1) % 3
                            if (pos == 1) {
                                //category
                                return <TodoMaker text={todo} id={pos} />
                            } else if (pos == 2) {
                                //duration
                                return <TodoMaker text={todo} id={pos} />
                            }
                            else {
                                //task
                                console.log(textArray)
                                return <TodoMaker text={todo} id={pos} />
                                // return <div key={todo} className='flex gap-x-2.5 items-center mb-2 '>
                                //     <input id={counter} onChange={handleChecked} name={todo} type='checkbox'
                                //         className='checkbox'
                                //         color='primary'
                                //         key={uuidv4()} />
                                //     <label htmlFor={todo} key={todo + "-label"}
                                //         className={isChecked ? 'italic border-b-1' : 'line-through text-gray-500 border-b-1'}>
                                //         {todo}</label>
                                // </div>
                            }
                        })}
                    </ul>}
                </div> */}
            </div>
        </>
    )
}
