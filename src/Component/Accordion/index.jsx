import { useState } from 'react'
import './Accordion.css'

function index({accordionDetails}) {
    const [accordionIsOpen, setAccordionIsOpen] = useState(false);
  return (
    <div className='accordion-page'>
      <div className='heading'>
        <img src='./images/icon-star.svg' alt='Star Icon' />
        <p>FAQs</p>
      </div>
      <div className='accordion-container'>
        {accordionDetails && accordionDetails.map(element => <div
            className="accordion-card"
            key={element.id}
            >
            <div className='accordion-summary'>
                <p className='accordion-question'>
                    {element.question}
                </p>
                {accordionIsOpen? <img 
                    src='./images/icon-minus.svg' 
                    alt='Minus Icon' 
                    onClick={() => setAccordionIsOpen(false)}
                /> :<img 
                    src='./images/icon-plus.svg' 
                    alt='Plus Icon' 
                    onClick={() => setAccordionIsOpen(true)}
                />}
            </div>
            {accordionIsOpen && <p className='accordion-details'>
                {element.answer}
            </p>}
        </div>)}
        
      </div>
    </div>
  )
}

export default index
