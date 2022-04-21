import React, { useEffect, useState } from 'react'
import './Covid19.css';
export default function Covid19() {
    //1. state
    const [data,setData] = useState([]);
    useEffect(() => {
        getCovidData();
    }, [])

    //2. function defination
    let getCovidData= async ()=>{
        console.log('okokok')
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            //console.log(res)
            const realData = await res.json();
            console.log(realData.statewise[0]);
            setData(realData.statewise[0]);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        
    }

    //3. return statement /jsx
    return (
        <div>
            <h1>Live</h1>
            <h1>covid 19 data</h1>
            <section>
                <ul>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card-inner'>
                                <p className='card_name'><span>OUR</span>COUNTRY</p>
                                <p className='card_total card_small'>INDIA</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card-inner'>
                                <p className='card_name'><span>TOTAL</span>RECOVERED</p>
                                <p className='card_total card_small'>{data.recovered}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card-inner'>
                                <p className='card_name'><span>TOTAL</span>CONFORMED</p>
                                <p className='card_total card_small'>{data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card-inner'>
                                <p className='card_name'><span>TOTAL</span>DEATH</p>
                                <p className='card_total card_small'>{data.deaths}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card-inner'>
                                <p className='card_name'><span>TOTAL</span>ACTIVE</p>
                                <p className='card_total card_small'>{data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card-inner'>
                                <p className='card_name'><span>LAST</span>UPDATE</p>
                                <p className='card_total card_small'>{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

        </div>
    )
}
