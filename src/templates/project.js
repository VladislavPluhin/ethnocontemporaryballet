import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {  graphql, Link } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import EventGallary from '../components/eventGallary/eventGallary.js'


export default ({data}) => {
  const nextPage= {...data.next.nodes[0]}
  const prevPage= {...data.previous.nodes[0]}
  const eventData= {...data.allContentfulCardEvent.nodes[0]}
     return (
       <Layout>
         <section className="section-content">
               <div className="container">
                      <article>
                         {eventData?.image?.url && !eventData?.projectgallery  &&  
                         <div className="section-content__image">
                            <img src={eventData?.image?.url} alt={eventData?.image?.description}/>
                        </div>}
                        { eventData?.projectgallery   && 
                          <EventGallary data={eventData.projectgallery}/>
                        }
                        {eventData.title && <h1 className="section-content__title">{eventData.title}</h1> }
                       
                        {eventData?.previewText && <h4 className="section-content__subtitle">{eventData.previewText}</h4>} 
                        <div className="section-content__contetn">
                            {eventData.descriptionEvent &&  <>{renderRichText(eventData.descriptionEvent)}</>}
                            {eventData.newEvent && eventData.linkEvent && <div className="section-content__btn-wrap">
                               <a href={eventData.linkEvent} className="link ">{eventData.textBtn}</a>
                            </div>
                            }
                        </div>
                    </article>
                      <ul  className="pagination ">
                        <li>
                          {prevPage.slug &&  <Link to={ `/projects/${prevPage.slug}`}  className="link prev ">{prevPage.nameEvent}</Link>}
                        </li>
                        <li>
                          {nextPage.slug && <Link to={ `/projects/${nextPage.slug}`}  className="link  next">{nextPage.nameEvent}</Link>}
                        </li>
                      </ul>
               </div>
          </section> 
       </Layout>
     );
   };


export const query = graphql`
query MyQuery( 
  $slug:String
  $previousPostSlug: String
  $nextPostSlug: String
) {
    allContentfulCardEvent(filter: {slug: {eq: $slug}}) {
        nodes {
          descriptionEvent {
            raw
          }
          nameBlock
          newEvent
          newEventsText
          slug
          title
          linkEvent
          nameEvent
          textBtn
          previewText
          id
          projectgallery {
            id
            description
            title
            file {
              url
              fileName
              contentType
            }
          }
          image {
            url
            description
          }
        }
      }
      previous: allContentfulCardEvent(filter: {slug: { eq: $previousPostSlug }}) {
        nodes {
          slug
          nameEvent
        }
      }
      next: allContentfulCardEvent(filter: {slug: { eq: $nextPostSlug }}) {
        nodes {
          slug
          nameEvent
        }
      }
    }
`

export const Head = () => <Seo title="EventOld" />