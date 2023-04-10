import * as React from "react"
import './socialLis.scss';

function SocialList({data, nameOfBlock}) {
    return(
        <ul className="social-list">
             { data.map((icon)=> {
                return (
                    <li key={nameOfBlock + "-" + icon.nameIcon}>
                        <a href={icon.iconLinkUrl} className={'icon-' + icon.nameIcon}></a>
                    </li>
                    )
                })}
        </ul>
    )
}

export default SocialList;

