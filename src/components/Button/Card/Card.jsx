import React, { useEffect, useState } from 'react';
import SingleData from '../../SingleData/SingleData';
import Button from '../Button';
import './Card.css'

const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = ()=> {
        setShowAll(true);
    }

    useEffect(()=>{
        const loadData = async () =>{
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json();
            setData(data.data.tools);
        }
        loadData();
    }, [])
    
    console.log(data);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-16 my-8'>
            {
                 data.slice(0, showAll ? 12 : 6).map(singleData => {
                    //console.log(singleData);
                    return <SingleData 
                    singleData={singleData}
                    key = {singleData.id}
                    />
                })
            }
            
        </div>
        {
            !showAll && (
                <span onClick={handleShowAll}>
                <Button>See More</Button>
                </span>
            )
        }
     </div>
    );
};

export default Card;