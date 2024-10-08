import React, { useState, useEffect } from 'react';
import './Accordion.css';
import Box from '../Box/Box';
import { Link } from 'react-router-dom';

function Accordion({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [facts, setFacts] = useState([]);
 

  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen, title]); // Include title in the dependency array of useEffect

  const fetchData = async () => {
    try {
       
     

      


      const response = await fetch(`http://localhost:3900/${title}`);
      console.log(response);
      if (!response.ok) throw new Error('Data not found');
      const data = await response.json();

      const shuffledData = shuffleArray(data);
      const selectedFacts = shuffledData.slice(0, 3);

      setFacts(selectedFacts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span>{title}</span>
        <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {facts.map((fact, index) => (
              <Box key={index} data={fact.desp} />
            ))}
          </ul>
          
          <Link to={`/${title}`}>
            <button className='card'>Explore</button>
          </Link>
         
        </div>
      )}
    </div>
  );
}

export default Accordion;
