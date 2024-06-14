import React, { useState } from 'react' 
import './Card.css'

function Card({id , image , info , price ,name , removetour}) {

    const[readmore , setreadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`

    function readmoreHandler(){
        setreadMore(!readmore);
    }
    return (
        <div className='card'>

            <img src={image} className='image'/>
            
            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>₹ {price }</h4>
                    <h4 className='tour-name'>{name}</h4>
            </div>

            <div className='description'>
                    {description}
                    <span className='read-more' onClick={readmoreHandler}>

                        {readmore ? ` Show Less` : ` Read More`}

                    </span>
            </div>

            <div class="btn-container">
                <button onClick={() => removetour(id)} className='btn' >
                        Not Interested
                </button>
            </div>
            </div>
        
            
        </div>
    )
}

export default Card
