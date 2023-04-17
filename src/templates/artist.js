import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {  graphql, Link } from "gatsby"
import RichText from '../components/richText/richText'

export default ({data}) => {
  const nextPage= {...data.next.nodes[0]}
  const prevPage= {...data.previous.nodes[0]}
  const artistData= {...data.allContentfulPersonCard.nodes[0]}
     return (
       <Layout>
          <section className="section-artist">
               <div className="container">
                      <article>
                        {artistData.personImage.url && <div className="section-artist__image">
                                <img src={artistData.personImage.url} alt={artistData.personImage.description}/>
                          </div>}
                          {artistData.namePersone && <h2 className="section-artist__title ">{artistData.namePersone}</h2>}
                          {artistData.position &&  <h5 className="section-artist__position"> {artistData.position}</h5>}
                          {artistData.personDescription &&  <RichText data={artistData.personDescription} colorText={ '#fff'}/>}
                    </article>
                      <ul  className="pagination ">
                        <li>
                          {prevPage.slug &&  <Link to={ `/team/${prevPage.slug}`}  className="link prev ">{prevPage.namePersone}</Link>}
                        </li>
                        <li>
                          {nextPage.slug && <Link to={ `/team/${nextPage.slug}`}  className="link  next">{nextPage.namePersone}</Link>}
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
  $previousArtistSlug: String
  $nextArtistSlug: String
) {
      allContentfulPersonCard(filter: {slug: {eq: $slug}}) {
        nodes {
          bgColorAnimation
          bgColorCard
          colorText
          namePersone
          personImage {
            description
            url
          }
          slug
          position
          id
          personDescription {
            raw
          }
        }
      }

      previous: allContentfulPersonCard(filter: {slug: {eq:$previousArtistSlug}}) {
        nodes {
          slug
          namePersone
        }
      }

      next: allContentfulPersonCard(filter: {slug: { eq: $nextArtistSlug }}) {
        nodes {
          slug
          namePersone
        }
      }
    }
`

export const Head = () => <Seo title="artist" />