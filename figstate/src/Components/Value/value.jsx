import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
}from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css';
import data from '../../utils/accordion';
import { useState } from 'react';

const Value = () => {
  return (
    <div>
      <section className = "v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
           {/* left-side  */}
           <div className='v-left'>
            <div className='image-container'>
                <img src="./value.png" alt='' />
            </div>
           </div>
           {/* right side */}
           <div className="flexColStart v-right">
            <span className='orangeText'>Our value</span>
            <span className='primaryText'>Value We Give to You</span>
            <span className = 'secondaryText'>we are always happy to help you by providing world class standard houses<br/>
            We believe in Quality more than in Quantity
            </span>
            <Accordion className='accordion'
            allowMultipleExpanded = {false}
            preExpanded={[0]}> 
                {
                    
                    data.map((item,i) =>{
                        const [className,setClassName] = useState(null);
                        return (
                          <AccordionItem
                           className={`accordionItem ${className} `}
                            key={i}
                            uuid={i}
                          >
                            <AccordionItemHeading>
                              <AccordionItemButton className="flexCenter accordionButton">
                                <AccordionItemState>
                                  {({ expanded }) =>{
                                      setClassName(expanded ?'expanded':'collapsed');
                                  }}
                                  
                                </AccordionItemState>

                                <div className="flexCenter icon">
                                  {item.icon}
                                </div>
                                <span className="primaryText">
                                  {item.heading}
                                </span>
                                <div className="flexCenter icon">
                                  <MdOutlineArrowDropDown size={20} />
                                </div>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p className="secondaryText">{item.detail}</p>
                            </AccordionItemPanel>
                          </AccordionItem>
                        );

                    })
                }


            </Accordion>
           </div>
        </div>
    </section>
    </div>
  )
}

export default Value
