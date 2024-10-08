import React, { useState } from 'react';
import './Searchbar.css';
import Accordion from '../Accordion/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const suggestions = ["Robotics", "Mechanical", "AI", "Electrical"];

  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // Filter suggestions based on input value
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <><div className="search-bar">
      <input
        type="text"
        value={inputValue}
        className='searchinp1'
        onChange={handleChange}
        placeholder="Search..." />
         <FontAwesomeIcon icon={faSearch} className='search-icon'  />
      <br /></div><div className='acc'>
        {inputValue && (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => (

              <Accordion title={suggestion} />

            ))}
          </ul>
        )}
      </div></>
    
  );
};

export default SearchBar;