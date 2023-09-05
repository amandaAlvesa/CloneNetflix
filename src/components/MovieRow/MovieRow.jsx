import React from "react";
import './MovieRow.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';

export default ({title, items}) =>{
    
    const [scroolX, setScroolX] = useState(0);

    const handleLeftArrow= () =>{
        let x = scroolX + Math.round(window.innerWidth /2);
        if(x > 0){
            x=0;
        }
        setScroolX(x);
    }

    const handleRightArrow= ()=>{
        let r = scroolX - Math.round(window.innerWidth/2)
        let sizeList = items.results.length * 150
        if ((window.innerWidth - sizeList) > r){
            r = (window.innerWidth - sizeList ) - 60;
        }
        setScroolX(r);
    }
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <KeyboardDoubleArrowLeftIcon style={{fontSize:50}} />
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <KeyboardDoubleArrowRightIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scroolX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0  && items.results.map((item, key) =>(
                    <div key={key} className="movieRow--item"> 
                    <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} 
                    alt={item.original_title} /></div>
                ))}
                </div>
                
            </div>
        </div>
    )
}
