import { useEffect } from "react";
import { LinksData } from "../../data/LinksData";

const PagesHeaderLinks = () => {
    console.log(LinksData)

    return (
        <div className="header-links-container">
            <ul>
                {LinksData.map((link, index) => {
                    return (
                        <li key={index} className={`${index === 0 ? 'active' : ''}`}>
                            <p>{link}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PagesHeaderLinks;