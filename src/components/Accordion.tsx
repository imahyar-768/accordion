import { useState } from 'react';
import {TAccordionData} from '../constant/type'

const Accordion = ({key, title, content }: TAccordionData) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item" key={key}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;   