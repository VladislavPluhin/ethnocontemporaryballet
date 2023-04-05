 const path = require('path')

exports.createPages = async ({ graphql, actions, reporter  }) => {
  const { createPage } = actions
  const artistsPage = path.resolve('./src/templates/artist.js')
  const projectsPage = path.resolve('./src/templates/project.js')
  const newEventPage = path.resolve('./src/templates/new-event.js')
  const result =  await graphql(
    `
      {
        allContentfulPersonCard(filter: {nameBlock: {eq: "person"}}) {
          nodes {
            slug
            namePersone
          }
        }
        newEvents: allContentfulCardEvent(filter: {nameBlock: {eq: "CardNewEvent"}}) {
          nodes {
            slug
            nameEvent
          }
        }
        projects: allContentfulCardEvent(filter: {nameBlock: {eq: "projectModel"}}){
          nodes {
            slug
            nameEvent
          }
        }
      }
  `)
 
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const artists = result.data.allContentfulPersonCard.nodes
  const projects = result.data.projects.nodes;
  const eventsNew = result.data.newEvents.nodes;
  
  if (artists.length > 0) {
    artists.forEach((artist, index) => {
      const previousArtistSlug = index === 0 ? '0' : artists[index - 1].slug
      const nextArtistSlug = index === artists.length - 1 ? '0' : artists[index + 1].slug
      createPage({
        path: `/team/${artist.slug}`,
        component: artistsPage,
        defer: false,
        context: {
          slug: artist.slug,
          previousArtistSlug: previousArtistSlug,
          nextArtistSlug: nextArtistSlug,
        },
      })
    })
  }
  
  if (projects.length > 0) {
    projects.forEach((eventData, index) => {
      const previousEventSlug = index === 0 ? '0' : projects[index - 1].slug
      const nextEventSlug = index === projects.length - 1 ? '0' : projects[index + 1].slug
      createPage({
        path: `/projects/${eventData.slug}`,
        component: projectsPage,
        defer: false,
        context: {
          slug: eventData.slug,
          previousPostSlug: previousEventSlug,
          nextPostSlug: nextEventSlug,
        },
      })
    })
  }

  if (eventsNew.length > 0) {
    eventsNew.forEach((eventData, index) => {
      const previousEventSlug = index === 0 ? '0' : eventsNew[index - 1].slug
      const nextEventSlug = index === eventsNew.length - 1 ? '0' : eventsNew[index + 1].slug
      createPage({
        path: `/new-events/${eventData.slug}`,
        component: newEventPage,
        defer: false,
        context: {
          slug: eventData.slug,
          previousPostSlug: previousEventSlug,
          nextPostSlug: nextEventSlug,
        },
      })
    })
  }
}
