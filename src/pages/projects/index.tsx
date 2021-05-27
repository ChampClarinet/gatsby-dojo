import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Img from 'gatsby-image';

interface IProjectsComponentsProps {
    data: IProjectsData;
}
interface IProjectsData {
    projects: {
        nodes: {
            html: string;
            frontmatter: {
                title: string;
                slug: string;
                stack: string;
                thumb: {
                    childImageSharp: {
                        fluid: any;
                    }
                }
            }
            id: string;
        }[];
    }
    contact: {
        siteMetadata: {
            contact: string;
        }
    }
}
export default function Projects({ data }: IProjectsComponentsProps) {
    const projects = data.projects.nodes;
    const { contact } = data.contact.siteMetadata;
    return (
        <Layout>
            <Portfolio>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <ProjectsWrapper>
                    {projects.map(project => (
                        <Link
                            to={`/projects/${project.frontmatter.slug}`}
                            key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </ProjectsWrapper>
                <p>Like what you see? Email me at {contact} for a quote!</p>
            </Portfolio>
        </Layout>
    );
}

export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            html
            frontmatter {
                title
                stack
                slug
                thumb {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            id
        }
    }
    contact: site {
        siteMetadata {
            contact
        }
    }
}
`;

const Portfolio = styled.div`
text-align: center;

& > h2 {
    font-size: 3em;
    margin-top: 80px;
}

& > h3 {
    font-size: 2em;
    font-weight: 400;
}
`;

const ProjectsWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 80px;
margin: 80px 20px;

h3 {
    text-align: center;
    margin: 20px auto 0;
    font-weight: 500;
}

p {
    color: #CCC;
    margin-top: 4px;
}
`;