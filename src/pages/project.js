import { Page, Seo,   ProjectsSection} from 'gatsby-theme-portfolio-minimal';
import React from 'react';

export default function Project() {
    return (
        <>
            <Seo title="Project" />
            <Page>
                <ProjectsSection header="Projects"/>
            </Page>
        </>
    );
}