import React from 'react';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {MdDoDisturb} from 'react-icons/md';
import Data from '../Context/CardsData.json';
const UlItems = ({a,b}) => {
  return (
    <ul className='nav d-block p-0'>
        {Data.slice(a,b).map((item,index)=>{
            return <li key={index} className='nav-item border-bottom p-2 my-3' style={{width:"90%"}}>{item.disabled?<MdDoDisturb size={20}/>:<BsFillArrowRightCircleFill size={20}/>} <span className='mx-2'><b>{item.title}</b> {item.text}</span></li>
        })}
    </ul>
  )
}

export default UlItems;