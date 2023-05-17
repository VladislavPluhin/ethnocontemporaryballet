import * as React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionMain from'../components/sectionMain/sectionMain'
import SectionTeam from '../components/sectionTeam/sectionTeam'
import SectionEvents from '../components/sectionEvents/sectionEvents'
import SectionAbout from '../components/sectionAbout/sectionAbout'
import * as sorts from '../components/sorts/sorts'

const IndexPage =({data}) => {
  const pageData = {...data.allContentfulPage.nodes[0].sectionContents}
  console.log(pageData)
    return (
      <Layout>
      <SectionMain  data={ sorts.getsortedData(pageData, 'ModelMainSlider')}/>
      <SectionAbout data={ sorts.getsortedData(pageData, "ModelAboutUS")}/>
      <SectionTeam  data={ sorts.getsortedData(pageData, "ModelTeam")}/>
      <SectionEvents data={ sorts.getsortedData(pageData, "ModelProject")} eventCard='projectModel'/>
      <SectionEvents data={ sorts.getsortedData(pageData, "ModelEvent")} eventCard='CardNewEvent'/>
    </Layout>
  )
}


export const Head = () => <Seo title="Home" />
export default IndexPage

export const query = graphql`
{
  allContentfulPage(filter: {nameSection: {eq: "Home Page"}}) {
    nodes {
      sectionContents {
        nameBlock
        sectionBlocks {
          ... on ContentfulBlockDescription {
            id
            title
            textColor
            sectionColor
            button
            buttonText
            description {
              raw
            }
            nameBlock
          }
          ... on ContentfulCardEvent {
            id
            countPosition
            image {
              url
              description
            }
            nameBlock
            nameEvent
            newEvent
            linkEvent
            newEventsText
            slug
            textBtn
            title
          }
          ... on ContentfulMainSlide {
            id
            bgColor
            colorText
            layerOnImage
            nameBlock
            slideBgImage {
              url
              description
            }
            slideDescription {
              raw
            }
            subtitle
            title
          }
          ... on ContentfulPersonCard {
            id
            bgColorAnimation
            bgColorCard
            colorText
            nameBlock
            namePersone
            personDescription {
              raw
            }
            personImage {
              url
              description
            }
            position
            slug
          }
      
         
        }
      }
    }
  }
}
`