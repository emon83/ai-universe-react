import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import './Card.css'
import Modal from '../Modal/Modal';

const Card = () => {
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState({});
    const [showAll, setShowAll] = useState(false);
    const [uniqueId,  setUniqueId] = useState(null);
    //console.log(uniqueId);
    const handleShowAll = ()=> {
        setShowAll(true);
    }

    const handleSort = () =>{
        const sortedData = data.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in)
        });
         setData([...data, sortedData]);
    };

    useEffect(()=>{
        //console.log('hello from useEffect');
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(response => response.json())
        .then(data => setSingleData(data.data))
    }, [uniqueId])

    useEffect(()=>{
        const loadData = async () =>{
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json();
            setData(data.data.tools);
        }
        loadData();
    }, [])
    //console.log(singleData);
    //console.log(data);
    return (
        <div>
            <span onClick={handleSort}>
            <Button>Sort By Date</Button>
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-16 my-8'>
            {
                 data?.slice(0, showAll ? 12 : 6).map(singleData => {
                    //console.log(singleData);
                    return <SingleData 
                    singleData={singleData}
                    key = {singleData.id}
                    setUniqueId={setUniqueId}
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
        <Modal singleData={singleData}/>
     </div>
    );
};

export default Card;