// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at Global 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              Welcome to the home of the Tech & Digital Department’s Career Pathways Framework here at Global.  This
              site has been built to provide clearer direction and clarity for those at Global, for areas that they can
              focus on for development, and to provide a tool to support open and fair conversations between managers
              and their reports.
            </DescriptionText>
            <DescriptionText>
              This Framework has been developed through a range of contributors from across the department, and is a
              living reflection of their work - further suggestions are very much welcomed!  Please suggest your changes to
              Will or Anahita, or make amendments in a pull request on the GitHub site
            </DescriptionText>
            <DescriptionText>
              We’re gradually building this out across teams within the department, so if you can’t see your department
              on here yet - stay tuned or get involved in supporting its development yourself!
            </DescriptionText>
            <DescriptionText>
              For those interested in joining us at Global?  Amazing! 🙌  You can find out more here:
              <br />
              <a href="https://jobs.global.com/">Global Jobs</a>
              <br />
              <br />

            </DescriptionText>
            </Description>
          <DescriptionTitleGroup>
              <Subtitle>So... how does it work? 🤔</Subtitle>
              <Title></Title>
            </DescriptionTitleGroup>
            <Description>
               <DescriptionText>
                      On the sidebar, you’ll find our “Generic” attributes.  These are attributes which we see as being
                      core to all Globallers in Tech & Digital.  Navigating the levels in the top right will show how
                      these attributes change as Globallers develop their careers.
                </DescriptionText>
                <DescriptionText>
                      Each team has it’s own section, where you’ll see the “Generic” attributes
                      alongside each team’s own set of “Mastery” attributes. These attributes
                      are specific to mastering a particular skillset associated with a team.
                </DescriptionText>
                <DescriptionText>
                      All attributes (including the “Generic” ones) are designed to provide direction,
                      but also to constantly evolve.  So please do make suggestions and changes! We want
                      Globallers to be the best they can be, which only happens with everyone’s input!
                </DescriptionText>



                <DescriptionText>
                    Take a look around and let us know what you think! 🚀
                </DescriptionText>
                    <DescriptionText>
                          Please note that this Framework is forked from the brilliant open source Monzo framework:
                            <br />
                          <a href="https://github.com/monzo/progression-framework">Monzo Framework</a>
                    </DescriptionText>
            </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
