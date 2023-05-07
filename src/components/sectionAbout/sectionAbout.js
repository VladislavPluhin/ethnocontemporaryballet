import * as React from "react"
import './sectionAbout.scss';
import { Link} from "gatsby"
import RichText from '../richText/richText'

function SectionAbout ({data, indent=false})  {
  const sectionData = {...data[0]};
  return (
    <section className={indent ? 'section-about section-indent': 'section-about'}  style={{backgroundColor: sectionData.sectionColor? sectionData.sectionColor : '' }}>
        <div className="container"> 
          
           <div className="description">
              {sectionData.title &&  <h2 className="title" style={{color: sectionData.textColor ? sectionData.textColor : '#0000' }}>{sectionData.title}</h2> }
              {sectionData?.description &&  <RichText data={sectionData?.description} colorText={ sectionData.textColor}/>}
          </div>
         
         {sectionData?.buttonURl   && <div className="btn-wrap">
               <Link to={sectionData.buttonURl} className="link" style={{color: sectionData.textColor ? sectionData.textColor: '#0000' }}>{sectionData.buttonText}</Link>
            </div>}
        </div>
    </section>
   )
}


export default SectionAbout;
