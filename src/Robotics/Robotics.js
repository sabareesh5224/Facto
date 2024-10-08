import React, { useState, useEffect } from 'react';
import './Robotics.css';
import Navbar from '../Navbar/Navbar';
import Box from '../Box/Box';

const Electric = () => {
  const [facts, setFacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openFactIndex, setOpenFactIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3900/Robotics');
        if (!response.ok) throw new Error('Data not found');
        const data = await response.json();
        
        // Shuffle the data array
        const shuffledData = shuffleArray(data);
        // Select the first 5 items from the shuffled array
        const selectedFacts = shuffledData.slice(0, 5);

        setFacts(selectedFacts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Toggle accordion
  const toggleAccordion = (index) => {
    setOpenFactIndex(openFactIndex === index ? null : index);
  };

  // Filter the facts based on the search term
  const filteredFacts = facts.filter((fact) =>
    fact.desp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className='container1'>
        <div className='crypto1'>
          <div className='crypto-header1'>Robotics</div>
        </div>
        <div className='crypto2'>
          <input
            type='text'
            placeholder='Search...'
            className='searchinp1'
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
  
      <br />
      <div className='container-news1'>
        <div className='news1'>Facts</div>
      </div>
      <hr style={{ width: '90px', color: '#696982' }} />
      <div className="accordion">
        {filteredFacts.map((fact, index) => (
          <React.Fragment key={index}>
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <span>{fact.desp}</span>
              <span className="accordion-icon">{openFactIndex === index ? '-' : '+'}</span>
            </div>
            {openFactIndex === index && (
              <div className="accordion-content">
                <ul>
                  <li>
                    <Box key={index} data={fact.desp} />
                  </li>
                </ul>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Electric;
