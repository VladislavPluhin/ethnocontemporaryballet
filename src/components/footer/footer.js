import React, { useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import SocialList from "../socialList/socialList";
import "./footer.scss";

const Footer = () => {
  const submenuOpeners = useRef([]);
  const data = useStaticQuery(graphql`
    {
      
      contentfulFooterNavigation {
        copyright
        navigationHolder {
          nameBlock
          opener {
            textNavigationLink
            textUrl
            nameBlock
            ifNavPages
            footeropenclose {
              linksWrapper {
                ... on ContentfulCardEvent {
                  id
                  slug
                  newEventsText
                  newEvent
                  nameEvent
                }
                ... on ContentfulPersonCard {
                  id
                  slug
                  namePersone
                }
              }
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
      contentfulIconLink(nameIcon: {eq: "PayPal"}) {
        id
        imageIcon {
          url
          title
          publicUrl
        }
        nameLink
        nameIcon
        text
        iconLinkUrl
      }
      contentfulHeader {
        nameBlock
        headerLogo {
          logotext
          logoImage {
            url
            description
          }
        }
      }
    }
  `);

  const handleClick = (e) => {
      const wrapper = e.currentTarget.closest("div.footer__list-item");

      if (wrapper.classList.contains("active")) {
        wrapper.classList.remove("active");
        return;
      } else {
        wrapper.classList.toggle("active");
      }
    };
    useEffect(() => {
      if (submenuOpeners.current) {
        submenuOpeners.current.forEach((item) => {
          item.addEventListener("click", handleClick);
        });
    
      }
    }, []);
  
  
  
  const supportData ={...data.contentfulIconLink}
  const navData = data.contentfulFooterNavigation.navigationHolder;
  const headerLogo = data.contentfulHeader.headerLogo.logoImage;
  const socialList = data.allContentfulIconLink.nodes;

  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__navigation">
          <div className="footer__logo">
            <Link to="/" className="footer__logo-link">
              <img
                src={headerLogo.url}
                alt={headerLogo.description}
              />
            </Link>
          </div>
          <div className="footer__nav">
            {navData.map((element) => {
              return (
                <div
                  key={`footer_${element.opener.id ? element.opener.id : element.opener.textNavigationLink}`}
                  className="footer__list-item"
                >
                  <div className="opener-wrapper">
                    <Link
                      className="footer__title"
                      to={element.opener.textUrl}
                    >
                      {element.opener.textNavigationLink}
                    </Link>
                    {element.opener.footeropenclose[0].linksWrapper && (
                      <span
                        className="footer__title-opener"
                        ref={(el) => submenuOpeners.current.push(el)}
                      ></span>
                    )}
                  </div>

                  {element.opener.footeropenclose[0].linksWrapper && (
                    <ul className="footer__list">
                      {[...element.opener?.footeropenclose[0]?.linksWrapper]
                        .filter((item) => item.slug)
                        .map((item) => {
                          return (
                            <li
                              key={`footer_${item.id}`}
                              className="footer__list-item">
                              <Link
                                to={
                                  item.slug
                                    ? `${element.opener.textUrl}${item.slug}`
                                    : `/${item.slug}`}>
                                {item.nameEvent ?? item.namePersone}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
        <div className="social-holder">
          <SocialList data={socialList} nameOfBlock={"footer"} />
          <div className="support-us">
              <span>{supportData.text}</span>
              <a className="support-us__icon"  href={supportData.iconLinkUrl}>
                <img  src={supportData.imageIcon.url} alt={supportData.imageIcon.title}/>
              </a>
          </div>
          <div className="copyright-holder">
              <p>{data.contentfulFooterNavigation.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
