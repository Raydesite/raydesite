import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({pageTitle, children}) =>{

    //pass your graphQL query
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }      
    `);

    return (
    <div>
        <title>{data.site.siteMetadata.title} | {pageTitle}</title>
        <main>
            {children}
        </main>     

    </div>
    )
}

export default Layout
