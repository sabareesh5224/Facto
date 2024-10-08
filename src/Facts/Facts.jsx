import React from 'react';
import './Facts.css'
import Navbar from '../Navbar/Navbar';
import { useEffect } from 'react';
import Box from '../Box/Box';
import { useState } from 'react';

const Facts = () => {
    const [record, setRecord] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = 'https://api.api-ninjas.com/v1/facts?limit=5';
            const options = {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'YYRHWrzjEq0J4dHn9hkmGw==TB9R3sVmlLRkhlok',
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setRecord(result);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);
    return (
        <>
        <Navbar/>
        <div className='container1'>
            <div className='crypto1'>
                <div className='crypto-header1'>RANDOM FACTS</div>
            </div>
        </div>
        <br/>
        <div className='container-news1'>
            <div className='news1'>Facts</div>
        </div>
        <hr style={{width:'90px',color:'#696982'}}></hr>
        <br/>
        <div>
            {record.map((item, index) => (
                <Box data={item.fact}/>
            ))}
        </div>
        </>
    );
};

export default Facts;
