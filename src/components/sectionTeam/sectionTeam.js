import * as React from "react"

import './sectionTeam.scss';
import PersonCard from "../personCard/personCard";
import RichText from '../richText/richText'
import * as sorts from '../sorts/sorts'

function SectionTeam ( {data, indent=false})  {
  const sectionData = {...data[0]};
  const descriptionData =  sorts.getsortedCards(data, "blockDescription")
  const personData= sorts.getsortedCards(data, "person")
  return (
    <section className={indent ? 'section-team section-indent' : 'section-team'}  style={{backgroundColor: sectionData.sectionColor? sectionData.sectionColor : '' }}>
        <div className='container'>
          <div className="description">
              {descriptionData[0]?.title && <h2 className="title">{descriptionData[0]?.title}</h2>} 
              {descriptionData[0]?.description && <RichText data={descriptionData[0]?.description} />}
          </div>
          <div className="row team-row">
            {personData.map((person)=> {
                  return ( 
                    <div className="col" key={person.id}>
                       <PersonCard personData= {person}/>
                  </div>
                  )
              })}
          </div>
        </div> 
    </section>
   )
}


export default SectionTeam;
