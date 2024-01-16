import { useState } from 'react'

export default function Accordion({ data }) {
    const [isOpen, setIsOpen] = useState(null)
  
  
    return (
      <div className="accordion">
        {data.map((data, i) => <AccordionItem
          title={data.title}
          num={i}
          key={i}
          curOpen={isOpen}
          onOpen={setIsOpen}>{data.text}</AccordionItem>)
        }
      </div>
    )
  }
  
  function AccordionItem({ num, title, children, curOpen, onOpen }) {
  
  
    const isOpen = num === curOpen;
    function handleOpen() {
      onOpen(isOpen ? null : num )
    }
  
    return (
      <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
        <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className='title'>{title}</p>
        <p className='icon'>{isOpen ? '-' : '+'}</p>
        <div className='content-box'>{isOpen ? children : null}</div>
      </div>
    )
  }