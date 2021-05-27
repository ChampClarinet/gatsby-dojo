import React from "react"
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Img from 'gatsby-image';

interface IHomeProps {
  data: IQueryData;
}
interface IQueryData {
  file: {
    childrenImageSharp: {
      fluid: any;
    }[]
  };
}
export default function Home({ data }: IHomeProps) {
  return (
    <Layout>
      <Header>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer</p>
          <Button to="/projects">My Portfolio Projects</Button>
        </div>
        <Img fluid={data.file.childrenImageSharp[0].fluid} />
      </Header>
    </Layout>
  );
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childrenImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

const Header = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 40px;
align-items: center;

h2 {
  font-size: 4em;
}

h3 {
  font-size: 3em;
  font-weight: 400;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
}
`;

const Button = styled(Link)`
display: inline-block;
background: #D42990;
padding: 10px 16px;
border-radius: 10px;
margin-top: 20px;
font-weight: 500;
`;
