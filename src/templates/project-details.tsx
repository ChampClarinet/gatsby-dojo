import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

interface IProjectDetails {
    data: IDetailsData;
}
interface IDetailsData {
    markdownRemark: {
        html: string;
        frontmatter: {
            title: string;
            stack: string;
            featuredImg: {
                childImageSharp: {
                    fluid: any;
                }
            }
        }
    }
}
export default function ProjectDetails({ data }: IProjectDetails) {
    const { html } = data.markdownRemark;
    const { featuredImg, title, stack } = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <Wrapper>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className="featured">
                    <Img fluid={featuredImg.childImageSharp.fluid} />
                </div>
                <div className="html" dangerouslySetInnerHTML={{ __html: html }} />
            </Wrapper>
        </Layout>
    );
}

export const query = graphql`
query ProjectDetailsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            stack
            title
            featuredImg {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}  
`;

const Wrapper = styled.div`
h2 {
    font-size: 3.5em;
    margin-top: 80px;
}

h3 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 40px;
}

.html {
    margin-top: 40px;
}

.featured {
    margin-bottom: 40px;
}
`;