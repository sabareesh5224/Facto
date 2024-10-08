import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Crypto.css';
import Navbar from '../Navbar/Navbar';
import Box from '../Box/Box';
import axios from 'axios';

const Crypto = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');
    const [cryptoData, setCryptoData] = useState(null);

    const apiKey = 'YYRHWrzjEq0J4dHn9hkmGw==TB9R3sVmlLRkhlok';

    useEffect(() => {
        const fetchCryptoNews = async () => {
            const url = 'https://crypto-news16.p.rapidapi.com/news/top/5';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'b3a348be85msh598e05ad586b891p1dcff1jsn64b84a17e4bb',
                    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setNews(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCryptoNews();
    }, []);

    async function Searchdata() {
        try {
            const response = await axios.get(
                `https://api.api-ninjas.com/v1/cryptoprice?symbol=${search}`,
                {
                    headers: {
                        'X-Api-Key': apiKey
                    }
                }
            );
            const responseData = response.data;
            if (responseData && responseData.price) {
                // Extract the price value from the response data
                const price = parseFloat(responseData.price).toFixed(8); // Assuming the price is a float number
                setCryptoData(price); // Update the state with the formatted price
            } else {
                setCryptoData("Price data not available");
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='crypto'>
                    <div className='crypto-header'>CRYPTO</div>
                </div>
                <div className='crypto'>
                    <div className='search-bar'>
                        <input
                            type='text'
                            placeholder='Search...'
                            className='searchinp'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={() => Searchdata()} />
                    </div>
                    {cryptoData && (
                        <div className='price'>
                            <p style={{ marginLeft: '360px' }}>Price</p>
                            <p style={{ color: '#BD93F9', paddingLeft: '30px' }}>{cryptoData}</p>
                        </div>
                    )}
                </div>
            </div>
            <br />
            <div className='container-news'>
                <div className='news'>Facts</div>
            </div>
            <hr style={{ width: '90px', color: '#696982' }}></hr>
            <br />
            <br />
            <div>


                <ul>
                    {news

                        .map((item, index) => (
                            <Box key={index} data={item.title} />
                        ))}
                </ul>
            </div>
        </>
    );
};

export default Crypto;
