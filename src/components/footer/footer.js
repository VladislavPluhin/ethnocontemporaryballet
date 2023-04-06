import  React, {useEffect} from "react"
import { Link,  useStaticQuery, graphql } from "gatsby"
import  SocialList from '../socialList/socialList';
import './footer.scss';

const Footer =  ({}) => {

   const data = useStaticQuery(graphql`
   {
     contentfulHeader {
       nameBlock
       headerLogo {
         logoImage {
           url
         }
         logotext
         nameBlock
       }
     }
     allContentfulIconLink{
     
      nodes {
        id
        nameLink
        nameIcon
        IconLinkUrl
      }
    }
     allContentfulContentMainModel(filter: {ifNavPages: {eq: true}}) {
       nodes {
         textNavigationLink
         textUrl
         id
         nameBlock
         sectionBlocks {
           ... on ContentfulCardEvent {
             id
             nameBlock
             slug
             nameEvent
           }
           ... on ContentfulPersonCard {
             id
             slug
             namePersone
             nameBlock
           }
         }
       }
     }
   }
 `)
  const navData = [...data.allContentfulContentMainModel.nodes]
  const headerLogo = {...data.contentfulHeader.headerLogo.logoImage}
  const socialList = [...data.allContentfulIconLink.nodes]

 useEffect(() => {
  const submenuOpeners = Array.from( document.querySelectorAll('.footer__title'));

  submenuOpeners.map((item) => {
    item.addEventListener("click", (e)=> {
     if(item.classList.contains("active")) {
      item.classList.remove('active')
      return
     } else {
      item.classList.toggle('active')
     }
    })
  })
}, []);

  return (
       <footer className="footer">
         <div className="container">
         <nav className="footer__navigation">
            <div className="footer__logo">
               <Link to="/" className="footer__logo-link">
                     <img src={headerLogo.url} alt={headerLogo.description}/> 
               </Link>
             </div>
             <div className="footer__nav">
              { navData.map((element)=> {
                if(element.sectionBlocks[0].slug) {
                  return (   
                      <div key={'footer_' + element.id} className="footer__list-item">
                          <span className="footer__title">{element.textNavigationLink}</span>
                          <ul className="footer__list">
                            {[...element.sectionBlocks].map((item)=>{
                              if(item.slug) {
                                  return(
                                    <li key={'footer_' + item.id} className='footer__list-item' >
                                          <Link to={element.textUrl + item.slug}>{item.nameEvent ? item.nameEvent : item.namePersone}</Link>
                                    </li>
                                  )
                              }
                              })}
                          </ul>
                      </div>
                  )
                }
                else {
                  return (   
                    <div key={'footer_'  + element.id} className="footer__list-item">
                        <Link to={element.textUrl} className="footer__title" >{element.textNavigationLink}</Link>
                    </div>
                  )
                }
              })}
            </div>
          </nav>
          <div className="social-holder">
              <SocialList data={socialList} nameOfBlock={"footer"} />
          </div>
         </div>
      </footer>
    )
 }


export default Footer
