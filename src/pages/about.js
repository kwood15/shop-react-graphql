import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

class AboutPage extends Component {
  render() {
    const {
      rickAndMorty: { character }
    } = this.props.data;

    return (
      <Layout>
        <SEO title="About Us" />
        <h1>{character.name} With His Pupper</h1>
        <p>Rick & Morty API data loads at build time.</p>
        <div>
          <img
            src={character.image}
            alt={character.name}
            style={{ width: 300 }}
          />
        </div>
        <h2>Image of Rick’s pupper</h2>
        <p>This will come from a request on the client</p>
      </Layout>
    );
  }
}

export default AboutPage;

export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`;
