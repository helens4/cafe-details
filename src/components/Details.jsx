
import { itemImages } from '../items';
import Thumbnail from './Thumbnail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios"
import './Details.css';

function Details() {

    const { name } = useParams()

    const [item, setItem] = useState([])

    const getItems = async () => {
        const response = await axios.get('http://localhost:3030/api/items')

        const foundItem = response.data.find(x => x.title === name)
        console.log(foundItem)
        setItem(foundItem)
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className="details-component">
            <div className='info-card'>
                <div className='info-body'>
                    {item.description ? <p>{item.description}</p> : ""}
                    <p>Price: {item.price}$</p>
                </div>
                <div className='info-title'>
                    <h3>Name: {item.title}</h3>

                </div>

            </div>

        </div>
    );
}


export default Details;