import  React, {useEffect} from "react"
import { useStaticQuery, graphql , Link}  from "gatsby"
import  './header.scss';
import Navigation from './navigation';

import  SocialList from '../socialList/socialList';

const Header = ({initBurger} ) => {
 
  const data = useStaticQuery(graphql`{
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
    allContentfulHeaderNavigationList(
      filter: {nameBlock: {eq: "HeaderNavigationList"}}
    ) {
      nodes {
        nameBlock
        navLinkList {
          ... on ContentfulContentMainModel {
            id
            textUrl
            textNavigationLink
          }
        }
      }
    }
    allContentfulIconLink {
      nodes {
        nameLink
        nameIcon
        iconLinkUrl
      }
    }
  }`)
  const navData = [...data.allContentfulHeaderNavigationList.nodes[0].navLinkList]
  const headerLogo = {...data.contentfulHeader.headerLogo.logoImage}
  const socialList = [...data.allContentfulIconLink.nodes]
  function headerOnScroll (){
    var className = "scrolled";
    var scrollTrigger = 1;
    window.onscroll = function() {
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            document.querySelector(".header")?.classList.add(className);
        } else {
            document.querySelector(".header")?.classList.remove(className);
        }
    };
  }

  useEffect(() => {
    headerOnScroll ()
  }, [])

   return (
      <header className='header'>
        <div className="container">
        <nav className="header__nav">
           <div className="header__logo">
              <Link to="/" className="header__logo-link">
                    <img src={headerLogo.url} alt={headerLogo.description}/> 
              </Link>
            </div>
            <span className="hamburger-btn" onClick={initBurger}>
                <span></span>
            </span>
            <div className="header__navigation">
              <SocialList data={socialList} nameOfBlock={"header"}/>
              <Navigation navData= {navData} id={'header'}/>
            </div>
         </nav>
       
        </div>
     </header>
   )
}

export default Header