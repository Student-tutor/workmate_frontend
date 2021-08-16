import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { Data } from './Data'
import './Accordion.css'

const Accordion = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index);
    }

    return (
        <div className='accordion'>
            <div className="container">
                    {Data.map(( item, index ) => {
                        return(
                                <div className='wrapper'>
                                    <div className="wrap" onClick={() => toggle(index)} key={index}>
                                        <h1>{item.question}</h1>
                                        <span className="icon">{clicked  === index ? <FaArrowUp/> : <FaArrowDown/>}</span>
                                    </div>
                                    <div className={clicked  === index ?  'dropdown expand' : 'dropdown'}>
                                        <p className='answer'>{item.answer}</p>
                                    </div>
                                </div>
                        )
                    })

                    }
            </div>
        </div>
    )
}

export default Accordion
