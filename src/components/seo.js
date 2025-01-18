import * as React from "react"
import favicon from "../img/favicon.ico" 

const seoData = {
  "title": "Aadya Agrawal",
  "description": "Aadya Agrawal's personal website",
  "author": "Aadya Agrawal",
  "siteUrl": "aadyaagrawal.vercel.app",
}

const Seo = () => (
  <>
    {/* <head> <link rel="icon" type="image/x-icon" href={favicon}/> </head> */}
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    {/* <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} /> */}
  </>
)

export default Seo
