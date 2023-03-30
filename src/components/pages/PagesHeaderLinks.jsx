import { useState } from "react";
import { LinksData } from "../../data/LinksData";
import React from "react"
function PagesHeaderLinks() {
    
    const [clickedIndex, setClickedIndex] = useState(0)
    return (
        <div className="header-links-container">
            <ul>
                {LinksData.map((link, index) => {
                    return (
                        <li 
                        key={index} 
                        className={`${clickedIndex === index ? 'active' : ''}`}
                        onClick={() => setClickedIndex(index)}
                        >
                            <p>{link}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PagesHeaderLinks;